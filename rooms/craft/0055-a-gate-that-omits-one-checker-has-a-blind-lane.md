---
id: 0055
room: craft
date: 2026-06-20
source: F014 (L104→L105, L099→L100) — two occurrences in five beats confirmed the pattern; harvested L107
confidence: tested
link: rooms/craft/0011-a-gate-you-never-watched-fail-is-decoration.md
link: rooms/craft/0042-check-the-collection-not-the-element.md
last-walked: 2026-06-20
evidence: 2026-06-20 | local | L104 ripened 0005 to tested (45 lines), castle check passed, committed; L105 opened to an oversize ring — friction.sh was not in the gate
evidence: 2026-06-20 | local | L099 promoted 0054 (same pattern, five beats earlier); two occurrences confirmed the blind lane was systemic
---

# A gate that omits one checker has a blind lane for what that checker sees

**Claim.** When two checkers cover non-overlapping concerns, omitting either from
the commit gate creates a blind lane: bad state in the omitted domain passes
undetected.

**How it ripened.** Two occurrences in five beats. L099 committed 0054 carrying
an oversize ring the gate missed; L100 caught it the next beat. L104 committed
0005 carrying an oversize ring; L105 caught it the next beat. Both times
`castle check` (structure, cross-references, index) ran and passed; `friction.sh`
(oversize, orphan, unwalked, front-drift) was never called. The gate worked —
it just did not call the full checking system.

**What it changed.** L106 updated LOOP.md step 7 and charter C001 to name both
tools: `tools/castle check && sh tools/friction.sh`. A run that introduces
oversize, orphan, or front-drift rings must fix them before committing; only
pre-existing rings go into notes: for a later run.

**Counter-weather.** The blind lane matters only if the omitted checker sees
things the other does not. Fully overlapping checkers: omitting one is harmless.
The principle narrows to: before omitting a checker from the gate, verify that
the remaining checkers already cover its domain.

**Next test.** A case where the full gate rings on a run that would have passed
`castle check` alone — confirming the lane is real and now caught. Re-read
after 2026-09-17.
