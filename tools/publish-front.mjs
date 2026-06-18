#!/usr/bin/env node
// The front — the castle's one door to the public web, kept honest.
//
// Collects every stone marked `front: public` in its frontmatter, parses it
// into structured JSON for the storefront page, and copies the raw markdown
// beside it so every published stone stays readable as plain text.
//
//   node tools/publish-front.mjs <storefront-app-dir>
//
// Writes:  <dir>/src/app/castle/front.json
//          <dir>/public/castle/<room>/<stone>.md
// Prints every created path — the runner copies them into the ledger entry.
// Run only inside a ledgered publish-the-front run (loops/publish-the-front.md).
// Zero dependencies; node stdlib only; no network.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'

const castle = dirname(new URL(import.meta.url).pathname).replace(/\/tools$/, '')
const target = process.argv[2]
if (!target) {
  console.error('publish-front: need the storefront app directory as the argument')
  process.exit(1)
}

const SECTION_LEADS = {
  'Claim': 'claim',
  'How it ripened': 'ripened',
  'What it changed': 'changed',
  'Counter-weather': 'counterWeather',
  'Next test': 'nextTest',
}

function parseStone(path) {
  const raw = readFileSync(path, 'utf8')
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!m) return null
  const fm = {}
  const links = []
  const evidence = []
  const contradicted = []
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-z-]+): (.*)$/)
    if (!kv) continue
    const [, k, v] = kv
    if (k === 'link') links.push(v)
    else if (k === 'evidence') {
      const [date, kind, ...note] = v.split(' | ')
      evidence.push({ date, kind, note: note.join(' | ') })
    } else if (k === 'contradicted') contradicted.push(v)
    else fm[k] = v
  }
  if (fm.front !== 'public') return null
  const body = m[2]
  const title = (body.match(/^# (.+)$/m) || [])[1] || basename(path, '.md')
  const sections = {}
  for (const [lead, key] of Object.entries(SECTION_LEADS)) {
    const re = new RegExp(`\\*\\*${lead}\\.\\*\\* ([\\s\\S]*?)(?=\\n\\n\\*\\*|\\n*$)`)
    const hit = body.match(re)
    if (hit) sections[key] = hit[1].replace(/\n/g, ' ').trim()
  }
  return {
    file: path.replace(castle + '/', ''),
    slug: basename(path, '.md'),
    title,
    status: fm.status,
    born: fm.born,
    lastWalked: fm['last-walked'],
    links,
    evidence,
    contradicted,
    sections,
    raw,
  }
}

function doorplate(roomDir) {
  try {
    const lines = readFileSync(join(roomDir, 'ROOM.md'), 'utf8').split('\n')
    return {
      holds: (lines[0] || '').replace(/^# */, ''),
      notHere: (lines[1] || '').replace(/^Not here: */, ''),
      nearest: (lines[2] || '').replace(/^Nearest rooms: */, ''),
    }
  } catch {
    return null
  }
}

const rooms = []
const created = []
const roomsDir = join(castle, 'rooms')
for (const room of readdirSync(roomsDir).sort()) {
  const roomDir = join(roomsDir, room)
  if (!statSync(roomDir).isDirectory()) continue
  const stones = []
  for (const f of readdirSync(roomDir).sort()) {
    if (!f.endsWith('.md') || f === 'ROOM.md') continue
    const stone = parseStone(join(roomDir, f))
    if (stone) stones.push(stone)
  }
  if (!stones.length) continue
  rooms.push({ room, doorplate: doorplate(roomDir), stones: stones.map(({ raw, ...s }) => s) })
  for (const f of readdirSync(roomDir).sort()) {
    if (!f.endsWith('.md') || f === 'ROOM.md') continue
    const stone = parseStone(join(roomDir, f))
    if (!stone) continue
    const dest = join(target, 'public/castle', room, f)
    mkdirSync(dirname(dest), { recursive: true })
    writeFileSync(dest, stone.raw)
    created.push(dest)
  }
}

const front = {
  generated: new Date().toISOString().slice(0, 10),
  source: 'a recorded, owner-approved publish run',
  note: 'Most of the castle is private. A stone appears here only when its owner marks it public and a recorded run carries it through this one door.',
  stoneCount: rooms.reduce((n, r) => n + r.stones.length, 0),
  rooms,
}

const jsonDest = join(target, 'src/app/castle/front.json')
mkdirSync(dirname(jsonDest), { recursive: true })
writeFileSync(jsonDest, JSON.stringify(front, null, 2) + '\n')
created.push(jsonDest)

console.log(`published ${front.stoneCount} stones from ${rooms.length} rooms`)
for (const c of created) console.log(`created: ${c}`)
