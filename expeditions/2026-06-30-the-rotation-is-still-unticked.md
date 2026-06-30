# expedition: the-rotation-is-still-unticked
- friction served: frictions/the-rotation-is-still-unticked.md
- date: 2026-06-30
- question carried: What does a kingdom lose for each day a burned key waits unrotated?

## sources visited

**Home — castle:**
- `frictions/the-rotation-is-still-unticked.md` — named GDPR 72-hour window and blast-radius priority list; cost was named but unmeasured
- `stones/untracked-is-not-unleaked.md` — confirms a committed secret is burned; rotation is the fix, not purge; same AWS key in ten files across four repos
- `/Users/you/love-repos/shield/REMEDIATION.md` — the rotation checklist: 7 credential classes in blast-radius order (AWS root, GitHub PAT, Anthropic key, four money platforms, identity/comms, Hive/NATS, Stripe); all boxes unchecked as written
- `/Users/you/love-repos/legible-standard/audits/2026-06-10-kingdom.md` — audit pillar 07 names UK GDPR duties including the 72-hour breach window; says it "interacts directly with pillar 04's unrotated leak"; rotation is repair step 1 of 7

**Home — device:** no further repos held relevant timing or cost data beyond the above.

**Internet — three to five sources:**

1. https://www.helpnetsecurity.com/2024/12/02/revoke-exposed-aws-keys/ (Help Net Security, Dec 2024)
   — Clutch Security study: AWS access keys exposed on GitHub are exploited in **6.6 minutes** on average; AWS's own alert arrives in 1.4 minutes — before most humans can act. Keys on DockerHub: minutes. PyPI/Pastebin/Postman: hours. GitLab/Stack Overflow/Reddit/Quora: 1–5 days.

2. https://www.techradar.com/pro/security/exposed-aws-credentials-stolen-within-minutes-by-github-hackers (TechRadar, 2024)
   — Confirms Clutch Security research: "It takes hackers 1 minute to find and abuse credentials exposed on GitHub." Exploitation is automated; attackers run continuous scanners against public repos.

3. https://www.bleepingcomputer.com/news/security/amazon-ongoing-cryptomining-campaign-uses-hacked-aws-accounts/ (BleepingComputer)
   — Stolen AWS credentials used to spin up hundreds of EC2/ECS instances for cryptomining within minutes of key theft. Real bills: $6,500 in 2 days, $22,800 from a dormant account, $47,000 single incident. Root account access removes all IAM guardrails.

4. https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/ (ICO — UK GDPR authority)
   — UK GDPR Article 33: notify the ICO within 72 hours of becoming **aware** of a breach. Late notification is a standalone violation. Penalty: up to £8.7m or 2% of global turnover. Serious breaches: up to £17.5m or 4% of turnover.

5. https://www.legiscope.com/blog/gdpr-breach-notification-72-hours.html (Legiscope, 2026)
   — ICO fined Interserve £4.4m partly for delayed breach notification (2 weeks late). The fine was imposed *in addition to* the underlying security failure fine. Late reporting is independently punishable.

**Where sources agreed:** exploitation speed is measured in minutes for GitHub; costs are real and immediate; GDPR clock starts at awareness and cannot be paused.
**Where sources disagreed:** bill sizes vary widely ($6k–$47k per incident); the 72-hour window's start point can be contested (some argue "awareness of likelihood," not certainty, triggers the clock).

## what came home

**Stones born:**
- `burned-keys-move-in-minutes` — exploitation timing, tested by published study
- `the-gdpr-clock-runs-from-awareness` — 72-hour rule, penalty structure
- `root-access-bills-arrive-before-alarms` — cryptomining cost range, mechanism

**Friction outcome:** closed. The question was "the cost is real but unmeasured." It is now measured: minutes to exploitation, $6k–$47k per cryptomining incident, £8.7m GDPR ceiling for late notification. The rotation itself remains the keeper's boxes to tick — the castle's charge was to make the cost legible, and it is legible.
