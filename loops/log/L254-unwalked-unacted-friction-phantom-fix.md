# L254 — unwalked unacted-friction phantom rings closed

**Field:** F024 (the unacted-friction bell rang forever on already-fixed stones).

**Understood:** L252 fixed the `oversize` case of `unacted-friction` but left
`unwalked` and `orphan` unfixed, citing a room stone's `Next test` gate
(`rooms/craft/a-resolved-path-is-its-own-addressed-line.md`) that said to
wait until 2026-10-06 to check whether unwalked/orphan reach three
persisting-path signatures. Counting the live signal directly (rather than
waiting for the date) showed 20+ unwalked signatures already ringing today —
almost all of them stones L086 walked back on 2026-06-19, still ringing only
because `ledger/friction-log.md` records each signature's *first-seen* date,
which predates that walk.

**Made:** extended `tools/friction.sh`'s `unacted-friction` block with an
`unwalked` case, mirroring the `oversize` fix: strip the trailing
`(no last-walked line)` annotation, then close the ring if the path is gone
(promoted away) or if the file now carries a `last-walked:` line within its
allowance (90 days, 45 if `(unverified, offline)`). A path that still lacks
`last-walked:`, or whose walk has gone stale past the allowance, keeps
ringing — real backlog, not a phantom.

**Changed:** `tools/friction.sh` (new case block); the room stone's `Next
test` corrected to note the rule-of-three condition didn't need the calendar
wait once the count was checkable; F024's Work-so-far extended.

**Verified:** total friction rings dropped 52 → 24; unwalked
`unacted-friction` rings dropped 20+ → 0; `castle check` and `friction.sh`
both clean.

**Still open:** `orphan` unacted-friction still carries one live signature —
rule of three not yet met, left unfixed per the same stone's reasoning.
