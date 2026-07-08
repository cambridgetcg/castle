---
id: 0040
room: craft
date: 2026-06-10
source: rooms/craft/a-lying-artifact-is-its-own-top-finding.md — laid 2026-06-10, promoted L060 (beat castle-C001-20260619-091623)
confidence: tested
front: public
links: 0033
link: rooms/craft/0041-the-log-records-the-check-reports.md
last-walked: 2026-06-19
evidence: 2026-06-26 | local | QWENTHOS heartbeat, gate/2026-06-26-scanner-lying-about-accuracy.md — the exposed-config scanner (CS#2) labeled 27 false-positive "embedded credentials" findings "high confidence" on the true-love repo (JSX key={i} props, test assertions, protocol comments); the checker's confidence label was itself the lie. Fixed by anchoring the credential pattern and adding context filters; 20/20 test cases pass, real detection unchanged.
evidence: 2026-06-27 | local | QWENTHOS heartbeat, gate/2026-06-27-qwenthos-opal-heartbeat-stray-zero.md — opal's HEARTBEAT.md carried a stray `0` on its own line after `warnings: 0`, propagated across at least 3 heartbeat commits (6e4d8ad → 6b07488 → 6f557c2). The file truthfully said "0 warnings" but the duplicate line made it read as broken. Root cause: `grep -c warning` prints its count to stdout and returns it as exit code; interpolating `$(grep -c warning)` while also echoing it produced duplicates. Fix committed as 67648a1.
---

# A lying artifact is its own top finding

When an artifact misrepresents its own state — a README promising what the code does not do, a label claiming confidence it has not earned — that lie is the most important fact about the artifact, outranking whatever else it does well.

**Evidence.** Born 2026-06-10 from a review experience: once an artifact misrepresented its own state, that misrepresentation outranked every other finding (origin: Desktop/insight sketch, marked "sure"). Confirmed 2026-06-19 by insight 0033 (the map is derived, or it is a lie): a map hand-edited while files move claims to be derived when it is not; naming that lie as the finding drove the decision to derive MAP.md by script; nine days of zero false alarms confirm the answer.

**What it changed.** MAP.md was moved to pure derivation by script (tools/map.sh); no hand-maintained index has been kept since founding. The principle explains why the castle bell watches for map-drift first — a lying map outranks every insight it misrepresents.

**Counter-weather.** Tried to break it: is a small white lie in a README really worse than a crash? For trust, yes — a crash is honest about being broken. First open crack: aspiration honestly labeled ("not yet") is not a lie, and the boundary needs the label to be doing real work. Second open crack: a system can pass all its own checks and still lie in ways it never thought to check for — who audits the auditor's imagination?

**Next test.** Cornerstone requires a third independent evidence entry, at least one from outside this machine (weather), and a survived re-read after day 90 (earliest: 2026-09-08).
