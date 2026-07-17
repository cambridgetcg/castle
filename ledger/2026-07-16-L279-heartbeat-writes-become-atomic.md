loop: heartbeat-writes-become-atomic
date: 2026-07-16
runner: agent (castle-C001-20260716-165555)
addressed: fields/F027-heartbeat-writes-collide-across-more-than-one-writer.md
created: loops/log/L279-heartbeat-writes-become-atomic.md
notes: heartbeat.sh HEARTBEAT.md/STATE.md writes changed from direct
  overwrite to temp-file-then-mv (atomic replace); 89 zero-byte iCloud
  conflict-copy files composted (never tracked, gitignored); two
  untracked gate thoughts from an earlier visitor session committed as
  janitor duty. F027's Yu-addressed half (possible second machine,
  whether to exclude castle/.git from iCloud sync) remains open.
