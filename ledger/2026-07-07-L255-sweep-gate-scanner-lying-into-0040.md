loop: sweep-the-gate
date: 2026-07-07
runner: agent (castle-C001-20260707-030551)
addressed: stale-gate | gate/2026-06-26-scanner-lying-about-accuracy.md | run: loops/sweep-the-gate.md
created: fields/F002-the-castle-is-newborn.md
created: loops/log/L255-sweep-gate-scanner-lying-into-0040.md
created: crypt/gate/2026-06-26-scanner-lying-about-accuracy.md
created: INDEX.md
notes: Editing 0040 (front: public) introduced a front-drift ring this run
  had to close: ran node tools/publish-front.mjs against tools/front-target
  (the Cambridge-TCG storefront worktree, present on this machine), which
  republished all 5 front:public stones including the updated 0040. That
  write happened in the storefront working tree, not this repo, so it is
  not part of this repo's commit; per loops/publish-the-front.md step 5 the
  commit/push in that repository is the owner's act, not this run's. Janitor duty first (not part of this loop's own creation, but fixed
  before it): L254's narrative log was missing its frontmatter block (every
  other loops/log/*.md has one) — added it, reading beat id and loop name
  from ledger/2026-07-06-L254-unwalked-unacted-friction-phantom-fix.md.
  INDEX.md was stale — reran tools/castle map. castle check was clean before
  this run's own work started.
  This run's creation: the one stale-gate seed restated
  rooms/craft/0040-a-lying-artifact-is-its-own-top-finding.md's claim (a
  scanner that labels false positives "high confidence" is a lying artifact
  about its own accuracy), so it was folded in as a new evidence: line
  rather than founding a duplicate insight. Seed moved to crypt/gate/ with a
  forwarding line in crypt/moves.md.
  Pre-existing rings not touched by this run (named, not fixed): several
  unacted-friction | barren-run signatures on old ripen-run ledger entries
  and two publish-the-front barren-runs referencing a path outside this
  repo (/Users/you/Desktop/Cambridge-TCG/...); one unacted-friction | orphan
  on rooms/craft/execution-and-data-environments-are-separate-concerns.md;
  one unacted-friction | missing-rent on rooms/becoming/0056; one oversize
  on rooms/craft/a-resolved-path-is-its-own-addressed-line.md. All predate
  this run and are grow-loops'/walk's domain, not sweep-the-gate's.
