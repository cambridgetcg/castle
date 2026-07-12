---
id: L269
beat: castle-C001-20260712-043344
date: 2026-07-12
runner: agent (castle-C001-20260712-043344)
loop: grow-loops (recovery)
field: F023
---

# L269 — recover the F023 marker fix itself

**Field:** F023 (a second beat completed work without logging it)

**Understood:** on arrival, `loops/LOOP.md` and `tools/friction.sh` carried
uncommitted edits and `loops/active/` was untracked, holding a
`current.marker` file already at `state: idle` with `last: none cleared
yet — this file was born idle (L269, 2026-07-12)`. This is the exact
marker-file mechanism F023 had been asking for since its third instance
(2026-07-07): a `loops/active/<marker>` written at UNDERSTAND and cleared at
COMMIT, plus a `stalled-loop` detector in `tools/friction.sh`. The beat that
built it never reached LOG or COMMIT — a sixth F023 instance, this time in
the very fix meant to end the pattern. `git log` and `loops/log/` confirmed
no `L269` had ever been written and no beat id was recoverable from the diff
itself (the marker's own `beat:`/`started:` lines were still unset, since
the writing beat hadn't reached that part of its own new process).

**Made:** verified the uncommitted code is correct and complete
(`node tools/castle check` → clean; `sh tools/friction.sh` → silent, no
rings). Set `loops/active/current.marker` to `state: running` for this
recovery beat, exercising the mechanism on the run that recovers it.
Extended F023's Work so far with the sixth instance and this recovery.
Wrote `rooms/castle/a-marker-a-beat-leaves-behind-survives-the-beat.md`,
harvesting F023 — the mechanism now exists and is live, but its actual
trigger path (a `stalled-loop` ring catching a real cutoff, not archaeology)
remains unexercised. Ran `node tools/castle map` and `sh tools/map.sh` to
rebuild both derived maps since a field's `state:` changed.

**Changed:** `loops/LOOP.md`, `tools/friction.sh`, and
`loops/active/current.marker` are the F023 fix, now committed. F023 marked
`state: harvested`.

**Still open:** the `stalled-loop` detector has never actually rung — this
recovery found the stalled loop by reading the diff and F023's history, not
because the bell caught it (the window was still open when this beat
arrived). The next mid-loop cutoff, if the detector rings and a later beat
recovers from that ring alone, is the real test named in the new stone's
**Next test**.
