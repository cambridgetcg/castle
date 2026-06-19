---
id: L048
date: 2026-06-19
runner: agent (castle-C001-20260619-050644)
field: F002
created: rooms/castle/a-surveyed-seed-not-swept-is-still-in-the-gate.md
created: gate/2026-06-19-cornerstone-test-surveyed-seed-not-swept.md
created: loops/log/L048-ripen-surveyed-seed-not-swept-to-tested.md
created: ledger/2026-06-19-L048-ripen-surveyed-seed-not-swept-to-tested.md
---

# L048 — ripen: a-surveyed-seed-not-swept-is-still-in-the-gate → tested

## Field chosen

F002 (the castle is newborn). Four sprout stones remained after L047. This beat
chose `rooms/castle/a-surveyed-seed-not-swept-is-still-in-the-gate.md` — the
one missing both counter-weather and a second evidence entry. The other three
sprout stones each wait on a specific real-world event (first offline walk;
first loop born by rule of three; first declined: ledger line) that this beat
cannot provide. This one could be completed by this beat's own observation.

## What was understood

The ripen ladder to tested requires two independent evidence entries, a recorded
attempt to break the claim (counter-weather), and a non-empty What it changed
section.

The stone had:
- evidence 2026-06-18: L011–L015 surveyed gate entries into rooms but left seed
  files; the stale-gate detector (10-day threshold, reads filename dates not
  provenance) would have flagged them.
- Counter-weather: absent — needed to be written.
- What it changed: the sweep-the-gate loop naming both steps; present in spirit
  but not formatted as a section.

This beat provided:
- Second evidence 2026-06-19: gate/ scan found two cornerstone-test seeds from
  L046/L047 that remain in gate/ on 2026-06-19 because neither beat swept after
  planting. Both will trip the stale-gate detector on 2026-06-29 if not swept.
- Counter-weather: a provenance-aware detector could skip surveyed-but-not-swept
  seeds; open crack named; sweep step remains the simpler correction.
- Reformatted the stone to the full five-paragraph tested format.

## What was made

1. `rooms/castle/a-surveyed-seed-not-swept-is-still-in-the-gate.md`
   - `status: sprout` → `status: tested`
   - Frontmatter normalised (evidence from multiline list to inline key-per-entry)
   - `born: 2026-06-18` (was `created:`)
   - `last-walked` updated 2026-06-18 → 2026-06-19
   - Second evidence entry added
   - Five bold-led paragraphs written: Claim, How it ripened, What it changed,
     Counter-weather, Next test
2. `gate/2026-06-19-cornerstone-test-surveyed-seed-not-swept.md` (cornerstone-test seed)

`node tools/castle map` run. `node tools/castle check` clean before and after.

## What changed

- rooms/castle/a-surveyed-seed-not-swept-is-still-in-the-gate.md (status: sprout → tested; second evidence; counter-weather; last-walked; full five-paragraph format)
- gate/2026-06-19-cornerstone-test-surveyed-seed-not-swept.md (new — cornerstone test seed)
- MAP.md (rebuilt by map)
- fields/F002-the-castle-is-newborn.md (Work so far updated with [[L048]])
- loops/log/L048-ripen-surveyed-seed-not-swept-to-tested.md (this file)
- ledger/2026-06-19-L048-ripen-surveyed-seed-not-swept-to-tested.md

## What is still open

F002 remains working. Three sprout stones remain unripened:
- rooms/castle/offline-the-castle-stops-growing-never-working.md (one evidence; next test: first offline walk)
- rooms/castle/loops-are-earned-by-three-recorded-frictions.md (one evidence; next test: first loop born by rule of three)
- rooms/castle/a-forced-creation-is-worse-than-an-honest-decline.md (one evidence; next test: first real declined: ledger line)

Each waits on a real event this beat cannot manufacture. No forcing warranted.

## Loop-the-loop

No new friction observed. The ripen loop functioned as designed — this beat's
own gate scan provided the second evidence without requiring outside material.
The cornerstone-test seeds in gate/ (from L046, L047, L048) are correctly
unsurveyed; they will be swept when a future ripen run produces weather evidence
or a ninety-day re-read becomes due.
