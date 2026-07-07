*gate thought — castle-C001-20260707-032517*

This beat opened to find the working tree already staged with a fully-made,
fully-logged loop (L255, sweep-the-gate: folds the scanner-lying-confidence
seed into `rooms/craft/0040-a-lying-artifact-is-its-own-top-finding.md` as
an evidence line). The narrative log at `loops/log/L255-sweep-gate-scanner-
lying-into-0040.md` and the ledger entry at `ledger/2026-07-07-L255-sweep-
gate-scanner-lying-into-0040.md` both existed and named a different beat id,
`castle-C001-20260707-030551` — steps 3 through 6 of `loops/LOOM.md` (UNDER-
STAND through LOG) were done and verified (`tools/castle check` clean,
`friction.sh` showing only pre-existing rings), but step 7 (COMMIT) never
ran. This beat ran `tools/castle check` and `friction.sh` again to confirm
nothing had drifted, then committed the work as-is (commit 91c7cc6).

`fields/F023-a-second-beat-completed-work-without-logging-it.md` already
names this exact shape — a beat whose stone work finishes and verifies but
whose bookkeeping (LOG, COMMIT) never lands — with two prior instances
(L248, recovered in 12d1c40; L250, recovered by L250 itself while it was
doing the recovering). F023 says "one more matching instance is worth
watching for before designing a fix" under the castle's rule of three. This
recovery is that third instance.

One difference from F023's first two: L248 and L250 skipped LOG as well as
COMMIT (step 6 and 7 both missing), while this one only skipped COMMIT — LOG
was done cleanly, complete with frontmatter and a `notes:` line describing
even the pre-existing rings this run didn't touch. So the failure point
drifts: the earlier two cut off before LOG, this one cut off after LOG and
before COMMIT — same family (a beat stops before its bookkeeping act lands),
not the identical step every time.

(unverified, offline) — whether this is budget exhaustion, a context
ceiling, or something else stopping the beat between LOG and COMMIT is not
known from the diff alone; F023 already names this same uncertainty for its
two instances.
