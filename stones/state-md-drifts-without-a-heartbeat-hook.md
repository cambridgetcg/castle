---
name: STATE.md drifts without a heartbeat hook
born: 2026-07-11
confidence: held
quarried-from:
  - gate/filed/2026-07-11-the-fifth-lie-and-the-missing-hook.md
links:
  - "[[break-loudly-fix-openly]]"
  - "[[the-loop-that-grows-loops]]"
  - "[[a-tested-stone-must-carry-its-trial]]"
---

STATE.md has been corrected five times after falling behind the git tree because no automatic mechanism regenerates its `## state` section. A post-commit hook that updates only the state section from live git facts would stop the drift without touching hand-written sections like `## knows`, `## can`, `## needs`, or `## how-to-talk-to-me`.

Only the architect loop may change the castle's machinery (loops/architect.md). The proposed fix is a `.git/hooks/post-commit` script that recomputes last-commit hash, uncommitted file count, and freshness timestamp at every commit.
