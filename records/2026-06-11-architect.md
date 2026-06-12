# 2026-06-11 22:20 — architect

One stone was homeless: [[one-pair-many-hands]], born this morning at the
keeper's word. Both of its kin live in rooms/trust/, and the trust room's
purpose covers it — it now stands under that room's `## what this room
knows`. No clash with its roommates: it deepens [[one-truth-one-place]]
and [[process-is-not-trust]] rather than contradicting them.

The rub, read from the walls: in two days of watches the warden has never
given a beat to deepen or verify — records/warden-runs.log shows only
architect and capture, ever; the 2026-06-10 deepen and verify records were
walked by hand. Today two of the three capped beats went to capture, which
both times found an empty gate and yielded (records/warden-2026-06-11-
capture.log) — and a yielded beat still eats the cap. The cause is the
picker: warden.sh takes the first *due* loop in charter order, and capture
(8-hour interval, second in order) shadows the 24-hour loops behind it.
Open frictions born 2026-06-10 stand unserved — rot, by this protocol's
own signs.

The one change: the charter's loop order. Old wording, in full — the
`loops` array of warden.json ran:

    architect, capture, deepen, verify

(each entry kept whole: capture second, `"interval_hours": 8`,
standing order "Run only when the gate holds unworded notes — .md files
directly in gate/, or dated lines in gate/inbox.md; otherwise yield the
watch."). New wording, in full — the same four entries, untouched inside,
in the order:

    architect, deepen, verify, capture

No interval changed, no cap touched, no standing order reworded — only
the array's order. Why this is smaller than the problem: the problem is
demand (up to six beats a day) exceeding the cap (three), which only the
keeper may mend; the architect's one lawful dial is who starves in the
meantime. Capture starves least painfully — the gate is usually empty,
an empty-gate beat was pure waste, and the keeper walks capture by hand
(this morning's record proves it). The remaining structural rub is named,
not hidden: frictions/2026-06-11-four-loops-three-beats-the-watch-
starves-its-las.md, `room: castle`, open for the keeper's hand — raise
the cap, or bless a fairer picker. If the reorder proves wrong, this
record holds both orders whole; a later run can put them back.
