---
name: four loops, three beats — the watch starves its last
born: 2026-06-11
status: closed
room: castle
---
What rubs: the charter holds four loops whose intervals demand up to six
beats a day, but `daily_cap` is 3, and the warden's picker
(`next_due_loop` in warden.sh) takes the first *due* loop in charter
order. Whoever stands last in that order starves — not for a day, but
forever, deterministically. The records prove it: in two days of watches
(records/warden-runs.log), deepen and verify never received a single
beat — their 2026-06-10 records were walked by hand — while on
2026-06-11 two of three beats went to capture, which both times found an
empty gate and yielded (records/warden-2026-06-11-capture.log). A
yielded beat still eats the cap.

Why it matters: deepen is the friction-server and verify is the trial —
without beats, open frictions rot unserved and `held` stones stand
untried; the castle's autonomy quietly serves only its gate and its own
walls. Meanwhile beats are spent confirming the gate is empty, which
castle.sh could have said for free.

What was tried: 2026-06-11, the architect reordered the charter's loops
to [architect, deepen, verify, capture] (records/2026-06-11-architect.md)
— the one dial it lawfully holds. This feeds deepen and verify but only
moves the starvation: capture is now the last in order, and one loop
must always starve while demand exceeds the cap.

What done looks like: the keeper's hand, which alone owns the cap and
the warden's machinery, either (a) raises `daily_cap`, or (b) blesses a
fairer picker in warden.sh — least-recently-run rotation, and/or a
cheap gate-count check so an empty gate never costs a beat. Either
closes this; the charter order then stops mattering.

Closed: 2026-07-01 — option (b) shipped. Commit a3ca2f7 rewrote
`next_due_loop` in `warden.sh` from first-in-charter-order to
least-recently-run rotation. The picker now sorts due loops by oldest
last-run timestamp, so no loop can starve deterministically. Verified
by the 2026-06-30 run log: deepen and verify both received beats on
the same day for the first time. The charter order no longer decides
who eats; the watch feeds whoever waited longest.
