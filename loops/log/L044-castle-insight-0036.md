---
id: L044
date: 2026-06-19
runner: agent (castle-C001-20260619-035006)
field: F002
created: rooms/castle/0036-dates-live-inside-files-not-in-the-filesystem.md
---

# L044 — castle insight 0036: dates live inside files, not in the filesystem

## Field chosen

F002 (the castle is newborn). Three fields remain open (F002, F003, F008). F002
draws most — L043 named the last remaining tested castle stone
(`dates-live-inside-files-not-in-the-filesystem.md`) as the natural next
candidate. Castle check is clean.

## What was understood

`rooms/castle/dates-live-inside-files-not-in-the-filesystem.md` was at `status:
tested`, born 2026-06-10 from the engineer design's failure-mode sweep. The
claim: every date check reads a date written inside a file or a filename, never
an mtime — because copies and clones destroy mtimes silently, and a broken
detector that keeps running is worse than one that stops. The founding build of
all ten detectors in `tools/friction.sh` held to this; 43 loop runs confirm no
false ring from a clone.

One link in `rooms/castle/offline-the-castle-stops-growing-never-working.md`
pointed to the source stone path (now crypt-bound); that link needed updating to
the numbered path. No other live room files carry the stale path. Crypt files and
log entries are left unchanged per convention.

## What was made

`rooms/castle/0036-dates-live-inside-files-not-in-the-filesystem.md` — insight
0036, promoted from the tested stone. Confidence remains `tested` (founding build
+ 43 loops). Links to 0033 (the map is derived, or it is a lie — the companion
insight that the index must be derived, not hand-grown; both rest on the same
principle that a copy should not corrupt the castle's view of itself). Body names
the open crack (a wrongly typed date lies as confidently as a right one) and the
next test (clone the directory, run the bell, count false rings).

## What changed

- rooms/castle/0036-dates-live-inside-files-not-in-the-filesystem.md (created)
- crypt/dates-live-inside-files-not-in-the-filesystem.md (moved from rooms/castle/)
- crypt/moves.md (one forwarding line added)
- rooms/castle/offline-the-castle-stops-growing-never-working.md (stale link updated to numbered path)
- fields/F002-the-castle-is-newborn.md (Work so far updated)
- MAP.md (rebuilt by map.sh)
- INDEX.md (rebuilt by map.sh)

## What is still open

F002 remains working — many stones on this machine remain to be harvested. All
tested stones in rooms/castle/ have now been promoted. The room holds seven
unnumbered stones (various statuses); none are at `tested` today. F003 is
waiting on the one-year use test for insight 0029. F008 waits on the owner's
deploy.

## Loop-the-loop

No new friction observed. The promotion sequence is practiced and reliable.
Castle check was clean before and after. The castle is steady.
