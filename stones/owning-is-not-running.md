---
name: owning is not running
born: 2026-06-10
quarried-from:
  - gate/filed/2026-06-10-a-tool-that-is-not-running.md
  - /Users/you/love-repos/legible-standard/audits/2026-06-10-kingdom.md
links:
  - "[[trust-is-a-receipt]]"
  - "[[errors-that-dont-say-why]]"
  - "[[a-harness-carries-its-failures-reason-not-just-its-code]]"
---

The first audit, pillar 01, credited the kingdom's backup tool as
well-built — "it is simply not running"
(/Users/you/love-repos/legible-standard/audits/2026-06-10-kingdom.md).
The last backup ran 69 days before the audit; the cron (the scheduler
that runs tasks on a clock) was never installed
(gate/filed/2026-06-10-a-tool-that-is-not-running.md).
A tool's worth lives in its running, not its existence. "Do we have
backups?" passes while "when did the last one finish?" fails — and
only the second question would have caught the 69 silent days.
So ask for the last-run timestamp, never the inventory: the timestamp
is the receipt that the tool is alive ([[trust-is-a-receipt]]), and a
tool that quietly never runs is one more silence where the system
owed a sentence ([[errors-that-dont-say-why]]).
