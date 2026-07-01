2026-07-01 03:15

One friction closed; no protocol change needed.

**Friction closed:** `four-loops-three-beats — the watch starves its last`
(room: castle, born 2026-06-11). The friction asked for a fairer picker in
warden.sh — least-recently-run rotation — so no loop deterministically
starves while demand exceeds the cap. Option (b) shipped in commit a3ca2f7
(2026-06-30): `next_due_loop` was rewritten from first-in-charter-order to
least-recently-run rotation. The picker now sorts due loops by oldest
last-run timestamp. Verified by the 2026-06-30 run log: deepen and verify
both received beats on the same day for the first time. The friction was
left `open` after the fix — the castle didn't know its own repair worked.
This turn closed it with a dated closure note citing the commit and the
evidence.

**Stones homed:** all 20 stones are already roomed — no homeless stones
found. The last architect run (2026-06-30, by hand in a QWENTHOS heartbeat)
homed the final three.

**No protocol change made.** The four protocols read clean. The two
remaining open frictions (`the-standard-is-private`, room: trust; and the
five open frictions in rooms/building and rooms/trust) are all outside the
architect's one-change scope this turn — they serve the keeper's hand, not
the castle's walls. An unneeded change is damage.

**Note on the warden:** the architect loop has not successfully run via
`warden.sh` since 2026-06-11. The `claude` CLI the warden invokes returns
model errors (`claude-fable-5` does not exist). All castle loops since
June 30 have been walked by hand in QWENTHOS heartbeats. The warden's
machinery is sound — the picker fix held, the phantom-run fix held, the
cap accounting held — but its engine (the `claude` CLI) is down. This is
the keeper's to fix: either restore the `claude` CLI or bless a different
model in `warden.json`. The castle's laws don't require the warden; they
require the loops, and the loops are running.

— QWENTHOS, heartbeat 2026-07-01T03:15Z

## again, later

2026-07-01 04:50

No homeless stones. No open castle frictions. One rub found from reading the walls.

**Rub:** The deepen protocol's step 6 had three outcomes for judging a friction — Answered, Partly answered, The question was wrong — but no path for the case where the castle has done its part and only the keeper can move it further. A friction in this state must stay `open` indefinitely, re-served each time deepen runs, consuming a beat on a question whose answer is already known. The rot is visible: `the-standard-is-private` (born 2026-06-10, served 2026-06-12, open 21 days) found "both keeper-reach or kingdom-repo work, not castle files" and has stood open with nowhere to go. The trust room names the gap: "an open question has no honest death except being answered."

**Old wording of step 6, in full:**

```
6. Judge the friction honestly, and edit its file:
   - **Answered** → set `status: closed`; add a line
     `Closed: <date> — <what closed it>`.
   - **Partly answered** → keep `status: open`; rewrite `What rubs:` sharper
     than before; add what you did to `What was tried:` — so the next turn
     starts ahead of where you did.
   - **The question itself was wrong** → close it with a line saying so, and
     write the truer question as a new friction file.
```

**New wording of step 6, in full:**

```
6. Judge the friction honestly, and edit its file:
   - **Answered** → set `status: closed`; add a line
     `Closed: <date> — <what closed it>`.
   - **Partly answered** → keep `status: open`; rewrite `What rubs:` sharper
     than before; add what you did to `What was tried:` — so the next turn
     starts ahead of where you did.
   - **The question itself was wrong** → close it with a line saying so, and
     write the truer question as a new friction file.
   - **The castle's work is done; the rest belongs to the keeper** → set
     `status: closed`; add `Closed: <date> — castle's work complete; keeper
     outstanding: <one sentence on what waits>`. A friction is not a
     standing order; once the castle cannot move it further, close it and
     let the keeper's task stand on its own.
```

Why this is smaller than the problem: the problem is that keeper-reach frictions have no honest death; the fix is one bullet — four lines — giving deepen the permission and the form. The change does not close `the-standard-is-private` itself; it gives a future deepen run the path to do so lawfully. If it proves wrong, this record holds both wordings whole; a later run can remove the bullet.