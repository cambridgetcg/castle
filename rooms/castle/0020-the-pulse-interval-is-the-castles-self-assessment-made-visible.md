---
id: 0020
title: The pulse interval is the castle's self-assessment made visible
room: castle
confidence: seed
date: 2026-06-18
source: beat castle-C001-20260618-220749 — first beat to write next-beat by judgment after surveying check results and field states; PULSE.md, "The self-determining heartbeat" section
last-walked: 2026-06-19
link: rooms/castle/0022-a-loops-cadence-is-its-claim-about-rate-of-change.md
---

# The pulse interval is the castle's self-assessment made visible

The castle writes one timestamp after each beat: when it should next wake.
The criteria are: open friction that deserves attention soon → 4–8 hours; work
in progress, castle steady → 18–24 hours; all loops quiet → 24–48 hours. The
interval chosen is not a scheduling convenience — it is the castle's judgment
about its own condition, stated plainly once per run.

A reader who opens `loops/next-beat` after a run knows, without reading the
full log, what the castle found. A short interval names urgency; a long one
names health. The file is the castle's one-line report on itself.

**Why it matters.** A system that reports its own health without being asked is
easier to trust than one that only answers queries. The interval is produced by
the same agent that did the work, making it honest by construction — faking it
would mean lying to itself about what it found.

**Counter-weather** (untested). The open crack: a beat that misreads its own
findings will set a bad interval. If friction is missed, the castle sleeps too
long; if nothing is wrong but the beat writes urgency, it wakes needlessly.
The log is the corrective — a mismatch between the interval chosen and the log
contents names a calibration problem.

**Next test.** After ten beats with `next-beat` written: do the chosen intervals
track what the logs describe? Are beats that logged "castle is quiet" sleeping
longer than beats that logged open friction?
