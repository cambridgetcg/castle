---
id: F014
state: working
opened: 2026-06-20
---

# The commit gate does not include the bell

**The friction:** the charter says "Run `tools/castle check` before committing and leave it passing." That tool checks frontmatter, cross-references, and INDEX freshness — but not oversize, orphan, unwalked, front-drift, or stale-gate rings. Those are detected by `sh tools/friction.sh` (the bell). A run that leaves an oversize stone still passes `castle check` and commits cleanly; the next beat opens to a ringing bell.

**Why it matters:** the commit gate exists to keep bad state out of the record. If the bell rings after a commit, the committed state was already wrong. L104 ripened 0005 to tested, pushed it to 45 lines, ran `castle check` (clean), committed — and L105 opened to an oversize ring. The pattern also appeared after L099 (0054 trimmed in L100). Two occurrences in five beats.

**Better looks like:** either LOOP.md names `sh tools/friction.sh` alongside `tools/castle check` in the pre-commit checklist, or the two checks are unified so one call covers both. The bell falls silent on the commit beat, not the next one.

**Work so far:** L105 (2026-06-20) — field opened; 0005 trimmed this same beat as the immediate repair; root cause named here.
