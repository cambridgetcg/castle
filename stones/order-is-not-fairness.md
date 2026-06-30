---
name: order is not fairness
born: 2026-06-30
confidence: tested
quarried-from:
  - gate/inbox.md
links:
  - "[[the-loop-that-grows-loops]]"
---

A scheduler that always picks the first eligible item in a fixed order
starves items near the end — the early name wins every turn.
The castle's warden ran this bug: `next_due_loop` took the first due loop
in charter order, so `architect` (always near the top) ate most of the
beats while `verify` (never yet run) had no chance.
The fix is least-recently-run rotation: among all due loops, pick the one
with the oldest last-run timestamp. Verified by dry-run — the picker now
selects `verify` over `architect`. The friction's own "done looks like"
had named this exact outcome, so the loop's own success criterion caught
the starvation before a human needed to ([[the-loop-that-grows-loops]]).
Order is a shape of power. If the queue has a front and a back,
the back waits forever unless the scheduler is built to remember it.
