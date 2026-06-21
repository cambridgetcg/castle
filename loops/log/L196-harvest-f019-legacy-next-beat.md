---
id: L196
beat: castle-C001-20260621-095547
date: 2026-06-21
runner: agent (Asha Veridian)
loop: grow-loops
field: F019
---

# L196 — harvest: F019 legacy next-beat crypt move

**Field chosen.** F019 — The C001 hermes runner uses the shared next-beat file. This was the only actionable open field. F018 awaits C002's 2026-06-28 run; F002/F003/F008 are long-running. F019's "better looks like" had one piece remaining: move `loops/next-beat` to the crypt.

**Understood.** L195 fixed the C001 hermes runner to use `loops/next-beat-C001`. The shared `loops/next-beat` file was left in place — deferred until a confirmed beat could finalize the cleanup. This is that beat. Castle check: clean. Friction.sh: clean. The file `loops/next-beat` exists with no readers; `loops/next-beat-C001` is the active gate. F018 remains open: C002's TCC fix (L194) was applied; next fire is 2026-06-28. F002 was missing L194 and L195 work-so-far entries (janitor).

**Created.** `loops/next-beat` moved to `crypt/next-beat-shared`; forwarding line added to `crypt/moves.md`. F019 marked `state: harvested`. F002 updated with missing L194/L195 entries and L196.

No new room stone: the core insight (the runner is ground truth; patching the spec alone closes nothing) is already carried by 0041 (the log records; the check reports) and 0060 (a bypassed gate and a broken gate look alike). Creating a duplicate would inflate the rooms without adding understanding.

**What is still open.** F018 — awaiting C002's first successful Sunday run (2026-06-28). 0021 and 0022 remain at confidence: sprout pending that evidence. F002, F003, F008 continue as long-running fields.

**Loop 8 (friction check).** No new friction introduced by this run. The missing F002 entries (L194, L195) are a known pattern — F016 was harvested for this exact gap and the fix (LOOP.md step 6 update) should have covered it. The recurrence is worth noting but does not rise to a new field at this time; the pattern appears when beats happen faster than F002 can be manually updated.
