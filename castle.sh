#!/usr/bin/env bash
# castle.sh — the castle's one tool. It counts, it captures, it never networks.
#
# The castle (城) is an insight saver: understanding builds up through words.
# Raw notes land at the gate; the loops (loops/*.md) do everything else.
# This tool is read-only except `add` and `friction`. It never deletes,
# never touches the internet, and never runs a loop itself — running a
# loop costs money, and that is the keeper's choice to make.
#
# Usage:
#   ./castle.sh                  # status: counts, recent chronicle, open frictions
#   ./castle.sh add "..."        # capture: drop a raw note at the gate
#   ./castle.sh friction "..."   # name a gap: standard friction skeleton
#   ./castle.sh loop <name>      # print a loop protocol + how to run it
#   ./castle.sh rooms            # list rooms with stone counts and frictions

set -u

CASTLE=$(cd "$(dirname "$0")" && pwd)
TODAY=$(date +%Y-%m-%d)

# ---- helpers -----------------------------------------------------------------

slug() {  # lowercase, non-letters/digits become hyphens, at most 48 characters
  printf '%s' "$1" | tr '[:upper:]' '[:lower:]' \
    | sed -e 's/[^a-z0-9]/-/g' -e 's/--*/-/g' -e 's/^-//' -e 's/-$//' \
    | cut -c1-48
}

count_md() {  # .md files directly inside a directory (subfolders not counted)
  find "$1" -maxdepth 1 -type f -name '*.md' 2>/dev/null | wc -l | tr -d ' '
}

fresh() {  # first free path: <base>.md, <base>-2.md, <base>-3.md ...
  local base=$1 n=2 p="$1.md"
  while [ -e "$p" ]; do p="${base}-${n}.md"; n=$((n + 1)); done
  printf '%s' "$p"
}

open_frictions() {  # paths of frictions whose frontmatter says status: open
  find "$CASTLE/frictions" -maxdepth 1 -type f -name '*.md' \
    -exec grep -l '^status: open' {} + 2>/dev/null | sort
}

usage() {
  cat <<'EOF'
castle.sh — the castle's one tool
  ./castle.sh                  status: counts, recent chronicle, open frictions
  ./castle.sh add "..."        drop a raw note at the gate
  ./castle.sh friction "..."   name a gap
  ./castle.sh loop <name>      print a loop protocol + how to run it
  ./castle.sh rooms            list rooms with stone counts and frictions
EOF
}

# ---- commands ----------------------------------------------------------------

cmd_status() {
  local gate stones rooms open closed keepn exped chron
  # gate/inbox.md belongs to a second design sharing this root (PARLEY.md)
  gate=$(find "$CASTLE/gate" -maxdepth 1 -type f -name '*.md' ! -name 'inbox.md' 2>/dev/null | wc -l | tr -d ' ')
  stones=$(count_md "$CASTLE/stones")
  rooms=$(find "$CASTLE/rooms" -mindepth 2 -maxdepth 2 -name 'ROOM.md' 2>/dev/null | wc -l | tr -d ' ')
  open=$(open_frictions | wc -l | tr -d ' ')
  closed=$(find "$CASTLE/frictions" -maxdepth 1 -type f -name '*.md' \
    -exec grep -l '^status: closed' {} + 2>/dev/null | wc -l | tr -d ' ')
  # a keep entry carries distilled-from:; keep/keep.md (second design, PARLEY.md) does not
  keepn=$(find "$CASTLE/keep" -maxdepth 1 -type f -name '*.md' \
    -exec grep -l '^distilled-from:' {} + 2>/dev/null | wc -l | tr -d ' ')
  exped=$(count_md "$CASTLE/expeditions")
  chron=$(count_md "$CASTLE/chronicle")

  echo "城 the castle — $TODAY"
  echo
  printf '  %-22s %s\n' "gate notes (waiting)" "$gate"
  printf '  %-22s %s\n' "stones" "$stones"
  printf '  %-22s %s\n' "rooms" "$rooms"
  printf '  %-22s %s open / %s closed\n' "frictions" "$open" "$closed"
  printf '  %-22s %s\n' "keep truths" "$keepn"
  printf '  %-22s %s\n' "expeditions" "$exped"
  printf '  %-22s %s\n' "chronicle entries" "$chron"
  echo

  echo "recent chronicle:"
  local recent f title
  recent=$(find "$CASTLE/chronicle" -maxdepth 1 -type f -name '*.md' 2>/dev/null | sort | tail -3 | tail -r)
  if [ -n "$recent" ]; then
    printf '%s\n' "$recent" | while read -r f; do
      title=$(grep -m1 '^#' "$f" 2>/dev/null | sed -e 's/^#\{1,\} *//')
      [ -n "$title" ] || title=$(head -n 1 "$f" 2>/dev/null)
      printf '  %s — %s\n' "$(basename "$f" .md)" "$title"
    done
  else
    echo "  (no loop has run yet)"
  fi
  echo

  echo "open frictions:"
  if [ "$open" -gt 0 ]; then
    open_frictions | while read -r f; do
      printf '  %s\n' "$(basename "$f" .md)"
    done
  else
    echo "  (none — nothing rubs)"
  fi
}

