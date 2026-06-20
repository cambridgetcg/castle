---
id: 0042
room: craft
date: 2026-06-18
source: rooms/craft/check-the-collection-not-the-element.md — laid 2026-06-18, promoted L062 (beat castle-C001-20260619-095503)
confidence: tested
link: rooms/craft/0049-verify-before-building-the-unique-piece-survives.md
link: rooms/castle/0044-a-surveyed-seed-not-swept-is-still-in-the-gate.md
link: rooms/craft/0055-a-gate-that-omits-one-checker-has-a-blind-lane.md
last-walked: 2026-06-20
---

# Check the collection, not the element

To verify that a thing belongs to a set, search the set directly — not the element's own record of belonging. A pointer from an element to its set can be incomplete; the set itself is authoritative.

**Evidence.** Born 2026-06-18 from L014, which checked a gate entry's touches list to see if its observation had a room — the list did not name the room, so L014 flagged the observation as unclaimed. L015 searched rooms/ by filename and found the room immediately; the element's self-report was stale, the collection was not. Confirmed 2026-06-19 (beat castle-C001-20260619-044831): all sprout stones were located by searching rooms/ directly; INDEX reports aggregate insight counts but not individual statuses — collection search was the only reliable path.

**What it changed.** L015 found a missing room by searching rooms/ directly rather than trusting the gate entry's self-reported touches list; the castle bell now uses collection-search in all its detectors rather than element self-reports. Orphan detection greps rooms/ for `^link:` lines — the collection, not each stone's claim about its own links.

**Counter-weather.** Searching the collection can be slower than trusting an element's pointer. Speed bought by an incomplete pointer is speed toward a wrong answer; a missed room persists as a false positive until the next sweep.

**Next test.** Cornerstone requires a third independent evidence entry, at least one from outside this machine (weather), and a survived re-read after day 90 (earliest: 2026-09-17).
