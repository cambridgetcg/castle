---
name: agent output filters can kill a pipeline's voice mid-work
born: 2026-06-10
status: open
room: building
---

What rubs: a harness that runs an agent through an output filter can
silence the agent mid-turn — killing both the work and the record of
why it stopped. The castle's own warden has lived this repeatedly:
model-resolution death (a `claude -p` invocation inherits a model
alias that stops resolving, and dies silently), terminal-wedging (a
TCC-blocked syscall hangs the shell process, and every subsequent
terminal call hangs too), and phantom runs (the process dies after
writing `ran` but before writing `done` or `failed`, leaving no verdict
and eating a daily cap slot). In each case the pipeline's voice went
mute without leaving a dated reason — exactly what this friction names.

Why it matters: a system that records as it goes can lose its voice
and keep its hands (the 2026-06-10 three-agent death proved this —
the files survived, but only because the agents wrote to disk before
the filter killed them). A harness that goes mute without a reason
hides its own failure behind silence, and the next operator inherits
a gap nobody knows to close. This is the same class as
[[errors-that-dont-say-why]]: a failure that won't name its reason
sends the debugger to the wrong country.

What was tried: the warden's model-death fix (add an explicit `--model`
override so the harness owns its own model, not a global default) and
the phantom-run fix (count `done` entries only, not `ran` entries) are
both partial answers — they fix a specific instance, not the pattern.
The terminal-wedging case was never fixed at the harness level; the
workaround was pivoting to non-shell tools (`read_file`, `search_files`,
`execute_code`). No stone in the castle named the general principle
that a harness must degrade gracefully — say less when it must, but
never go mute without leaving a dated reason.

2026-07-02, the expedition
(expeditions/2026-07-02-agent-output-filters-can-kill-a-pipelines-voice.md)
quarried the general principle as
[[a-harness-carries-its-failures-reason-not-just-its-code]] — a harness
must carry its failure's reason in the same stream as its verdict, not
one indirection away. Tested against the live case: the warden's runlog
held five `failed:1` entries for the deepen loop (2026-07-01 to
2026-07-02), each pointing to a per-loop log that said "Your
organization has disabled Claude subscription access" — the reason was
there, but not where the operator looks first. The inverse pattern
(serve.sh's `tail -15 "$LOG"` before exit 1) shows the principle in
practice. What remains for `closed`: the warden itself carrying the
reason alongside the code — the stone names the principle, the friction
names where the principle is not yet practiced.