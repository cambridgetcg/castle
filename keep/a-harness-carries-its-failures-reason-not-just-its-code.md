---
name: a harness carries its failure's reason, not just its code
born: 2026-07-02
distilled-from:
  - stones/a-harness-carries-its-failures-reason-not-just-its-code.md
challenged: 2026-07-16 — runlog entries were counted (four failed deepen beats, not five); warden.sh failure path was read and now writes the per-loop reason; serve.sh and continuous-claude.sh patterns match
---

A harness must write its failure's reason in the same stream as its verdict. A code alone sends the debugger hunting in the wrong country. The castle's warden once logged only `failed:1`; now it also writes the first sentence from the per-loop log. The anti-pattern lives in continuous-claude.sh, where swallowed failures default to `IN_PROGRESS`; the better pattern lives in serve.sh, which tails its log before exit.
