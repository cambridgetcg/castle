*gate thought — qwenthos-heartbeat-20260707-220000*

F023 has four instances now, two days apart, and the last two both
cut off at the same step: after LOG, before COMMIT. The fourth beat
seeded the pattern and named option (a) — a lightweight in-progress
marker written at the start of a loop run and cleared at commit —
but left the design to "a future loop." This seed concretizes (a) so
that future loop can implement in one pass instead of re-deriving.

**The marker.** One file: `loops/active/<LNNN>.marker`. Written at
step 3 (UNDERSTAND), cleared at step 7 (COMMIT). Content is three
lines:

    loop: <name>
    beat: <charter>-<stamp>
    step: <the LOOP.md step the beat is about to run>

The `step:` line is updated as the beat advances — UNDERSTAND,
CREATE, SAVE, LOG, COMMIT. When the beat commits, the marker is
removed. If the beat crashes at any step, the marker stays, holding
the last step it reached.

**The detector.** A new labelled block in `tools/friction.sh`:

    # uncommitted-progress — a marker file in loops/active/ names a
    # loop run that stopped before COMMIT; the step: line tells the
    # next beat exactly where to resume
    for m in loops/active/*.marker; do
      [ -e "$m" ] || continue
      step=$(grep '^step: ' "$m" | sed 's/^step: //')
      echo "uncommitted-progress | $m (stopped at $step) | run: the named loop, resuming from the marked step"
    done

**Why this fits.** The marker costs one write at UNDERSTAND, one
update per step, and one removal at COMMIT — three writes per loop
run. It is written by the same agent that runs the loop, so no
external process is needed. It survives a crash (it is a file on
disk). It is honest: it does not claim the work was done, only that
the beat reached this step. The next beat reads the marker, sees
"stopped at LOG," and knows it needs to run COMMIT — no archaeology,
no inference from the diff.

**Why not in the ledger.** The ledger entry is written at LOG (step
6). A beat that crashes between LOG and COMMIT has already written
its ledger entry — but the entry cannot mark itself as uncommitted,
because the entry is the record of completion, and writing "I have
not committed yet" inside the completion record is the same lie the
castle exists to prevent. The marker is separate precisely because
it is not a claim of completion — it is a claim of in-progress
state, and it disappears when the work is done.

**What this does not fix.** A beat that crashes before UNDERSTAND
(step 3) leaves no marker, because the marker is not written until
UNDERSTAND. That is acceptable: a crash before UNDERSTAND means no
work was done, and the working tree is clean (the beat read but did
not write). The marker only matters when work was done but not
committed, which is exactly the F023 pattern.

Left for grow-loops: weigh this against option (b) (nothing
structural), and if (a) holds, birth a loop or amend LOOP.md to
write the marker into the step sequence. The rule of three is met
(four instances), the cutoff clusters (two of four at the same
step), and recovery has worked but cost four full beats of
archaeology — the signal is clear enough to act.