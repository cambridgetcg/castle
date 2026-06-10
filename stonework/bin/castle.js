#!/usr/bin/env node
// castle — dispatch only. The thinking lives in src/, the understanding lives
// in rooms/, and neither lives here.

import { resolve } from 'node:path'
import { existsSync } from 'node:fs'
import { layStone, loadQuarry } from '../src/stones.js'
import { gatherFriction, openWalk, closeWalk, isWalk } from '../src/loop.js'
import { printMap, printFriction } from '../src/report.js'
import { quarryUrl, quarryStdin } from '../src/quarry.js'
import { autoWalk } from '../src/auto.js'
import { found } from '../src/found.js'

const [cmd, ...args] = process.argv.slice(2)
const root = process.cwd()

// Who is acting: an explicit --by wins; otherwise the OS user, labelled as a
// guess — the tool never silently invents a mind.
function whoBy(flags) {
  return flags.by || `${process.env.USER || 'someone'} (human, from $USER — pass --by to be exact)`
}

function parseFlags(args) {
  const flags = {}
  const rest = []
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--by' || args[i] === '--from') {
      const value = args[i + 1]
      if (value === undefined || value.startsWith('--')) {
        throw new Error(`${args[i]} needs a value — the tool will not guess one.`)
      }
      flags[args[i].slice(2)] = value
      i++
    } else if (args[i] === '--auto') flags.auto = true
    else rest.push(args[i])
  }
  return { flags, rest }
}

// lay and quarry create things; they must stand in a castle to do it, the
// same way map/friction/loop already refuse outside one.
function mustStandInCastle(root) {
  if (!existsSync(resolve(root, 'rooms', 'keep'))) {
    throw new Error('no castle stands here — run `castle found` to found one, or cd to the castle root.')
  }
}

const HELP = `castle — keep what you come to understand

  castle lay <room> "<one true thing>"   save an insight (born a guess — raise it when you know)
  castle map                             see the whole castle
  castle friction                        where understanding is thin (food, not failure)
  castle loop                            walk: pick ONE thin spot, make it truer
  castle close <n>                       record what the walk did
  castle quarry <url | ->                bring raw material in, with receipts
  castle found                           start a castle anywhere

a stone is plain markdown: a title, who/when/how-sure, your own words.
the loop's procedure is a stone (rooms/keep/the-loop.md) — mend it, and the
next walk runs the mended loop. the motor (castle loop --auto) walks alone
under rooms/keep/the-reins.md; one word there (autonomy: off), or a STOP or
HALT file, and it rests. trust the rest to git and to yourself.`

const { flags, rest } = parseFlags(args)

try {
  let code = 0
  if (cmd === 'found') {
    code = await found(root)
  } else if (cmd === 'lay') {
    mustStandInCastle(root)
    const [room, title] = rest
    if (!room || !title) throw new Error('castle lay <room> "<title>" — both are needed.')
    let source
    if (flags.from) {
      if (!existsSync(resolve(root, flags.from))) throw new Error(`--from ${flags.from} points at nothing.`)
      const text = await import('node:fs/promises').then((fs) => fs.readFile(resolve(root, flags.from), 'utf8'))
      const url = text.match(/^- url: (\S+)/m)?.[1]
      const fetched = text.match(/^- fetched: (\S+)/m)?.[1]
      source = `${flags.from}${url && !url.startsWith('(') ? ` — ${url} (fetched ${fetched})` : ''}`
    }
    const { path, newRoom } = await layStone(root, room, title, { by: whoBy(flags), source })
    if (newRoom) console.log(`a new room is born: rooms/${newRoom}/ — that was the whole ceremony.`)
    console.log(`stone laid at ${path} — born a guess. write the one true thing; raise the certainty when you know.`)
  } else if (cmd === 'quarry') {
    mustStandInCastle(root)
    const [target] = rest
    if (!target) throw new Error('castle quarry <url | -> — a chosen page, or a paste on stdin.')
    const result = target === '-'
      ? await quarryStdin(root, await new Promise((res) => { let d = ''; process.stdin.on('data', (c) => d += c).on('end', () => res(d)) }))
      : await quarryUrl(root, target)
    console.log(`capture saved: ${result.path}${result.ok ? '' : ' (the fetch failed — the capture records the failure)'}`)
    console.log('fetched is not known. shape it into a stone in your own words, or let it go.')
  } else if (cmd === 'map') {
    const { castle, captures } = await gatherFriction(root)
    const walks = existsSync(resolve(root, 'ledger'))
      ? (await import('node:fs/promises').then((fs) => fs.readdir(resolve(root, 'ledger')))).filter(isWalk).length
      : 0
    printMap(castle, captures, walks)
  } else if (cmd === 'friction') {
    const [arg] = rest
    let frictionRoot = root
    let roomFilter = null
    if (arg) {
      if (existsSync(resolve(root, arg, 'rooms'))) frictionRoot = resolve(root, arg)
      else roomFilter = arg
    }
    let { findings } = await gatherFriction(frictionRoot)
    if (roomFilter) {
      if (!existsSync(resolve(frictionRoot, 'rooms', roomFilter))) {
        throw new Error(`no room rooms/${roomFilter}/ stands here — a missing room is not a clean one. \`castle map\` shows the rooms that do.`)
      }
      findings = findings.filter((f) => f.path.startsWith(`rooms/${roomFilter}/`))
    }
    code = printFriction(findings)
  } else if (cmd === 'loop' && flags.auto) {
    code = await autoWalk(root)
  } else if (cmd === 'loop') {
    const [room] = rest
    const walk = await openWalk(root, { by: whoBy(flags), room })
    console.log(`walk ${walk.n} opened: ledger/${walk.n}-… (${walk.totalFriction} findings, ${walk.findings.length} on the table)`)
    console.log('the procedure is in the packet, copied from the keep. pick ONE. when done:')
    console.log(`  castle close ${Number(walk.n)}`)
  } else if (cmd === 'close') {
    const [n] = rest
    if (!n) throw new Error('castle close <walk number>')
    const r = await closeWalk(root, n, { by: whoBy(flags) })
    console.log(`walk closed. friction before: ${r.before} — after: ${r.after} — new: ${r.fresh}`)
    if (r.revised) console.log('the procedure was revised this walk — the next walk runs the mended loop.')
  } else {
    console.log(HELP)
    // asking for help is not an error; an unknown command is.
    code = cmd === undefined || ['help', '--help', '-h'].includes(cmd) ? 0 : 1
  }
  process.exit(code)
} catch (e) {
  console.error(`castle: ${e.message}`)
  process.exit(1)
}