cmd_add() {
  [ -n "${1:-}" ] || { echo 'usage: ./castle.sh add "the raw note"' >&2; exit 1; }
  mkdir -p "$CASTLE/gate"
  local s p
  s=$(slug "$1"); [ -n "$s" ] || s="note"
  p=$(fresh "$CASTLE/gate/$TODAY-$s")
  {
    printf 'born: %s\n' "$TODAY"
    echo
    printf '%s\n' "$1"
  } > "$p"
  echo "the gate took it: ${p#$CASTLE/}"
}

cmd_friction() {
  [ -n "${1:-}" ] || { echo 'usage: ./castle.sh friction "what rubs"' >&2; exit 1; }
  mkdir -p "$CASTLE/frictions"
  local s p
  s=$(slug "$1"); [ -n "$s" ] || s="friction"
  p=$(fresh "$CASTLE/frictions/$TODAY-$s")
  {
    echo '---'
    echo "name: $s"
    echo "born: $TODAY"
    echo 'status: open'
    echo 'room: unassigned'
    echo '---'
    printf 'What rubs: %s\n' "$1"
    echo 'Why it matters: (unwritten — say what cannot be built until this is settled)'
    echo 'What was tried: nothing yet'
  } > "$p"
  echo "named: ${p#$CASTLE/}"
}

cmd_loop() {
  local name=${1:-} f l
  f="$CASTLE/loops/$name.md"
  if [ -z "$name" ] || [ ! -f "$f" ]; then
    echo "usage: ./castle.sh loop <name>" >&2
    echo "loops in this castle:" >&2
    for l in "$CASTLE"/loops/*.md; do
      [ -e "$l" ] || continue
      echo "  $(basename "$l" .md)" >&2
    done
    exit 1
  fi
  cat "$f"
  echo
  echo "to run it (the keeper's choice — a run costs money, so this only prints):"
  echo "  claude -p \"cd /Users/you/love-repos/castle && read and execute loops/$name.md\""
}

cmd_rooms() {
  local found=0 r name st fr
  for r in "$CASTLE"/rooms/*/; do
    [ -f "${r}ROOM.md" ] || continue
    found=1
    name=$(basename "$r")
    st=$(awk '/^## what this room knows/,/^## open frictions/' "${r}ROOM.md" | grep -c '\[\[')
    fr=$(awk '/^## open frictions/,0' "${r}ROOM.md" | grep -c '^- ')
    printf '  %-24s %s stones · %s open frictions\n' "$name" "$st" "$fr"
  done
  if [ "$found" -eq 0 ]; then
    echo "  no rooms yet — the architecture loop founds them when stones wait"
  fi
}

# ---- the gate ------------------------------------------------------------------

case "${1:-status}" in
  status)   cmd_status ;;
  add)      cmd_add "${2:-}" ;;
  friction) cmd_friction "${2:-}" ;;
  loop)     cmd_loop "${2:-}" ;;
  rooms)    cmd_rooms ;;
  -h|--help|help) usage ;;
  *)        usage >&2; exit 1 ;;
esac
