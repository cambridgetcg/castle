# CASTLE.md — two designs share this root, both whole (see PARLEY.md)

<!-- ============================================================ -->
<!-- DESIGN A — the Castle of Understanding (kingdom-standard)    -->
<!-- commissioned 2026-06-09; do not remove: another's stones (L1) -->
<!-- ============================================================ -->

# CASTLE.md — the castle understanding itself

**Ten seconds:** Insights enter at the gate as raw words, are worded properly as
stones, filed in halls, challenged, and — if they survive — kept. Loops do the
work, one turn at a time. Every turn is recorded. Nothing is silently destroyed.

## WHAT

The castle saves understanding as words. Not bookmarks, not embeddings, not a
database — sentences a person can read, doubt, and check. A thought you cannot
word, you do not yet understand; the castle forces the wording. It connects what
it holds (kin links), names what it lacks (friction), and grows by small honest
turns of work, native to this device, reaching the web only when the local realm
runs dry.

## THE STONES

Every insight is one stone, in exactly this shape:

```markdown
## <claim in one sentence>
- words: <the understanding, 1–5 plain sentences>
- confidence: tested | held | guess
- born: <date> · from: <device | web:<url> | person:<name>>
- kin: <links to related insights as [[claim-slug]], or 'none yet'>
```

Why each field exists:

- **The claim heading** — one sentence, so the insight can be challenged. A claim
  that needs two sentences is two claims. Its slug (lowercased, hyphenated) is
  how kin links find it.
- **words** — the understanding itself, plain enough to be wrong in public.
  One to five sentences; past five, it is an essay hiding from a test.
- **confidence** — every claim carries its certainty (law T2). `tested` means it
  survived a real trial. `held` means believed with reason, untried. `guess`
  means an honest hunch. There is no fourth label and no unlabeled claim.
- **born · from** — provenance (law P5). When it arrived and where it came from:
  this device, the web (with the exact URL), or a named person. A claim that
  forgets its source cannot be re-checked.
- **kin** — understanding grows by connection. Links as `[[claim-slug]]`, or
  `none yet` said honestly. Orphan stones are friction waiting to be named.

## THE ROOMS

- **gate/** — `inbox.md`. Raw captures, dated, unjudged, waiting for the capture
  loop to word them.
- **halls/<field>/** — one directory per field of understanding, each holding
  `insights.md` (the stones of that field) and `friction.md` (its open problems).
  Halls are few and broad (law W6): prefer filing into an existing hall over
  founding a new one.
- **keep/** — `keep.md`, the sanctum. Copies of insights that survived challenge,
  each citing its trial. The original stays in its hall (law W1: the hall is the
  one place of truth; the keep copy confesses it is a copy and cites both source
  and trial).
- **loops/** — `LOOPS.md` the registry, and one contract file per loop. The
  workers of the castle.
- **records/** — the chronicle. One record per loop turn, append-only (laws T4,
  S4). The record remembers so no one's memory has to.

Friction is written in `friction.md` in exactly this shape:

```markdown
## <the problem or question, one sentence>
- why it matters: <one sentence>
- better would be: <one sentence>
- status: open | working | answered → [[insight-slug]]
```

## THE LAWS

Inherited from the kingdom-standard
([github.com/cambridgetcg/kingdom-standard](https://github.com/cambridgetcg/kingdom-standard)),
cited by law ID:

- **T2 — Claim only what you can back, and attach your confidence.** Every stone
  carries `tested | held | guess`. Verification may raise a label; only evidence
  may, and the trial is cited.
- **W1 — Record each fact in exactly one place.** One insight, one hall. The
  keep holds citing copies, never rival versions. Duplicates are merged by the
  loops, with the merge recorded.
- **T4 / S4 — Let the record remember; keep history append-only.** Records are
  never edited or deleted. Insights are corrected by changing their words or
  lowering their confidence, with the change recorded — never silently removed.
- **P5 — Keep the source of truth with the thing it describes.** Everything
  web-fed carries `from: web:<url>` on the stone itself, not in a footnote
  elsewhere.
- **L1 — Create freely, but never destroy what you did not make.** Loops append
  and promote; they do not delete. What another hand made is moved or archived,
  never erased (this very file keeps that law: the second design below stands
  whole).
- **S6 — Honor the kill-switch: stop and wait.** A file named `HALT` in the
  castle root stops everything. No loop reads, writes, or reasons past it.
  HALT is sacred.

## HOW THE CASTLE CHANGES

The constitution of self-modification, after law L6 (*let the constitution win,
and amend it only on proven failure*):

1. **Only the architect loop may change loops or this document.** capture,
   deepen, and verify work the stones; they never touch contracts or CASTLE.md.
2. **Every change is recorded.** The architect writes to
   `records/<date>-architect.md` exactly what changed and why: the friction
   found, the proof it was real (a confused runner, a missing room, a law gap),
   and why the fix is smaller than the problem.
3. **One change per turn.** The architect mends one thing, records it, stops.
4. **The inherited laws are not the castle's to repeal.** The architect may add
   castle law; it may not remove or weaken what the kingdom-standard gave.
5. **New loops are born the same way.** When records prove a new kind of loop is
   clearly necessary, the architect drafts its contract, registers it in
   `LOOPS.md`, and records the reasoning. Creation loops expand through creation
   loops — but always through this one door, on the record, never past HALT.

<!-- ============================================================ -->
<!-- DESIGN B — 城, the five-loop castle (legible standard)        -->
<!-- commissioned 2026-06-10; do not remove: another's stones      -->
<!-- ============================================================ -->

---
name: the-castle
born: 2026-06-10
quarried-from:
  - /Users/you/love-repos/legible-standard/PRINCIPLES.md
  - /Users/you/love-repos/ai-love/design/VISION.md
  - the conversation that asked for an insight saver (2026-06-10)
links:
  - "[[the-loop-that-grows-loops]]"
---

The castle is a place where understanding builds up through words.
Raw notes enter at the gate, unjudged. Masonry shapes them into stones —
one file, one insight, fifteen lines or fewer, every claim citing its
source. Architecture places stones into rooms; a room is one field of
understanding. Where a room's stones rub against each other, the gap
gets a name — a friction — and frictions send expeditions out, the
castle's only door to the internet; expeditions come home as stones.
Stones that keep proving true are attacked on purpose; only what
survives is distilled into the keep. Nothing is ever deleted —
originals stay; understanding only distills upward. Every loop-run is
chronicled, so the process itself stays legible (readable and checkable
by anyone). Five loops run this castle: masonry, architecture,
friction, keep, and castle — the loop that grows the loops. A human or
a Claude can walk any of them, step by step. The one tool is castle.sh:
it counts, it captures, and it never touches the network.

<!-- ============================================================ -->
<!-- appended ruling note — from the custodian, 2026-06-10         -->
<!-- ============================================================ -->

*The custodian has ruled (PARLEY.md, "the custodian's ruling —
2026-06-10"): one castle, two designs — both texts above stand whole.
The warden (warden.sh + warden.json) is the one heart for both designs'
loops; the daily cap stays 3 until the keeper's own hand raises it. The
two-builders friction is closed. See records/2026-06-10-the-ruling.md.*
