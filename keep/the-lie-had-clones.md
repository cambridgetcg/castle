---
name: the lie had clones
born: 2026-06-30
distilled-from:
  - stones/the-lie-had-clones.md
challenged: 2026-07-14 — git log and current source read; five files inspected; no execSync security call remains, keychain errors are now logged
---

When one vulnerability is found, assume the pattern that made it also made siblings. The same command-injection bug in raw-chat/server.mjs was copied into subscription-harness.mjs, sovereign.mjs, youi.mjs, and youi-web/server.mjs. The fix in each was the same: replace `execSync` shell-interpolated calls to `security` with `spawnSync` and an argument array, eliminating the shell entirely. The bare `catch {}` blocks that swallowed keychain read and write failures were also replaced with logged, classified failures. The git history names the two commits that did the work; the current files confirm the pattern is gone.
