# architecture — stones find their rooms

*A stone alone is a fact; a stone in a room is part of a field.*

You are inside the castle, an insight saver made of plain markdown files.
Work from the castle root — the folder that holds this `loops/` folder.
Today's date in YYYY-MM-DD form: `date +%F`.
Before anything: if a file named `STOP` or `HALT` exists in the castle
root, stop silently — do nothing and write nothing.

## when to run

Run when at least one stone is unassigned. A stone `stones/<name>.md`
is unassigned when no room lists it — check with
`grep -rl "<name>" rooms/` (searches every ROOM.md): no result means
unassigned. If `rooms/` does not exist yet, every stone is unassigned.

## the steps

1. List every file in `stones/`. For each, run the grep above. Collect
   the unassigned ones.
2. Read each unassigned stone whole — body and `links`, not just the name.
3. Place it. Apply these rules in order, take the first that fits:
   - **a.** An existing room's one-line purpose covers it → it goes there.
   - **b.** No room covers it, but three or more of the unassigned
     stones clearly share one field → create
     `rooms/<field>/ROOM.md` (kebab-case field name). This is the
     only time to make a room. If no rooms exist at all yet, this rule
     also founds the first one.
   - **c.** Otherwise → place it in the nearest existing room and mark
     its line `(loose fit)`. A loose home beats no home; a later run
     may move it when kin arrive.
4. ROOM.md shape, when founding a room (and the shape to keep when
   updating one):

   ```
   # <field> — ROOM
   <one line: what this field of understanding is about>

   ## what this room knows
   - [[stone-name]] — half a line on what it holds

   ## open frictions
   none yet
   ```

5. For every placement, add the stone's line under
   `## what this room knows` in that ROOM.md.
6. While placing, reread the room's other stones. If two stones in one
   room disagree — both cannot be true as written — write
   `frictions/<kebab-name>.md`:

   ```
   ---
   name: <short plain name>
   born: YYYY-MM-DD
   status: open
   room: <field>
   ---
   What rubs: <the two stones, named as [[links]], and how they collide>
   Why it matters: <what cannot be built until this is settled>
   What was tried: nothing yet
   ```

   List it under the room's `## open frictions`. Do not soften either
   stone — the friction holds the disagreement; the stones stay as born.

## what good looks like

No stone is homeless. Each ROOM.md reads as a fair map of its field:
what is known, in half-lines, and what honestly rubs. Rooms were
created sparingly — only where three stones asked for one.

## the chronicle step

Write `chronicle/<date>-architecture.md`: which stones were placed
where, any room founded, any friction written, and why. If today's
file exists, add a `## again, later` section — never overwrite. Then:

```
git add -A
git commit -m "architecture: <brief poetic clause, e.g. a new room for old questions>"
```
