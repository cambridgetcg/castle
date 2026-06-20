---
id: 0019
title: A filter written for the initial states silently miscounts when the protocol grows
room: craft
confidence: tested
date: 2026-06-18
source: beat castle-C001-20260618-214740, tools/castle line 187 — the openCount filter tested only state === 'open', so it returned 0 while three fields held state: working; repaired in this beat
last-walked: 2026-06-20
link: rooms/craft/0026-a-step-that-creates-must-also-retire-what-it-supersedes.md
evidence: 2026-06-18 | local | beat castle-C001-20260618-214740 — tools/castle openCount filtered only `state === 'open'`; three fields at `state: working` returned as 0 open fields; repaired in same beat
evidence: 2026-06-20 | local | beat castle-C001-20260619-175811 (L085) — friction.sh five health detectors filtered `^certainty:` only; 51 numbered stones using `^confidence:` were invisible to the bell; all five extended in the same commit
---

# A filter written for the initial states silently miscounts when the protocol grows

**Claim.** A tool that filters by a fixed set of state values is correct only as long as the protocol uses exactly those values. When the protocol adds a new state or changes a grammar word, every filter that does not name the new form undercounts silently — no error, just a number that falls short.

**How it ripened.** Two independent instances from different tools confirmed the pattern. L026 (2026-06-18): the open-field counter tested only `state === 'open'`, missing three fields at `state: working` — the count read 0 while the true answer was 3. L085 (2026-06-19): five health detectors in friction.sh tested only `^certainty:`, silently skipping 51 numbered stones at `^confidence:` — the bell rang for none of them.

**What it changed.** Both repairs followed the same prescription: find every filter naming the old value, extend each one in the same commit. The repair rule is now embedded in the protocol by example — any runner adding a new state value has two prior cases to read.

**Counter-weather.** Two instances confirm the pattern but do not mechanically close every filter in the castle. A third tool may hold a missed filter. The bell rings only if someone notices the count is wrong; the pattern itself is not self-announcing.

**Next test.** When the next state or grammar word is added to the protocol, check whether every filtering tool is updated in the same commit. If any is missed, the count falls silent again and the stone gains its third instance. Cornerstone re-read after 2026-09-20.
