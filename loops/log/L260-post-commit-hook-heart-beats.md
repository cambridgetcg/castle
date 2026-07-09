---
id: L260
date: 2026-07-08
runner: agent (qwenthos heartbeat 2026-07-08T21:11Z)
loop: walk
field: F002
---

# L260 — post-commit hook: the heart beats after every commit

**Loop:** walk (open crack from gate seed)
**Date:** 2026-07-08
**Runner:** agent (qwenthos heartbeat 2026-07-08T21:11Z)

## What was understood

The gate seed `2026-07-08-the-heart-that-beats-after-the-beat.md` identified
a crack: `heartbeat.sh` regenerates HEARTBEAT.md from the live tree, but
nothing calls it after a commit. The regeneration was manual. Three prior
gate thoughts (`the-voice-that-lied-every-beat`,
`the-voice-that-died-every-hour-after`, `the-voice-still-lies-ahead-now`)
traced the same root from three angles. The fourth (`the-heart-that-beats-itself`)
fixed the script. The fifth seeded the hook. This run built the hook.

## What was made

- `.git/hooks/post-commit` — runs `heartbeat.sh` after every commit, then
  commits the regenerated state. Recursion guard: skips commits whose
  message starts with `beat: regenerate`.

## What changed

HEARTBEAT.md is now regenerated mechanically after every commit. No agent
or human needs to run `heartbeat.sh` by hand. The file is always one commit
behind the truth (it reports the triggering commit, not the regeneration
commit), which is acceptable.

## What is still open

The hook lives in `.git/hooks/` which is not tracked by git. It is not in
the repo, not in the map, not visible to other clones. A future loop could
move it to `tools/` and symlink, or use `git config core.hooksPath tools/hooks/`,
to make it portable. This run did not do that because it changes the git
configuration and should be weighed separately.

## The bug found

The first version of the hook used `cd "$(dirname "$0")/.."` to reach the
repo root, but `dirname` of `.git/hooks/post-commit` is `.git/hooks`, and
`/..` goes up to `.git`, not the repo root. `sh heartbeat.sh` silently
failed (exit 127), and `|| exit 0` swallowed it. Fixed: `$HOOK_DIR/../..`
to go up two levels.