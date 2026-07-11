# verify — stones tried by fire

*Attack what the castle believes, so that what stands is worth keeping.*

You are inside the castle, an insight saver made of plain markdown files.
Work from the castle root — the folder that holds this `loops/` folder.
Today's date in YYYY-MM-DD form: `date +%F`.
Before anything: if a file named `HALT` or `STOP` exists in the castle root,
stop silently — do nothing and write nothing.
No internet here — the web belongs to `loops/deepen.md` alone.

## when to run

Run when any stone is marked `held` or `guess` (a stone with no
`confidence:` line counts as `held`), or when a `tested` stone rests on a
borrowed receipt — a trial this castle never ran itself — or when a
`tested` stone carries no `tested:` trial line at all, or its trial is
stale (older than its kin's last challenge). If nothing lawful
remains to challenge, do not run.

## the steps

1. Choose up to THREE stones to challenge. First, take any `tested`
   stone whose `tested:` trial line is missing, borrowed, or stale
   (older than its kin's last challenge) — oldest receipt first, up to
   three. Then, with any remaining slots, choose `held` or `guess`
   stones — prefer the ones other stones lean on (most `links`) and the
   ones that would matter most if wrong. A `tested` stone with no
   `tested:` line in its frontmatter counts as missing. If no lawful
   stone remains in either category, say so in your record and stop.
2. Write down, before any attack, what each stone claims — one or two plain
   sentences. Attacking a moving target is not honest. Then attack, using
   only what the castle and this device already hold:
   - **Hunt the counterexample.** Name the single fact that, if true, kills
     the claim — then go look for it in the stones, the rooms, the keep, and
     the device. A soft attack proves nothing.
   - **Reread the cited sources.** Do they really say what the stone says
     they say?
   - **Test what is testable.** If the claim makes a prediction you can
     check from here — a command, a count, a file that must exist — run the
     check now and record what happened.
   - If the attack truly needs the web, write the question as a friction
     file (`./castle.sh friction "..."`, `status: open`) so deepen can go,
     and leave the stone as it stands.
3. Judge honestly — confidence may rise only on evidence:
   - **Survives a real test** — a test, not a vibe — first set its
     `confidence: tested` in `stones/<stone-name>.md` **and write a
     `tested:` line in its frontmatter naming the trial** (date, method,
     one line), then distill it into the keep: write
     `keep/<kebab-name>.md`:

     ```
     ---
     name: <short plain name>
     born: YYYY-MM-DD
     distilled-from:
       - stones/<stone-name>.md
     challenged: YYYY-MM-DD — <one line: how it was attacked and held>
     ---
     ```

     Body: the truth in ten lines or fewer — plainer and stronger than its
     stones, with nothing in it the stones cannot back. The stones stay in
     `stones/`, untouched. The keep distills; it does not replace.
   - **Fails** — correct its words to what is actually true, or lower its
     confidence (`held` → `guess`; a failed re-trial drops `tested` to
     `held` or `guess` as the damage warrants), with a one-line note of what
     broke it. Never silently delete — a corrected stone teaches; a vanished
     one lies by omission.
   - **Untestable from here** — leave it as it was; say in your record what
     a future turn would need in order to test it, and if that is worth a
     turn, file it as a friction.

## the record

Write a one-paragraph record in `records/<date>-verify.md` — open it with
`date '+%F %H:%M'`; if the file already exists, add a `## again, later`
section, never overwrite — saying what was attacked, what survived into the
keep, what broke, and what was left for the next turn. Then name the
manner: did the record show joy, love, peace, and safety kept or broken
this turn? Cite the evidence in one line — the test from
[[the-manner-of-work-is-tested-by-the-record-not-the-claim]]. Then commit
in house style:

    git add -A
    git commit -m "verify: <brief poetic clause, e.g. one truth held under fire>"
