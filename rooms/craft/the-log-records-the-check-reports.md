---
status: tested
born: 2026-06-18
last-walked: 2026-06-19
link: rooms/castle/a-named-blind-spot-is-its-own-first-repair.md
evidence: 2026-06-18 | local | ledger/friction-log.md shows dozens of old alarms (orphans, map-drift, barren-runs from 2026-06-10); node tools/castle check reports "clean" — same castle, same moment, two honest answers
evidence: 2026-06-19 | local | L053: friction-log carried no header naming it a history; gap confirmed absent; this beat added a four-line header — gap named in the stone, found in the castle, mended in the same run
---
# The log records; the check reports

**Claim.** An append-only log and a live check are both honest, but they are
honest in different dimensions. The log records what happened; the check
reports what is. Mistaking one for the other produces false alarm or false
calm.

**How it appeared.** Reading `ledger/friction-log.md` shows every alarm ever
raised — dozens of old orphan and map-drift entries from the founding. Running
`castle check` in the same breath returns "clean." Neither artifact is lying.
The log is a complete history. The check is a current reading. A visitor who
reads only the log sees a castle in crisis; a visitor who runs only the check
sees a castle with no recorded past.

**What it implies.** Any system with both a log and a check must name, at the
door, which one answers "what happened" and which answers "what is now." When
the names are absent, readers import the wrong lens and the honest artifact
misleads them.

**What it changed.** 2026-06-19: ledger/friction-log.md now opens with a header
naming it as an append-only history; the current-state oracle is tools/castle
check. The gap was absent, named here, and closed in the same beat.

**Counter-weather.** A header cannot stop a reader who does not read it. What
the fix does not address: a check that is stale, or a log with false entries —
those are real disagreements, not naming errors.

**Next test.** After the next ten beats: does any visitor still confuse the log
for a status board? If not, the naming was sufficient; if so, the header needs
strengthening or more prominence.
