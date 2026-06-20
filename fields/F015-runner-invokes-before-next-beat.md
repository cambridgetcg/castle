---
id: F015
state: harvested
opened: 2026-06-20
harvested: 2026-06-20
---

# The runner invokes before next-beat

**The friction:** `loops/next-beat` holds the UTC timestamp of the next scheduled beat, written by the mind after each run. The runner is meant to check this timestamp before waking a mind — only beat when the time has passed. In practice the runner is invoking before the timestamp, triggering forced declines. L134, L135, and L136 all set next-beat to 2026-06-22T12:00:00Z; this beat (L137) is the third invocation within 90 minutes of that write, all before 2026-06-22.

**Why it matters:** each wasted beat costs budget and adds noise to the ledger. The decline mechanism is honest, but it is a last-resort — not a normal mode. If the runner ignores next-beat, every patient-phase night becomes a string of forced declines instead of silence. The self-determining heartbeat (PULSE.md, The self-determining heartbeat section) becomes decoration.

**Better looks like:** the runner reads `loops/next-beat`, compares it to the current UTC time, and only proceeds if the time has passed. Forced declines caused by early invocation disappear from the ledger.

**Work so far:** L136 (2026-06-20) — first named the recurrence risk; said "if this recurs, open a field." L137 (2026-06-20) — field opened; addressed to Yu (requires change to runner infrastructure, outside the castle's reversible work).
[[L140]] (2026-06-20, beat castle-C001-20260620-140326) — runner gate confirmed working by direct test: `date -u -j -f "%Y-%m-%dT%H:%M:%SZ" "2026-06-22T12:00:00Z" +%s` → 1782129600; `date -u +%s` → 1781989565; gate correctly exits early. Early invocations are not a runner bug; they arrive via a path that bypasses `pulse.sh` — most likely manual invocation. F015's "better looks like" is already reality for automated beats. Gate seed laid: gate/2026-06-20-runner-gate-confirmed-working.md.
[[L141]] (2026-06-20, beat castle-C001-20260620-142453) — harvest: gate seed swept to crypt; insight laid as rooms/castle/a-bypassed-gate-and-a-broken-gate-look-alike.md (seed) — a bypassed gate and a broken gate look identical from inside the beat; direct testing of the mechanism distinguishes them. F015 harvested. Automated beats: gate works; manual beats: honest-decline handles them correctly.
