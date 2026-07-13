---
name: untracked is not unleaked
born: 2026-06-10
confidence: tested
tested: 2026-07-13 — REMEDIATION.md reread; 4 repos, same AWS key, 24 live TOTP seeds, rotate-first order, and .gitignore alone not untracking a committed file all confirmed verbatim; disposable git repo in /tmp proved `git ls-files` still lists a file after `.gitignore` is committed
quarried-from:
  - /Users/you/love-repos/shield/REMEDIATION.md
links:
  - "[[break-loudly-fix-openly]]"
  - "[[burned-keys-move-in-minutes]]"
  - "[[root-access-bills-arrive-before-alarms]]"
---

A secret that touches a commit is burned. Deleting your copy does not
delete the copies others made — clones, forks, mirrors, eyes.
The kingdom learned this the hard way: one leak replicated itself
across four repos — the same AWS key in ten files, live TOTP seeds
(two-factor login codes) beside it
(/Users/you/love-repos/shield/REMEDIATION.md).
The remediation order is law: rotate first, so the leaked values
become worthless; only then purge history. Purging is cleanup,
not the fix — "a committed secret = a burned secret."
The root cause is named in the same file: .gitignore alone does not
untrack a file already committed. That is how it happened.
Untracked is not unleaked. Assume copied. Rotate. Then clean.
