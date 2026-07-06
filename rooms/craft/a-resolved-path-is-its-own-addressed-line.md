---
status: seed
born: 2026-07-05
last-walked: 2026-07-06 (second walk, same day)
link: fields/F022-unacted-friction-rings-on-resolved-front-drift.md
link: fields/F024-unacted-friction-oversize-rang-on-a-fixed-file.md
link: rooms/craft/0053-a-bell-that-never-rang-at-its-keeper-is-not-yet-evidence.md
evidence: 2026-07-05 | local | tools/friction.sh's unacted-friction detector rang on 10 front-drift signatures since 2026-06-18; all 10 named paths already gone from disk (9 via crypt/moves.md promotion, 1 via storefront cleanup); no addressed: line had ever named them because no beat thought a promotion needed one
evidence: 2026-07-06 | local | three oversize signatures rang the same way; two resolved by promotion (path gone, same shape as front-drift), one by an in-place edit (path persisted, line count dropped to 25) — the in-place case needed a second test (re-run the detector's own condition), not just the gone-path check
evidence: 2026-07-06 | local | counted live unwalked unacted-friction signatures before extending the fix: 20+, not the 3 the prior Next test expected to wait for until 2026-10-06 — most were stones L086 already walked on 2026-06-19, the ring surviving only because the friction-log's first-seen date predates that walk; extending the annotation-stripped live-check dropped total rings 52 -> 24 and unwalked to 0
---

# A resolved path is its own addressed line

**Claim.** When a detector's ring names a path, and later that path is
deliberately removed by the very repair the ring was asking for (a
promotion, a cleanup sweep), the removal is itself proof of resolution — a
separate `addressed:` ledger line is ceremony the loop never thought to pay,
and the bell should not require it twice.

**How it ripened.** F022 found nine front-drift signatures whose rooms/
sources were promoted to numbered paths (crypt/moves.md confirms each move)
and a tenth whose storefront copy was removed as an orphan (F008's L058,
L063) — ten permanent false alarms, all resolved by ordinary loop work that
never phrased itself as "addressed."

**What it changed.** `tools/friction.sh`'s unacted-friction block treats a
gone `front-drift` path as closed before checking `addressed:`, mirroring
barren-run's existing crypt/moves.md check.

**Counter-weather.** The first version scoped itself to front-drift only,
reasoning the other detectors "resolve in place." That overclaimed: F024
found oversize resolving by promotion too (path gone), plus one in-place
fix. Corrected shape: a gone path always resolves; a persisting path needs
its own condition re-checked (line count, link, last-walked) first.
`friction.sh` does both, now, only for oversize — orphan has no
rule-of-three yet, and unwalked's log lines carry an annotation that would
misparse as a fake gone-path without stripping first (as barren-run does).

**Next test.** Answered early: the rule-of-three condition doesn't need a
calendar wait when the count is already checkable — 2026-07-06 found 20+
live unwalked signatures, so the pattern extended there the same day rather
than waiting for 2026-10-06. Orphan still has only one live signature; its
extension still waits on that count, not a date.
