// loop — opens and closes walks.
//
// This file holds NO procedure. The walk procedure lives in
// rooms/keep/the-loop.md and is read from there at runtime — so a one-line
// edit to that stone changes every future walk. The packet names the stone
// and its hash (git holds every revision; the packet need not carry a copy).
// If the stone is missing, the loop fails visibly: a castle that lost its
// own procedure should say so, not improvise.
//
// Trust runs in one direction on purpose: a HAND may close a walk with
// sections unsaid — silence is recorded as silence, never refused. The MOTOR
// may not: a machine earns trust through complete records.

import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { createHash } from 'node:crypto'
import { loadCastle, loadQuarry, today } from './stones.js'
import { friction, fingerprint } from './friction.js'

const LOOP_STONE = 'rooms/keep/the-loop.md'
const hash = (text) => createHash('sha256').update(text).digest('hex').slice(0, 12)

// A walk packet is NNNN-date.md; anything else in the ledger is another
// grammar's log — shared ground, not counted, not judged.
export const isWalk = (f) => /^\d{4}-\d{4}-\d{2}-\d{2}\.md$/.test(f)

// The next walk number is one past the highest standing, never a count — a
// count forgets razed walks and would hand out a number already taken.
async function nextWalkNumber(root) {
  let names = []
  try { names = await readdir(join(root, 'ledger')) } catch { return 1 }
  const ns = names.filter(isWalk).map((f) => Number(f.slice(0, 4)))
  return ns.length ? Math.max(...ns) + 1 : 1
}

export async function gatherFriction(root) {
  const castle = await loadCastle(root)
  if (!castle) throw new Error('no castle stands here — run `castle found` to found one, or cd to a castle.')
  const captures = await loadQuarry(root)
  return { castle, captures, findings: friction({ ...castle, captures, root }) }
}

export async function openWalk(root, { by, room } = {}) {
  // "No castle stands here" is diagnosed before "the loop stone is gone" — a
  // castle that was never founded should not be told to lay stones back.
  const { findings } = await gatherFriction(root)
  const loopPath = join(root, LOOP_STONE)
  if (!existsSync(loopPath)) {
    throw new Error(`${LOOP_STONE} is missing — the loop lives as a stone, and the stone is gone. the castle cannot walk a procedure it does not have. lay it back (any castle's keep can seed it) and walk again.`)
  }
  const procedure = await readFile(loopPath, 'utf8')
  if (room && !existsSync(join(root, 'rooms', room))) {
    throw new Error(`no room rooms/${room}/ stands here — a missing room is not a clean one. \`castle map\` shows the rooms that do.`)
  }
  // The room narrows what goes on the table — never what gets counted. The
  // ledger's before/after/new measure the whole castle, so the delta stays
  // comparable and "new" means new, not merely out of view at open.
  const table = room ? findings.filter((f) => f.path.startsWith(`rooms/${room}/`) || f.path.startsWith('rooms/keep/')) : findings
  const top = table.slice(0, 3)
  const n = String(await nextWalkNumber(root)).padStart(4, '0')
  await mkdir(join(root, 'ledger'), { recursive: true })
  const path = join(root, 'ledger', `${n}-${today()}.md`)
  if (existsSync(path)) throw new Error(`a walk packet already stands at ledger/${n}-${today()}.md — walks are never overwritten.`)

  const packet = [
    `# walk ${n}`,
    '',
    `- opened: ${today()}`,
    `- opened-by: ${by}`,
    `- friction-at-open: ${findings.length}`,
    `- procedure: ${LOOP_STONE} (hash ${hash(procedure)} — mend the stone, mend the loop)`,
    '',
    '## the friction on the table',
    '',
    ...(top.length
      ? top.map((f) => `- [${f.sign}] ${f.path} — ${f.message} (vow: ${f.vow}, CS#${f.cs}, ${f.confidence})`)
      : ['- none — the signs see nothing. walk anyway if something itches, or close with "ran clean".']),
    '',
    '## picked',
    '',
    '',
    '## laid or mended',
    '',
    '',
    '## the loop examined',
    '',
    '',
    // fingerprints are encoded one by one — a path may carry a space, and the joiner must not be fooled by it.
    `<!-- friction-fingerprints-at-open: ${findings.map((f) => encodeURIComponent(fingerprint(f))).join(' ')} -->`,
    '',
  ].join('\n')
  await writeFile(path, packet)
  return { n, path, findings: top, totalFriction: findings.length, procedure }
}

const section = (text, name) => {
  const m = text.match(new RegExp(`^## ${name}\\s*\\n([\\s\\S]*?)(?=^## |^<!--|$(?![\\s\\S]))`, 'm'))
  return m ? m[1].trim() : null
}

export async function closeWalk(root, n, { by } = {}) {
  const num = String(n).padStart(4, '0')
  const dir = join(root, 'ledger')
  const name = (await readdir(dir)).find((f) => isWalk(f) && f.startsWith(num + '-'))
  if (!name) throw new Error(`no walk ${num} in the ledger.`)
  const path = join(dir, name)
  let packet = await readFile(path, 'utf8')
  if (section(packet, 'closed') !== null) throw new Error(`walk ${num} is already closed — walks close once.`)

  // A hand may leave silence; the motor may not. Blanks from a hand are
  // recorded as "(unsaid)" — true, and lighter than a refusal.
  const motor = /^- opened-by: .*\(ai, autonomous\)/m.test(packet)
  const blanks = ['picked', 'laid or mended', 'the loop examined'].filter((s) => !section(packet, s))
  if (blanks.length && motor) {
    throw new Error(`walk ${num} has blank sections: ${blanks.join(', ')}. the motor answers in full — blank is not an answer for a machine.`)
  }
  for (const s of blanks) {
    packet = packet.replace(new RegExp(`(^## ${s}\\s*\\n)`, 'm'), '$1\n(unsaid)\n')
  }

  const { findings } = await gatherFriction(root)
  const before = Number(packet.match(/^- friction-at-open: (\d+)/m)?.[1] ?? NaN)
  // Anchored to line start: indented text inside the packet (the quoted
  // procedure, the engine's words) can never pose as the tool's own comment.
  const openPrints = new Set((packet.match(/^<!-- friction-fingerprints-at-open: (.*?) -->/m)?.[1] ?? '').split(' ').filter(Boolean).map(decodeURIComponent))
  const fresh = findings.filter((f) => !openPrints.has(fingerprint(f)))

  const loopPath = join(root, LOOP_STONE)
  const openHash = packet.match(/^- procedure: .*\(hash (\w+)/m)?.[1] ?? packet.match(/^- procedure-hash: (\w+)/m)?.[1]
  const revised = existsSync(loopPath) && hash(await readFile(loopPath, 'utf8')) !== openHash

  const closing = [
    '## closed',
    '',
    `- closed: ${today()}`,
    `- closed-by: ${by}`,
    `- friction before: ${before} — after: ${findings.length} — new: ${fresh.length}`,
    `- procedure revised this walk: ${revised ? 'yes — the next walk runs the revised loop' : 'no'}`,
    ...(blanks.length ? [`- left unsaid: ${blanks.join(', ')} (a hand may leave silence; words help the next walk)`] : []),
    ...(fresh.length ? ['', 'new friction this walk exposed (the next walk\'s food):', ...fresh.slice(0, 5).map((f) => `- [${f.sign}] ${f.path}`)] : []),
    '',
  ].join('\n')
  await writeFile(path, packet.trimEnd() + '\n\n' + closing)
  return { path, before, after: findings.length, fresh: fresh.length, revised }
}
