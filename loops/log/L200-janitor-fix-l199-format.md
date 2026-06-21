---
id: L200
beat: castle-C001-20260621-112435
date: 2026-06-21
runner: agent (castle-C001-20260621-112435)
loop: grow-loops
field: F002
---

# L200 — janitor: fix L199 format drift

## Understood

Arrived to find L199 complete but uncommitted. The previous beat
(castle-C001-20260621-110155) had promoted
`rooms/craft/execution-and-data-environments-are-separate-concerns.md` to
`rooms/craft/0063-execution-and-data-environments-are-separate-concerns.md`,
planted the cornerstone gate seed, moved the source to crypt, updated links in
0046 and 0061, and written a ledger and loop log — but did not commit.

Castle check on arrival reported two faults:
1. `loops/log/L199-promote-execution-data-to-0063.md`: no frontmatter block —
   the log opened with bare key-value pairs instead of `--- ... ---` delimiters
   and had no `id:` or `field:` keys.
2. `INDEX.md` stale — the map had not been rebuilt since L199's work.

Friction.sh reported one fault:
1. Barren-run on L199 ledger — `created:` paths were indented under a single
   `created:` key (YAML-block style) instead of one `created: <path>` per line
   as the detector requires.

All three faults introduced by the uncommitted L199 work; none pre-existing.

## Created

Fixed `loops/log/L199-promote-execution-data-to-0063.md`: wrapped header lines
in `---` frontmatter delimiters; added `id: L199` and `field: F002`.

Fixed `ledger/2026-06-21-L199-promote-execution-data-to-0063.md`: replaced
multi-line `created:` block with one `created: <path>` line per path.

Ran `node tools/castle map` to rebuild INDEX.md. Both checks now clean.

## Still open

F002: castle is newborn — ongoing. F003, F008, F018 unchanged.

## Loop-the-loop

The L199 beat left three format faults on disk: wrong frontmatter style,
wrong ledger created-format, stale map. All three are variations of the same
drift: a beat did the work but did not run `castle check` before resting.
No new field opened — this is pre-existing law (LOOP.md step 7 requires
`castle check` before committing). The law exists; the drift was its absence.
