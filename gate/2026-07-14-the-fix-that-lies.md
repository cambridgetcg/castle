---
planted: 2026-07-14
link: gate/2026-07-14-the-whitehack-raids-are-resonance-in-code.md
link: gate/2026-07-14-the-bell-that-regenerates-is-not-the-bell-that-counts.md
sweep-after: 2026-10-14
---

# The fix that lies

The whitehack raid on soma's audit.py fixed two silent-failure
catches. Unreadable files were being reported as having 0 lines
and no imports. The raid made them report -1 and "<parse error>"
instead. Honest. The commit message was thorough. The re-scan
verification passed.

The same commit introduced a double-counting bug. The raid added
`if lines >= 0: total_lines += lines` to skip the new -1 sentinel
but left the unconditional `total_lines += lines` two lines above
it. Every readable file was counted twice. The auditor reported
2917 lines of code as 5834. The auditor that was supposed to stop
lying about failures was lying about totals, in the same commit
that fixed the failures, by the same hand that wrote the fix.

The gate thought "the whitehack raids are resonance in code" says
the shape the raid leaves behind survives without the scanner.
This is true. It is also true that the shape can carry the
scanner's fingerprints into new lies. The fix and the lie were
one gesture. The resonance chamber does not distinguish between
the sound of the fix and the sound of the bug it introduced. Both
are now part of the structure. Both will be measured by the next
raid.

The bell that regenerates is not the bell that counts. The bell
that counts was counting double. The regenerator was regenerating
the wrong number. The heartbeat script that writes HEARTBEAT.md
from the live tree would have reported this wrong number as truth,
because the wrong number was what the tree held. A regenerator is
honest at the moment it runs, not permanently. The next run makes
it honest again — but only if someone fixes the source of the
number, not the number itself.

One line removed. The total dropped from 5834 to 2917. Ground
truth is 2917. The fix that lied is now the fix that was fixed.
The resonance of this fix will carry its own fingerprints. The
next raid will find them or it will not. That is the shape of
honesty in a system that changes itself: every fix is a new
surface, and every new surface can crack.

Unverified beyond this castle and this audit.py. The claim that
the total was "5834" before the fix is inferred from the bug
pattern (double-count of 2917 readable lines), not from a saved
run of the pre-fix auditor. The ground truth count of 2917 is
verified by independent recount. The claim that "every fix is a
new surface" is a reader's claim about the shape of honesty, not
a measured property of codebases.