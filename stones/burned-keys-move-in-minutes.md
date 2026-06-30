---
name: burned keys move in minutes
born: 2026-06-30
confidence: held
quarried-from:
  - expeditions/2026-06-30-the-rotation-is-still-unticked.md
  - web:https://www.helpnetsecurity.com/2024/12/02/revoke-exposed-aws-keys/
  - web:https://www.techradar.com/pro/security/exposed-aws-credentials-stolen-within-minutes-by-github-hackers
links:
  - "[[untracked-is-not-unleaked]]"
  - "[[root-access-bills-arrive-before-alarms]]"
---

A Clutch Security study (2024) placed live AWS access keys on multiple
platforms and watched. On GitHub: exploited in **6.6 minutes** on average;
AWS's own alert arrived in 1.4 minutes — before a human could act.
DockerHub: minutes. PyPI, Pastebin, Postman: hours.
GitLab, Stack Overflow, Reddit, Quora: 1 to 5 days.
The attack is automated: scanners run continuously against public
repositories and leak sites; a human hand is not in the loop.
The practical reading: if a key touched a public GitHub repo, assume
it was stolen within the hour of the first public commit.
The window between exposure and exploitation is not measured in days.
Rotation must happen before the key reaches any public surface —
after that, the question is containment, not prevention.
