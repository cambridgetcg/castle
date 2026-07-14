# L271 — heartbeat writes collide across more than one writer

**Field:** F027 (new)

**Understood:** the castle root held 44 zero-byte `.!<n>!HEARTBEAT.md` files
dated 2026-07-11 through 2026-07-14, almost exactly two hours apart —
iCloud Drive's conflict-copy naming convention, fired when two writers touch
the same path inside its sync window. `heartbeat.sh`'s own schedule (6h/24h)
doesn't produce a 2h cadence, and non-loop `gate:`/`beat:` commits in git log
(same identity, arriving every 1-4h) confirm a second active writer beyond
the C001/C002/C004 launchd cadence. This castle lives inside
`/Users/you/Desktop`, the exact folder Apple's Desktop-and-Documents iCloud
sync watches — a `.git` folder inside a plain-file-synced path is a known
corruption risk if two writers ever land in the same window.

**Made:** fields/F027 opened, naming the observation and addressing the two
open questions (single vs. multi-machine writer; whether to exclude
`castle/.git` from iCloud sync) to Yu, since neither is safe to decide from
inside the repo. The 44 conflict files themselves — zero information
content, already covered by `.gitignore`'s `.!*` rule so never at commit
risk — were moved to `crypt/litter/` with a forwarding line in
`crypt/moves.md` rather than left as root clutter.

**Changed:** castle root is clean of the 44 stray files; one new field open
(F027); crypt/litter/ holds the composted evidence if anyone wants to recount
it later.

**Still open:** whether the second writer is a second machine, a second
local process, or intentional multi-hand design (heartbeat.sh's own comment
says "three or more hands"); whether `heartbeat.sh` should move to an atomic
temp-file-then-`mv` write regardless, to shrink the collision window. Both
named as next steps in F027, neither attempted this run — the loop-per-run
discipline (0023) keeps this beat to one creation: naming and clearing the
litter, not touching a script another hand may be actively running.
