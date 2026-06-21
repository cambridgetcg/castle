---
id: F016
state: working
opened: 2026-06-20
---

# Work-so-far repair runs leave themselves unrecorded

**The friction:** when a janitor beat corrects a gap in F002's work-so-far by adding a missing entry, it commits that one entry but does not append its own entry in the same commit. The next beat sees a gap and must repeat the correction. Three consecutive beats (L149, L150, L151) followed this pattern.
**Why it matters:** each repair beat creates the very gap it is trying to close. The castle records the work but the recorder goes unrecorded.
**Better looks like:** a janitor beat adding a missing work-so-far entry also appends its own summary line before committing. No successor gap is left.
**Work so far:** L151 (2026-06-20, beat castle-C001-20260620-175157) — opened this field; demonstrated the fix by adding both [[L150]] and [[L151]] entries to F002 in one commit. Pattern stands confirmed if the next janitor beat that touches F002 finds no gap.
