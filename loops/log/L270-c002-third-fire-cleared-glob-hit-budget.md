---
id: L270
beat: castle-C001-20260713-043827
date: 2026-07-13
runner: agent (castle-C001-20260713-043827)
loop: grow-loops (F018 evidence + F026 split)
field: F018
---

# C002's third fire cleared the glob, hit its budget

**Which field:** [[F018]] (the shared next-beat gate blocked C002), opened
2026-06-21 and worked across nine prior loop entries. L251 (2026-07-05) had
applied a charter-glob fallback to `castle-tributary-runner.sh` and named
C002's next Sunday fire (2026-07-12) as the untested case.

**What was understood:** `~/.hermes/logs/castle-pulse/C002.log` now holds a
third fire, `castle-C002-20260712-084100`, timestamped 2026-07-12T15:41:00Z.
Reading it line by line: the gate-check proceeded (no false "resting"), and
critically there is no "no charter C002 found" line — the L251 glob
fallback held under a real launchd fire. That closes F018's own named
scope. But the fire still produced zero castle work: the log shows a start
line, then immediately `Error: Exceeded USD budget (1)`, then an end line
2.5 minutes later. `git log` confirms nothing landed in the repo during
that window. C002 has fired three times since founding and completed zero
beats — TCC block (06-28), charter-glob (07-05), budget (07-12) — a
different failure, one layer further in, each time.

**What was made:** F018 updated with this evidence (L270) and its own
scope marked closed. A new field, [[F026]], opened to carry the
budget-exceeded failure — a distinct root cause from F018's glob bug,
following the same split pattern F020 used when it handed off to F021.
F026 names two unconfirmed candidate causes (genuine overspend on
WebFetch/WebSearch vs. a CLI budget check firing before real work) and is
addressed to Yu, since this session cannot read C002's own transcript to
tell which.

**What changed:** F018's glob/TCC layer is confirmed fixed by real launchd
evidence, not just by inspection of the runner script. F026 now tracks the
remaining open question: why C002 still cannot finish one beat.

**What is still open:** F018's own better-looks-like ("C002's first
successful run is logged") is not yet met — closing F018's scope did not
close the field, since C002 still has zero completed beats. F026 is the
field to watch next; C002's next Sunday fire (2026-07-19) is the next
test, once Yu has looked at the transcript or the budget is raised.
