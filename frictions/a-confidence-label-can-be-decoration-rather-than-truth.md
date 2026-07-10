---
name: a confidence label can be decoration rather than truth
born: 2026-06-10
room: trust
status: closed
---

What rubs: tested, held, and guess only carry trust if something happens when a label is wrong (held).

Why it matters: a `tested` stone that cannot show its trial is a receipt with no date. In this castle, 14 of 31 stones are marked `tested`, but only 5 carry a `tested:` trial line in their frontmatter (device audit, 2026-07-10). The verify loop selects only `held` and `guess` stones by default, so an empty `tested` label can stand unchallenged forever. The loop already knows how to demote a failed re-trial to `held` or `guess`, but it has no standing order to challenge a `tested` stone whose trial is missing or stale.

Better would be: every `tested` cites its trial, and a verify loop demotes any label that cannot show one.

What was tried: 2026-07-10 — the deepen expedition gathered home evidence from `loops/verify.md`, `CASTLE.md`, `warden.json`, and verify/architect records. It found that the castle already writes `tested:` trial lines for some stones and already knows how to demote, but the verify loop's selection rule leaves most `tested` stones unchallenged. A new stone, [[a-tested-stone-must-carry-its-trial]], was quarried naming the exact gap and the protocol change required. The remaining repair — editing `loops/verify.md` to require a `tested:` line for every `tested` stone and to select stale or empty `tested` stones for challenge — is the architect loop's one-change work, not deepen's.

Closed: 2026-07-10 — castle's work complete; keeper outstanding: edit `loops/verify.md` (or task the architect loop) to require every `tested` stone to carry a `tested:` trial line in its frontmatter, and to add `tested` stones with missing, borrowed, or stale trials to the verify loop's default selection pool, with demotion to `held`/`guess` when the trial cannot be shown.
