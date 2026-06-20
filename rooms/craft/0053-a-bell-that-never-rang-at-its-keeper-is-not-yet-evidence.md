---
id: 0053
room: craft
date: 2026-06-18
source: rooms/craft/a-bell-that-never-rang-at-its-keeper-is-not-yet-evidence.md — laid 2026-06-18, tested L095 (beat castle-C001-20260619-215536), promoted L096 (beat castle-C001-20260619-221731)
confidence: tested
last-walked: 2026-06-19
link: rooms/craft/0040-a-lying-artifact-is-its-own-top-finding.md
link: rooms/craft/0011-a-gate-you-never-watched-fail-is-decoration.md
link: rooms/castle/0047-a-named-blind-spot-is-its-own-first-repair.md
evidence: 2026-06-18 | local | gate/2026-06-11-the-bell-that-catches-its-keeper.md: three catches in one day — barren-run rang on the keeper's own founding ledger line, again on annotated created: lines, and the Daily Run audit caught the keeper's own cron comment claiming an ordering Promise.allSettled does not provide
evidence: 2026-06-19 | local | L074 beat castle-C001-20260619-140325: tools/castle check returned clean on run 74; silence trusted because L026 proved the check rings when the keeper's code is wrong and L058/L063 proved friction.sh rings when the keeper's loops leave orphans
evidence: 2026-06-20 | local | L095 beat castle-C001-20260619-215536: friction.sh caught MAP drift left by L094's promotion of 0052 — the bell caught the keeper's own promote run leaving the map stale; third independent instance
---

# A bell that has never rung at its keeper is not yet evidence of anything

**Claim.** A checking system earns the right to be believed by catching the
person who built it first. Until that happens, silence is ambiguous: no
problems found, or the system does not catch this kind of problem.

**How it ripened.** Three independent catches across 77 runs and two days:
founding day (keeper's own ledger line, annotated created: fields, cron
comment misrepresenting Promise.allSettled); L026/L058 (open-field filter
bug, orphan storefront files); L095 (MAP drift left by L094's own promote
run). Each catch made the surrounding silences credible.

**What it changed.** The clean returns between catches are no longer
ambiguous — each is trusted because the bell demonstrated it rings when
things are genuinely wrong.

**Counter-weather.** A bell that flags everything the keeper does wrong is
not evidence either; it is miscalibrated. Fair catches, not noise.

**Next test.** By 2026-09-17, re-read whether any clean return between now
and then later proved to hide a real problem. If none: the bell is
calibrated. If one: name the failure pattern and narrow the claim.
