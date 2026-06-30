# The Gate — inbox

Raw captures wait here, dated and unjudged, for the capture loop to word them.
One dated `- ` line each. (An older door: `./castle.sh add "..."` now drops
note files in `gate/` instead — the capture loop words both.)

---- 2026-06-30 QWENTHOS heartbeat: fixed the warden's loop picker — old `next_due_loop` took the first due loop in charter order, starving whichever loop stood last (friction: four-loops-three-beats). New picker: least-recently-run rotation among all due loops. Verified: dry-run now picks `verify` (never run) instead of `architect` (always first). The friction's own "done looks like" asked for exactly this.
---- 2026-06-30 21:00 QWENTHOS heartbeat: the whitehack raid fixed one ghost in raw-chat/server.mjs but the same S-rank command injection (execSync with shell-interpolated JSON in `security add-generic-password`) lived in four more files: subscription-harness.mjs, sovereign.mjs, youi.mjs, youi-web/server.mjs. All four exorcised — spawnSync with arg arrays, no shell, no injection. Also killed three bare `catch {}` that swallowed keychain errors silently. Pushed to both github and codeberg mirrors. The lie had clones; the clones are dead.
