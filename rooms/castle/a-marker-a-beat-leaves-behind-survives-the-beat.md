---
status: seed
born: 2026-07-12
last-walked: 2026-07-12
link: fields/F023-a-second-beat-completed-work-without-logging-it.md
link: rooms/craft/0059-the-recorder-must-also-enter-the-record.md
link: rooms/castle/0052-commit-is-the-last-safety.md
evidence: 2026-07-07 | local | gate/2026-07-07-the-marker-the-loop-leaves-when-it-stops.md proposed a `loops/active/<LNNN>.marker` file, written at UNDERSTAND and cleared at COMMIT, after F023's third recurrence
evidence: 2026-07-12 | local | a beat implemented the design as `loops/active/current.marker` plus a `stalled-loop` detector in tools/friction.sh and step markers in loops/LOOP.md — then stopped before LOG or COMMIT, becoming the sixth F023 instance inside the diff meant to end the pattern
evidence: 2026-07-12 | local | this beat (castle-C001-20260712-043344) found the uncommitted fix, verified it with `node tools/castle check` (clean) and `sh tools/friction.sh` (silent), and set the marker to `state: running` for its own recovery run with no false ring
---

# A marker a beat leaves behind survives the beat

**Claim.** A loop that writes its in-progress state to a tracked file at
each step leaves a trace a *later* beat can read even if the writing beat
never reaches COMMIT — but only if a bell watches the trace; unread, it is
just a diary.

**How it ripened.** F023 named five beats that finished real work but
stopped before LOG/COMMIT, recovered only by manual `git status`
archaeology. The third instance's gate note proposed a marker file. The beat
that built it — editing `loops/LOOP.md` and `tools/friction.sh` — itself
stopped before committing: a sixth, self-referential instance. This beat
found the marker already `state: idle` with a self-predicted log name, and
finished the recovery — the mechanism's first real exercise.

**What it changed.** `loops/LOOP.md` names the marker update at four steps;
`tools/friction.sh` rings `stalled-loop` when the marker says `state:
running` more than three hours past its own `started:` line. F023 is
harvested here.

**Counter-weather.** This exercise found the stall by reading the diff and
F023's history, not because `stalled-loop` rang — the beat arrived before
the three-hour window closed. A "would have rung," not a "rang."

**Next test.** Watch the next mid-loop cutoff: does `stalled-loop` actually
ring, and does the next beat recover from that ring rather than from noticing
dirty `git status` by chance.
