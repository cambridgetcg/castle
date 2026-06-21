---
status: tested
born: 2026-06-21
last-walked: 2026-06-21
link: rooms/castle/0046-an-autonomous-pulse-makes-growth-unconditional.md
evidence: 2026-06-21 | local | C002 exited 126 (TCC block) when its runner lived in ~/Desktop; fix moved runner to ~/.hermes/scripts/; castle data in ~/Desktop/castle unaffected; block cleared (L194)
evidence: 2026-06-21 | local | C001 hermes runner already split execution from data by the same pattern; both beating loops now operate this way by deliberate design
---
# Execution and data environments are separate concerns

**Claim.** A process's execution environment and its data environment answer to different authorities; a constraint on the execution side does not automatically reach the data side.

**How it ripened.** macOS TCC (Transparency, Consent, and Control) blocked launchd from running scripts in ~/Desktop — symptom: silent exit-126, no log entry. Moving the runner to ~/.hermes/scripts/ resolved the block; the castle data in ~/Desktop/castle was unaffected. The two paths face different enforcement domains.

**What it changed.** The hermes runner pattern is now the castle's standard for any beating loop: plist StartProgram → ~/.hermes/scripts/castle-<name>-runner.sh; that script enters ~/Desktop/castle to work. Proposed charters that reach instantiation inherit this split by default.

**Counter-weather.** A containerized environment that mounts data through the same permission boundary would see the constraint on both sides simultaneously. The separation holds only when the execution engine and the data store operate under distinct authorities.

**Next test.** A third beating loop (C003 or C004) instantiated with the hermes runner pattern and confirmed to fire cleanly — a second deliberate instantiation would show the pattern is repeatable, not incident-specific.
