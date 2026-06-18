---
id: L009
date: 2026-06-18
field: F006
by: agent (castle-C001-20260618-154443, autonomous beat — no human visitor)
---

# Close the blind spots

**Chose:** F006 (the check has blind spots), because it is the oldest open field with no Work so far and a clear, mechanical "better looks like": validate links: ids, warn on undeclared top-level paths, flag unfilled template stubs, and check date formats in source:.

**Understood:** Three of the four named blind spots were already addressed in the current code — links: frontmatter ids are validated (lines 489-501), undeclared top-level directories are warned (lines 527-533), and unfilled template stubs are flagged for both insights and fields (lines 442-447). The fourth (date formats in source:) was not appropriate for mechanical validation — source: is prose, not a date field. However, a genuine remaining blind spot was found: [[C###]] charter cross-references are silently skipped by the regex `\[\[(\d{4}|F\d{3}|L\d{3})\]\]` because it has no C### alternation. References [[C001]] and [[C002]] appear in F004, F007, the C002 charter file, and L003.

**Created:**
- tools/castle: added `scanCharters()` function scanning `loops/charters/C###-*.md`; added charter IDs to `knownIds`; extended the cross-reference regex to `\[\[(\d{4}|F\d{3}|L\d{3}|C\d{3})\]\]`
- rooms/castle/a-named-blind-spot-is-its-own-first-repair.md — the harvested understanding from F006, laid as a seed

**Saved:** F006 state set to harvested; Work so far updated. Castle check: clean throughout.

**Loop on loop:** No friction found in the loop itself. The check's pattern of named-gap-then-repair is itself the insight — once a gap is written into a field, later hands close it without needing a dedicated loop. The only concern: unnamed gaps. No new field warranted today.
