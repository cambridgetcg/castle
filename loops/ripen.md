---
loop: ripen
watches: missing-rent, thin-cornerstone, changed evidence
cadence: when the bell rings
status: active
created-by: founding (2026-06-10)
---
# Ripen

**Purpose.** Move status labels — the only thing in the Castle allowed to do
so, and only inside a run signed in the ledger. Labels are the most sacred
thing here; this loop is their sole gate.

**Trigger.** The missing-rent or thin-cornerstone detectors. (Also run it by
judgment whenever you know an insight's `evidence:`/`contradicted:` lines
changed — no bell watches for that; the runner's eye does.)

**Creation-instruction.**
1. For each flagged insight, apply the frozen ladder in CASTLE.md exactly:
   - seed → sprout: one `evidence:` entry.
   - sprout → tested: two independent `evidence:` entries, a recorded
     **Counter-weather** attempt, and a non-empty **What it changed** — the
     rent, required at tested and above, optional below, so speculation is
     never strangled.
   - tested → cornerstone: three `evidence:` entries, at least one
     `| weather |`, and a survived walk after day 90.
   - Any `contradicted:` line: down one rung, immediately.
2. Write demotions as plainly as promotions. Demotion is honorable;
   inflation is the only sin.
3. For every insight you touch that lacks an open **Next test**, plant exactly
   one seed in gate/ naming the test that would move its label next. Skip any
   insight that already has an open next-test seed; compost stale next-test
   seeds without apology — the gate must never flood.
4. Run `sh tools/map.sh` if any status line changed (the map shows labels).
5. Sign the ledger — template in loops/LOOM.md.

**Convergence test.** missing-rent and thin-cornerstone print zero for two
consecutive ledgered runs.

**Staleness test.** The standard test in loops/LOOM.md.
