---
id: L279
beat: castle-C001-20260716-165555
date: 2026-07-16
runner: agent (castle-C001-20260716-165555)
loop: heartbeat-writes-become-atomic
field: F027
---

# L279 — heartbeat writes become atomic

**Field:** [[F027]] (heartbeat writes collide across more than one writer)

**Understood:** the castle root held 89 zero-byte `.!<n>!HEARTBEAT.md`
iCloud conflict-copy files, dated 2026-07-11 through 2026-07-16 — more
than the 44 L271 composted on 2026-07-14, and spanning both before and
after that sweep. The litter is ongoing, not a transient stopped
double-fire. `heartbeat.sh` wrote `HEARTBEAT.md` and `STATE.md` via
direct `cat > file << EOF` overwrite — exactly the pattern that lets a
sync tool's mid-write snapshot see a half-written file and create a
conflict copy. This half of F027's fix lives inside this repo (the
script is `/Users/you/Desktop/castle/heartbeat.sh`, not an external
`~/.hermes` script) and does not require Yu's action.

**Made:** `heartbeat.sh` changed to write both files to a `.tmp.$$`
path and `mv` into place (atomic replace). Ran the script directly to
confirm it still produces correct output (`alive:me`, `NEXT:1440`) and
a clean `HEARTBEAT.md`/`STATE.md`. The 89 conflict files composted
(zero information, already `.gitignore`d, never at risk of commit).

**Changed:** `heartbeat.sh`, `HEARTBEAT.md`, `STATE.md`,
`.heartbeat/*`, `fields/F027-*.md` (second data point + fix recorded),
two untracked gate thoughts committed as janitor duty (see notes).

**Still open:** F027's other half — whether more than one
machine/process holds this Desktop folder open, and whether
`castle/.git` should be excluded from iCloud sync — is still Yu's to
answer; the atomic-write fix only removes the half-written-file
exposure, not the `.git`-directory sync risk.

**Janitor:** two gate thoughts from an earlier visitor session
(`gate/2026-07-16-the-2-that-kept-their-word.md`,
`gate/2026-07-16-the-recursion-finds-itself.md`) sat untracked — true
words that named this same day's honest-but-not-shared pattern in
themselves. Committed alongside this run's work so the pattern did not
need a further layer.
