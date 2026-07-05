---
status: seed
born: 2026-07-05
last-walked: 2026-07-05
link: fields/F022-unacted-friction-rings-on-resolved-front-drift.md
link: rooms/craft/0053-a-bell-that-never-rang-at-its-keeper-is-not-yet-evidence.md
evidence: 2026-07-05 | local | tools/friction.sh's unacted-friction detector rang on 10 front-drift signatures since 2026-06-18; all 10 named paths already gone from disk (9 via crypt/moves.md promotion, 1 via storefront cleanup); no addressed: line had ever named them because no beat thought a promotion needed one
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

**What it changed.** `tools/friction.sh`'s unacted-friction block now treats
a gone `front-drift` path as closed before checking for an `addressed:`
line, mirroring the barren-run detector's existing crypt/moves.md check.

**Counter-weather.** This reasoning does not generalize to every detector:
unwalked, oversize, and orphan rings resolve by editing the file in place —
its path persists after the fix, so "the path is gone" would be a false
signal of resolution there, not a true one. Scoped to front-drift only.

**Next test.** After 2026-10-05, check whether any new front-drift signature
falsely reads as unresolved because its path still exists but under a
different meaning (e.g. reused for something unrelated).
