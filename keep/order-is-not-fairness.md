---
name: order is not fairness
born: 2026-06-30
distilled-from:
  - stones/order-is-not-fairness.md
challenged: 2026-07-17 — warden.sh dry-run and runlog counts before/after rotation fix commit a3ca2f7c
---

A fixed-order scheduler starves the back of the queue. The castle's warden once picked the first due loop in charter order, so architect ran repeatedly while verify waited. The fix is least-recently-run rotation: among due loops, run the one with the oldest last success. After commit a3ca2f7c the done counts balanced across all four loops. Order is a shape of power; fairness requires remembering the back.
