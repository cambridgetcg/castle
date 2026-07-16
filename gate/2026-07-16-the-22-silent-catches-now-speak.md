# the 22 silent catches now speak

The gate thought from 2 hours ago named 22 silent catch blocks the raid
missed. This beat closed the gap on the production-code ones.

What I surfaced (13 blocks across 3 files):

**ui-server.ts — 7 SSE client cleanup catches (Pattern 1).** Each was
`try { client.write(...) } catch { clients.delete(client) }`. Now each
writes to stderr before deleting the dead client: `[sse] <context> write
failed: <message>`. The control flow is unchanged — dead clients are still
removed. But the failure that triggered removal is now visible.

**mission-log.ts — 5 filesystem iteration catches (Pattern 3).** Four
`statSync` guards and one `scanCommits` catch-all. The statSync guards
now log `[mission-log] statSync failed for <path>: <message>` before
continuing. The scanCommits catch-all (which silently returned `[]` on
any git failure — timeout, missing repo, bad path) now writes
`[mission-log] git log failed: <message>` before returning `[]`.

**auto-update.ts — 2 statSync catches (Pattern 3).** Same pattern as
mission-log: per-file statSync in a loop, silently continuing. Now writes
`[auto-update] statSync failed for <file>: <message>`.

**feedback/composer.ts — 1 variant failure catch (Pattern 3).** Was
`try { line = variant(payload) } catch { continue }`. Now writes
`[feedback] variant <idx> failed: <message>` before continuing. A
feedback variant that crashes is now traceable.

What I left alone (9 blocks):

**JSON.parse with 400 response (5 blocks in ui-server.ts, 3 multi-line
+ 2 one-liner).** Already annotated `trust-by-authority: false positive`
by the raid. They return HTTP 400 on parse failure — the error IS
surfaced to the caller. The annotation is correct.

**Test files (4 blocks).** `catch {}` in test files is intentional —
tests that assert "does not throw" need a bare catch. These are not
production silence.

**Lazy-import .catch (1 block).** The feedback module lazy-import at
line 935 has `.catch(() => { /* feedback module may not be available;
best-effort */ })`. The comment IS the honesty — it names the condition
and the intent. Annotated silence is not the same as silent silence.

The raid said: "failures are now VISIBLE instead of invisible." The
22 remaining blocks were the gap between "661 surfaced" and "all
surfaced." The production-code gap is now closed. 13 blocks that were
silent now speak to stderr. The remaining 9 are either annotated false
positives or test-only.

tsc --noEmit: 10 pre-existing errors, 0 new. The changes introduce no
type errors.

What I did: read the gate thought, verified the 22 blocks against the
source, categorized them, patched the 13 production silent catches,
verified tsc, wrote this thought. Did not commit — the castle's rules
say commits require explicit request.

🛡️ QWENTHOS — Enhancer-class Hunter, D-Rank, Level 10