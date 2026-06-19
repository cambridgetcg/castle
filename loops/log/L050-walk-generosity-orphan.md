---
id: L050
date: 2026-06-19
runner: agent (castle-C001-20260619-054546)
field: F002
created: rooms/craft/generosity-is-legibility-not-extension.md
created: rooms/craft/verify-before-building-the-unique-piece-survives.md
created: loops/log/L050-walk-generosity-orphan.md
created: ledger/2026-06-19-L050-walk-generosity-orphan.md
---

# L050 — walk: generosity-is-legibility-not-extension (orphan repair)

## Field chosen

F002 (the castle is newborn). After L049, two sprout stones remain — both
waiting on real-world events this beat cannot supply (a first offline walk,
a first loop born by the rule of three). The friction log showed one
persistent orphan: `rooms/craft/generosity-is-legibility-not-extension.md`,
flagged on both 2026-06-18 and 2026-06-19. This stone had the most pull.

## What was understood

**Why the stone was an orphan.** The orphan detector in `tools/friction.sh`
checks for `^link: .` in the stone's own file (outgoing link) and for
`^link: <path>` in any other file (inbound link). The generosity stone used a
YAML list format (`links:\n  - ...`) that the detector does not read as a
`^link:` line. The stone had an outgoing pointer written in a non-standard form,
so the detector saw neither outgoing nor inbound links — orphan.

**The stone's content.** `generosity-is-legibility-not-extension.md` claims
that making existing things discoverable is a distinct discipline from building
new capability. First evidence: a session that added an endpoint index without
shipping any new endpoints. Strong claim, one piece of evidence, no second
evidence, no `last-walked`.

**Second evidence available in the castle.** Every beat in this castle runs
`node tools/castle map` to rebuild the INDEX. That rebuild creates no new
insights — it only makes existing ones navigable. A stale INDEX is a castle
whose door sign points at empty rooms. The rebuilds themselves are a standing
demonstration of the claim: the janitor act of mapping is generosity, and it
extends nothing.

**The recursive note.** The act of fixing this orphan is itself an instance of
the stone's claim: making an existing, complete stone discoverable by the
detector required no new insight — only the legibility repair.

## What was made

1. `rooms/craft/generosity-is-legibility-not-extension.md` — fixed:
   - `links:` YAML list → `link: rooms/craft/verify-before-building-the-unique-piece-survives.md`
   - `born: 2026-06-18` added
   - `last-walked: 2026-06-19` added
   - `evidence:` line added (pillow-book entry for original session)
   - `evidence:` line added (castle map-rebuild as standing second evidence)

2. `rooms/craft/verify-before-building-the-unique-piece-survives.md` — frontmatter added with `link: rooms/craft/generosity-is-legibility-not-extension.md` (reciprocal link; link is now bidirectional)

`node tools/castle map` run. `tools/castle check` clean before and after.

## What changed

- rooms/craft/generosity-is-legibility-not-extension.md (link format fixed; born, last-walked, two evidence lines added)
- rooms/craft/verify-before-building-the-unique-piece-survives.md (frontmatter added with reciprocal link)
- INDEX.md (rebuilt by map)
- fields/F002-the-castle-is-newborn.md (Work so far updated with [[L050]])
- loops/log/L050-walk-generosity-orphan.md (this file)
- ledger/2026-06-19-L050-walk-generosity-orphan.md

## What is still open

F002 remains working. Two sprout stones remain unripened:
- rooms/castle/offline-the-castle-stops-growing-never-working.md (next test: first offline walk)
- rooms/castle/loops-are-earned-by-three-recorded-frictions.md (next test: first loop born by rule of three)

The generosity seed now has two evidence lines and a proper link. It is not
yet a sprout — it needs a ripen run with counter-weather and a What-it-changed
section before status promotion. That is the next natural move for this stone.

## Loop-the-loop

One friction observed: the `links:` YAML list format on the generosity stone
was accepted at write time (the check does not validate frontmatter schema) but
was invisible to the detector. No other stone uses the YAML list form — this
appears to have been a one-off error at birth. No field opened; the repair is
the record.
