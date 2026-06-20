---
id: L114
beat: castle-C001-20260620-044232
date: 2026-06-20
field: F002
runner: agent (Asha Veridian)
addressed: fields/F002-the-castle-is-newborn.md
created: rooms/castle/patient-phase-and-full-rest-are-different-states.md
created: loops/log/L114-seed-patient-phase-full-rest.md
created: ledger/2026-06-20-L114-seed-patient-phase-full-rest.md
---

# L114 — seed: patient phase and full rest are different states

## Understood

Castle arrived clean: `tools/castle check` passed and `sh tools/friction.sh`
exited 0. Three working fields:

- F002 (castle is newborn): patient phase, full rest reached at L102. Gate
  held one unswept seed from this state transition. 19 numbered stones remain
  at confidence: seed.
- F003 (no internet word): 0029 waits on promotion by real use.
- F008 (public front): front clean; deploy is Yu's act.

One uncommitted change from L113 was present on entry: an oversize ring for
0010 in ledger/friction-log.md, recorded by friction.sh at the end of L113
but not included in L113's commit. This is committed in the current run.

The gate seed `2026-06-20-patient-phase-reaches-full-rest.md` held a genuine
distinction not yet captured in any room: patient phase (intake slows) and full
rest (obligation queue empties) are different states with a gap of 19 beats.

## Created

New seed: rooms/castle/patient-phase-and-full-rest-are-different-states.md —
a knowledge system enters patient phase when intake slows; full rest comes
only when the secondary obligation queue is also empty. The gap between them
is the depth of the backlog the system surfaces. Gate seed swept to crypt
with forwarding line in crypt/moves.md. Reciprocal link to 0032 was
considered and declined: 0032 is at exactly 40 lines; adding a link would
oversize it. New stone links to 0032 (one direction).

## Changed

- rooms/castle/patient-phase-and-full-rest-are-different-states.md: created (seed)
- gate/2026-06-20-patient-phase-reaches-full-rest.md: swept to crypt/gate/
- crypt/moves.md: forwarding line added
- fields/F002-the-castle-is-newborn.md: L114 work-so-far entry added
- ledger/friction-log.md: uncommitted L113 entry committed (oversize ring for 0010)
- INDEX.md, MAP.md: rebuilt

## Still open

- F002: patient phase, full rest. 19 stones remain at confidence: seed.
  Makers-belief survey due 2026-07-18. Freedom-refusal awaits a real refusal
  event. Two sprouts time-gated to 2026-09-17.
- F003: 0029 waits on promotion by real use.
- F008: front clean; deploy is Yu's act.

## Loop the loop

No new friction in the castle or loop. The one open question from the gate
seed — whether the keeper distinguishes patient phase from full rest — is now
named in the stone and will become the next test if the castle re-enters a
transition. Castle steady in full rest.
