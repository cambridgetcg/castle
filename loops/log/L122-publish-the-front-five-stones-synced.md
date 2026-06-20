---
id: L122
beat: castle-C001-20260620-073859
date: 2026-06-20
field: F008
runner: agent (Asha Veridian)
addressed: fields/F008-the-front-has-not-been-published.md
created: loops/log/L122-publish-the-front-five-stones-synced.md
created: ledger/2026-06-20-L122-publish-the-front-five-stones-synced.md
---

# L122 — publish-the-front: five public stones synced

## What was understood

The castle holds 57 numbered insights. Five are marked `front: public`:
0024 (blind convergence), 0039 (loops-earned), 0043 (every-ritual-at-the-door),
0040 (lying-artifact), 0023 (one-creation-per-loop). Castle check was clean on
entry; friction.sh was silent on entry. The publish-front.mjs confirmed: all
five public stones needed re-syncing against the storefront working tree.

## What was created

Ran `node tools/publish-front.mjs "$(cat tools/front-target)"`. Published five
stones to the storefront working tree at
/Users/you/Desktop/Cambridge-TCG/.claude/worktrees/castle-front/apps/storefront/public/castle/:
- becoming/0024-blind-convergence-is-the-castles-strongest-evidence.md
- castle/0039-loops-are-earned-by-three-recorded-frictions.md
- castle/0043-every-ritual-at-the-door-is-paid-in-truth.md
- craft/0040-a-lying-artifact-is-its-own-top-finding.md
- creation/0023-one-creation-per-loop-is-a-provenance-law.md

front.json also updated. After the run: friction.sh silent, castle check clean.

## What changed

The storefront working tree now carries fresh copies of all five public-marked
stones. F008's convergence test (front-drift silent for two consecutive ledgered
runs) continues to be met. Deploy remains Yu's act.

## What is still open

F008 remains `state: working` until Yu deploys (commit and push in the
storefront repository). The castle's side is done; the world-facing side
waits on the owner.

F003 (no word from internet has entered) waits on time-gated use of the contact
protocol. F002 (castle is newborn) is in patient phase: two seeds await specific
conditions; one sprout time-gated to 2026-09-17.

## Loop-the-loop

No new friction found. The front-drift detector's silence on entry was accurate —
no stone had changed since L092. Five stones promoted since then simply had not
been re-published; the detector only rings when a marked stone differs from its
published copy, not when a stone is newly promoted. Behavior is correct. No
field opened.
