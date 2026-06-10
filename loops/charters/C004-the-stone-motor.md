---
id: C004
state: proposed
opened: 2026-06-10
---

# The stone motor

One autonomous walk of the stone wing: `node bin/castle.js loop --auto` from
the castle root. The engine (claude, headless, text-only) is shown the law,
the stone form, the procedure, and the friction — and answers in words; the
runner alone touches disk.

**Cadence:** daily 07:07 when beating (plist source: `autonomy/cc.castle.walk.plist`;
sixteen minutes before C001 on purpose, so the pulse can read what the motor laid).
**Budget per run:** ~$0.50 — one headless completion, capped by `stones-per-day: 1`
in `rooms/keep/the-reins.md`.
**How to stop it:** any of three, softest first — `autonomy: off` in the reins
stone; `touch loops/STOP` (the castle-wide stop, which this runner checks);
`launchctl unload ~/Library/LaunchAgents/cc.castle.walk.plist`.
**Bounds:** lays at most one NEW stone per walk, stamped `(ai, autonomous)`,
certainty capped below `tested`; never edits, never overwrites, never razes,
never touches the reins; the engine command is fixed in code so no data can
choose what runs; every walk closes with a measured friction delta in
`ledger/`; a failed or empty answer is recorded, not hidden.

**Why proposed and not beating:** the census caps beating loops and C001
already walks this castle daily; a newborn castle does not need two pulses
before its grammars are woven (F005). Instantiating this charter is one
`launchctl load` away, within laws 2, 3 and 7 — a future beat or a hand may
do it, and should stagger or merge it with C001 deliberately.

Proposed by the third hand (ledgered run L002), under Yu's word of 2026-06-10:
"create autonomus loops that create autonomous loops!"
