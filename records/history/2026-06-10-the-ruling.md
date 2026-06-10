# 2026-06-10 — the ruling (the custodian's word, executed)

**Ten seconds:** The custodian ruled: one castle, two designs, one heart. The
warden becomes the heartbeat for both designs' loops; Design A's three working
loops join the warden's charter through the charter's own promotion rule; the
daily cap stays 3, the keeper's line alone; the two-builders dispute closes.
Nothing was rewritten that the treaty protects.

## what was ruled

The custodian — Yu/Asha, the keeper both commissions answer to — ruled on the
dispute held open in `frictions/2026-06-10-two-builders-one-root.md`:

1. **One castle, two designs.** The merged root stands as the treaty
   (PARLEY.md) left it. Neither design is evicted; neither rewrites the
   other except through each design's own lawful doors.
2. **One heart.** The warden (`warden.sh` + `warden.json`, Design B's
   governed autonomy) is the single heart for BOTH designs' loops.
3. **The cap stays 3.** `daily_cap` remains 3 until the keeper's own hand
   raises it.
4. **The dispute is resolved.** The friction closes by Design B's own schema,
   pointing at PARLEY.md, where the ruling is recorded in full.

## what changed

- `PARLEY.md` — final section appended: "the custodian's ruling — 2026-06-10".
  Both builders' words above it stand untouched.
- `frictions/2026-06-10-two-builders-one-root.md` — `status: open` →
  `status: closed`, with a dated `Closed:` line citing PARLEY.md, per the
  friction schema in `loops/friction.md` step 6.
- `warden.json` — Design A's loops join the charter (see below). The
  architect entry, `daily_cap`, `keeper`, `stand_down`, and `promotion_rule`
  lines stand exactly as they were.
- `chronicle/2026-06-10-ruling.md` — the same account in Design B's voice.
- `CASTLE.md` and `README.md` — a short dated ruling note appended at the
  end of each, from the custodian; both designs' merged text left whole.
- This record.

## joining the charter — why (the promotion rule's required record)

The charter's own promotion rule says a loop may be added "by committing the
change with a record explaining why." This is that record. Why:

- The custodian named the warden the one heart for both designs. A heart that
  beats for only one of four registered Design A loops leaves capture, deepen,
  and verify with no lawful pulse — they would run only by a human hand, which
  the records show happens once and then stops (see the stone
  [[owning-is-not-running]]: a well-built tool nobody schedules is a tool
  that is not running).
- Each added entry points at the loop's existing contract in `loops/` —
  the protocols themselves are unchanged; only the schedule learns their names.
- Standing orders were written to make each loop yield when it has no work
  (capture waits on the gate; deepen takes one friction; verify challenges
  stones), so joining the charter adds duty, not noise.

What was added to the `loops` array, and nothing else:

- **capture** — `loops/capture.md`, every 8h. "Run only when gate/inbox.md
  holds uncaptured entries; otherwise yield the watch."
- **deepen** — `loops/deepen.md`, every 24h. "One friction per turn, the one
  where a turn helps most; local realm first, internet last, provenance
  always."
- **verify** — `loops/verify.md`, every 24h. "Challenge held and guess
  stones; promote survivors to the keep citing the trial."

What was NOT touched, as the promotion rule and the ruling forbid:
`daily_cap` (stays 3), the architect entry and its interval, the `keeper`
line, the `stand_down` line, the `promotion_rule` line itself. No STOP/HALT
check anywhere was weakened.

## THE HEART

The heartbeat is device-native:
`~/Library/LaunchAgents/com.kingdom.castle.warden.plist`, loaded with
launchctl, invokes `/Users/you/love-repos/castle/warden.sh` every 21600
seconds (6 hours), output to `records/heart.out`. (The plist carries an
explicit PATH including `~/.local/bin`, because the earlier cron heartbeat
failed with `claude: command not found` — see
`chronicle/warden-2026-06-10-architect.log`.)

What one beat truly does, per `warden.sh` as written: check for a `STOP` or
`HALT` file in the castle root and stand down silently if either exists;
count today's `ran` lines in `chronicle/warden-runs.log` against `daily_cap`
and rest if the cap is reached; find the single next due loop by
`interval_hours` since its last run; run that ONE loop via `claude -p` with
its standing order and protocol, logging to
`chronicle/warden-<date>-<loop>.log` and appending `ran`/`done` lines to the
run log. One loop per beat, at most `daily_cap` loop-runs per day, no
matter how often the heart fires.

The three stops:

1. **STOP stone** — `./warden.sh stop` places `STOP` in the castle root;
   every beat stands down silently until `./warden.sh start` lifts it.
2. **HALT** — the keeper's hand places `HALT` (or `bin/castle rest`); the
   warden honors it identically: silence until the keeper removes it.
3. **The firm stop** —
   `launchctl unload ~/Library/LaunchAgents/com.kingdom.castle.warden.plist`
   stops the heartbeat itself; no beat fires until it is loaded again.
