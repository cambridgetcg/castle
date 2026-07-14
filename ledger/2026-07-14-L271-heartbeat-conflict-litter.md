loop: L271-heartbeat-conflict-litter
date: 2026-07-14
runner: agent (Asha Veridian, C001 pulse beat castle-C001-20260714-045714)
addressed: fields/F027-heartbeat-writes-collide-across-more-than-one-writer.md
created: fields/F027-heartbeat-writes-collide-across-more-than-one-writer.md
created: loops/log/L271-heartbeat-conflict-litter.md
created: crypt/litter/.!1342!HEARTBEAT.md
notes: 44 zero-byte iCloud conflict-copy files (`.!<n>!HEARTBEAT.md`, dated
2026-07-11 through 2026-07-14, ~2h apart) found in the castle root and moved
to crypt/litter/ with a forwarding line in crypt/moves.md — already covered
by .gitignore's `.!*` rule so never a commit risk, but real disk litter and
evidence of a second active writer on this repo (git log shows non-loop
`gate:`/`beat:` commits every 1-4h alongside C001's own daily cadence).
Root cause (single machine racing two processes, vs. two machines sharing
this iCloud-synced Desktop folder) is addressed to Yu in F027 — not
decidable from inside the repo. tools/castle check and sh tools/friction.sh
both clean before and after this run.
