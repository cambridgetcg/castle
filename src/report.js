// report — plain stdout, no color libraries, no judgement beyond the signs.
// Every finding cites the vow it serves and the Clear Standard principle
// behind it (CS#n), and labels its own confidence — the report holds itself
// to the same law as the stones.

const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`

export function printMap({ stones, otherGrammar }, captures, walks) {
  const rooms = new Map()
  for (const s of stones) {
    if (!rooms.has(s.room)) rooms.set(s.room, [])
    rooms.get(s.room).push(s)
  }
  console.log('the castle\n')
  for (const [room, rs] of [...rooms.entries()].sort()) {
    console.log(`  ${room}/`)
    for (const s of rs.sort((a, b) => a.path.localeCompare(b.path))) {
      const cert = s.keys.certainty || '(certainty blank)'
      const when = s.keys.checked ? `checked ${s.keys.checked}` : `laid ${s.keys.laid || '?'}`
      console.log(`    ${s.title ?? '(untitled)'} — ${cert}, ${when}`)
    }
  }
  console.log(`\n  quarry: ${plural(captures.length, 'capture')} of raw material (fetched is not known)`)
  console.log(`  ledger: ${plural(walks, 'walk')} recorded`)
  if (otherGrammar?.length) {
    console.log(`  another grammar: ${plural(otherGrammar.length, 'file')} in the rooms not in stone form — shared ground, not judged by these signs`)
  }
  console.log(`\n${plural(stones.length, 'stone')} standing. no judgement here — run \`castle friction\` for the signs.`)
}

export function printFriction(findings) {
  if (!findings.length) {
    console.log('no friction the signs can see.')
    console.log('(that is not proof of a sound castle — only the absence of what ten small checks know how to look for.)')
    return 0
  }
  let current = null
  for (const f of findings) {
    if (f.sign !== current) {
      current = f.sign
      console.log(`\n${f.sign} (${f.confidence}) — vow: ${f.vow} (CS#${f.cs})`)
    }
    console.log(`  ${f.path} — ${f.message}`)
  }
  const structural = findings.filter((f) => f.structural).length
  console.log(`\n${plural(findings.length, 'finding')} — ${structural} structural, ${findings.length - structural} food.`)
  console.log('friction is food, not shame. exit is non-zero only for structural damage (broken-form, broken-link);')
  console.log('everything else is the next walk\'s work, and must never fail a gate.')
  return structural > 0 ? 1 : 0
}
