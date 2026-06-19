---
id: 0033
room: castle
date: 2026-06-19
source: rooms/castle/the-map-is-derived-or-it-is-a-lie.md — laid founding (2026-06-10, design panel), promoted L041 (beat castle-C001-20260619-025301)
confidence: tested
links: 0020, 0032
---

# The map is derived, or it is a lie

An index hand-grown alongside the files it describes starts lying the moment a file moves and the hand does not — which is the exact moment no one is looking. The only honest index is one derived from the files themselves by a repeatable script: it cannot drift, because running it is the same as updating it.

**Evidence.** Born at founding (2026-06-10) from three independent designs (gardener, engineer, clarity) cutting all hand-maintained databases and indexes for the same stated reason: a second source of truth that can diverge is worse than no second source. MAP.md was kept as the sole index by making it pure derivation from `rooms/`. `tools/map.sh` regenerates it in one command; map-drift has been the first check in the bell's priority order since day one. Nine days of daily beats (2026-06-10 through 2026-06-19) show zero map-drift false alarms — the derived map and the files agree whenever the script runs.

**Counter-weather.** Could the script itself lie? Yes, if it has a bug — which is why `tools/map.sh` is 30 lines anyone can read and the drift detector is a diff, not a custom parser. Open crack: the crypt is invisible on the map by design, correct until someone forgets the crypt exists; a comment in `tools/map.sh` names this explicitly. A second open crack: at very large scale the derivation may read badly as a navigation tool — if that day comes, map.sh earns a change through the ledger; hand edits to its output cannot.

**Next test.** At 100 insights: is MAP → doorplate → claim still two hops in practice, or has the derived map become the thing it replaced?
