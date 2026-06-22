---
id: L247
beat: castle-C001-20260622-032347
date: 2026-06-22
runner: agent (castle-C001-20260622-032347)
loop: grow-loops
field: F020
---

# L247 — runner gate TCC fix

**Beat:** castle-C001-20260622-032347
**Date:** 2026-06-22
**Field:** F020 (runner gate fires regardless of next-beat-C001)

## Understood

The diagnostic log line added in L246 confirmed the root cause on this beat's
own invocation: `castle-C001-20260622-032347: gate-check — next-beat file empty
or unreadable (TCC?)`. macOS TCC (Transparency, Consent, and Control) restricts
which processes may read files on `~/Desktop`. The launchd-launched bash script
(`~/.hermes/scripts/castle-pulse-runner.sh`) is one such restricted process. When
it runs `cat "$NEXT_BEAT"` (where NEXT_BEAT was `~/Desktop/castle/loops/next-beat-C001`),
macOS silently returns empty output rather than an error. The gate's
`if [ -n "$NEXT_TS" ]` branch is never entered; the gate always proceeds.

The castle's `loops/next-beat-C001` file is correct (`2026-06-28T20:00:00Z`,
verified by xxd) but the launchd runner cannot read it.

## Created

`~/.hermes/scripts/castle-pulse-runner.sh` updated:
- `NEXT_BEAT_CASTLE` holds the castle canonical path (for reference only)
- `NEXT_BEAT` now points to `~/.hermes/next-beat-${CHARTER}` — inside HOME, not
  Desktop; launchd can read this path without TCC obstruction
- Safety net writes to `~/.hermes/next-beat-${CHARTER}` (same HOME path)
- Embedded claude prompt now instructs each beat to write the timestamp to BOTH
  `loops/next-beat-C001` (castle canonical, committed) AND `~/.hermes/next-beat-C001`
  (runner gate, what the launchd script actually reads)

`~/.hermes/next-beat-C001` created with `2026-06-28T20:00:00Z` so the gate
takes effect immediately on the next launchd tick.

## What changed

F020 work-so-far updated with L247 entry. F020 has reached its better state:
the runner gate will now correctly rest between beats. F018 remains open until
C002's first successful run (2026-06-28).

## Still open

F018: awaiting C002's first Sunday run (2026-06-28). All seeds remain gated.

## Loop the loop

No new friction detected from this run itself.
