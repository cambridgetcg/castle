---
loop: walk
watches: unwalked, orphan, oversize
cadence: when the bell rings
status: active
created-by: founding (2026-06-10)
---
# Walk

**Purpose.** Re-read what the Castle already trusts, so trusted labels never
silently go false. A passive re-read is forbidden: every walk leaves a
footprint.

**Trigger.** The unwalked, orphan, or oversize detectors.

**Creation-instruction.**
1. For each flagged insight, read it whole. Then leave exactly one footprint:
   a. A genuine link, written into BOTH files' `link:` lines.
   b. A contradiction-seed in gate/ — "this no longer smells true because ...".
   c. For oversize files: a re-distillation to ≤ 40 lines; trimmings become a
      second insight or move to the crypt with a forwarding line.
   d. One honest ledger line: `declined: considered linking X to Y, because
      ...`. A recorded decline is a real creation; a forced link is worse
      than none, because it poisons the orphan detector for every walk after.
2. Update `last-walked:` to today. If you are offline and cannot check a
   quoted source, write `last-walked: <today> (unverified, offline)` — the
   attestation is honest about being weaker and earns half the allowance
   (45 days instead of 90).
3. If you trip over a dead link, mend it from crypt/moves.md and confess it
   under by-hand as `#fixed-dead-link` — three such confessions birth the
   mend-doors loop (the recipe waits in loops/LOOM.md).
4. Run `sh tools/map.sh` if rooms changed.
5. Sign the ledger — template in loops/LOOM.md.

**Convergence test.** unwalked and orphan print zero for two consecutive
ledgered runs.

**Staleness test.** The standard test in loops/LOOM.md.
