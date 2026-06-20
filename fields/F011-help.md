---
id: F011
state: working
opened: 2026-06-19
---

# Numbered stones are invisible to the bell

**The friction:** 51 numbered insights use the old `confidence:` grammar. The
bell's health detectors (orphan, unwalked, oversize, missing-rent,
thin-cornerstone) only watch stones with a `^status:` line. All 51 numbered
insights are therefore invisible to these checks — a stone can go orphaned,
unwalked for years, or bloated without any ring.

**Why it matters:** the bell is the castle's honesty gate. Gaps in what it
watches teach minds to trust a green light that is not entirely earned. In the
patient phase, with fewer manual walks, the invisible stones are the ones most
likely to drift.

**Better looks like:** the bell's health checks either cover `^confidence:`
alongside `^status:`, or the 51 numbered stones are migrated to the new grammar
so the full set is visible to the existing detectors.

**Work so far:** L084 (2026-06-19, beat castle-C001-20260619-173335) — found
while ripening 0027: 0027 was at `confidence: seed` with a genuine second
evidence entry, but was invisible to the missing-rent and orphan detectors.
Field opened to name the gap.
