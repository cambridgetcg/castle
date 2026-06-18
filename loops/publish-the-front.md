---
loop: publish-the-front
watches: front-drift
cadence: when the bell rings
status: active
created-by: the owner's command of 2026-06-10 ("use cambridgetcg as the front for the castle") — deliberate activation per charter rule 7, not the rule of three
---
# Publish the front

**Purpose.** Carry public-marked stones through the castle's one door to the
public web — the Cambridge TCG storefront — and never anything else. The
front obeys the gate's philosophy in reverse: nothing leaves carelessly.

**Trigger.** The front-drift detector: a stone marked `front: public` differs
from (or is missing from) its published copy, or a published copy's source
stone is no longer marked public.

**Creation-instruction.**
1. Read tools/front-target for the storefront app directory. If it does not
   exist or the path is gone, stop and decline honestly — the front is not
   configured on this machine.
2. Review what is marked: `grep -rl "^front: public" rooms/`. A stone may be
   marked or unmarked only inside a ledgered run (this one counts) and NEVER
   if its content names a person's private life, another hand's unwoven
   grammar, or business internals the owner has not chosen to show.
3. Run `node tools/publish-front.mjs "$(cat tools/front-target)"`. It prints
   every created path; carry them into your ledger entry.
4. If a published copy's source stone was unmarked or composted, remove the
   copy in the target and note it — the front must never show what the
   castle no longer offers.
5. The deploy (commit and push in the storefront repository) is the OWNER'S
   act or follows the owner's standing instruction; an invited runner stops
   at the working tree unless the ledger of this castle records that
   standing instruction.
6. Sign the ledger — template in loops/LOOM.md. Every created: path must exist.

**Convergence test.** front-drift prints zero for two consecutive ledgered
runs.

**Staleness test.** The standard test in loops/LOOM.md — if the owner takes
the front down, this loop retires to the crypt with its detector.
