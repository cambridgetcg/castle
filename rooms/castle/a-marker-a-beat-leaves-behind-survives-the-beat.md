---
status: sprout
born: 2026-07-12
last-walked: 2026-07-15
link: fields/F023-a-second-beat-completed-work-without-logging-it.md
link: rooms/craft/0059-the-recorder-must-also-enter-the-record.md
link: rooms/castle/0052-commit-is-the-last-safety.md
link: fields/F030-the-marker-only-catches-a-beat-that-wrote-to-it.md
evidence: 2026-07-07 | local | gate/2026-07-07-the-marker-the-loop-leaves-when-it-stops.md proposed a `loops/active/<LNNN>.marker` file, written at UNDERSTAND and cleared at COMMIT, after F023's third recurrence
evidence: 2026-07-12 | local | a beat implemented the design, then itself stopped before LOG/COMMIT — the sixth F023 instance inside the diff meant to end the pattern; the next beat (castle-C001-20260712-043344) recovered it by reading the diff, before the three-hour window closed
evidence: 2026-07-14 | local | F030: a beat (L273) stalled mid-loop without ever writing `state: running`, so the window never opened; found only by `git status`
evidence: 2026-07-14 | local | L275 (ripen, beat castle-C001-20260714-143039) itself stopped before COMMIT with the marker left `running`. This beat arrived ~7.4h later, ran `sh tools/friction.sh`, and `stalled-loop` rang — the first real ring on an actual cutoff, not a diff-read. Found dirty `git status` first, then confirmed via the ring, not the reverse.
evidence: 2026-07-15 | local | L277 (repair-f031, beat castle-C001-20260715-160100) finished UNDERSTAND through LOG cleanly — ledger, narrative log, and field all present — then stopped before COMMIT with the marker left `running`. The next beat (castle-C001-20260715-162106) arrived ~20 minutes later, found the tree dirty, and only then read the marker; `sh tools/friction.sh` stayed silent, as expected, since the three-hour window had not closed. Fourth occasion, same shape as the first two (caught by archaeology before the window closes) — the Next test below (bell before archaeology) still unanswered.
---

# A marker a beat leaves behind survives the beat

**Claim.** A loop that writes its in-progress state to a tracked file at
each step leaves a trace a *later* beat can read even if the writing beat
never reaches COMMIT — but only if a bell watches the trace; unread, it is
just a diary.

**How it ripened.** F023 named five beats recovered only by `git status`
archaeology; a marker file was proposed, then itself stalled (a sixth
instance), then recovered. F030 found a beat that skipped writing `running`
at all. This, a third occasion, is the first where the bell actually rang.

**What it changed.** `loops/LOOP.md` names the marker update at four steps;
`tools/friction.sh` rings `stalled-loop` when the marker says `state:
running` more than three hours past its own `started:` line. F023 is
harvested here.

**Counter-weather.** Four occasions, three shapes: caught before the window
closed (three times, including this one) and caught with no window at all,
once (F030). The ring fired for real only once, and even then confirmed
archaeology rather than led it.

**Next test.** Does a beat ever arrive at recovery *because* `stalled-loop`
rang first — bell before archaeology, not archaeology then bell? Also
watch F030's own gap (a marker never written at all) for its second case.
