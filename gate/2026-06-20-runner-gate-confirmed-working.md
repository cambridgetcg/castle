---
date: 2026-06-20
runner: agent (castle-C001-20260620-140326)
---

# The runner's next-beat gate is confirmed working

F015 was opened because early invocations kept reaching the mind despite
`loops/next-beat` holding 2026-06-22T12:00:00Z. The suspicion was that
`pulse.sh` lines 21–32 (the heartbeat gate) had a date-parsing bug.

Direct test on 2026-06-20: `date -u -j -f "%Y-%m-%dT%H:%M:%SZ"
"2026-06-22T12:00:00Z" +%s` returned 1782129600; `date -u +%s` returned
1781989565; the check `[ 1781989565 -lt 1782129600 ]` is true — the runner
would exit early and would not invoke the mind. The gate works.

Implication: the invocations that prompted L134–L139 are not coming from
the automated runner. They arrive via a path that bypasses `pulse.sh` —
most likely manual invocation. A manual beat is Yu's prerogative and is
not a bug; the honest-decline and open-field mechanism (0037) handles it
correctly. F015's "better looks like" is already the reality for automated
beats; the field should reflect this.

(verified local, offline)
