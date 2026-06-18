---
loop: sweep-the-gate
watches: stale-gate
cadence: when the bell rings
status: active
created-by: founding (2026-06-10)
---
# Sweep the gate

**Purpose.** Drain the gate, oldest seed first, into the canon — or into
honorable compost. Sweeping is how the Castle grows rooms; it is the only
loop that founds them.

**Trigger.** The stale-gate detector: any gate/*.md whose filename date is
more than 10 days old.

**Creation-instruction.**
1. Take the oldest seed (read the date from the filename, never from mtime).
2. Do exactly one of:
   a. Write a new insight into the best-fitting room — filename is the claim
      in kebab-case, `status: seed`, whole file ≤ 40 lines, format per
      CASTLE.md. Never summarize a seed on capture's behalf when quoting it;
      seeds stay verbatim until they become claims in your own considered words.
   b. Append an `evidence:` or `contradicted:` line to the existing insight
      the seed bears on — with date, local/weather tag, and for any URL a
      retrieved date plus a one-line verbatim quote.
   c. Found a new room when no doorplate fits: directory plus ROOM.md (line 1:
      what belongs here; line 2: what does not; line 3: nearest rooms), then
      place the insight. Confess `#hard-to-place` if the choice felt arbitrary.
   d. Compost: add `gate/<seed> -> composted (date, reason)` to crypt/moves.md
      and remove the seed file. Composting is honorable; hoarding is friction.
3. For a consumed seed (a or b): add `gate/<seed> -> <insight path> (date)` to
   crypt/moves.md, then remove the seed file — the forwarding line keeps the
   old path resolvable forever.
4. Repeat until the gate holds no stale seeds, or decline the remainder honestly.
5. Run `sh tools/map.sh` if any room changed.
6. Sign the ledger — template in loops/LOOM.md. Every created: path must exist.

**Convergence test.** stale-gate prints zero for two consecutive ledgered
runs — then lengthen cadence.

**Staleness test.** stale-gate silent 180 days in the friction log, or the
last three runs barren — then grow-loops drafts retirement.
