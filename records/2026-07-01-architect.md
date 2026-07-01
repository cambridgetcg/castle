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