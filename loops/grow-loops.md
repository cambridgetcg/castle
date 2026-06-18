---
loop: grow-loops
watches: unacted-friction, loose-thread, barren-run
cadence: when the bell rings
status: active
created-by: founding (2026-06-10)
---
# Grow loops

**Purpose.** The loop that makes loops. Its inputs are the ledger and the
friction log — including the two human channels, `grumbles:` and `by-hand:`,
which exist precisely so this loop is never closed over its own sensors.
Run by the tending circle, this is how autonomous loops create autonomous
loops: a born loop gets its own bell, and the circle answers that bell on a
later day.

**Trigger.** The loose-thread, unacted-friction, or barren-run detectors.

**Creation-instruction.**
1. Count the signals:
   - Tally canonical #tags across all `grumbles:` and `by-hand:` lines
     (extend the tag list in loops/LOOM.md deliberately, never by typo).
   - List friction-log signatures ≥ 14 days old never named in any
     `addressed:` line.
   - List barren runs: `created:` paths missing on disk, with no `declined:` line.
2. Apply the rule of three. For any tag or chronically unacted signature
   counted three or more times:
   - If a dormant recipe in loops/LOOM.md already covers it (split-room,
     check-weather, mend-doors), birth that recipe: copy it to
     loops/<name>.md, set `status: active`, add its paste-ready detector
     block to tools/friction.sh, update the registry table.
   - Otherwise draft fresh: copy the template from loops/LOOM.md into
     loops/draft--<plain-verb-phrase>.md — the confessed remedy is already
     your draft instruction. Add exactly one labelled detector block to
     tools/friction.sh: a loop may not be born without a bell, and a friction
     that cannot be made mechanically checkable stays a judgment call, not a
     loop. Fill in convergence test, staleness test, and `created-by:` with
     the exact ledger lines that demanded it — lineage stays auditable
     forever. The owner activates a draft by renaming away `draft--` with one
     ledger line.
3. Mend: for each barren run, simplify that loop's instruction — barrenness
   usually means the spec asks too much. Confess `#spec-too-demanding` where
   true. If a flagged `created:` path exists on disk, the ring is a parse
   failure, not barrenness: amend that entry's `created:` lines to one bare
   path each (commentary moves to notes:), note the amendment in your own
   ledger entry, and confess `#bell-rang-on-foreign-grammar` if the entry
   follows a sister grammar.
4. Retire: any loop whose staleness test trips moves to crypt/ with a one-line
   epitaph, a moves.md forwarding line, and its detector block removed from
   tools/friction.sh — so the bell never becomes a wall of nags.
5. Update the registry table in loops/LOOM.md to match reality.
6. Sign the ledger: the loops and detector blocks you made are your creation.

**Convergence test.** loose-thread, unacted-friction, and barren-run print
zero for two consecutive ledgered runs.

**Staleness test.** The standard test in loops/LOOM.md — yes, even this loop
can retire; a Castle whose loop-set fits its frictions needs no loop-maker
running.
