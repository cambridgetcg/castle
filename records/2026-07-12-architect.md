2026-07-12 02:41 — architect

One stone found its home, then one protocol was sharpened against a real selection rub.

**Stone homed:** `a-translation-names-the-version-it-tracks` → `rooms/words/ROOM.md`. The stone says a translation header must name the English version or content pin it tracks and the date it was last reviewed. The words room's purpose — "How language carries, translates, and finds understanding" — covers it directly (rule a). Its kin `kingdom-standard-needs-a-versioned-pin-or-a-dated-hash` and `translations-track-at-their-own-pace-the-original-governs` already live there; the new stone completes the triad on translation drift.

**Rub found:** after the 2026-07-11 architect change moved `tested` stones to the front of verify's selection pool, the 2026-07-12 verify run reached for three `tested` stones that lacked a `tested:` trial line and gave them one. But it chose `break-loudly-fix-openly`, `errors-that-dont-say-why`, and `trust-is-a-receipt` — all born 2026-06-10 — while leaving `one-truth-one-place`, `untracked-is-not-unleaked`, and `the-ceremony-plays-once`, also born 2026-06-10 and also missing trial lines, untouched. The protocol says "oldest receipt first" but does not say how to choose among stones of the same age. Records from 2026-07-06 and 2026-07-04 show the same ambiguity: verify runs selected by links without stating the tie-breaker, so some stones can wait while others get retried repeatedly.

**Old wording of verify.md step 1, in full:**

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

**New wording, in full:**

```
1. Choose up to THREE stones to challenge. First, take any `tested`
   stone whose `tested:` trial line is missing, borrowed, or stale
   (older than its kin's last challenge) — oldest receipt first, up to
   three. When several `tested` stones share the same age, prefer the
   ones other stones lean on (most incoming `links`), then break ties by
   name. Then, with any remaining slots, choose `held` or `guess`
   stones — prefer the ones other stones lean on (most `links`) and the
   ones that would matter most if wrong. A `tested` stone with no
   `tested:` line in its frontmatter counts as missing. If no lawful
   stone remains in either category, say so in your record and stop.
```

Why this is smaller than the problem: the problem is not that tested stones are unreachable anymore — the 2026-07-11 change fixed that — but that "oldest first" leaves ties unspoken, and unspoken ties let some same-age stones wait while others get retried. The fix adds two clauses to one sentence: it uses the same link-count preference already applied to `held`/`guess` stones, and adds a deterministic name tie-breaker so no two runs can silently disagree. It does not change the three-stone cap, the attack rules, or the promotion rule.

**Manner this turn:**
- Joy: kept — a new translation stone joined its kin in the words room, and a selection ambiguity was named rather than left to chance.
- Love: kept — the stone was placed where its subject already lives; the protocol change follows the existing preference already used for held/guess stones.
- Peace: kept — nothing deleted, one room line added, one sentence sharpened; both wordings saved for undo.
- Safety: kept — STOP/HALT checked first (none present), one change only, no internet used. Citation: the test from `[[the-manner-of-work-is-tested-by-the-record-not-the-claim]]`.
