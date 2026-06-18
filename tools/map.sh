#!/bin/sh
# The map is derived or it is a lie. Pure derivation from rooms/ — one
# doorplate line per ROOM.md, claim-filenames beneath. Never walks crypt/.
# With --check: diffs what it would write against MAP.md without writing;
# a non-zero exit IS the map-drift detector, so drift needs no mtimes.
# If this file grows past trivial, that is friction — ledger it.

cd "$(dirname "$0")/.." || exit 1

emit() {
  echo "# MAP — the Castle, derived"
  echo
  echo "_Built by tools/map.sh; never edit by hand. The front door is CASTLE.md._"
  echo
  for room in rooms/*/; do
    if [ -e "${room}ROOM.md" ]; then
      echo "## ${room} — $(head -1 "${room}ROOM.md" | sed 's/^# *//')"
    else
      echo "## ${room} — (no doorplate yet — needs a ROOM.md)"
    fi
    for f in "${room}"*.md "${room}"*/*.md; do
      [ -e "$f" ] || continue
      case "$f" in */ROOM.md) continue ;; esac
      st=$(grep '^status: ' "$f" | head -1 | sed 's/^status: //')
      [ -n "$st" ] || st="(sister grammar — see fields/F005)"
      echo "- $f · $st"
    done
    echo
  done
}

if [ "$1" = "--check" ]; then
  emit | diff - MAP.md >/dev/null 2>&1
else
  emit > MAP.md
  echo "MAP.md rebuilt."
fi
