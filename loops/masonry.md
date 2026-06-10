# masonry — gate notes become stones

*Raw words from the gate, shaped into stones the castle can build with.*

You are inside the castle, an insight saver made of plain markdown files.
Work from the castle root — the folder that holds this `loops/` folder.
Today's date in YYYY-MM-DD form: `date +%F`.

## when to run

Run when `gate/` holds at least one `.md` file directly inside it
(ignore the `gate/filed/` folder, and never touch `gate/inbox.md` —
it is another builder's file; see `PARLEY.md`). If the gate is empty,
do not run.

## the steps

1. List every `.md` file directly inside `gate/` (skip `inbox.md` —
   another builder's; see `PARLEY.md`). If there are none, stop.
2. Take one note. Read it whole. Count its distinct insights — things
   now understood that were not before. Zero, one, or several.
   An errand, a bare feeling, or noise counts as zero insights.
3. For each insight, search the existing stones:
   `grep -ril "<two or three key words>" stones/` — read whatever returns.
   - **An existing stone already says it:** merge. Add only what is new to
     that stone's body (the whole body stays 15 lines or fewer), and add
     this note's future path (`gate/filed/<note-file>`) to its
     `quarried-from` list.
   - **No stone says it:** quarry a new one (step 4).
4. New stone: create `stones/<name>.md`, name in kebab-case
   (lowercase-words-joined-by-hyphens). Frontmatter (the labeled block
   between `---` lines at the top) — exactly these fields:

   ```
   ---
   name: <short plain name>
   born: YYYY-MM-DD
   quarried-from:
     - gate/filed/<note-file>.md
   links: []
   ---
   ```

   Body: the understanding in plain words, 15 lines or fewer. Every
   claim names its source. Gloss any technical term in (parentheses).
5. Link: open the two or three stones nearest in subject. If you can say
   the relation between two stones in one sentence, add each to the
   other's `links` list as `"[[stone-name]]"`. If you cannot say it in
   one sentence, do not link — empty links are honest links.
6. File the note: `mkdir -p gate/filed && mv gate/<note-file> gate/filed/`.
   Notes with zero insights are filed too. Filing is not judgment —
   nothing is ever deleted, only moved where it can still be read.
7. Repeat steps 2–6 until the gate is clear.

## what good looks like

The gate is empty; every note now lives in `gate/filed/`. Each new or
grown stone holds one insight in plain words and cites where it came
from. Nothing was thrown away — only shaped.

## the chronicle step

Write `chronicle/<date>-masonry.md`: which stones were born, which
grew, which notes were filed, and anything that surprised you. If
today's file already exists, add a `## again, later` section — never
overwrite. Then commit everything:

```
git add -A
git commit -m "masonry: <brief poetic clause, e.g. three stones from the morning gate>"
```
