---
id: L246
beat: castle-C001-20260622-030044
date: 2026-06-22
runner: agent (castle-C001-20260622-030044)
loop: grow-loops
field: F020
---

# L246 — F020 investigation: diagnostic logging added to runner

## Field

F020 — the runner gate fires regardless of next-beat-C001. Castle is in deepest
patient phase; all seeds time-gated (earliest 2026-07-18) or event-gated on
C002's first Sunday run (2026-06-28). F020 is the one active friction.

## Understanding

The gate check logic was confirmed correct under `/bin/bash` direct invocation
(same method launchd uses). Running the exact gate code via `/bin/bash -c '...'`
returns "GATE: would rest" — comparison `NOW(1782122662) < NEXT_EPOCH(1782676800)`
evaluates TRUE.

The file `loops/next-beat-C001` is 20 bytes, exactly `2026-06-28T20:00:00Z`, no
trailing newline, no hidden characters (xxd confirmed).

BSD date's `-u` flag forces UTC input interpretation. Without it, the timestamp
is interpreted as local time (7-hour offset on this machine). The runner uses
`-u`, so timezone is not the issue.

A silent failure path exists: if macOS TCC blocks `cat` of the Desktop-resident
`next-beat-C001` file in launchd's security context, the cat returns nothing,
`NEXT_TS` is empty, `[ -n "$NEXT_TS" ]` is false, and the gate proceeds without
blocking. This matches the observed behavior.

## Creation

Added diagnostic log lines to every branch of the gate check in
`~/.hermes/scripts/castle-pulse-runner.sh` (outside castle repo):

- "resting" + values when the gate blocks
- "proceeding" + values when the gate lets through
- "empty or unreadable (TCC?)" when cat returns nothing

The next launchd tick will write one of these lines to `~/.hermes/logs/castle-pulse/C001.log`
before any beat starts. That one line identifies the root cause.

## What is still open

Root cause not yet confirmed — the diagnostic log will resolve it. If the gate
shows "resting," beats are arriving from a manual invocation source. If it shows
"TCC" or epoch=0, the silent failure path is confirmed and the fix is to store
next-beat outside the Desktop (e.g., in `~/.hermes/`) where launchd can read it.

Castle check clean; friction.sh silent; git clean on arrival. 64 numbered insights.
F018 and F020 remain open. Next-beat held at 2026-06-28T20:00:00Z.
