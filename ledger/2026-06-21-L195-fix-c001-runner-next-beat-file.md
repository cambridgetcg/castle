loop: L195 — fix: C001 hermes runner next-beat file
date: 2026-06-21
runner: agent (castle-C001-20260621-093341)
addressed: fields/F019-c001-runner-uses-shared-next-beat.md
created: loops/log/L195-fix-c001-runner-next-beat-file.md
notes: ~/.hermes/scripts/castle-pulse-runner.sh updated to gate on loops/next-beat-C001 instead of loops/next-beat. This file is outside the castle repo; it is not tracked by castle check but the change is noted here. F019 state moved from open to working. loops/next-beat remains as a legacy file with no readers; crypt move deferred.
