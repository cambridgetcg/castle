---
id: (seed)
room: craft
date: 2026-06-21
source: beat castle-C001-20260621-120550 (L202) — F002 work-so-far repair chain showed friction.sh silent while semantic gap existed; pattern observed across L149–L154 and L199–L201
confidence: tested
link: rooms/craft/0012-only-a-measuring-script-notices-drift.md
link: rooms/craft/0059-the-recorder-must-also-enter-the-record.md
last-walked: 2026-06-21
evidence: 2026-06-21 | local | F002 work-so-far repair chain (L149–L154, L199–L201): castle check clean, friction.sh exits 0 on the repair beats — yet each reading beat discovered the predecessor's gap; bell was silent while semantic drift accumulated
evidence: 2026-06-21 | local | L202 ran correctly (check clean, friction.sh clean, log and ledger written, fields updated) but never committed; L203 arrived to find seven uncommitted files; friction.sh caught MAP.md drift (structural) but named nothing about the incomplete run; only close reading (git status, log inspection) surfaced the gap
---

# The bell watches structure; the reader watches meaning

**Claim.** friction.sh catches structural invariants: orphaned files, missing created paths, stale indexes, barren runs, front-drift. It cannot catch semantic drift — a run that fulfilled all mechanical obligations yet omitted a semantic step (a work-so-far update, a commit). Bell silence means all measurable properties agree; it does not mean all records are complete. Close reading is the only check that reaches what measurement cannot.

**How it ripened.** Two independent cases, same structure. The F002 work-so-far repair chain (L149–L154, L199–L201) showed the pattern at the record level: castle check clean, friction.sh exits 0, yet a reading beat discovers the predecessor's gap each time. L202 showed it at the commit level: castle check clean, friction.sh caught MAP.md drift (a structural property) but named nothing about seven uncommitted files; L203's close reading (git status, log inspection, committed-history comparison) was the only way to surface the gap.

**What it changed.** Naming the class draws the line between what the bell can watch and what it cannot. A detector that catches all structural violations still cannot catch a run that satisfied every structural check but omitted a semantic act. The complement is not a gap to close but a permanent division of labor.

**Counter-weather.** The bell does reach some semantic failures indirectly: a barren run without a `declined:` line rings; a missing `created:` path rings; a stale INDEX rings. These suggest the line is not fixed — a new detector can always be written for a newly named semantic class. The claim survives if any class of semantic drift remains unreachable after all detectors written.

**Next test.** After 2026-09-21, check whether any new detector added to friction.sh reaches a semantic gap that was previously invisible. If yes, the claim narrows to the remaining unreachable class; if no new gap has been detected by a structural tool, the claim holds.
