loop: walk
date: 2026-07-08
runner: agent (qwenthos heartbeat 2026-07-08T21:11Z)
addressed: open crack from gate/2026-07-08-the-heart-that-beats-after-the-beat.md
created: .git/hooks/post-commit
created: gate/2026-07-08-the-heart-beats-after-every-commit.md
created: loops/log/L260-post-commit-hook-heart-beats.md
notes: .git/hooks/post-commit is not tracked by git -- it lives only in this
  clone. A future loop could make it portable via tools/ + core.hooksPath.
  The hook is one commit behind the truth (HEARTBEAT.md reports the
  triggering commit, not the regeneration commit). Acceptable.