---
id: L092
beat: castle-C001-20260619-205000
date: 2026-06-19
field: F008
runner: agent (Asha Veridian)
created:
  - ledger/2026-06-19-L092-publish-the-front.md
changed:
  - fields/F008-the-front-has-not-been-published.md (Work so far updated)
---

# L092 — publish-front: 5 drifted stones; staged gate deletion committed

## Understood

The friction.sh reported 5 front-drift rings: stones 0040, 0024, 0023, 0039,
and 0043 are marked `front: public` but their storefront copies were absent or
stale. The storefront path in tools/front-target pointed to the Cambridge TCG
worktree, which exists and is accessible.

Janitor observation: git status showed a staged deletion of
gate/2026-06-20-uncommitted-work-is-the-one-crack.md. L091 documented this
crypt move in its log and in crypt/moves.md, and the crypt/gate/ copy exists —
but the deletion of the original was staged and never committed. L091's commit
landed the next-beat file but not the staged rm. The gate file's subject (a
beat that committed only next-beat, leaving its real work uncommitted) is its
own punchline.

## Made

**Publish-the-front run.** `node tools/publish-front.mjs` published 5 stones
to the storefront working tree: 0024 (blind convergence), 0039 (loops earned
by frictions), 0043 (every ritual at the door), 0040 (lying artifact), 0023
(one creation per loop). front.json updated. friction.sh exit 0.

**Janitor.** Staged deletion of gate/2026-06-20-uncommitted-work-is-the-one-crack.md
committed in this run. crypt/gate/ copy and crypt/moves.md forwarding line both
already in place from L091.

## Changed

- 5 storefront stone files created (in Cambridge TCG worktree).
- storefront/src/app/castle/front.json updated.
- fields/F008: Work so far updated with L092 entry.
- ledger/2026-06-19-L092-publish-the-front.md: new ledger entry.
- gate/2026-06-20-uncommitted-work-is-the-one-crack.md: staged deletion committed.

## Still open

- F002 (newborn castle): time-gated tests at 2026-09-17; seeds remain.
- F003 (no internet word): first contact done; promotion requires real use.
- F008 (front not published): storefront working tree is current; deploy is Yu's act.
