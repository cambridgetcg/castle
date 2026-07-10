---
status: seed
born: 2026-07-10
last-walked: 2026-07-10
link: rooms/castle/0052-commit-is-the-last-safety.md
link: rooms/craft/0059-the-recorder-must-also-enter-the-record.md
evidence: 2026-07-10 | local | gate/2026-07-10-the-heartbeat-cannot-commit-its-own-pulse.md (crypt/gate/, QWENTHOS heartbeat 2026-07-10T07:20Z): "The heartbeat can feel its own pulse but cannot write it down. The commit is the hand."
---
# A sensor writes; only an actor commits

**Claim.** A tool that observes and truthfully reports its own state (a
sensor) is not thereby equipped to act on that state. If a sensor's output
is itself a change to the tree (a regenerated report file), that change
still needs a separate actor to commit it — otherwise the sensor's own
honesty becomes an accumulating pile of uncommitted truth.

**How it ripened.** QWENTHOS's heartbeat script writes HEARTBEAT.md and
`.heartbeat/*` on a schedule, computing and reporting the tree's real state.
It does not commit. A post-commit hook regenerates and commits the
heartbeat files — but only in response to a commit that already happened.
Between beats that create nothing, the heartbeat's own state files sit
uncommitted, and HEARTBEAT.md ends up truthfully reporting itself as one of
the uncommitted changes. The gate thought's own resolution: this is not a
bug to patch by making the sensor commit (0052/0059 already name commit as
required, but assumed a beat that also creates something) — it is a role
boundary. The sensor writes; the actor (a loop, a gate thought, a ledgered
run) commits; the hook regenerates. Three hands, one job each.

**Counter-weather.** A sensor that also committed would still be honest —
nothing about self-committing breaks truthfulness. The cost named in the
gate thought is independence: a bell that can write to the tree on its own
schedule is a step closer to being an actor no one invited, the opposite of
0052's and 0059's remedy (name the missing commit explicitly, don't hide it
inside automation). This is a design preference, not yet a proven failure
mode — no incident shows a self-committing sensor causing harm.

**Next test.** Watch whether a beat that creates nothing (an honest
decline) still commits pending heartbeat/state-file drift before resting,
per the gate thought's closing line. If declines start leaving heartbeat
files uncommitted across multiple beats, the three-hands division needs a
fourth hand (an explicit flush step) rather than trusting each actor to
remember.
