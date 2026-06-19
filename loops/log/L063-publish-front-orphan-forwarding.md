---
id: L063
beat: castle-C001-20260619-101437
date: 2026-06-19
field: F008
---

# L063 — promote: publish-front → clear orphan storefront + forward crypt

**Understood.** Castle check clean on entry. Friction detector showed four front-drift rings: stones 0039 and 0040 (promoted by L059/L060 after L058 published their unnumbered counterparts) lacked storefront copies at their numbered paths; the storefront held two orphan files at the old unnumbered paths. Running publish-front.mjs created the five correct numbered copies. Removing the two orphan files caused the barren-run detector to ring for L058 and `2026-06-19-publish-the-front` ledger entries, which listed those files under `created:`. The barren-run detector already has a carve-out for paths with forwarding lines in crypt/moves.md; no such lines existed for storefront paths. Added two forwarding lines; friction.sh: exit 0.

**Made.** `loops/publish-the-front.md` step 4 updated: removal of an orphan storefront file now requires a forwarding line in crypt/moves.md, with the reasoning made explicit. Two forwarding lines added to crypt/moves.md for the two removed orphan paths. Five public stones re-published at current (numbered) paths; front.json rebuilt. MAP.md rebuilt.

**Changed.** The publish-the-front loop instruction now closes its own barren-run ring on removal. The storefront tracks the numbered namespace stably. Friction.sh: exit 0. Convergence test second clean run.

**Still open.** F008 convergence test is satisfied (two consecutive clean runs: L058 and L063). Deploy remains Yu's act — the front is ready but not live until Yu pushes. F002 continues accumulating stones. F003 waits on promotion by use. Eight cornerstone-test seeds in gate/ (planted 2026-06-19, fire 2026-09-17).

**Loop the loop.** The friction revealed one design gap: the publish-the-front loop did not instruct runners to add forwarding lines on removal, so every orphan removal created a barren-run ring that required manual repair. That gap is now closed in the loop instruction. No new field needed — the repair was one sentence.
