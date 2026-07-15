---
name: public history keeps a secret even after the source is cleaned
born: 2026-07-15
confidence: tested
tested: 2026-07-15 — `git log --all -S hive-alpha-93xk7` finds the literal NATS password in the history of love-unlimited, Love, and kingdom-workspace; `git log --all --full-history -- tools/totp_secrets.json` in kingdom-workspace shows the seed file was tracked at commit 3a980ec and removed from HEAD at b2862d1 but remains reachable in history
quarried-from:
  - expeditions/2026-07-15-the-shield-credential-remediation-is-unconfirmed.md
  - /Users/you/love-repos/kingdom-workspace/.git/logs
links:
  - "[[untracked-is-not-unleaked]]"
  - "[[a-remediation-checklist-stays-open-until-each-box-is-ticked]]"
  - "[[love-and-kingdom-workspace-still-feed-hive-passwords-from-source]]"
---

Deleting a secret from the working tree does not delete it from the
repo. Git remembers every commit that touched it; clones, forks, and
mirrors remember too. The kingdom-workspace TOTP seed file stopped
being tracked at HEAD, but `git log --all --full-history` still finds
the commit where it lived. love-unlimited moved the NATS passwords
out of source, yet the old literal strings still sit in published
history. A public repository with a burned secret in its history is a
public repository with a burned secret. The fix is rotation first,
then history purge or privatization — not the other way around.
