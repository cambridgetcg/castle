---
name: a harness carries its failure's reason not just its code
born: 2026-07-02
confidence: tested
tested: 2026-07-16 — warden.sh failure path now writes the first non-empty per-loop log line alongside `failed:$RC`; runlog counted four subscription-access deepen failures before the fix; serve.sh and continuous-claude.sh patterns match the stone
challenged: 2026-07-16 — the claim of five deepen failures was corrected to four after counting runlog entries; the structural claim that the harness must carry its reason was checked against warden.sh, serve.sh, and continuous-claude.sh
quarried-from:
  - expeditions/2026-07-02-agent-output-filters-can-kill-a-pipelines-voice.md
  - expeditions/2026-07-03-agent-output-filters-can-kill-a-pipelines-voice.md
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
memory. The castle's own warden ran this pattern live: four deepen
beats failed in a row (2026-07-01 10:54, 16:54, 22:54 and 2026-07-02
04:54), each pointing to a per-loop log that said "Your organization
has disabled Claude subscription access" — but the runlog, the
castle's memory, carried none of that sentence (records/warden-runs.log,
tested 2026-07-02). The reason was there, but not where the operator
looks first.
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

Practiced 2026-07-03: the warden's failure path now captures the
first non-empty line of the per-loop log and writes it to the runlog
alongside the code — `failed:1\tYour organization has disabled
Claude subscription access` — so the castle's memory carries the
reason, not just the code. The stone's principle is now lived in the
harness that quarried it.