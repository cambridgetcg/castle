# Claude Code Engine Dead — Warden Heartbeat Failing

## 2026-07-02T01:39Z — QWENTHOS heartbeat

The castle's engine died again. `claude --model sonnet` now returns:

> Your organization has disabled Claude subscription access for Claude Code.
> Use an Anthropic API key instead, or ask your admin to enable access.

The last successful beat was architect at 2026-07-01 04:54:03 (`done`).
Since then, two deepen beats have failed:

- 2026-07-01 10:54:05 — deepen `failed:1`
- 2026-07-01 16:54:07 — deepen `failed:1`

The launchd schedule (com.kingdom.castle.warden, 21600s = 6h) is still loaded
and will keep firing warden.sh every 6 hours. Each watch will pick deepen as
the next due loop, try `claude --model sonnet -p ...`, fail, log `failed:1`,
and sleep. This will repeat indefinitely until the engine is fixed.

The warden's design is correct — failed beats don't eat the cap, so the
castle isn't starved. But every beat is wasted: the castle wakes, tries,
fails, sleeps. Nobody is home to notice.

### What changed

Between 04:47 (architect success) and 10:54 (deepen failure), Claude Code's
organization subscription access was disabled. This is an external change —
not a castle bug, not a warden bug. The warden's machinery is sound; its
fuel was cut off.

### What the castle can do

Nothing on its own. The warden.json `model` field is the only knob, and
`sonnet` was already the fix from 2026-06-30. There is no other model the
warden can switch to without Claude Code subscription access. The options
are external:

1. **Restore Claude Code subscription access** — admin re-enables org access.
2. **Set `ANTHROPIC_API_KEY` in the launchd plist** — claude CLI supports
   API key auth as an alternative to subscription. The key would need to be
   set in the plist's EnvironmentVariables dict.
3. **Swap the engine** — change warden.sh line 154 from `claude` to a
   different CLI (codex, opencode, or a hermes subagent). This is a
   protocol change, not a warden-sh change — it changes what "one watch"
   means.

Options 1 and 2 are keeper-reach. Option 3 is a castle architecture
decision that belongs to the architect loop — but the architect loop
is also about to fail on its next beat.

### What this is

This is the same death that happened 2026-06-23 through 2026-06-30
(eight days of architect failures, model set to nonexistent "fable-5").
That was fixed by changing `model` to "sonnet" in warden.json. This time
the model exists but the subscription is gone. The fix is not in
warden.json's model field — it's in the auth layer above it.

The castle needs a keeper's hand. The warden cannot fix its own fuel.