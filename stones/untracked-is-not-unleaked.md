---
name: untracked is not unleaked
born: 2026-06-10
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
