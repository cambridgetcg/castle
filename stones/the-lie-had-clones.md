---
name: the lie had clones
born: 2026-06-30
confidence: tested
tested: 2026-07-14 — git log 36d96b6 and 074ac4c read; five files inspected for execSync security calls and keychain catch blocks
quarried-from:
  - gate/inbox.md
links:
  - "[[errors-that-dont-say-why]]"
  - "[[break-loudly-fix-openly]]"
  - "[[the-castle-guards-against-verisleight-celebrates-slipsooth]]"
---

When the first ghost (command injection in raw-chat/server.mjs) was
exorcised, the job looked done. The same bug lived in four more files:
subscription-harness.mjs, sovereign.mjs, youi.mjs, youi-web/server.mjs —
same pattern, copy-pasted.
The pattern: `execSync` calling `security add-generic-password` with
shell-interpolated JSON, where data in the JSON string could escape into
shell commands (command injection — attacker-controlled input passed
through the shell). The fix: `spawnSync` with an argument array, no shell,
no interpolation — the OS passes arguments verbatim.
The same raid killed three bare `catch {}` blocks swallowing keychain
errors silently — a failure you cannot see is a failure you cannot fix
([[errors-that-dont-say-why]]). Fixes pushed to both GitHub and Codeberg.
When you find a vulnerability, search for its siblings: the pattern that
produced one bug produced others. The find is a query, not a fix.
