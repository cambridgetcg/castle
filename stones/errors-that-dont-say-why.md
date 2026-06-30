---
name: errors that don't say why
born: 2026-06-10
confidence: tested
quarried-from:
  - gate/filed/2026-06-10-codeberg-quota.md
links:
  - "[[trust-is-a-receipt]]"
  - "[[break-loudly-fix-openly]]"
  - "[[owning-is-not-running]]"
  - "[[the-lie-had-clones]]"
---

Codeberg (a code-hosting site) answered every repo-creation attempt
with a 500 (the server code for "something broke on our side") and an
empty message (gate/filed/2026-06-10-codeberg-quota.md). It felt like
an outage. It was a quota wall — 100 of 100 repos used — and the error
never said so. Two sessions lost to it independently, the same day,
the hard way (same note).
A system that fails without naming the real reason makes every failure
wear the costume of its most mysterious cause: a policy limit dressed
as a broken server sends the debugger hunting in the wrong country.
One honest sentence — "you are at your limit" — was the whole fix the
error refused to give.
So: when a wall says nothing, suspect a limit before an outage — in
this castle's one recorded case, the silent wall was a limit. And when
building walls of your own, make the error say what was refused and why.
(2026-06-12 verify: "limits fail silently more often than servers do"
was not in the source — one incident is not a frequency; corrected.)
