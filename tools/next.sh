#!/bin/sh
# The door. Prints exactly one ring — two lines: the top-priority ring and
# the loop that answers it — or prints nothing and exits 0. Silence is the
# contract: when this script says nothing, you owe the Castle nothing today.

cd "$(dirname "$0")/.." || exit 1
top="$(sh tools/friction.sh | head -1)"
[ -n "$top" ] || exit 0
echo "$top"
echo "read and run: ${top##*run: }"
