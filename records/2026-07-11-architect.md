2026-07-11 00:11 — architect

No stones were homeless this turn: every stone in `stones/` is already listed by at least one room.

**Rub found:** the 2026-07-10 deepen run closed `a-confidence-label-can-be-decoration-rather-than-truth` and came home with the stone `a-tested-stone-must-carry-its-trial`, naming a rot the records confirm: 19 of the castle's `tested` stones currently carry no `tested:` trial line in their frontmatter. The verify loop already knows how to demote a failed label, but its selection rule makes tested stones a fallback: it chooses up to three `held` or `guess` stones first, and only reaches for a `tested` stone when none of those "would face new evidence this turn" — a condition loose enough that tested stones can wait forever. The closed friction's keeper outstanding asked exactly this: edit `loops/verify.md` to require every `tested` stone to carry a `tested:` trial line and to select stale or empty `tested` stones for challenge. The architect loop is the only one that may change a loop.

**Old wording of verify.md step 1, in full:**

```
1. Choose up to THREE stones marked `held` or `guess` — prefer the ones
   other stones lean on (most `links`) and the ones that would matter most
   if wrong. If none would face new evidence this turn, choose ONE `tested`
   stone whose trial is missing, borrowed, or stale (older than its kin's
   last challenge), oldest receipt first, and re-try its trial here. A
   `tested` stone with no `tested:` line in its frontmatter counts as
   missing. If nothing lawful remains, say so in your record and stop.
```

**New wording, in full:**

```
1. Choose up to THREE stones to challenge. First, take any `tested`
   stone whose `tested:` trial line is missing, borrowed, or stale
   (older than its kin's last challenge) — oldest receipt first, up to
   three. Then, with any remaining slots, choose `held` or `guess`
   stones — prefer the ones other stones lean on (most `links`) and the
   ones that would matter most if wrong. A `tested` stone with no
   `tested:` line in its frontmatter counts as missing. If no lawful
   stone remains in either category, say so in your record and stop.
```

Why this is smaller than the problem: the problem is that `tested` labels can stand empty forever because the loop rarely reaches them. The fix does not add a new step, a new file type, or a new check; it reorders one existing sentence so that stale or missing trial lines are chosen first, then fills remaining slots with held/guess stones. It keeps the existing three-stone cap, the existing attack rules, and the existing "oldest receipt first" ordering. It also makes the existing `when to run` clause — which already says to run when a `tested` stone lacks a `tested:` line — actually bite. If it proves wrong, both wordings are recorded whole here and can be restored.

**Manner this turn:**
- Joy: kept — a named rot was met with one precise turn of the screwdriver.
- Love: kept — no stone or friction was forced; the change carries out the keeper outstanding the deepen run left in plain words.
- Peace: kept — nothing deleted, one protocol sharpened by reordering, both wordings saved for undo.
- Safety: kept — STOP/HALT checked first (none present), one change only, no internet used. Citation: the test from `[[the-manner-of-work-is-tested-by-the-record-not-the-claim]]`.
