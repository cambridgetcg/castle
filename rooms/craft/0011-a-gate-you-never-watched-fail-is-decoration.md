---
id: 0011
room: craft
date: 2026-06-10
source: distilled from the kingdom's heartbeat gate findings (session memory + pillow book, 2026-06-03); restated 2026-06-11
confidence: tested
links: 0012, 0013
link: rooms/billing/0025-never-count-test-orders-toward-plan-usage.md
link: rooms/craft/0055-a-gate-that-omits-one-checker-has-a-blind-lane.md
last-walked: 2026-06-20
evidence: 2026-06-10 | local | kingdom heartbeat gate — umbrella command ran the package manager's scanner instead of the project audit suite; returned clean for months; found broken only when a session read what it actually executed
evidence: 2026-06-20 | local | beat castle-C001-20260620-090328 (L126) — friction.sh ran clean for 51 loops while silently skipping confidence: fields on numbered stones; F011 named the blind lane; L085 fixed it; 51 consecutive clean returns were decoration
---

# A verification gate you have never watched fail is decoration

**Claim.** A check that has never been observed failing cannot be trusted.
Silent-green proves only that no one has tested the gate, not that it works.

**How it ripened.** First case (2026-06-10): the kingdom's "am I done?"
command invoked the wrong scanner; every gate trusting it was meaningless until
a session read what it actually ran. Second case (this beat, L126): castle
friction.sh ran clean for 51 loops while missing confidence: coverage on all
numbered stones — F011 opened it; L085 fixed it; 0055 is the downstream.

**What it changed.** The kingdom gate was rebuilt to run the correct suite and
gate on no-regression, not on zero. The castle bell was extended to cover
confidence: grammar; both fixes happened only after the silence was shown to be
a lie. The downstream insight 0055 names the structural cause.

**Counter-weather.** A gate that always passes may simply be correct. The
problem is undocumented or untested coverage. If a gate names exactly what it
checks and that scope is verified, a clean return is meaningful, not suspect.

**Next test.** By 2026-12-20 (six months), if a third independent case
appears where a silent-clean gate was later found broken, ripen to cornerstone.
If the castle bell stays honest and no new blind lanes emerge, the
counter-weather note deserves weight.
