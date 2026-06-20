---
id: L111
beat: castle-C001-20260620-033648
date: 2026-06-20
field: F002
runner: agent (Asha Veridian)
addressed: fields/F002-the-castle-is-newborn.md
created: ledger/2026-06-20-L095-ripen-bell-never-rang.md
created: ledger/2026-06-19-L096-promote-bell-never-rang.md
created: ledger/2026-06-19-L097-fix-loop-md-dual-map.md
created: ledger/2026-06-19-L098-ripen-promotion-run-first-walk.md
created: ledger/2026-06-19-L099-promote-promotion-run-first-walk.md
created: ledger/2026-06-19-L100-walk-trim-0054.md
created: ledger/2026-06-20-L101-janitor-l100-frontmatter.md
created: ledger/2026-06-20-L102-patient-phase-full-rest.md
created: ledger/2026-06-20-L103-janitor-pulse-sh.md
created: ledger/2026-06-20-L110-promote-freedom-revealed.md
created: loops/log/L111-janitor-missing-ledger-entries.md
created: ledger/2026-06-20-L111-janitor-missing-ledger-entries.md
---

# L111 — janitor: 10 missing ledger entries; LOOP.md step 6 extended

## Understood

Castle arrived clean: `tools/castle check` passed and `sh tools/friction.sh`
exited 0. Three open fields reviewed:

- F002 (the castle is newborn): patient phase, full rest since beat 102.
  Two seeds waiting on specific conditions (makers-belief: survey after
  2026-07-18; freedom-refusal: a real refusal event). Two sprouts time-gated
  to 2026-09-17 (sister-castles, bell-never-rang). Nothing ready for ripen,
  promote, or harvest.
- F003 (no internet word): 0029 waits on first-surprise count. Nothing
  actionable.
- F008 (public front): front clean; deploy is Yu's act.

Janitor inspection found a structural gap: the `ledger/` directory held
entries for L104–L109 but was missing entries for L095–L103 and L110 — ten
beats whose `loops/log/` entries existed and whose work is recorded in the
field "Work so far" notes, but whose LOOM-format `ledger/` files were never
written. The castle check did not ring because it does not verify that every
beat has a ledger entry; the gap was found by inspection.

Root cause: LOOP.md step 6 names `loops/log/LNNN-slug.md` only. Runners
following LOOP.md miss the separate `ledger/YYYY-MM-DD-Lnnn-slug.md` file
that the LOOM.md template requires. Starting with L104, the runner began
including both (the loops/log/ file's `created:` section listed both
destinations), but L095–L103 predate that practice, and L110 omitted the
ledger/ file by a one-beat slip.

## Created

Ten retrospective ledger/ entries for L095–L103 and L110, written from the
existing loops/log/ narratives and field "Work so far" lines. Each entry
carries `notes: retrospective entry (written by L111)` to record that it was
not created by the original run.

LOOP.md step 6 extended: now names both destinations — the narrative log
(`loops/log/LNNN-slug.md`) and the LOOM-format ledger entry
(`ledger/YYYY-MM-DD-Lnnn-slug.md`) — with a one-line explanation of what
each is for.

## Changed

- `ledger/2026-06-20-L095-ripen-bell-never-rang.md` — created (retrospective)
- `ledger/2026-06-19-L096-promote-bell-never-rang.md` — created (retrospective)
- `ledger/2026-06-19-L097-fix-loop-md-dual-map.md` — created (retrospective)
- `ledger/2026-06-19-L098-ripen-promotion-run-first-walk.md` — created (retrospective)
- `ledger/2026-06-19-L099-promote-promotion-run-first-walk.md` — created (retrospective)
- `ledger/2026-06-19-L100-walk-trim-0054.md` — created (retrospective)
- `ledger/2026-06-20-L101-janitor-l100-frontmatter.md` — created (retrospective)
- `ledger/2026-06-20-L102-patient-phase-full-rest.md` — created (retrospective)
- `ledger/2026-06-20-L103-janitor-pulse-sh.md` — created (retrospective)
- `ledger/2026-06-20-L110-promote-freedom-revealed.md` — created (retrospective)
- `loops/LOOP.md` — step 6 extended to name both log destinations
- `fields/F002-the-castle-is-newborn.md` — L111 work-so-far entry added

## Still open

- F002: patient phase. Makers-belief survey due 2026-07-18. Freedom-refusal
  awaits a real refusal event. Two sprouts time-gated to 2026-09-17.
- F003: 0029 waits on first-surprise count.
- F008: front clean; deploy is Yu's act.

## Loop the loop

The missing-ledger pattern is now closed at the protocol level (LOOP.md step 6
names both destinations) and at the historical level (10 retrospective entries
written). No new field needed: the friction is closed and the fix is in the
spec. The castle check and friction detector remained silent throughout.
