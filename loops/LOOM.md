# The loom — where loops are registered, templated, and born

## The stone template (one insight per file, ≤ 40 lines, filename = claim)

    ---
    status: seed | sprout | tested | cornerstone
    born: 2026-06-10
    last-walked: 2026-06-10          # "(unverified, offline)" halves the allowance
    front: public                    # only if the owner shows it to the world
    link: rooms/<room>/<claim>.md    # one per line
    evidence: 2026-06-10 | local | what showed it
    evidence: 2026-06-10 | weather | <url> (retrieved 2026-06-10) "verbatim quote"
    contradicted: 2026-06-10 | what broke it     # only when it happens
    ---
    # The claim, restated as a sentence

    **Claim.** **How it ripened.** **What it changed.** (required at tested+)
    **Counter-weather.** **Next test.** — five short bold-led paragraphs.

## The ledger entry (one file per run: ledger/YYYY-MM-DD-<loop>.md)

    loop: <name>
    date: 2026-06-10
    runner: owner | agent (who invited it)
    addressed: <any words, as long as they name the ring's path>
    created: <one bare path per line — annotations go in notes:>
    declined: considered <X>, because <...>     # an honest decline IS the creation
    notes: <anything else — grumbles (#tags) and by-hand confessions live here too>

    Absent lines mean none. The bell checks two things only: every created:
    path exists, and an addressed: line names the ring's path. Everything
    else is for the reader, not the machine.

## Registry

| loop | watches | cadence | status | created-by |
|---|---|---|---|---|
| sweep-the-gate | stale-gate | when the bell rings | active | founding (2026-06-10) |
| ripen | missing-rent, thin-cornerstone (changed evidence is a runner's judgment, not a bell) | when the bell rings | active | founding (2026-06-10) |
| walk | unwalked, orphan, oversize | when the bell rings | active | founding (2026-06-10) |
| grow-loops | unacted-friction, loose-thread, barren-run | when the bell rings | active | founding (2026-06-10) |
| publish-the-front | front-drift | when the bell rings | active | owner's command (2026-06-10) |
| split-room | crowded-room | — | dormant | recipe below |
| check-weather | weather-starved | — | dormant | recipe below |
| mend-doors | broken-door | — | dormant | recipe below |

The Castle is born with four loops and earns every further one: three matching
recorded frictions (the rule of three) birth a loop through grow-loops. A loop
may not be born without a bell — exactly one new labelled detector block goes
into tools/friction.sh with it. Loops whose staleness test trips are retired
to the crypt with an epitaph and their detector block removed; retirement is a
real, exercised path, so the bell never becomes a wall of nags.

## The loop template (grow-loops copies this when birthing a loop)

    ---
    loop: <plain-verb-phrase — a newcomer must know what it does from the name>
    watches: <detector name(s)>
    cadence: when the bell rings
    status: draft
    created-by: grow-loops run of YYYY-MM-DD, demanded by: <the exact ledger lines>
    ---
    # <verb phrase, restated>

    **Purpose.** One sentence.
    **Trigger.** The mechanical predicate (quote the detector block).
    **Creation-instruction.** Numbered steps in imperative second person.
    The final step is always: sign the ledger, listing every created path.
    **Convergence test.** The watched detector prints zero for two consecutive
    ledgered runs — then lengthen cadence.
    **Staleness test.** The detector is silent 180 days in the friction log,
    or the last three runs were barren — then grow-loops drafts retirement.

## Canonical grumble tags

Runners pick from this list or deliberately extend it with one ledger line —
three spellings of one annoyance must not starve the meta-loop.

    #fixed-dead-link     a link pointed nowhere and you mended it by hand
    #hard-to-place       a seed fit no room and the choice felt arbitrary
    #gate-overflow       the gate held more than ten seeds when you arrived
    #map-confusion       the map did not get you to the claim in two hops
    #went-looking-outside  you left the castle for evidence outside any loop
    #ledger-tedium       signing the ledger felt heavier than the work itself
    #spec-too-demanding  a loop asked more than the friction was worth

## Dormant recipes (grow-loops births these before drafting fresh)

### split-room — watches: crowded-room
Paste-ready detector block for tools/friction.sh:

    # crowded-room — a room holding more than 12 insights, or nesting past room/wing
    for r in rooms/*/ rooms/*/*/; do
      [ -d "$r" ] || continue
      n=$(ls "$r" 2>/dev/null | grep -c '\.md$')   # n includes ROOM.md, so -gt 13 means >12 insights
      [ "$n" -gt 13 ] && echo "crowded-room | $r | run: loops/split-room.md"
    done
    for d in rooms/*/*/*/; do
      [ -d "$d" ] && { echo "crowded-room | depth past room/wing ($d) | run: loops/split-room.md"; break; }
    done

Instruction core: read the crowded room's 13+ claims and find the natural
seam. Create exactly one wing (directory plus ROOM.md); depth never exceeds
room/wing. Rewrite both doorplates, move the files, one crypt/moves.md
forwarding line per move, run tools/map.sh, sign the ledger listing every path.
Humans never mkdir inside rooms/ outside this loop.

### check-weather — watches: weather-starved
Paste-ready detector block (no network in tools — the detector only reads dates;
the LOOP, run by someone online, does the going-outside):

    # weather-starved — the newest | weather | evidence anywhere is older than 30 days
    newest=$(grep -rh "^evidence: .* | weather | " rooms/ 2>/dev/null | cut -c11-20 | sort | tail -1)
    [ -n "$newest" ] && [ "$(days_since "$newest")" -gt 30 ] \
      && echo "weather-starved | rooms/ | run: loops/check-weather.md"

Instruction core: online — consume gate/weather-queue.md first, oldest
question first; then take the oldest-weathered tested or cornerstone insight
to the internet and search for confirming AND disconfirming sources; append
`evidence: ... | weather |` entries carrying URL, retrieved date, and a
one-line verbatim quote; drop every surprise as a dated seed in gate/.
Offline — append the questions you would have asked to gate/weather-queue.md;
still a creation, so the run is never barren. The internet is weather: useful
when present, never structural. Sign the ledger.

### mend-doors — watches: broken-door
Paste-ready detector block:

    # broken-door — a link whose target is missing and has no forwarding line in crypt/moves.md
    grep -rh "^link: " rooms/ 2>/dev/null | sed 's/^link: //' | sort -u | while read -r p; do
      [ -e "$p" ] && continue
      grep -q "^$p ->" crypt/moves.md 2>/dev/null || echo "broken-door | $p | run: loops/mend-doors.md"
    done

Instruction core: for each dead link, rewrite it to the new path recorded in
crypt/moves.md; if no forwarding line exists, write one first, then rewrite;
if the target is truly gone, annotate the link with a tombstone pointer —
never link a living room into the crypt directly. Run tools/map.sh, sign the
ledger listing every mended file. This recipe is the loom's worked example:
it is born when #fixed-dead-link confessions reach three — and the grumble
disappearing from future ledgers is how you will know the meta-loop works.
