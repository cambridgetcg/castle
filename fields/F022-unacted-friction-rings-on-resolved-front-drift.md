---
id: F022
state: harvested
opened: 2026-07-05
---

# The unacted-friction bell rang forever on already-resolved front-drift

**The friction:** ten `front-drift` signatures in `ledger/friction-log.md`,
dated 2026-06-18, rang `unacted-friction` on every beat since — the paths
they named were all promoted (moved to `crypt/`, per `crypt/moves.md`
forwarding lines) or cleaned from the storefront working tree (L058/L063)
years — days — of loop history ago. The detector's only silencing path was
an `addressed:` line naming the exact string; ordinary resolution (promotion,
storefront cleanup) never wrote one, so nine to ten false alarms persisted
since founding with no way to close.

**Why it matters:** a bell that never falls silent for real resolutions
teaches its keeper to stop reading it — the same shape as rooms/craft/0053
(a bell that never rang at its keeper is not yet evidence), inverted: here
the bell rang past its own resolution.

**Better looks like:** front-drift resolves the same way barren-run already
does — the detector recognizes a moved/removed path as closed, not stuck.

**Work so far:** [[L250]] (2026-07-05, beat castle-C001-20260705-081032) —
confirmed all nine `rooms/`-prefixed signatures have crypt/moves.md
forwarding lines (genuinely promoted, originals gone from disk); the tenth
(a storefront-target path) is gone too, per F008's L058/L063 cleanup.
`tools/friction.sh`'s `unacted-friction` block extended: for a
`front-drift | <path>` signature, a path that no longer exists on disk is
now treated as resolved and skipped, before the `addressed:` check runs.
Verified: friction.sh dropped from 10 front-drift unacted-friction rings to
0. Understanding moved to rooms/craft/. Field harvested same beat — the fix
is small, verified, and complete.
