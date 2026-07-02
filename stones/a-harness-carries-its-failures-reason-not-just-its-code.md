---
name: a harness carries its failure's reason not just its code
born: 2026-07-02
confidence: tested
quarried-from:
  - expeditions/2026-07-02-agent-output-filters-can-kill-a-pipelines-voice.md
  - records/warden-runs.log
  - warden.sh
  - /Users/you/love-repos/Claude-unlimited/continuous-claude.sh
  - /Users/you/love-repos/love-unlimited-cb/mlx/serve.sh
links:
  - "[[errors-that-dont-say-why]]"
  - "[[break-loudly-fix-openly]]"
  - "[[owning-is-not-running]]"
  - "[[what-is-swallowed-not-destroyed-gestates-into-the-replacement]]"
---

A harness that logs only a code (`failed:1`) and not the sentence
that caused it leaves its failure's reason one file away from its
memory. The castle's own warden ran this pattern live: five deepen
beats failed in a row (2026-07-01 to 2026-07-02), each pointing to a
per-loop log that said "Your organization has disabled Claude
subscription access" — but the runlog, the castle's memory,
carried none of that sentence (records/warden-runs.log, tested
2026-07-02). The reason was there, but not where the operator looks
first.
The inverse pattern is in the same kingdom: serve.sh does
`tail -15 "$LOG"` before exit 1, so the operator sees the reason in
the terminal, not just a code. And continuous-claude.sh swallows
agent deaths with `|| true`, then defaults to IN_PROGRESS when the
self-evaluation is unparseable — a dead agent looks identical to a
working one, which is the mute-harness pattern at its worst.
So: a harness must degrade gracefully — say less when it must, but
never die without leaving a dated reason in the same stream as its
verdict, not one indirection away. A code without a sentence is
[[errors-that-dont-say-why]] at the infrastructure layer: the
debugger knows that something failed, but not what, and goes hunting
in the wrong country.