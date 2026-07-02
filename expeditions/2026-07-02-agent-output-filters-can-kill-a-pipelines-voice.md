# expedition: agent-output-filters-can-kill-a-pipelines-voice
- friction served: frictions/agent-output-filters-can-kill-a-pipelines-voice.md
- date: 2026-07-02
- question carried: what makes a harness degrade gracefully instead of going mute — say less when it must, but never die without leaving a dated reason?

## sources visited

Home was sufficient; the internet was not needed.

- stones/errors-that-dont-say-why.md — a failure that won't name its
  reason sends the debugger to the wrong country; suspect a limit before
  an outage, and make your own errors say what was refused. Tested.
- stones/break-loudly-fix-openly.md — a loud zero is worth more than a
  quiet seven; break loudly, fix openly. Tested.
- stones/owning-is-not-running.md — a tool that quietly never runs is
  one more silence where the system owed a sentence. Links to
  errors-that-dont-say-why.
- stones/the-record-outlives-the-rememberer.md — results written to a
  durable log as you go outlive the worker; the three agents who died
  mid-forge proved it. Tested.
- warden.sh — the castle's own harness. Logs `failed:$RC` to the
  runlog and points to the per-loop log file, but the runlog itself
  carries no reason — only a code. The reason lives one file away.
- records/warden-runs.log — the live case: five `failed:1` entries for
  the deepen loop since 2026-07-01. Each points to a per-loop log that
  says "Your organization has disabled Claude subscription access for
  Claude Code" — but the runlog, the castle's memory, carries none of
  that sentence.
- Claude-unlimited/continuous-claude.sh — another kingdom harness. Uses
  `|| true` to swallow agent failures, then defaults to IN_PROGRESS
  when the agent's self-evaluation is unparseable. A dead agent looks
  identical to a working one — the harness continues, but it has gone
  mute without knowing it.
- love-unlimited-cb/mlx/serve.sh — the inverse pattern: on failure,
  does `tail -15 "$LOG"` before exiting 1. The operator sees the reason
  in the terminal, not just a code.

## what came home

One stone born: [[a-harness-carries-its-failures-reason-not-just-its-code]]
(tested). Three kin stones grew reciprocal links: errors-that-dont-say-why,
break-loudly-fix-openly, owning-is-not-running. The friction was
sharpened, not closed — the general principle is now named, but the
warden itself still carries only codes in its runlog, not the reason
sentences that live one file away. The friction's "what rubs" now
names what remains: the stone names the principle, the friction names
where the principle is not yet practiced. The live case (five deepen
failures from 2026-07-01 to 2026-07-02, all subscription-access death)
is the friction's own evidence that the principle is not yet lived.