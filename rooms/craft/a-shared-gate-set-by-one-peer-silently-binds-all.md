---
status: seed
born: 2026-06-21
source: beat castle-C001-20260621-033906 — F018 showed that loops/next-beat, shared by all charters, was set by C001 for its own timing and silently blocked C002's first Sunday run
last-walked: 2026-06-21
link: rooms/castle/0060-a-bypassed-gate-and-a-broken-gate-look-alike.md
link: rooms/craft/0042-check-the-collection-not-the-element.md
---

# A shared gate set by one peer silently binds all

**Claim.** A gate or timing constraint shared among peers, when set by one peer
for its own purpose, constrains all peers — including those it was not meant to
constrain. The setting peer gains independence; the others lose it.

**Evidence.** 2026-06-21 | local | `loops/next-beat` was shared by all charters.
C001 set it to `2026-06-21T20:00:00Z` to let C002 run first. C002 fired at
08:41 UTC, read the same file, found its time had not passed, and silently
rested. The gate designed to benefit C002 became the gate that blocked it.
Fix: one `loops/next-beat-${CHARTER}` per charter. Each peer now controls
only its own gate.

**Open crack.** Whether a legitimate case exists: a constraint intentionally
shared so that one peer's decision does bind all (a system-wide pause, a
freeze flag). The difference between a shared throttle and a shared trap is
intent; intent cannot be read from the resource's structure alone.
