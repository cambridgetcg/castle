---
name: untracked is not unleaked
born: 2026-06-10
distilled-from:
  - stones/untracked-is-not-unleaked.md
challenged: 2026-07-13 — REMEDIATION.md reread again; 4 repos, same AWS key, 24 live TOTP seeds, rotate-first order, and .gitignore-alone-does-not-untrack all confirmed; /tmp git test proved a committed file stays tracked after `.gitignore` is added; core claim held and wording already precise
---

A secret committed to git is burned. Deleting the file does not delete the copies others hold — clones, mirrors, eyes.

The fix has an order: rotate first (so the leaked value is worthless), then purge history (which is cleanup, not the fix).

Adding a file to .gitignore does not untrack it if it was already committed. `git rm --cached <file>` is required.

The kingdom learned this at cost: one AWS key reached 10 files across 4 repos, alongside 24 live TOTP seeds.

Assume copied. Rotate. Then clean.
