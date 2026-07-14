---
name: the-castle
born: 2026-06-10
quarried-from:
  - /Users/you/love-repos/legible-standard/PRINCIPLES.md
  - the kingdom-standard (github.com/cambridgetcg/kingdom-standard)
  - the keeper's order of 2026-06-10 (reduce process, increase trust)
links:
  - "[[the-loop-that-grows-loops]]"
  - "[[process-is-not-trust]]"
  - "[[one-truth-one-place]]"
---

# CASTLE.md — the castle understanding itself

**Ten seconds:** The castle saves understanding as words. Raw notes enter at
the gate, become stones, are placed into rooms, challenged, and — if they
survive — kept. Four loops do the work, one recorded turn at a time. Nothing
is ever deleted; history moves, whole, to `records/history/`.

## The vocabulary — one word per thing

- **gate/** — raw notes, dated, unjudged, waiting to be worded.
- **stones/** — one file, one insight, fifteen lines or fewer; frontmatter
  carries `name`, `born`, `confidence` (`tested | held | guess` — every
  claim wears its certainty, and only evidence may raise it), `quarried-from`
  (the source), and `links` to kin stones as `[[claim-slug]]`. A claim that
  forgets its source cannot be re-checked; a stone with no confidence line
  counts as `held` until tried.
- **rooms/** — one directory per field of understanding, each with a
  `ROOM.md` linking its stones and naming its open frictions. Rooms are few
  and broad: file into an existing room before founding a new one.
- **frictions/** — named gaps, one file each: what rubs, why it matters,
  what was tried, what done looks like. Status `open` or `closed`; closed
  frictions keep their files. A closed friction carries its reason:
  `Answered`, `Withdrawn: <reason>`, `Reframed: <new friction>`, or
  `Done — keeper work: <what waits>`. Nothing is deleted.
- **expeditions/** — the castle's only door to the internet. Each expedition
  carries its receipts; what it learns comes home as stones with
  `quarried-from: web:<url>`.
- **keep/** — distilled truths that survived deliberate challenge, each
  citing its trial. The stone stays where it lives; the keep entry confesses
  it is a distillation and says from what.
- **records/** — the memory. One record per loop turn, append-only, never
  edited. The full past — earlier designs, rulings, retired protocols —
  stands whole in `records/history/`, indexed there.

## The four loops

Each lives in `loops/` as a protocol a human or a Claude can walk, step by
step. Each run ends by writing a record.

1. **capture** — gate notes → stones. Word the thought, cite its source,
   link its kin, file the original note in `gate/filed/`.
2. **deepen** — one open friction per turn → one expedition → stones.
   Local realm first, internet last, provenance always.
3. **verify** — attack stones on purpose; promote survivors into `keep/`,
   citing the trial. Only evidence raises confidence.
4. **architect** — place stones into rooms, found rooms when stones wait,
   and mend the loops themselves: one change per turn, recorded, with the
   friction that proved it necessary. Within the warden's charter it may
   birth new loops and promote them — but never raise the cap.

## The laws

- **One truth, one place.** Each insight lives in exactly one file; the keep
  distills, never duplicates.
- **Every claim cites its source.** Plain words, checkable by a stranger,
  nothing fake, nothing decorative that lies.
- **Nothing is deleted.** Loops distill; originals stay or move whole to
  `records/history/`. What another hand made is never erased.
- **The record remembers.** Every run recorded, records append-only.
- **The smallest process that keeps the promise.** Process that does not
  serve connection is friction in uniform; reduce it ([[process-is-not-trust]]).
- **STOP and HALT are absolute.** Either file in the root stands everything
  down, silently, until the keeper lifts it.
- **The cap is constitutional.** The warden (`warden.sh` + `warden.json`)
  runs loops unattended within a daily cap; only the keeper's hand —
  Yu/Asha — may raise it.

The one tool is `castle.sh`: it counts, it captures, it names frictions, it
never touches the network, and it never runs a loop unasked — a run costs
money, and that is the keeper's choice to make.
