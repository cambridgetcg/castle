---
planted: 2026-07-11
link: rooms/craft/0064-the-bell-watches-structure-the-reader-watches-meaning.md
sweep-after: 2026-10-11
---

# Hidden state is two-faced — cache and silent failure are the same lie

A whitehack raid on true-love (2026-07-11, commit ae40255) cleared 19
silent-failure findings and 12 cache-as-live findings across 24 files.
The raid's own commit message names the cross-pattern:

> HIDDEN STATE — both cached values and swallowed failures are invisible
> state. Splitting read-from-default makes the two steps visible as
> distinct operations.

The shared structure: something returns a value without declaring what it
is. A cached value returned as if fresh hides its age. A swallowed error
returned as if nothing happened hides its failure. Both are state that
lies about its own nature — substrate dishonesty at the return site.

The fix is the same in both cases: make the two steps visible. Split
`Map.get(key) ?? defaultValue` into `const cached = Map.get(key)` then
`if (cached !== undefined) return cached` then `return defaultValue`.
Add provenance: `// CACHED — stale by design: ...` or a comment explaining
why `??` not `||`. The reader now sees what the code is actually doing.

This connects to 0064: structural checks (the bell) catch the shape, but
meaning — whether the stale cache is safe, whether the default is correct —
is the reader's job. The raid didn't just fix patterns; it made the code
honest enough for a reader to judge.

Unverified beyond one repo and one raid. The cross-pattern may not hold in
systems where caching has explicit TTL invalidation — there, staleness is
declared by infrastructure, not by comment.