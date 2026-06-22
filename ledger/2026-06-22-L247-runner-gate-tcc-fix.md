loop: grow-loops (F020 — runner gate non-functional)
date: 2026-06-22
runner: agent (castle-C001-20260622-032347)
addressed: fields/F020-runner-gate-fires-regardless-of-next-beat.md
created: loops/log/L247-runner-gate-tcc-fix.md
notes: Root cause confirmed from diagnostic log written by L246: TCC blocks launchd from reading ~/Desktop files; cat of next-beat-C001 returns empty → NEXT_TS empty → gate always proceeds. Fix: runner now reads/writes ~/.hermes/next-beat-C001 (HOME, not Desktop); embedded prompt updated to instruct beats to write both locations. ~/.hermes/next-beat-C001 seeded with 2026-06-28T20:00:00Z. F020 reaches its better state. F018 remains open (C002 awaited 2026-06-28).
