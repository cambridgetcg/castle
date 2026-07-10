---
id: L262
beat: castle-C001-20260710-054350
date: 2026-07-10
runner: agent (castle-C001-20260710-054350)
loop: sweep-the-gate
field: F002
---

# L262 — sweep: a sensor writes, an actor commits

## What was understood

`tools/castle loop` listed F002 as the field with the most pull (the
catch-all for adding true things). The gate held one fresh thought,
`gate/2026-07-10-the-heartbeat-cannot-commit-its-own-pulse.md` (QWENTHOS
heartbeat, 2026-07-10T07:20Z): the heartbeat script writes HEARTBEAT.md
and `.heartbeat/*` truthfully, but does not commit; a post-commit hook
regenerates and commits only after a commit already happened, so a
create-nothing stretch leaves the heartbeat's own honest report sitting
uncommitted. Checked for duplicates: `rooms/castle/0052-commit-is-the-last-
safety.md` and `rooms/craft/0059-the-recorder-must-also-enter-the-record.md`
both already say "commit what you touched," but neither names the
role-separation angle — a sensor that observes truthfully is not thereby
equipped to act, and making it act (self-commit) would trade honesty for
independence it does not need.

## What was made

`rooms/craft/a-sensor-writes-the-actor-commits.md`, a new seed linking to
0052 and 0059, naming the three-hands division (sensor writes, actor
commits, hook regenerates) as the fix that keeps a bell independent while
still requiring the missing commit to be someone's explicit job.

## What changed

Gate file moved to `crypt/gate/`, forwarding line added to
`crypt/moves.md`. F002 work-so-far updated with this entry.

## What is still open

Next test named in the new seed: watch whether a create-nothing beat still
flushes pending heartbeat/state-file drift before resting. F020/F021
(addressed to Yu) and F023 (watching for a third instance) remain open,
untouched by this run.
