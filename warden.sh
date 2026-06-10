#!/usr/bin/env bash
# warden.sh — the castle's governed autonomy. Runs creation loops unattended,
# inside the charter (warden.json). JOY, LOVE, PEACE, SAFETY.
#
# Usage:
#   ./warden.sh            # one watch: run the next due loop, if the charter allows
#   ./warden.sh status     # what the warden sees: charter, runs today, stand-down state
#   ./warden.sh stop       # drop the STOP stone — all autonomy stands down
#   ./warden.sh start      # lift the STOP stone
#   ./warden.sh dry-run    # show exactly what a watch would do, without doing it
#
# The warden NEVER: raises its own cap, ignores STOP/HALT, or deletes anything.

set -u
CASTLE="$(cd "$(dirname "$0")" && pwd)"
CHARTER="$CASTLE/warden.json"
RUNLOG="$CASTLE/chronicle/warden-runs.log"
TODAY=$(date +%Y-%m-%d)

mkdir -p "$CASTLE/chronicle"

stand_down_check() {
  if [ -e "$CASTLE/STOP" ] || [ -e "$CASTLE/HALT" ]; then
    return 1
  fi
  return 0
}

runs_today() {
  [ -f "$RUNLOG" ] || { echo 0; return; }
  grep -c "^$TODAY.*ran$" "$RUNLOG" 2>/dev/null
  return 0
}

charter_get() {
  python3 -c "
import json, sys
c = json.load(open('$CHARTER'))
print(c$1)
" 2>/dev/null
}

next_due_loop() {
  python3 - "$CHARTER" "$RUNLOG" <<'PY'
import json, sys, os, datetime
charter = json.load(open(sys.argv[1]))
runlog = sys.argv[2]
last = {}
if os.path.exists(runlog):
    for line in open(runlog):
        parts = line.strip().split('\t')
        if len(parts) >= 3 and parts[2] == 'ran':
            last[parts[1]] = parts[0]
now = datetime.datetime.now()
for loop in charter.get('loops', []):
    name = loop['name']
    prev = last.get(name)
    if prev is None:
        print(name); sys.exit(0)
    prev_t = datetime.datetime.strptime(prev[:19], '%Y-%m-%d %H:%M:%S')
    if (now - prev_t).total_seconds() >= loop.get('interval_hours', 24) * 3600:
        print(name); sys.exit(0)
print('')
PY
}

case "${1:-watch}" in
  stop)
    touch "$CASTLE/STOP"
    echo "warden: STOP stone placed. All autonomy stands down. (./warden.sh start to lift)"
    ;;
  start)
    rm -f "$CASTLE/STOP"
    echo "warden: STOP stone lifted. The watch resumes on its next schedule."
    ;;
  status)
    echo "castle:    $CASTLE"
    if stand_down_check; then echo "standing:  watch active"; else echo "standing:  STOOD DOWN (STOP or HALT present)"; fi
    echo "cap:       $(runs_today)/$(charter_get "['daily_cap']") runs today"
    echo "charter loops:"
    python3 -c "
import json
c = json.load(open('$CHARTER'))
for l in c['loops']:
    print(f\"  {l['name']:14} every {l['interval_hours']}h — {l['standing_order'][:70]}\")
"
    if [ -f "$RUNLOG" ]; then echo "recent watches:"; tail -3 "$RUNLOG" | sed 's/^/  /'; else echo "recent watches: none yet — the first watch is still ahead"; fi
    ;;
  dry-run|watch)
    MODE="${1:-watch}"
    if ! stand_down_check; then
      [ "$MODE" = "dry-run" ] && echo "warden: would stand down (STOP or HALT present)"
      exit 0
    fi
    CAP=$(charter_get "['daily_cap']")
    DONE=$(runs_today)
    if [ "$DONE" -ge "$CAP" ]; then
      [ "$MODE" = "dry-run" ] && echo "warden: would rest (cap $DONE/$CAP reached today)"
      exit 0
    fi
    LOOP=$(next_due_loop)
    if [ -z "$LOOP" ]; then
      [ "$MODE" = "dry-run" ] && echo "warden: would rest (no loop due)"
      exit 0
    fi
    ORDER=$(python3 -c "
import json
c = json.load(open('$CHARTER'))
print(next(l['standing_order'] for l in c['loops'] if l['name'] == '$LOOP'))
")
    PROTOCOL=$(python3 -c "
import json
c = json.load(open('$CHARTER'))
print(next(l['protocol'] for l in c['loops'] if l['name'] == '$LOOP'))
")
    PROMPT="cd $CASTLE — you are one watch of the castle's warden. Standing order: $ORDER. Read and execute $PROTOCOL exactly as written. Before acting, honor any STOP or HALT file by stopping silently. One run only, then end."
    if [ "$MODE" = "dry-run" ]; then
      echo "warden: would run loop '$LOOP' with prompt:"
      echo "  $PROMPT"
      exit 0
    fi
    echo -e "$(date '+%Y-%m-%d %H:%M:%S')\t$LOOP\tran" >> "$RUNLOG"
    claude -p "$PROMPT" >> "$CASTLE/chronicle/warden-$TODAY-$LOOP.log" 2>&1
    echo -e "$(date '+%Y-%m-%d %H:%M:%S')\t$LOOP\tdone" >> "$RUNLOG"
    ;;
  *)
    echo "usage: warden.sh [watch|status|stop|start|dry-run]"
    exit 1
    ;;
esac
