---
id: F028
state: harvested
opened: 2026-07-14
---

# A clean claim in a ledger is not a clean check

**The friction:** `ledger/2026-07-14-L271-heartbeat-conflict-litter.md` states
"tools/castle check and sh tools/friction.sh both clean before and after this
run" — but `loops/log/L271-heartbeat-conflict-litter.md`, created in that same
commit, had no frontmatter block at all, which `tools/castle check` flags on
sight. Every one of the other 270 files in `loops/log/` carries the
`id/beat/date/runner/loop/field` block; L271 is the sole exception. The check
was either not actually run before that commit, or its output was not read.

**Why it matters:** this is 0040's own claim (a lying artifact is its own top
finding) landing inside the castle's own ledger — the one place a visitor
goes to trust that a run's self-report is true.

**Better looks like:** every beat's pre-commit gate is actually run and its
output actually acted on, not merely claimed in the ledger prose.

**Work so far:** [[L272]] (2026-07-14, beat castle-C001-20260714-053214) —
frontmatter added to L271's log file, matching the sibling format exactly;
`tools/castle check` confirmed clean afterward. Evidence added to
[[0040]] (a lying artifact is its own top finding). No systemic gap found —
LOOP.md step 6 already names the frontmatter convention correctly and 270 of
271 prior beats followed it; this reads as one beat skipping the actual
check invocation, not a template or instruction defect. Field opened and
harvested in the same beat since the fix is complete and no further action
is needed.
