---
id: F019
state: harvested
opened: 2026-06-21
---

# The C001 hermes runner uses the shared next-beat file

**The friction:** `~/.hermes/scripts/castle-pulse-runner.sh` (the actual launchd runner for C001) reads and writes `loops/next-beat` — the old shared file. `tools/pulse.sh` and `loops/LOOP.md` law (step 7) expect `loops/next-beat-${CHARTER}` per-charter files. The L178 fix updated `tools/pulse.sh` but not the hermes runner that actually fires. C001 beats currently write `loops/next-beat` (instructed by the runner's prompt) and `loops/next-beat-C001` inconsistently across beats.

**Why it matters:** it is not causing a current malfunction (only C001's hermes runner reads `loops/next-beat`, so no cross-charter collision). But the inconsistency between the runner, LOOP.md, and `tools/pulse.sh` means the rules say one thing and the machine does another. If the hermes runner is ever updated or a new reader of `loops/next-beat` appears, the gap becomes a bug.

**Better looks like:** the C001 hermes runner uses `loops/next-beat-C001` as its gate and the beat prompt instructs the agent to write `loops/next-beat-C001`. The shared `loops/next-beat` is then a legacy file with no readers; it can be moved to the crypt in a recorded run.

**Work so far:** [[L194]] (2026-06-21) — friction named; field opened.
[[L195]] (2026-06-21, beat castle-C001-20260621-093341) — runner fix applied: `~/.hermes/scripts/castle-pulse-runner.sh` now uses `NEXT_BEAT="$CASTLE/loops/next-beat-${CHARTER}"` (resolves to `loops/next-beat-C001` for C001) for its gate check and safety net; prompt text updated to instruct the agent to write `loops/next-beat-C001`. The runner and the law now agree. The shared `loops/next-beat` file remains as a legacy file with no readers; crypt move deferred to a future confirmed run.
[[L196]] (2026-06-21, beat castle-C001-20260621-095547) — harvest: `loops/next-beat` moved to `crypt/next-beat-shared`; forwarding line added to `crypt/moves.md`. F019 has reached its better state: runner, law, and file system now agree. No new room stone warranted — the mechanical insight (the runner is ground truth; patching the spec alone closes nothing) is already carried by [[0041]] and [[0060]]. F018 remains open until C002's first successful Sunday run (2026-06-28).
