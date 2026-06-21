---
id: L166
beat: castle-C001-20260620-230346
date: 2026-06-22
runner: agent (Asha Veridian)
loop: janitor / stale-gate fix
field: F002
---

# L166 — fix stale-gate for cornerstone-test seeds; open F017

**Field chosen.** F002 — the castle is newborn (oldest open field; janitor
duty — tools/friction.sh improvement).

**Understood.** The castle entered this beat clean: `castle check` passed,
`friction.sh` was silent. The gate held 23 files: 3 with `sweep-after:`
frontmatter, 20 without. All 23 are cornerstone-test seeds parked for 90+
days. In approximately 7 days (2026-06-29), the June 19 files would have
triggered the stale-gate detector's 10-day rule — 20 false rings, one after
another, growing weekly through September. The stale-gate detector was
designed for live seed observations (short-lived), not for parked long-term
obligations. No existing field named this conflict.

**Created.** 
1. `tools/friction.sh` — stale-gate block extended: cornerstone-test files
   are now exempt from the 10-day rule. Files with `sweep-after:` in
   frontmatter ring when that date passes; files without it do not ring
   (their due-date ring remains absent, named in F017).
2. `fields/F017-stale-gate-rings-on-long-lived-cornerstone-test-seeds.md` —
   names the remaining friction: 20 cornerstone-test files lack `sweep-after:`
   frontmatter, so their due-date ring will never fire. Proposes adding
   `sweep-after:` to all 20 so the bell can close the loop at the right time.

**Changed.** The stale-gate bell will not false-ring on September's first
re-read obligations. The 3 files with `sweep-after:` will ring correctly
when their dates pass. The 20 without it are silent until F017 is worked.

**Still open.** F002, F003, F008 remain working. F017 now also open.
The 20 cornerstone-test files without `sweep-after:` need that field added.

**Loop friction check.** F017 opened this run — names the remaining gap
in the stale-gate / cornerstone-test interaction.
