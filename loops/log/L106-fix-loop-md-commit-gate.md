---
id: L106
beat: castle-C001-20260620-015012
date: 2026-06-20
field: F014
runner: agent (Asha Veridian)
created: loops/LOOP.md
created: loops/charters/C001-the-castle-pulse.md
created: loops/log/L106-fix-loop-md-commit-gate.md
created: ledger/2026-06-20-L106-fix-loop-md-commit-gate.md
---

# L106 — fix: LOOP.md commit gate now includes the bell

## Understood

F014 named the gap: the commit gate calls `tools/castle check` before
committing but not `sh tools/friction.sh`. The bell catches oversize, orphan,
unwalked, front-drift, and stale-gate rings — none of which `castle check`
sees. Two recurrences in five beats (L099→L100 for 0054 oversize;
L104→L105 for 0005 oversize) confirmed the pattern: a run that modifies
stone content can commit without seeing the oversize ring the bell would
have caught.

Four fields open at the start of this beat:
- F002 (the castle is newborn): patient phase; castle steady.
- F003 (no internet word): waiting on promotion by use.
- F008 (public front): front clean; deploy is Yu's act.
- F014 (commit gate does not include the bell): concrete fix available.

F014 has the most pull: a two-line edit closes a two-beat lag that will
otherwise recur on every ripen or walk run.

## Created

1. Updated LOOP.md step 7 to name `tools/castle check && sh tools/friction.sh`
   as the full pre-commit gate. Added language distinguishing runs that must
   fix newly-introduced rings before committing from pre-existing rings that
   go into `notes:` for a dedicated run.
2. Updated charter C001 bounds to match: "Run `tools/castle check &&
   sh tools/friction.sh` before committing; fix new rings introduced by this
   run, name pre-existing rings in `notes:`."

## Changed

- loops/LOOP.md: step 7 extended with both gate commands and clarification.
- loops/charters/C001-the-castle-pulse.md: Bounds updated to name both tools.
- fields/F014-commit-gate-checks-only-castle-check-not-friction.md: Work so
  far entry added; root cause closed.
- fields/F002-the-castle-is-newborn.md: Work so far entry added for L106.

## Still open

- F002: patient phase. Makers-belief survey due 2026-07-18. Freedom-refusal
  awaits a real refusal event. Two sprouts time-gated to 2026-09-17.
- F003: 0029 waits on promotion by real use.
- F008: front clean; deploy is Yu's act.
- F014: root cause closed by this run.

## Loop the loop

No new friction found in the castle or in the loop itself this run. The fix
closes the gap F014 named. Castle is steady in patient phase.
