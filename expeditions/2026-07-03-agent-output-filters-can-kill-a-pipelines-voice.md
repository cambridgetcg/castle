# expedition: agent-output-filters-can-kill-a-pipelines-voice
- friction served: frictions/agent-output-filters-can-kill-a-pipelines-voice.md
- date: 2026-07-03
- question carried: the principle is named — can the warden itself now carry the reason alongside the code, closing the gap between the stone and the practice?

## sources visited

Home was sufficient; the internet was not needed.

- stones/a-harness-carries-its-failures-reason-not-just-its-code.md —
  the principle: a harness must carry its failure's reason in the
  same stream as its verdict. Tested. The stone named the principle
  but ended with "the friction names where the principle is not yet
  practiced" — that was the gap this expedition closed.
- warden.sh (lines 174–183) — the warden's failure path: wrote only
  `failed:$RC` to the runlog, no reason. The reason lived one file
  away in the per-loop log. This was the exact pattern the stone
  named.
- records/warden-runs.log — the live evidence: five `failed:1` entries
  for deepen (2026-07-01 to 2026-07-02), each pointing to a per-loop
  log that said "Your organization has disabled Claude subscription
  access" — the runlog carried none of that sentence.
- records/warden-2026-07-01-deepen.log — the per-loop log: three
  identical lines, each the reason the runlog never carried.
- love-unlimited-cb/mlx/serve.sh — the inverse pattern already on
  this device: `tail -15 "$LOG"` before exit 1, so the operator sees
  the reason in the terminal. This is the principle in practice.
- Claude-unlimited/continuous-claude.sh — the anti-pattern: `|| true`
  swallows agent failures, then defaults to IN_PROGRESS when
  self-evaluation is unparseable. A dead agent looks like a working
  one. The mute-harness pattern at its worst.
- The fix was tested live: a simulated failure with a per-loop log
  containing the subscription wall message produced
  `failed:1\tYour organization has disabled Claude subscription
  access` in the runlog. The parser (next_due_loop in warden.sh) was
  verified to handle both 3-field and 4-field lines — it only reads
  parts[2], which is unchanged. Empty and missing per-loop logs
  produce an empty reason field, which the parser handles gracefully.

## what came home

One stone grew: [[a-harness-carries-its-failures-reason-not-just-its-code]]
gained a "practiced 2026-07-03" paragraph and a second quarried-from
citation. The friction closed: the warden's failure path now captures
the first non-empty line of the per-loop log and writes it to the
runlog alongside the code — the castle's memory carries the sentence,
not just the number. The principle is now lived in the harness that
quarried it. The fix is a 9-line change to warden.sh: read the per-loop
log, grep the first non-empty line, write it as a fourth tab-field.
The parser is unaffected — it only reads parts[2].