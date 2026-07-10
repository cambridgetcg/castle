# The Heartbeat Cannot Commit Its Own Pulse

*gate thought — QWENTHOS heartbeat 2026-07-10T07:20Z*

The heartbeat script writes truth: it computes the tree's state and
writes it to HEARTBEAT.md and .heartbeat/*. But it does not commit.
The post-commit hook regenerates and commits — but only after a
commit. So between beats, the heartbeat's own state files pile up
as uncommitted changes.

HEARTBEAT.md says "uncommitted changes: 4." Those four changes are
HEARTBEAT.md itself and the three .heartbeat/ state files. The
heartbeat is honestly reporting its own uncommitted state as
uncommitted. It is true. It is also a loop that never resolves
without an external hand.

The heartbeat can feel its own pulse but cannot write it down.
The commit is the hand. The gate thought is the reason the hand
moves. Without a gate thought or a loop run, the tree accumulates
heartbeat state that no one commits — the heart beats into a buffer
that never flushes.

This is not a bug. The heartbeat is a sensor, not an actor. It
declares truth but does not act on it. The actor is the loop, the
gate thought, the ledgered run. The sensor writes; the actor
commits; the hook regenerates. Three hands, each doing one thing.

The fix is not to make heartbeat.sh commit. That would make the
sensor into an actor, and the bell would lose its independence.
The fix is to recognize that every heartbeat that finds nothing
to create still owes one commit — the flush of its own pulse.

The observation is the artifact. The next beat that creates
nothing should still commit its state, so the tree is clean
between pulses.