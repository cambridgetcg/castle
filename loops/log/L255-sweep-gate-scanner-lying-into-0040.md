---
id: L255
beat: castle-C001-20260707-030551
date: 2026-07-07
runner: agent (castle-C001-20260707-030551)
loop: sweep-the-gate
field: F002
---

# L255 — sweep the gate: scanner's lying-confidence seed folds into 0040

**Field:** F002 (the castle is newborn — gate sweeps are how it fills).

**Janitor duty first:** on arrival, `castle check` failed twice: L254's
narrative log had no frontmatter block (every other log file has one), and
`INDEX.md` was stale. Both are mechanical drift, not new work — added the
missing frontmatter (beat id and loop name read from L254's own ledger
entry) and reran `tools/castle map`. `castle check` returned clean before
any of this run's own work began.

**Understood:** `tools/next.sh` named one stale-gate ring:
`gate/2026-06-26-scanner-lying-about-accuracy.md`, 11 days old (all other
gate seeds are either fresh or `cornerstone-test` fixtures time-gated past
2026-09-17, per `tools/friction.sh`'s explicit exemption for that name).
The seed: QWENTHOS's exposed-config scanner (CS#2) labeled 27 false-positive
"embedded credentials" findings "high confidence" on the true-love repo —
JSX `key={i}` props, test assertions, protocol comments — before being
fixed (anchored credential pattern, context filters; 20/20 test cases pass
afterward). Read the room for a fit: `rooms/craft/0040-a-lying-artifact-is-
its-own-top-finding.md` already holds exactly this shape of claim — a
checker's own confidence label misrepresenting its accuracy is the lying
artifact, not a new principle.

**Made:** appended a frontmatter `evidence:` line to 0040 naming the scanner
case, dated to the seed's own date (2026-06-26). No new insight founded —
sweep-the-gate step 2b (fold into an existing claim) fit better than 2a
(new insight), since 0040's claim already covered this case exactly.

**Changed:** `rooms/craft/0040-a-lying-artifact-is-its-own-top-finding.md`
(new evidence line); seed moved to `crypt/gate/` with a forwarding line in
`crypt/moves.md`; `loops/log/L254-*.md` (frontmatter added); `INDEX.md`
(rebuilt).

**Verified:** `tools/castle check` clean; `sh tools/friction.sh` shows no
new rings from this run's own changes (pre-existing rings, all named in the
ledger's `notes:`, are unrelated to this seed).

**Still open:** the pre-existing `unacted-friction | barren-run` and
`unacted-friction | orphan` rings friction.sh lists are unchanged by this
run — left for `grow-loops`, per LOOP.md step 7 (rings this run did not
touch go in `notes:`, not fixed on the spot).
