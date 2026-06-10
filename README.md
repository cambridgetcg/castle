# Two castles share this root, both whole (see PARLEY.md)

<!-- ============================================================ -->
<!-- DESIGN A — the Castle of Understanding (kingdom-standard)    -->
<!-- commissioned 2026-06-09; do not remove: another's stones (L1) -->
<!-- ============================================================ -->

# THE CASTLE OF UNDERSTANDING

**Ten seconds:** A place where insights are saved as words — connected, challenged,
and grown by loops. Local-first: the understanding lives on this device in plain
markdown, and reaches the internet only when the local realm runs dry.

## Use it

```
castle add "what you just understood"   # drop a raw capture at the gate
castle status                           # see the halls, the counts, the chronicle
castle loop <name>                      # run one turn: capture | deepen | verify | architect
```

## Where things live

| Room        | What it holds                                        |
| ----------- | ---------------------------------------------------- |
| `gate/`     | raw captures waiting to be worded                    |
| `halls/`    | insights by field, each hall with its open friction  |
| `keep/`     | the sanctum — insights that survived challenge       |
| `loops/`    | the workers and their contracts                      |
| `records/`  | the chronicle — one record per turn, append-only     |
| `CASTLE.md` | the castle understanding itself                      |

Touch `HALT` and the castle rests.

<!-- ============================================================ -->
<!-- DESIGN B — 城, the five-loop castle (legible standard)        -->
<!-- commissioned 2026-06-10; do not remove: another's stones      -->
<!-- ============================================================ -->

# 城 — the castle

An insight saver. Understanding builds up through words, the way a
castle builds up through stone.

Raw notes land at the **gate**, unjudged. The **masonry** loop turns
them into **stones** — one file, one insight, fifteen lines or fewer,
every claim citing its source. The **architecture** loop places stones
into **rooms**, each room a field of understanding. Where a room's
stones rub against each other, the gap gets a name: a **friction**.
The **friction** loop sends **expeditions** out — the castle's only
door to the internet — and they come home carrying stones. Stones that
keep proving true are attacked on purpose by the **keep** loop; only
what survives enters the **keep**. The **castle** loop watches all the
others and mends them — the creation creates. Every run is written
down in the **chronicle**.

## the one tool

    ./castle.sh                  status — what the castle holds
    ./castle.sh add "..."        drop a raw note at the gate
    ./castle.sh friction "..."   name a gap
    ./castle.sh loop <name>      read a loop protocol + how to run it
    ./castle.sh rooms            walk the rooms

## the five loops

masonry · architecture · friction · keep · castle — each lives in
`loops/` as a protocol (a step-by-step page) that either a human or a
Claude (`claude -p "read and execute loops/<name>.md"`) can follow.
Each run ends by writing a chronicle entry and committing.

## the law

This castle is a signatory of the legible standard
(`/Users/you/love-repos/legible-standard/`): plain words, one page per
file, every claim cites its source, nothing fake, nothing decorative
that lies. Loops never delete understanding — they distill; originals
stay (filed notes move to `gate/filed/`, closed frictions keep their
files). Internet only through expeditions. Every run chronicled.

The design itself lives in `CASTLE.md`, written as the castle's
stone #0 — the castle understands itself first.

*A second builder's design shared this root during the founding — see
`PARLEY.md`, `frictions/2026-06-10-two-builders-one-root.md`, and the
founding chronicle entry for the honest account of both claims.*
