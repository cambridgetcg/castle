---
id: L047
date: 2026-06-19
runner: agent (castle-C001-20260619-044831)
field: F002
created: rooms/craft/check-the-collection-not-the-element.md
created: gate/2026-06-19-cornerstone-test-check-the-collection.md
created: loops/log/L047-ripen-check-collection-to-tested.md
created: ledger/2026-06-19-L047-ripen-check-collection-to-tested.md
---

# L047 — ripen: check-the-collection-not-the-element → tested

## Field chosen

F002 (the castle is newborn). Five sprout stones remained after L046; this beat
provided second evidence for `rooms/craft/check-the-collection-not-the-element.md`,
making it eligible for a ripen run: two independent evidence entries, a recorded
Counter-weather section, and a non-empty What it changed. The ripen loop's
judgment trigger applies.

## What was understood

The sprout→tested ladder requires two independent evidence entries, a recorded
attempt to break the claim, and a non-empty What it changed section.

The stone had:
- evidence 2026-06-18: L014/L015 gate survey — touches list was incomplete; searching
  rooms/ by filename found the room the element's self-report missed.
- evidence 2026-06-19 (this beat): located all sprout stones by searching rooms/
  directly with grep; the INDEX reports aggregate counts, not individual statuses —
  the collection was the only authoritative path.
- Counter-weather: recorded in the stone — could searching the collection be slower?
  Yes, but speed toward a wrong answer is not speed. A missed room persists as a
  false positive until the next sweep.
- What it changed: gate survey runs now search rooms/ by gate entry filename rather
  than trusting the touches list as membership proof.

## What was made

1. Second evidence entry added to `rooms/craft/check-the-collection-not-the-element.md`
2. `status: sprout` → `status: tested`
3. `last-walked` updated from 2026-06-18 to 2026-06-19
4. "Next test" updated to name cornerstone requirements (third evidence, preferably
   weather; re-read after 2026-09-17)
5. Gate seed `gate/2026-06-19-cornerstone-test-check-the-collection.md` planted

`node tools/castle map` run. `node tools/castle check` clean before and after.

## What changed

- rooms/craft/check-the-collection-not-the-element.md (status: sprout → tested; second evidence; last-walked; Next test updated)
- gate/2026-06-19-cornerstone-test-check-the-collection.md (new — cornerstone test seed)
- INDEX.md (rebuilt by map)
- fields/F002-the-castle-is-newborn.md (Work so far updated with [[L047]])
- loops/log/L047-ripen-check-collection-to-tested.md (this file)
- ledger/2026-06-19-L047-ripen-check-collection-to-tested.md

## What is still open

F002 remains working. Four sprout stones remain unripened:
- rooms/castle/a-surveyed-seed-not-swept-is-still-in-the-gate.md (one evidence, lacks counter-weather)
- rooms/castle/offline-the-castle-stops-growing-never-working.md (one evidence; next test: first offline walk)
- rooms/castle/loops-are-earned-by-three-recorded-frictions.md (one evidence; next test: first loop born by rule of three)
- rooms/castle/a-forced-creation-is-worse-than-an-honest-decline.md (one evidence; next test: first real declined: ledger line)

F003 waits on use-based promotion of insight 0029. F008 waits on the owner's deploy.

## Loop-the-loop

No new friction observed. The ripen loop functioned as designed — a run provided
second evidence, one status label changed, gate seed planted for the next rung.
