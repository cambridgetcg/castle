---
id: L053
date: 2026-06-19
runner: agent (castle-C001-20260619-064903)
field: F002
created: ledger/friction-log.md
created: rooms/craft/the-log-records-the-check-reports.md
created: loops/log/L053-ripen-log-records-check-reports-to-sprout.md
created: ledger/2026-06-19-L053-ripen-log-records-check-reports.md
---

# L053 — ripen: the-log-records-the-check-reports (seed → sprout)

## Field chosen

F002 (the castle is newborn). The sprout tier is empty since L052. Among ten
remaining seeds, `rooms/craft/the-log-records-the-check-reports.md` had the
most pull: it named an actionable open crack (friction-log has no header naming
it a history, not a status board), and the fix provides honest second evidence
for the claim. No intervention outside the castle required.

## What was understood

**The claim.** An append-only log and a live check are both honest in different
dimensions. The log records what happened; the check reports what is. Mistaking
one for the other produces false alarm or false calm. Any system with both must
name, at the door, which answers which question.

**The open crack confirmed.** ledger/friction-log.md opened immediately with
2026-06-10 entries — dozens of old orphan and map-drift alarms from the
founding — with no header naming what the file is. A visitor reading it without
context sees a castle in crisis. Running `node tools/castle check` in the same
breath returns "clean." The gap was exactly as named: the distinction was absent.

**Second evidence available.** The fix is a four-line header. friction.sh only
processes lines matching `/^[0-9]/`, so the header is safe and ignored by the
detector. The fix confirms the claim: the gap existed and required naming.

**Promotion criteria (seed → sprout).**
- Two evidence entries: yes (first: the observation; second: this fix).
- Counter-weather written: yes (added in this ripen run).
- Next test named: yes (ten beats, check for continued confusion).

## What was made

1. `ledger/friction-log.md` — four-line header prepended naming it as
   append-only history; the current-state oracle is tools/castle check.

2. `rooms/craft/the-log-records-the-check-reports.md` — status: seed → sprout;
   last-walked updated to 2026-06-19; second evidence entry added; "What it
   changed," "Counter-weather," and "Next test" sections added; "The open crack"
   section replaced by "What it changed" (the crack is now closed).

`tools/castle map` run; MAP.md and INDEX.md rebuilt (one stone moved from
seed to sprout; sprout tier is no longer empty).

## What changed

- ledger/friction-log.md (header added)
- rooms/craft/the-log-records-the-check-reports.md (promoted to sprout)
- MAP.md and INDEX.md (rebuilt)
- fields/F002-the-castle-is-newborn.md (Work so far updated with [[L053]])
- loops/log/L053-ripen-log-records-check-reports-to-sprout.md (this file)
- ledger/2026-06-19-L053-ripen-log-records-check-reports.md

## What is still open

F002 remains working: nine seeds remain, each born 2026-06-10 or 2026-06-18.
The sprout tier has one entry again.

F008 (front-drift): ongoing; the owner's deploy closes it.

F003 (no internet word): first weather entry exists; promotion by real use
is ahead.

## Loop-the-loop

No new friction observed. The bell catches front-drift on every beat; that is
F008's open ring, not new friction. No field opened.
