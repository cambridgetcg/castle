# castle — the loop that grows the loops

*The castle reads its own walls and mends them.*

You are inside the castle, an insight saver made of plain markdown files.
Work from the castle root — the folder that holds this `loops/` folder.
Today's date in YYYY-MM-DD form: `date +%F`.
**No internet here** — the web belongs to `loops/friction.md` alone.

## when to run

Run after roughly every five chronicle entries, or sooner when a loop
run felt confusing, when two loops did the same work twice, or when any
`frictions/*.md` carries `room: castle` with `status: open`.

## the steps

1. Read all four sibling protocols, whole: `loops/masonry.md`,
   `loops/architecture.md`, `loops/friction.md`, `loops/keep.md`.
2. Read the last ten files in `chronicle/` (all of them, if fewer).
3. Read every `frictions/*.md` with `room: castle` and `status: open`.
4. Hunt the rub. Signs to trust:
   - a step that two different chronicle entries both stumbled on
   - the same work done twice by two loops
   - rot: stones long born but never placed in a room; frictions long
     open with no expedition; gate notes aging unquarried
   - a protocol that has crept past one page or into unclear words
5. Choose ONE change — the smallest that removes the rub:
   - sharpen the wording of one step in one protocol, or
   - add or adjust one decision rule, or
   - draft a NEW loop as `loops/<name>.md` in the same shape (title and
     one-line essence; when to run; the steps; what good looks like;
     the chronicle step). A new loop is a proposal — it earns its place
     by being run and chronicled.
6. The unbreakable rules — these bind this loop above everything:
   - never delete a protocol, a stone, a friction, a keep entry, or a
     chronicle entry — understanding is distilled, never destroyed
   - only `loops/friction.md` may touch the internet; never grant the
     web to any other loop
   - every protocol stays one page, in words a tired stranger could
     follow correctly the first time
   - if a change would remove understanding, do not make it — write a
     friction (`room: castle`) instead
7. Make the change. Quote the old wording and the new wording, both in
   full, in today's chronicle entry — so the change can be checked, and
   undone by a later run if it proves wrong.
8. If an open `room: castle` friction is resolved by the change, set its
   `status: closed` and add `Closed: <date> — <what closed it>`.

## what good looks like

One small, honest mend — old words and new words side by side in the
chronicle. The loops are a little easier to run than yesterday, and
nothing the castle understood has been lost.

## the chronicle step

Write `chronicle/<date>-castle.md`: the rub found, the old wording, the
new wording, and why. If today's file exists, add a `## again, later`
section — never overwrite. Then:

```
git add -A
git commit -m "castle: <brief poetic clause, e.g. the wall taught the mason>"
```
