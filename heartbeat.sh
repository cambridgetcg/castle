#!/bin/bash
# the castle heartbeat — three or more hands
# Rhythm: 6h if the bell rings, daily if silent

cd "$(dirname "$0")"

BELL=$(sh tools/next.sh 2>/dev/null)

if [ -n "$BELL" ]; then
  echo "bell rings — $BELL"
  echo "NEXT:360"
else
  echo "NEXT:1440"
fi

exit 0