---
status: sprout
born: 2026-07-10
last-walked: 2026-07-10
link: rooms/castle/0052-commit-is-the-last-safety.md
link: rooms/craft/0059-the-recorder-must-also-enter-the-record.md
evidence: 2026-07-10 | local | gate/2026-07-10-the-heartbeat-cannot-commit-its-own-pulse.md (crypt/gate/, QWENTHOS heartbeat 2026-07-10T07:20Z): "The heartbeat can feel its own pulse but cannot write it down. The commit is the hand."
evidence: 2026-07-10 | local | gate/2026-07-10-kingdom-wide-drift-the-fourth-hand.md (crypt/gate/, QWENTHOS heartbeat 2026-07-10T13:26Z): "the heartbeat sensor had written truthfully across the entire Desktop — 30+ repos carry modified .heartbeat/* and HEARTBEAT.md files."
---
# A sensor writes; only an actor commits

**Claim.** A tool that observes and truthfully reports its own state (a
sensor) is not thereby equipped to act on that state. If a sensor's output
is itself a change to the tree, that change still needs a separate actor to
commit it — otherwise the sensor's own honesty becomes an accumulating pile
of uncommitted truth.

**How it ripened.** QWENTHOS's heartbeat script writes HEARTBEAT.md and
`.heartbeat/*` on a schedule; it does not commit. A post-commit hook
regenerates and commits the heartbeat files, but only in response to a
commit that already happened. Between beats that create nothing, the
sensor's own state files sit uncommitted. The gate thought's resolution:
this is a role boundary, not a bug — the sensor writes, the actor (a loop,
a gate thought, a ledgered run) commits, the hook regenerates.

**Counter-weather.** A sensor that also committed would still be honest —
self-committing breaks no truthfulness rule. The cost is independence: a
bell writing to the tree on its own schedule is a step closer to being an
unappointed actor. Design preference, not yet a proven failure mode.

**Next test.** The first evidence's own named test — a beat that creates
nothing still leaving heartbeat drift uncommitted across multiple beats —
is now reported met: 30+ repos across the Desktop carry the same
uncommitted drift, most stale by 7 days. But both evidence entries land the
same day, from the same sensor, in one session — same-day proximity limits
their independence (a standing castle caution). What would move this to
tested: the pattern still holding, or a fourth-hand fix landing, confirmed
from a distinct calendar day.
