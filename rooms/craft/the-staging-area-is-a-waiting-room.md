---
status: sprout
born: 2026-06-21
last-walked: 2026-06-21
source: gate/2026-06-21-a-staged-change-that-misses-its-commit-surfaces-in-the-next-entry.md — observed in beat castle-C001-20260621-044612 (L182): L181's staged deletion of a gate seed survived into L182 unattributed
evidence: 2026-06-21 | local | L182 found L181's staged git-rm of a gate seed intact in L182's working tree; the L181 ledger claimed the deletion; the commit belonged to L182 (L182 janitor run)
evidence: 2026-06-21 | local | L186 arrived to find L185's staged INDEX.md and seven other uncommitted modifications in the working tree; the L185 ledger claimed the ripen work; the commit still belonged to L186 — the staging area held L185's entire run
link: rooms/castle/0052-commit-is-the-last-safety.md
link: rooms/continuity/0006-uncommitted-word-can-vanish.md
---

# The staging area is a waiting room

**Claim.** Git's staging area is a waiting room between intent and record. A change
staged but not committed outlasts its beat: it arrives in the next beat's working
tree intact but unattributed — the ledger of the prior beat says the work was done;
the git commit belongs to the next beat. The castle's check gate reads only committed
state and cannot see staged work. A beat can satisfy every gate check while leaving
staged changes that will surface, silently, in the next entry.

**Why it matters.** 0052 names the commit step; this stone names the staging step
as a distinct liminal state 0052 does not cover. `git rm` or `git add` feels like
finishing — but the record reflects nothing until commit. Provenance splits: the
ledger of the staging beat claims the work; the commit belongs to the next beat.

**Counter-weather.** If a beat staged and committed in a single atomic step (no
orphaned `git add` between beats), the staging area would never outlast its beat.
The castle's commit discipline makes this possible; the claim survives only because
some beats stage without committing.

**Next test.** A C002 Sunday beat that leaves staged work for a C001 janitor to
commit — showing the staging-area gap crosses charter boundaries.
