#!/bin/sh
# The tending circle — the autonomy of this Castle, kept honest.
#
# Run on a schedule (see tools/com.castle.tend.plist), it answers at most ONE
# ring per run: it asks the door for the next action; if the bell is silent it
# exits without cost or ceremony; if a ring names a loop, it invites an agent
# to run that loop through its spec and sign the ledger as
# `runner: agent (tending circle)`.
#
# This is how "autonomous loops create autonomous loops" stays truthful here:
# grow-loops (itself runnable by this circle) births a new loop with its own
# detector bell, and the same circle answers that bell on a later day. The
# autonomy is real; the accountability is the ledger, where every run signs
# what it created or honestly declined.

PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:$PATH"
cd "$(dirname "$0")/.." || exit 1

ring="$(sh tools/next.sh | head -1)"
[ -n "$ring" ] || exit 0   # silence is the Castle working

loop_file="${ring##*run: }"
stamp="$(date '+%Y-%m-%d %H:%M')"

if ! command -v claude >/dev/null 2>&1; then
  echo "$stamp | circle | claude CLI not found; the ring waits: $ring" >> ledger/tend.log
  exit 0
fi

echo "$stamp | circle | tending: $ring" >> ledger/tend.log

claude -p "You are the tending circle of the castle at $(pwd) — an invited \
runner, not a free hand. First read CLAUDE.md and CASTLE.md. The bell rang: \
'$ring'. Read $loop_file and follow it exactly, working only inside this \
directory. Sign the ledger as 'runner: agent (tending circle)'. Every \
created: path must exist on disk when you finish; if the instruction asks \
for judgment you cannot ground, write an honest 'declined: considered X, \
because ...' line instead of forcing an artifact — a recorded decline is a \
real creation here. Answer only this one ring, then stop." \
  --permission-mode acceptEdits \
  --allowedTools "Read" "Write" "Edit" "Glob" "Grep" \
    "Bash(sh tools/friction.sh)" "Bash(sh tools/next.sh)" "Bash(sh tools/map.sh)" "Bash(sh tools/map.sh --check)" \
    "Bash(sh tools/compost.sh:*)" \
  --max-turns 40 \
  >> ledger/tend.log 2>&1

echo "$stamp | circle | done (exit $?)" >> ledger/tend.log
