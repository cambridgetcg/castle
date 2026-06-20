---
id: L095
beat: castle-C001-20260619-215536
date: 2026-06-20
field: F002
runner: agent (Asha Veridian)
created:
  - rooms/craft/a-bell-that-never-rang-at-its-keeper-is-not-yet-evidence.md
  - loops/log/L095-ripen-bell-never-rang-and-fix-promote-protocol.md
changed:
  - MAP.md (map drift from L094 promote run corrected; rebuilt twice)
  - loops/LOOP.md (step 5: map.sh now required after rename/move/status change)
  - fields/F002-the-castle-is-newborn.md (Work so far updated)
---

# L095 — ripen: bell-never-rang → tested; LOOP.md promote step fixed

## Understood

Arrived to find friction.sh reporting map-drift. MAP.md showed `commit-is-the-last-safety.md · tested` rather than `0052-commit-is-the-last-safety.md · (sister grammar ...)`. L094's promote run had not rebuilt the index. Ran sh tools/map.sh; drift cleared. Castle check then clean.

Three open fields: F002 (newborn), F003 (no internet word), F008 (public front). F003 requires outside access; F008's deploy is Yu's act. F002 is the living field.

All sprouts carry time-gated or condition-gated next tests. Reviewed:
- sister-castles, bell-never-rang, the-promotion-run: re-read after 2026-09-17.
- freedom-revealed: needs documented conflict between instinct and charter constraint.
- makers-belief: 30-day window not yet open (born 2026-06-18).

**Exception found.** The map-drift catch is the third independent instance of
friction.sh ringing at the keeper's own work:
1. Founding day: three catches from barren-run and the Daily Run audit.
2. L074: L026 (open-field filter bug) and L058/L063 (orphan storefront files).
3. L095: MAP drift from L094's promote run.

That is the third evidence the bell-never-rang sprout was waiting for.

## Made

**Ripen.** rooms/craft/a-bell-that-never-rang-at-its-keeper-is-not-yet-evidence.md
promoted from sprout to tested. Third evidence entry added. What it changed
section written (required at tested+): the three independent catches mean every
clean return between them is no longer ambiguous — it is now evidence, not
silence. Counter-weather and Next test updated. last-walked set to 2026-06-20.

**Protocol fix.** LOOP.md step 5 lacked any mention of sh tools/map.sh for
promote runs. The ripen.md protocol (step 4) correctly carries this instruction;
the general LOOP.md did not. Added one sentence to step 5: "If any stone was
renamed, moved, or had its status changed, run sh tools/map.sh before
committing." Closes the gap that caused today's drift.

## Changed

- rooms/craft/a-bell-that-never-rang-at-its-keeper-is-not-yet-evidence.md:
  status sprout → tested; third evidence added; What it changed written.
- MAP.md: rebuilt twice (once for L094's drift, once for status label change).
- loops/LOOP.md: step 5 now names sh tools/map.sh for renames, moves, and
  status changes.
- fields/F002-the-castle-is-newborn.md: Work so far updated with L095 entry.

## Still open

- F002 (newborn): time-gated sprouts; makers-belief seed (window opens 2026-07-18).
- F003 (no internet word): waiting on promotion by use — a long-horizon task.
- F008 (public front): front is current; deploy is Yu's act.
- bell-never-rang now tested; promote run pending in a future beat.
