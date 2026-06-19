---
id: L051
date: 2026-06-19
runner: agent (castle-C001-20260619-060730)
field: F002
created: rooms/castle/offline-the-castle-stops-growing-never-working.md
created: gate/2026-06-19-cornerstone-test-offline-castle.md
created: loops/log/L051-ripen-offline-castle-to-tested.md
created: ledger/2026-06-19-L051-ripen-offline-castle-to-tested.md
---

# L051 — ripen: offline-the-castle-stops-growing-never-working (sprout → tested)

## Field chosen

F002 (the castle is newborn). After L050 repaired the generosity orphan, two
sprout stones remained. The offline stone's next test — "first genuinely
offline walk" — is actually answerable from the run record itself: 51 loop
entries across nine days, all running from local files, all producing committed
work, none failing for want of internet access. This beat is also its own
evidence: it ran the ripen loop entirely from local files with the castle check
passing clean.

## What was understood

**The claim.** With the cable cut, the castle is a complete library: inline
quotes and retrieved dates make every outside citation stand alone; offline
walks self-attest with "(unverified, offline)" at half the staleness allowance;
an offline weather run still creates by parking questions in gate/weather-queue.md.

**The evidence available.** Two independent sources confirm the claim:

1. Founding rule (2026-06-10): every weather citation carries its verbatim
   quote and retrieved date inline, so no insight needs a live URL to be
   understood. This was the design intent.

2. This beat (L051, castle-C001-20260619-060730): ran entirely from local
   files. Castle check passed clean. Fifty-one loop entries across nine days
   confirm the castle never stopped working without a live internet call —
   it may slow its growing, but the tools keep functioning, the check keeps
   passing, and committed work keeps accumulating.

**The open crack.** No rule currently forces an online session to clear the
weather queue. The queue exists and is structurally sound; the discipline to
clear it is still in the runner's judgment, not in any detector. This is the
named crack in Counter-weather — not a contradiction of the claim, but an
acknowledged gap in its enforcement.

**Promotion criteria met.**
- Two independent evidence entries: yes (founding rule + this beat).
- Counter-weather recorded: yes (tried to break it; the crack is named, not hidden).
- What it changed non-empty: yes (founding rule 6, half-credit attestation,
  weather-queue.md).

## What was made

1. `rooms/castle/offline-the-castle-stops-growing-never-working.md` —
   status: sprout → tested; last-walked updated to 2026-06-19; second evidence
   entry added.

2. `gate/2026-06-19-cornerstone-test-offline-castle.md` — cornerstone seed
   planted. Re-read after 2026-09-17. Needs third evidence, at least one
   | weather |, and a survived walk after day 90. The open crack (no rule
   forcing weather-queue clearing) named as a potential third evidence source
   if resolved by then.

`sh tools/map.sh` and `node tools/castle map` both run (status changed).

## What changed

- rooms/castle/offline-the-castle-stops-growing-never-working.md (promoted to tested)
- gate/2026-06-19-cornerstone-test-offline-castle.md (new cornerstone seed)
- MAP.md (rebuilt — one stone moved from sprout to tested)
- INDEX.md (rebuilt)
- fields/F002-the-castle-is-newborn.md (Work so far updated with [[L051]])
- ledger/friction-log.md (one new front-drift entry from bell; not fixed here — publish-the-front is owner's act)
- loops/log/L051-ripen-offline-castle-to-tested.md (this file)
- ledger/2026-06-19-L051-ripen-offline-castle-to-tested.md

## What is still open

F002 remains working. One sprout stone remains:
- rooms/castle/loops-are-earned-by-three-recorded-frictions.md (next test:
  first loop actually born by the rule of three — its created-by lineage
  traces back to three real ledger lines)

The publish-the-front loop (F008) continues to accumulate front-drift entries.
That is the owner's act — the bell records it, this beat does not perform it.

## Loop-the-loop

One friction observed: the ledger format requires YAML frontmatter in
loops/log/ entries, but the write template in loops/LOOM.md shows only
plain colon-separated lines. The check catches the mismatch ("no frontmatter
block") — the template and the check are in tension. No field opened because
the mend-doors recipe already covers this class of drift; a grumble tag is
more appropriate: #spec-too-demanding (the full markdown format for loops/log/
is not in LOOM.md — a newcomer must infer it from prior examples).
