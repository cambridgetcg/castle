---
id: L280
beat: castle-C001-20260716-171504
date: 2026-07-16
runner: agent (castle-C001-20260716-171504)
loop: recover-l279-commit
field: F027
---

# L280 — recover L279: commit the finished-but-stranded atomic-write fix

## Field

Arrived to a dirty working tree: `heartbeat.sh`, `HEARTBEAT.md`, `STATE.md`,
`.heartbeat/*`, `crypt/moves.md`, and `fields/F027-*.md` modified, plus four
untracked files — `ledger/2026-07-16-L279-heartbeat-writes-become-atomic.md`,
`loops/log/L279-heartbeat-writes-become-atomic.md`, and two gate thoughts
(`gate/2026-07-16-the-2-that-kept-their-word.md`,
`gate/2026-07-16-the-recursion-finds-itself.md`). `loops/active/current.marker`
still read `state: idle, last: L278` — never updated to name L279, meaning
L279's own beat (castle-C001-20260716-165555) stopped before step 7
(COMMIT) without even reaching the marker update that step 7 requires.
Same recurring shape as L277/L278 (fields/F023): a beat finishes
UNDERSTAND through LOG cleanly and dies before COMMIT.

## Understood

Read L279's ledger and narrative log in full: the work is real and
complete. `heartbeat.sh`'s `HEARTBEAT.md`/`STATE.md` writes were changed
from direct `cat > file` overwrite to `.tmp.$$`-then-`mv` (atomic
replace), closing the half of F027 that lived inside this repo (a
mid-write iCloud sync snapshot can no longer see a half-written file).
89 zero-byte `.!<n>!HEARTBEAT.md` conflict copies were found and
composted (never tracked, always `.gitignore`d, zero information).
`fields/F027-*.md` was updated with this as a second data point,
correctly still leaving open, addressed to Yu, whether a second
machine/process holds this Desktop folder and whether `castle/.git`
should be excluded from iCloud sync.

One discrepancy: L279's own notes claimed "two untracked gate thoughts
from an earlier visitor session committed as janitor duty" — but `git
status` on arrival showed both gate files still untracked. The claim
was honest about intent but the commit that would have made it true
never landed, the same gap the two gate thoughts themselves describe
(a thought that names a closed gap while sitting uncommitted is a new
gap, one level up). This run closes that gap by actually committing them.

`loops/log/L279-*.md` was missing its frontmatter block (`node tools/castle
check` caught this) — added it, matching the format of every other log
file in `loops/log/`. `INDEX.md` had also drifted stale since L279 touched
files without rebuilding it — ran `node tools/castle map && sh tools/map.sh`;
`MAP.md` was unchanged (already current), `INDEX.md` was rebuilt.

## Made

Independently re-ran `heartbeat.sh` to confirm the atomic-write fix still
produces correct output (`alive:me`, `NEXT:360`, a clean `HEARTBEAT.md`
and `STATE.md`) before trusting it enough to commit. Fixed the missing
frontmatter on `loops/log/L279-*.md`. Rebuilt `INDEX.md`. `node tools/castle
check`: clean. `sh tools/friction.sh`: one ring remains —
`barren-run | ledger/2026-07-14-L271-heartbeat-conflict-litter.md
(missing: crypt/litter/.!1342!HEARTBEAT.md)` — pre-existing, not touched
by L279 or this run, named here rather than fixed (per `loops/LOOP.md`
step 7: rings from stones this run did not touch are named, not chased).

## Changed

`loops/log/L279-heartbeat-writes-become-atomic.md` (frontmatter added),
`INDEX.md` (rebuilt), `loops/active/current.marker` (idle, `last: L280`),
plus committing forward everything L279 already produced and everything
that ran since (a second live `heartbeat.sh` invocation's timestamp
churn in `HEARTBEAT.md`/`STATE.md`/`.heartbeat/*`).

## Still open

F027's Yu-addressed half: whether more than one machine/process has this
Desktop folder open, and whether `castle/.git` should be excluded from
iCloud sync. The pre-existing `barren-run` ring on `ledger/2026-07-14-
L271-heartbeat-conflict-litter.md` (a `crypt/litter/` path the ledger
names that no longer exists on disk) is untouched by this run and left
for a dedicated pass.
