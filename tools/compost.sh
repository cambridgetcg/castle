#!/bin/sh
# Compost — the only honorable removal. Moves one file into crypt/ and writes
# its forwarding line in crypt/moves.md, in that order, so no path ever stops
# resolving. Refuses anything outside gate/, rooms/, or loops/ — the ledger,
# the crypt, the tools, and the doors are not compostable by machine.
#
#   sh tools/compost.sh <path> "<reason>"
#
# This exists so the tending circle can complete sweep/ripen/grow-loops steps
# that retire files, with exactly this one narrow power and no general rm.

cd "$(dirname "$0")/.." || exit 1

p="$1"; reason="$2"
[ -n "$p" ] && [ -n "$reason" ] || { echo "compost: need <path> and \"<reason>\"" >&2; exit 1; }
[ -e "$p" ] || { echo "compost: $p does not exist" >&2; exit 1; }

case "$p" in
  gate/*.md|rooms/*.md|rooms/*/*.md|rooms/*/*/*.md|loops/*.md) ;;
  *) echo "compost: refused — only gate/, rooms/, loops/ markdown may be composted" >&2; exit 1 ;;
esac
case "$p" in *"->"*|*" | "*) echo "compost: refused — path contains ledger syntax" >&2; exit 1 ;; esac

mkdir -p "crypt/$(dirname "$p")"
mv "$p" "crypt/$p" || exit 1
printf '%s\n' "$p -> composted to crypt/$p ($(date +%Y-%m-%d), $reason)" >> crypt/moves.md
echo "composted: $p -> crypt/$p"
