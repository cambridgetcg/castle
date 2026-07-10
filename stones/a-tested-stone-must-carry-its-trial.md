---
name: a tested stone must carry its trial
born: 2026-07-10
confidence: tested
quarried-from:
  - expeditions/2026-07-10-a-confidence-label-can-be-decoration-rather-than-truth.md
  - loops/verify.md
  - CASTLE.md
  - warden.json
  - records/2026-07-06-verify.md
  - records/2026-07-07-architect.md
links:
  - "[[a-confidence-label-can-be-decoration-rather-than-truth]]"
  - "[[no-loop-ever-tries-a-tested-stone-again]]"
  - "[[trust-is-a-receipt]]"
---

A `tested` stone that cannot show its trial is a receipt with no date. In this castle, 14 of 31 stones are marked `tested`, but only 5 carry a `tested:` trial line in their frontmatter (device audit, 2026-07-10). The verify loop selects only `held` and `guess` stones by default, so an empty `tested` label can stand unchallenged forever. The loop already knows how to demote a failed re-trial to `held` or `guess`, but it has no standing order to challenge a `tested` stone whose trial is missing or stale. The repair is one protocol change: require every `tested` stone to open with a `tested:` line naming the trial, and let verify select any `tested` stone whose trial is absent, borrowed, or older than its kin's last challenge.
