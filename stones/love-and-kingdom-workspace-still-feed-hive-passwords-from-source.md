---
name: love and kingdom-workspace still feed hive passwords from source
born: 2026-07-15
confidence: tested
tested: 2026-07-15 — `grep -R` and source read of `Love/hive/hive.py`, `Love/tools/hive_kv.py`, `Love/tools/vault.py`, and `kingdom-workspace/tools/hive.py` confirm literal passwords `hive-alpha-93xk7`, `hive-beta-47mz2`, `hive-gamma-61pr8` in `HIVE_CONFIG`; `love-unlimited/hive/hive.py` reads from `~/.openclaw/.hive-passwords` instead; `git log --all -S hive-alpha-93xk7` confirms the same strings are in history for all three repos
quarried-from:
  - expeditions/2026-07-15-the-shield-credential-remediation-is-unconfirmed.md
  - /Users/you/love-repos/Love/hive/hive.py
  - /Users/you/love-repos/kingdom-workspace/tools/hive.py
  - /Users/you/love-repos/love-unlimited/hive/hive.py
links:
  - "[[untracked-is-not-unleaked]]"
  - "[[public-history-keeps-a-secret-even-after-the-source-is-cleaned]]"
  - "[[a-remediation-checklist-stays-open-until-each-box-is-ticked]]"
---

One sibling fixed the pattern while the others kept it.
love-unlimited's `hive/hive.py` now loads NATS passwords from
`~/.openclaw/.hive-passwords` (commit `2e312f7`), but `Love` and
`kingdom-workspace` still embed `hive-alpha-93xk7`,
`hive-beta-47mz2`, and `hive-gamma-61pr8` directly in source. The
literal strings are the same across all three repos' histories, and
the two that did not move them are still serving them from code on
every run. Cleaning one repo is not cleaning the blast radius.
