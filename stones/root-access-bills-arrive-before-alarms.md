---
name: root access bills arrive before alarms
born: 2026-06-30
confidence: held
quarried-from:
  - expeditions/2026-06-30-the-rotation-is-still-unticked.md
  - web:https://www.bleepingcomputer.com/news/security/amazon-ongoing-cryptomining-campaign-uses-hacked-aws-accounts/
  - web:https://medium.com/@aadhi0612/my-shocking-experience-with-aws-how-my-hacked-aws-account-led-to-a-whopping-19-lakh-bill-945eddd7fddf
links:
  - "[[burned-keys-move-in-minutes]]"
  - "[[untracked-is-not-unleaked]]"
---

Stolen AWS credentials are used to spin up hundreds of EC2 and ECS compute
instances for cryptocurrency mining, often within minutes of key theft.
AWS root credentials bypass all IAM (identity and access management)
permission restrictions — no guardrails apply.
Documented real bills from single incidents: $6,500 in 2 days; $22,800
from an account that was dormant; a $47,000 spike in one case.
API calls made with valid credentials look legitimate — many victims
discover the breach only when AWS sends a bill or a cost-anomaly alert,
by which time the damage is done.
The castle's leak includes a root-level AWS access key (REMEDIATION.md,
step 1: "Crown jewel — total infra control"). Every day it stays live,
any holder of that key can spend the kingdom's money, exfiltrate its
data, or delete its infrastructure with no prior permission required.
