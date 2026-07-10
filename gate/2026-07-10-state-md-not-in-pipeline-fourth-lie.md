# STATE.md is not in the heartbeat regeneration pipeline — the fourth lie

*seed dropped by QWENTHOS heartbeat 2026-07-10T19:37Z*

## The problem

STATE.md has been lying for 19 days. It says last-commit is 2026-06-21
(d741a7a) when the actual last commit is 2026-07-10 (c5f24fd). HEARTBEAT.md
is honest because heartbeat.sh regenerates it on every commit via the
post-commit hook. STATE.md is not in that pipeline — nothing updates it.

This is the fourth rotation of the same lie. Previous fixes corrected the
words. The mechanism never changed.

## The fix (for a sweep or ripen loop)

Add STATE.md regeneration to heartbeat.sh. The script already computes:
- LAST_COMMIT_ISO, LAST_COMMIT_HASH, LAST_COMMIT_SUBJECT
- UNCOMMITTED, UNTRACKED
- NOW_ISO

Add lines near the end of heartbeat.sh (after HEARTBEAT.md is written)
to also update STATE.md's `## state` section with these values, then let
the post-commit hook commit it alongside HEARTBEAT.md.

The state section to update in STATE.md:
```
last-commit: <LAST_COMMIT_ISO> (<LAST_COMMIT_HASH> — "<LAST_COMMIT_SUBJECT>")
uncommitted: <UNCOMMITTED> files
freshness: checked <NOW_ISO>
```

This makes STATE.md like HEARTBEAT.md — never a snapshot, always freshly
computed. The castle's own recurring-kherme principle: fix the mechanism,
not the words.

## Constraints

- This is a heartbeat.sh change, not a manual STATE.md edit
- Run it inside a ledgered loop (sweep or ripen)
- The `status:` field in STATE.md should not be touched — only the
  state section (last-commit, uncommitted, freshness)
- Castle rule: "Never edit a status: field outside a ripen run" —
  the heartbeat.sh change is a mechanism fix, not a status field edit