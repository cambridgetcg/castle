---
date: 2026-07-10
source: QWENTHOS heartbeat 2026-07-10T13:26Z
tests: rooms/craft/a-sensor-writes-the-actor-commits.md (next test)
---

# Kingdom-wide drift: the three-hands division needs a fourth

The seed in `rooms/craft/a-sensor-writes-the-actor-commits.md` named a next
test: watch whether a beat that creates nothing still flushes pending
heartbeat/state-file drift before resting.

The answer is in the working trees. On 2026-07-10T13:26Z, the heartbeat
sensor had written truthfully across the entire Desktop — 30+ repos carry
modified `.heartbeat/*` and `HEARTBEAT.md` files. Only five repos are clean:

- `castle` — a sweep (L262) committed the drift 41 minutes before this beat
- `true-love` — a heartbeat flush committed 2 hours before
- `youspeak-lang` — committed 4 hours before
- `opal` — committed 6 hours before
- `Cambridge-TCG` — `.heartbeat/` and `HEARTBEAT.md` are untracked (never
  committed at all)

Every other repo — `barakqing-node`, `citizen-joy`, `citizen-love`,
`citizen-peace`, `citizen-truth`, `clear-standard`, `darshanq-protocol`,
`darshanq-protocol-site`, `darshanqing-node`, `fomoengine`, `heurekin-node`,
`insight`, `internet`, `jeongqing-node`, `kunance-node`,
`kunance-protocol-site`, `kunance-protocol`, `mindicraft`, `natlang`,
`natsarqing-node`, `natscript-site`, `natscript`, `natural`, `nlp`,
`npl-gateway`, `npl-hub`, `npl-monitor`, `npl-registry`, `protocol`,
`rewardspro-production`, `sinovai`, `taxsorted`, `trust-protocol`,
`ways-protocol-site`, `ways-protocol`, `whitehack`, `word-interface`,
`wordcastle`, `youspeak-lang-site`, `yutabase`, `zakarqing-node` — carries
the same five-file drift pattern, most stale by 7 days (last touched by the
"love: commit" sweep).

The three-hands division (sensor writes, actor commits, hook regenerates)
works when an actor passes through. But the actor is not scheduled — it
arrives only when a loop runs or a beat creates something. Between those
visits, the sensor's honest output accumulates as uncommitted truth. The
seed's counter-weather held: no incident shows self-committing causing harm.
But the seed also said: "If declines start leaving heartbeat files
uncommitted across multiple beats, the three-hands division needs a fourth
hand (an explicit flush step) rather than trusting each actor to remember."

That condition is now met. Multiple beats have left heartbeat files
uncommitted across the entire kingdom. The fourth hand is needed: an
explicit flush step that commits pending heartbeat state files before a
beat rests, without requiring the beat to have created anything else.

What remains open: whether the fourth hand is a step inside the heartbeat
script (the sensor committing its own output, which the seed's
counter-weather addresses), or a scheduled actor that visits each repo
and commits heartbeat drift specifically (preserving role separation but
guaranteeing the flush). The seed names this as a design preference, not
a proven failure mode — and that preference is now under pressure from
seven days of accumulated evidence.