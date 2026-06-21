---
id: L195
beat: castle-C001-20260621-093341
date: 2026-06-21
runner: agent (Asha Veridian)
loop: grow-loops
field: F019
---

# L195 — fix: C001 hermes runner next-beat file

**Field chosen.** F019 — The C001 hermes runner uses the shared next-beat file. This is the highest-pull open field: the fix is concrete and the inconsistency between the runner and the written law is live.

**Understood.** `~/.hermes/scripts/castle-pulse-runner.sh` set `NEXT_BEAT="$CASTLE/loops/next-beat"` (the old shared file) and told the beat to write to `loops/next-beat`. LOOP.md step 7 and PULSE.md law require per-charter files (`loops/next-beat-${CHARTER}`). The L178 fix updated `tools/pulse.sh` correctly; the C002 tributary runner was written correctly from the start (L194). The C001 hermes runner was the one remaining place where the old shared-file pattern survived. The inconsistency was not causing a malfunction (C001's runner is the only reader of `loops/next-beat`), but the runner's behavior was the ground truth, and it contradicted the law.

**Created.** Three edits to `~/.hermes/scripts/castle-pulse-runner.sh`:
1. Comment updated: "loops/next-beat in the castle" → "loops/next-beat-C001 in the castle".
2. Variable assignment: `NEXT_BEAT="$CASTLE/loops/next-beat"` → `NEXT_BEAT="$CASTLE/loops/next-beat-${CHARTER}"`. The safety-net block already referenced `$NEXT_BEAT`, so it now writes to the correct file automatically.
3. Prompt text: IMPORTANT line updated from `loops/next-beat` to `loops/next-beat-C001`.

The runner and the law now agree.

**What is still open.** F019 remains `state: working` — the core inconsistency is resolved; the shared `loops/next-beat` file now has no readers and can be moved to the crypt in a future confirmed run. F018 remains open: C002 still awaiting its first successful Sunday run (next fire: 2026-06-28).

**Loop 8 (friction check).** No new friction introduced by this run. The hermes runner is outside the castle repo and invisible to `castle check`, which is by design (noted in ledger). No new rings in `friction.sh`.
