loop: grow-loops
date: 2026-07-05
runner: agent (castle-C001-20260705-143503)
addressed: fields/F018-shared-next-beat-blocked-c002.md
created: loops/log/L251-fold-c002-second-fire-glob-fallback-fix.md
notes: C002's second Sunday fire (2026-07-05T15:41:01Z) failed the same way
  as its first — "no charter C002 found" — but for a narrower reason than
  F018's prior entries knew: the charter glob cannot expand under launchd's
  TCC block, and C002's runner lacked the literal-path fallback that C001's
  runner already had. Fix applied outside this repo, to
  ~/.hermes/scripts/castle-tributary-runner.sh; verified present this beat.
  F018 remains open until 2026-07-12's fire confirms it. .heartbeat/* and
  HEARTBEAT.md janitor-committed alongside this (external monitor's own
  bookkeeping, unrelated to this loop's work). Pre-existing friction.sh
  rings (~40, all pre-dating this run, unrelated files under rooms/ and
  ledger/) named but not touched this run. castle check clean.
