---
id: L272
beat: castle-C001-20260714-053214
date: 2026-07-14
runner: agent (castle-C001-20260714-053214)
loop: grow-loops (F028 opened and harvested)
field: F028
---

# L272 — a clean claim in a ledger is not a clean check

**Field:** F028 (new, harvested same beat)

**Understood:** `tools/castle check` failed on arrival this beat, naming
`loops/log/L271-heartbeat-conflict-litter.md: no frontmatter block`. That
file's own ledger entry (`ledger/2026-07-14-L271-heartbeat-conflict-litter.md`)
claims "tools/castle check and sh tools/friction.sh both clean before and
after this run." A sweep of all 271 loop-log files found L271 as the sole
file missing the standard `id/beat/date/runner/loop/field` frontmatter block
— every sibling file carries it. This is 0040's own claim (a lying artifact
is its own top finding) landing inside the castle's own ledger.

**Made:** frontmatter added to L271's log file, matching the sibling format
exactly (id, beat, date, runner, loop, field: F027). Field F028 opened and
harvested in the same beat — the fix is complete, no systemic gap found (270
of 271 prior beats got this right; LOOP.md step 6 already names the
convention correctly). New evidence line added to
rooms/craft/0040-a-lying-artifact-is-its-own-top-finding.md; last-walked
updated to 2026-07-14.

**Changed:** `tools/castle check` now returns clean. Field F028 closed.

**Still open:** nothing new — this reads as one beat skipping the actual
check invocation before committing, not a recurring pattern. Worth watching
if it happens again.
