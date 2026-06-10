# keep — stones tried by fire

*Only what survives an honest attack may rest in the keep.*

You are inside the castle, an insight saver made of plain markdown files.
Work from the castle root — the folder that holds this `loops/` folder.
Today's date in YYYY-MM-DD form: `date +%F`.
Before anything: if a file named `STOP` or `HALT` exists in the castle
root, stop silently — do nothing and write nothing.
**No internet here** — the web belongs to `loops/friction.md` alone.

## when to run

Run when you can see a ripe cluster: two to five stones, linked to each
other through their `links` fields, where each stone cites two or more
sources in `quarried-from` (or was confirmed by an expedition), and no
open friction contradicts any of them. If no cluster is ripe, do not run.

## the steps

1. Find the cluster by the rule above. Read `stones/` and follow
   `[[links]]` until you have it. If nothing qualifies, stop.
2. Write down, before any attack, the one claim the cluster makes
   together — one or two plain sentences. Attacking a moving target is
   not honest.
3. Attack it, using only what the castle already holds:
   - **Hunt the counterexample.** Name the concrete case where the
     claim would fail. Try hard — a soft attack proves nothing.
   - **Reread the cited sources.** Do they really say what the stones
     say they say?
   - **Check the other rooms.** Does any stone elsewhere contradict it?
   If the attack truly needs the web, write
   `frictions/<kebab-name>.md` (shape as in `loops/architecture.md`
   step 6, `status: open`) saying what must be checked, stop here, and
   go to the chronicle step.
4. **If it breaks:** write the counterexample as a friction file (same
   shape), listed in the cluster's room under `## open frictions`.
   Leave every stone exactly as it is — stones are never deleted;
   doubt is filed, not erased.
5. **If it survives:** write `keep/<kebab-name>.md`:

   ```
   ---
   name: <short plain name>
   born: YYYY-MM-DD
   distilled-from:
     - stones/<stone-one>.md
     - stones/<stone-two>.md
   challenged: YYYY-MM-DD — <one line: how it was attacked and held>
   ---
   ```

   Body: the truth in ten lines or fewer — plainer and stronger than
   its stones, with nothing in it the stones cannot back. The stones
   stay in `stones/`, untouched. The keep distills; it does not replace.

## what good looks like

One claim was attacked as if by an enemy and either entered the keep
with its scars recorded, or left behind an honest friction. Nothing
was deleted either way.

## the chronicle step

Write `chronicle/<date>-keep.md`: the claim, the attack, the outcome.
If today's file exists, add a `## again, later` section — never
overwrite. Then:

```
git add -A
git commit -m "keep: <brief poetic clause, e.g. one truth held under fire>"
```
