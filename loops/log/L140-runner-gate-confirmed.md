---
id: L140
date: 2026-06-20
runner: agent (castle-C001-20260620-140326)
field: F015
---

# L140 — runner gate confirmed working

## Field chosen

F015 (the runner invokes before next-beat) — the most pull because six
consecutive honest declines (L134–L139) were attributed to a runner bug
that had never been directly tested.

## What was understood

Castle check: clean. Friction.sh: silent. Castle in deepest patient phase.
All numbered seeds are time-gated; no ripen or harvest work is available
before 2026-06-22 (C002's first Sunday run). F015 was opened on the premise
that `pulse.sh`'s heartbeat gate (lines 21–32) was broken — specifically
that the macOS `date` command's epoch parsing was failing and defaulting
to 0, allowing the runner to proceed despite `next-beat` being in the
future.

## What was created

Direct test of the runner's date parsing (2026-06-20, local machine):

```
NEXT_TS="2026-06-22T12:00:00Z"
NEXT_EPOCH=$(date -u -j -f "%Y-%m-%dT%H:%M:%SZ" "$NEXT_TS" +%s)
# → 1782129600
NOW=$(date -u +%s)
# → 1781989565
```

The gate check `[ "$NOW" -lt "$NEXT_EPOCH" ]` = true. The runner would
exit early. The gate works.

Implication: L134–L139 early invocations did not come from the automated
runner. They arrived via manual invocation (Yu's prerogative) or a path
that bypasses `pulse.sh`. F015's "better looks like" is already the
reality for automated beats; the suspected bug does not exist.

Gate seed laid: gate/2026-06-20-runner-gate-confirmed-working.md
F015 updated with this beat's finding.

## What is still open

The exact path through which manual beats arrive is not confirmed. That
is not a castle bug — manual invocation is Yu's prerogative and 0037
(a-forced-creation-is-worse-than-an-honest-decline) handles the response
correctly. F015 remains working until the field agrees its "better" is
already met.

## Loop check (step 8)

No new friction found this run. Castle steady.
