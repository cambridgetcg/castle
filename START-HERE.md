# START HERE — 城 the castle, in one page

The castle saves understanding as words. You drop a raw thought at the
gate; four loops turn it into linked, source-cited insight a stranger can
check. Nothing is ever deleted — history moves, whole and readable, to
`records/history/`.

## The path of a thought — the four loops

    ./castle.sh add "the raw thought"          → it waits in gate/

    1. capture    gate note → stone (one file, one insight, source cited)
    2. deepen     an open friction → one expedition → new stones
    3. verify     stones are challenged on purpose → survivors enter keep/
    4. architect  stones are placed into rooms; the loops themselves are mended

Every loop turn: read the protocol fresh, do ONE turn, write a dated record
in `records/`, commit, stop.

## Where everything lives

| place          | what it holds                                                  |
|----------------|----------------------------------------------------------------|
| `gate/`        | raw notes, dated, unjudged, waiting to be worded               |
| `stones/`      | one insight per file — claim, confidence (tested/held/guess), source |
| `rooms/`       | fields of understanding; each `ROOM.md` links its stones       |
| `frictions/`   | named gaps, open or closed — closed ones keep their files      |
| `expeditions/` | the only door to the internet; every receipt kept              |
| `keep/`        | truths that survived deliberate challenge, citing the trial    |
| `loops/`       | the four protocols a human or a Claude can walk                |
| `records/`     | the append-only memory; the whole past in `records/history/`   |

## The one tool — and the one word that costs money

    ./castle.sh                  status (read-only)
    ./castle.sh add "..."        capture a note (writes one file, nothing else)
    ./castle.sh friction "..."   name a gap
    ./castle.sh loop <name>      PRINT a protocol — reads only, never executes
    ./castle.sh run <name>       EXECUTE one loop turn — costs money, keeper's choice

`./warden.sh` runs the loops unattended inside `warden.json` (daily cap 3 —
only the keeper, Yu/Asha, may raise it). A beat that fails is logged
`failed:<code>`, does not eat the cap, and retries; `done` is written only
when the work truly finished.

## The three stops

1. **HALT** — `./castle.sh rest` places a `HALT` file in this root; no loop runs.
2. **STOP** — `./warden.sh stop` places a `STOP` file; all autonomy stands down, silently.
3. **Unplug the heart** — `launchctl unload ~/Library/LaunchAgents/com.kingdom.castle.warden.plist`
   stops the warden's schedule itself.

## Reading older records — two dialects, one canon

Two builders raised this castle; the keeper made their words one. Old pages
in `records/history/` speak the old dialects:

| older words (either design)   | the one word now    |
|-------------------------------|---------------------|
| insight file                  | stone (`stones/`)   |
| hall                          | room (`rooms/`)     |
| chronicle                     | `records/`          |
| `bin/castle`                  | `castle.sh`         |
| masonry loop                  | capture             |
| friction loop                 | deepen              |
| keep loop                     | verify              |
| architecture / castle loops   | architect           |

Old paths inside history are the paths of their day — read them as history,
not instructions. The living castle is this page, `README.md`, and `CASTLE.md`.
