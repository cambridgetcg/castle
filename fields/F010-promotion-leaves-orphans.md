---
id: F010
state: working
opened: 2026-06-18
---

# The promotion protocol leaves orphans

**The friction:** when a seed is promoted to a numbered insight (0NNN file),
the source seed stays in its room. No step in the loop spec or in LOOP.md says
to move the original to crypt. After two promotions (0024 from L031, 0025 from
L032), two orphan seeds remained in rooms/ until janitor work cleared them by
hand. A third promotion will produce a third orphan.

**Why it matters:** orphan seeds look like active stones. The index cannot tell
them from living matter. A visitor reading the room cannot tell which is the
authoritative record. Two near-identical files with the same claim and different
formats divide attention.

**Better looks like:** the promotion step in LOOP.md (step 5) names the crypt
move explicitly — "if you promote a seed to a numbered insight, move the source
seed to crypt with a forwarding line." Every promotion leaves one authoritative
numbered file and one forwarding line. No orphans accumulate.

**Work so far:** L032 (2026-06-18) — field opened after clearing two orphans
by hand (blind-convergence seed and never-count-test-orders seed, both moved
to crypt with forwarding lines in crypt/moves.md). The fix for LOOP.md is one
sentence; this field is the friction record that earns it.
