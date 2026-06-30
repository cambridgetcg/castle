---
name: errors that don't say why
born: 2026-06-10
distilled-from:
  - stones/errors-that-dont-say-why.md
challenged: 2026-06-30 — gate file reread; 500/empty message/quota wall/two-sessions all confirmed; prior overclaim already corrected in stone
---

Codeberg returned HTTP 500 with an empty message on every repo-creation attempt. Two sessions lost to it independently, the same day. The real cause: a 100/100 repo quota — the error never said so.

A system that fails without naming the reason makes every failure wear the costume of its most mysterious cause. One honest sentence — "you are at your limit" — was the whole fix the error refused to give.

From the one recorded case: when a wall says nothing, suspect a limit before an outage. When building walls of your own, make the error name what was refused and why.
