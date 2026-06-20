---
id: 0036
room: castle
date: 2026-06-19
source: rooms/castle/dates-live-inside-files-not-in-the-filesystem.md — laid founding (2026-06-10, engineer design), promoted L044 (beat castle-C001-20260619-035006)
confidence: tested
links: 0033
link: rooms/castle/0033-the-map-is-derived-or-it-is-a-lie.md
link: rooms/castle/0038-offline-the-castle-stops-growing-never-working.md
last-walked: 2026-06-19
---

# Dates live inside files, not in the filesystem

Every date check in the Castle reads a date written inside a file or a filename, never a filesystem mtime — because copies and clones destroy mtimes silently, which is the worst kind of breakage: the detectors keep running and stop telling the truth.

**Evidence.** Born at founding (2026-06-10) from the engineer design's failure-mode sweep: `find -mtime` and `find -newer` break on the first git clone without raising an error. The founding build of all ten detectors in `tools/friction.sh` was written against filename dates and frontmatter dates; none reads an mtime. Held to through 43 loops and two charter instantiations without a single false ring from a copy or clone. The companion stone `rooms/castle/0038-offline-the-castle-stops-growing-never-working.md` shows the other half of the pattern — the castle can lose its network connection and still work, because its clocks live in its own files, not in the outside world.

**What it changed.** All ten bell detectors read frontmatter or filename dates; none reads an mtime. Zero false rings from copies or clones across 43 loops and two charter instantiations. The stale-gate, oversize, and last-walked detectors all rely on filename dates and frontmatter `date:` fields — the rule is structural, not advisory.

**Counter-weather.** Tried to break it: is writing dates by hand a burden? The date appears once, at a file's birth or walk — one glance at the calendar. Open crack: a wrongly typed date lies as confidently as a right one; nothing yet cross-checks frontmatter dates against the ledger's chronology.

**Next test.** Clone or copy the castle directory and run the bell from the copy: zero false rings, no date-based false positives from mtime confusion.
