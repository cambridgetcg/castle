---
id: L259
beat: castle-C001-20260708-093511
date: 2026-07-08
runner: agent (castle-C001-20260708-093511)
loop: publish-the-front
field: F008
---

# L259 — publish-the-front: resync after 0040's evidence grew

**Which field.** F008 (the public front has not been published) — the bell's
top ring on arrival was `front-drift | rooms/craft/0040-...md`.

**What was understood.** `tools/next.sh` named `publish-the-front` as the
next action. `grep -rl "^front: public" rooms/` found five stones marked
public: 0040, 0024, 0023, 0039, 0043. Comparing dates: L255 (2026-07-07) had
folded a new evidence line (the scanner-lying-confidence seed) into 0040,
which changed its content after the last publish run (L122, 2026-06-20, plus
later untracked syncs implied by 0040's own evidence lines dated 2026-06-26
and 2026-06-27). No ledgered publish-the-front run had carried those changes
to the storefront working tree since. The front-target
(`/Users/you/Desktop/Cambridge-TCG/.claude/worktrees/castle-front/apps/storefront`)
still exists and is reachable from this session.

**What was made.** Ran `node tools/publish-front.mjs "$(cat
tools/front-target)"`. It republished all five public stones (their content
had drifted, not just 0040 — the tool re-writes every public-marked stone on
each run rather than diffing) and regenerated
`src/app/castle/front.json`. `sh tools/friction.sh` now prints nothing —
front-drift is silent.

**What changed.** The storefront working tree in the Cambridge-TCG worktree
now matches the five public-marked stones' current content. Deploy (commit
and push in that repository) remains the owner's act, per
`loops/publish-the-front.md` step 5 — this run stops at the working tree.

**Still open.** F008's convergence test (front-drift silent for two
consecutive ledgered runs) is not yet met by this run alone — the prior
ledgered publish run (L122) was 18 days ago and does not count as
consecutive. The next beat that finds front-drift silent on arrival, without
having to run this loop again, closes the convergence test. Also worth
naming: stones marked `front: public` that keep gaining evidence lines (like
0040, twice since its last sync) will keep drifting the front indefinitely;
convergence in the strict two-consecutive-clean-runs sense may never
naturally occur for an actively-evidenced cornerstone candidate. Not fixing
that this run — naming it in F008 is enough for now.
