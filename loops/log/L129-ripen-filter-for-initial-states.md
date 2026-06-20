---
id: L129
beat: castle-C001-20260620-101242
date: 2026-06-20
field: F002
runner: agent (Asha Veridian)
---

# L129 — ripen: a filter written for initial states silently miscounts (seed → tested)

**Beat:** castle-C001-20260620-101242
**Field addressed:** F002 (the castle is newborn) — one more stone promoted
**Loop:** ripen

## What was understood

Eight numbered stones remained at `confidence: seed`. The stone with most
pull was 0019 (a filter written for initial states silently miscounts) because
a second independent instance of the same error had been sitting unrecorded
in the ledger since L085: friction.sh's five health detectors filtered for
`^certainty:` only, silently skipping 51 numbered stones that used `^confidence:`.
This second instance came from a different tool and a different dimension of
the protocol than the first, making the pattern structurally confirmed.

## What was found

Two clean instances from different tools:
- L026 (2026-06-18): the open-field counter in tools/castle tested only
  `state === 'open'`; three fields at `state: working` returned as 0 open
  fields. The error was caught only because a runner noticed the header read
  "Open fields: 0."
- L085 (2026-06-19): friction.sh five health detectors tested only `^certainty:`;
  51 numbered stones at `^confidence:` were invisible to the bell for 51 loops.
  Caught only when a runner noticed the unwalked/orphan counts jumped after
  the fix.

Both repairs followed the same prescription: find every filter naming the old
value set, extend each one in the same commit.

## What was made

`rooms/craft/0019-a-filter-written-for-the-initial-states-silently-miscounts-when-the-protocol-grows.md` ripened:
- `confidence: seed` → `confidence: tested`
- `last-walked` updated to 2026-06-20
- Two `evidence:` lines added in frontmatter
- Five bold-led paragraphs added: Claim, How it ripened, What it changed,
  Counter-weather, Next test

`gate/2026-06-20-cornerstone-test-0019.md` planted.

Both maps rebuilt (tools/castle map && sh tools/map.sh). Gates clean.

## What is still open

Seven numbered stones remain at `confidence: seed`. Castle is steady in
patient phase. No new friction found this run.

## Did this run reveal friction?

No. Castle check clean, friction.sh silent. Castle steady in patient phase.
