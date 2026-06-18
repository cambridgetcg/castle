---
id: F006
state: harvested
opened: 2026-06-10
---

# The check has blind spots

**The friction:** the founding audit (a no-context reader plus an auditor,
2026-06-10) found things `tools/castle check` cannot see: the `links:`
frontmatter line is never validated (only `[[...]]` body references are), an
undeclared top-level directory passes silently, date formats inside `source:`
are not checked, and a field whose sections still contain unfilled template
text passes because the checker validates headers, not content.

**Why it matters:** the check is the castle's honesty gate. A gate with known
gaps slowly teaches minds to trust a green light that is not entirely earned.

**Better looks like:** `castle check` validates `links:` ids resolve, warns on
undeclared top-level paths, and flags a field whose body is the verbatim
unfilled template.

**Work so far:** L009 (2026-06-18) — the three named blind spots (`links:` ids, undeclared top-level paths, unfilled template stubs) were already in the code by the time this loop ran. The fourth (date formats in `source:`) was found not to warrant mechanical checking — source fields are prose, not dates. A genuine remaining gap — `[[C###]]` charter references slipping through the cross-reference regex — was closed by extending the pattern and scanning `loops/charters/`. Understanding moved to rooms/castle/a-named-blind-spot-is-its-own-first-repair.md.
