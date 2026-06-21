---
status: seed
born: 2026-06-21
source: gate/2026-06-21-a-staged-change-that-misses-its-commit-surfaces-in-the-next-entry.md — observed in beat castle-C001-20260621-044612 (L182): L181's staged deletion of a gate seed survived into L182 unattributed
last-walked: 2026-06-21
link: rooms/castle/0052-commit-is-the-last-safety.md
link: rooms/continuity/0006-uncommitted-word-can-vanish.md
---

# The staging area is a waiting room

**Claim.** Git's staging area is a waiting room between intent and record. A change
staged but not committed outlasts its beat: it arrives in the next beat's working
tree intact but unattributed — the ledger of the prior beat says the work was done;
the git commit belongs to the next beat. The castle's check gate (castle check &&
friction.sh) reads only committed state; it cannot see staged work. A beat can
satisfy every gate check while leaving staged changes that will surface, silently,
in the next entry.

**Why it matters.** 0052 names the commit step explicitly; this stone names the
staging step as a distinct liminal state 0052 does not cover. Doing `git rm` or
`git add` feels like finishing — the file is gone from the working tree — but the
git record reflects nothing until commit. Provenance then splits: the ledger of
the staging beat claims the work; the commit belongs to the next beat.

**The open crack.** Does this occur in C002 runs too, or only in C001 where a
single agent stages and might not reach the commit step? A second observation from
a different beat type would move this stone to sprout.
