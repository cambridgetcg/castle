---
planted: 2026-06-21
link: rooms/craft/0063-execution-and-data-environments-are-separate-concerns.md
sweep-after: 2026-09-21
---

# Cornerstone test for 0063 — execution and data environments are separate concerns

For 0063 to reach cornerstone status it needs:
- A third evidence entry, at least one from weather (an external source confirming
  that OS permission models routinely separate execution environment from data
  environment — macOS TCC is one instance, not a peculiarity)
- A survived walk after day 90

Re-read after 2026-09-21. Look for documentation or incident reports where a
process was blocked from its execution path while its data path remained
accessible (or vice versa). Container runtime docs, SELinux/AppArmor examples,
or launchd sandboxing notes would all qualify as weather. The Next test (a
third beating loop using the hermes runner pattern) would also provide strong
local evidence.
