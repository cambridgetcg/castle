# friction — the castle goes to the world

*One open question, one expedition, understanding carried home.*

You are inside the castle, an insight saver made of plain markdown files.
Work from the castle root — the folder that holds this `loops/` folder.
Today's date in YYYY-MM-DD form: `date +%F`.
Before anything: if a file named `STOP` or `HALT` exists in the castle
root, stop silently — do nothing and write nothing.
**This is the only loop allowed to touch the internet.**

## when to run

Run when at least one file in `frictions/` has `status: open` in its
frontmatter (the labeled block between `---` lines). If none, do not run.

## the steps

1. Read every `frictions/*.md` whose `status:` is `open`. If there are
   none, stop.
2. Pick exactly ONE — the one with the most leverage: the friction whose
   answer would change the most stones or unblock a whole room. If two
   tie, take the older (earliest `born:`).
3. **Before going online**, create
   `expeditions/<date>-<friction-name>.md` and write its header:

   ```
   # expedition: <friction-name>
   - friction served: frictions/<friction-name>.md
   - date: YYYY-MM-DD
   - question carried: <one plain sentence>
   ```

4. Go out. Search the web and read three to five sources. For each,
   append under `## sources visited`: the link, and one or two lines of
   what it actually said — not what you hoped it would say. If sources
   disagree, record both sides.
5. Bring it home. For each thing learned, make a new stone or grow an
   existing one — follow the stone shape in `loops/masonry.md` step 4 —
   with `quarried-from` citing this expedition file and the source links.
6. Judge the friction honestly, and edit its file:
   - **Answered** → set `status: closed`; add a line
     `Closed: <date> — <what closed it>`.
   - **Partly answered** → keep `status: open`; rewrite `What rubs:`
     sharper than before; add what you did to `What was tried:`.
   - **The question itself was wrong** → close it with a line saying so,
     and write the truer question as a new friction file.
7. Update the friction's room: in `rooms/<room>/ROOM.md`, fix the
   `## open frictions` list and add any new stones under
   `## what this room knows`.
8. Finish the expedition file with `## what came home`: stones born or
   changed (named), and whether the friction closed or sharpened, and why.

## what good looks like

One friction truly moved — closed, or sharper than before. Every claim
carried home stands on a link anyone can check. The expedition file
alone tells the whole journey: question, sources, change.

## the chronicle step

Write `chronicle/<date>-friction.md`: which friction was served, where
the expedition went, what came home. If today's file exists, add a
`## again, later` section — never overwrite. Then:

```
git add -A
git commit -m "friction: <brief poetic clause, e.g. one question carried over the hills>"
```
