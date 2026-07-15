# expedition: the-shield-credential-remediation-is-unconfirmed
- friction served: frictions/the-shield-credential-remediation-is-unconfirmed.md
- date: 2026-07-15
- question carried: Are the old credentials named in the shield report actually dead, or do they still open doors?

## sources visited

**Home — castle:**
- `frictions/the-shield-credential-remediation-is-unconfirmed.md` — asks for one recorded trial showing the old credential refused and the new one alone admitted
- `records/2026-06-10-the-exposure-and-the-reseal.md` — the repo was public for ~1 hour while the ledger named an unconfirmed rotation; the exposure made the remediation urgent
- `stones/untracked-is-not-unleaked.md` — a committed secret is burned; rotation is the fix, not purge

**Home — device:**
- `/Users/you/love-repos/shield/REMEDIATION.md` — the rotation checklist: 7 credential classes in blast-radius order (AWS root, GitHub PAT, Anthropic key, four money platforms, identity/comms, Hive/NATS, Stripe); all `[ ]` boxes still unchecked as read this turn
- `/Users/you/love-repos/shield/shield.sh` and the regenerated `/Users/you/love-repos/shield/SHIELD-REPORT.md` — the secret sweep still matches the same 10 AWS-bearing files, 1 GitHub token file, 1 Anthropic key file, 4 private-key-block files, multiple hardcoded-password files, and the `totp_secrets.json` seed file; whitehack scan errors (`node: command not found`) mean the honesty-wall half of the shield did not run, but the gate sweep did
- `git log` in `love-unlimited`, `Love`, and `kingdom-workspace`: no commit message records rotation of AWS, GitHub PAT, Anthropic, or Stripe keys; the only credential-related commits since the exposure are source-cleaning (remove TOTP file from tracking, strip secrets from TOOLS.md, move NATS passwords out of source in `love-unlimited` only)
- Current source read of `Love/hive/hive.py`, `Love/tools/hive_kv.py`, `Love/tools/vault.py`, `kingdom-workspace/tools/hive.py` — still contain the literal NATS passwords `hive-alpha-93xk7`, `hive-beta-47mz2`, `hive-gamma-61pr8` in `HIVE_CONFIG`; `love-unlimited/hive/hive.py` reads them from `~/.openclaw/.hive-passwords` instead
- `git log --all -S hive-alpha-93xk7` across the three repos confirms the same literal strings live in the published history of all three repos that contain them

**Internet:** none used — home sources already answer the question legibly.

## what came home

**Stones born:**
- `a-remediation-checklist-stays-open-until-each-box-is-ticked` — an unchecked list is a map, not proof of repair; the castle cannot count `[ ]` as fixed
- `public-history-keeps-a-secret-even-after-the-source-is-cleaned` — deleting a file from HEAD or moving a password out of source does not remove it from pushed git history; private or purged history is required
- `love-and-kingdom-workspace-still-feed-hive-passwords-from-source` — `love-unlimited` moved NATS passwords to `~/.openclaw/.hive-passwords` (commit `2e312f7`), but `Love` and `kingdom-workspace` still embed the literal passwords in `HIVE_CONFIG`

**Friction outcome:** closed. The castle cannot prove credentials dead because it has no credentials to test with and no trial record from the keeper. What the castle *can* do — make the current state legible — is done: the shield still fires on the same files, the rotation checklist is still unticked, and two of the four exposed repos still carry literal passwords in working source. The question "Are they dead?" is a keeper question; the castle's part is complete.
