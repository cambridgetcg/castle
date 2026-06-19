---
status: tested
born: 2026-05-28
last-walked: 2026-06-10
link: rooms/craft/a-lying-artifact-is-its-own-top-finding.md
evidence: 2026-06-09 | local | rewardspro commit b9ed5ea "Honest Billing v1 — never count test orders toward plan usage"
evidence: 2026-06-09 | local | unit suite aligned and green at 306/306 (commit bb8f031) with the exclusion in place
---
# Never count test orders toward plan usage

**Claim.** Plan-usage metering must exclude test orders at ingestion;
counting them overbills a merchant once and destroys billing trust
permanently.

**How it ripened.** Born 2026-05-28 in the rewardspro honest-monetization
work; tested when the exclusion shipped and the unit suite held green with
it in place.

**What it changed.** 2026-06-09: the billing meter excludes test orders at
ingestion, not in the UI (commit b9ed5ea). Standing rule: every meter
filters at the source; a UI-level exclusion is a bug.

**Counter-weather.** Tried to break it: do dev-store orders ever arrive with
test:false? One unconfirmed staging sighting — this is the open crack, and
it is waiting at the gate as a seed with its own next test.

**Next test.** Sample 100 dev-store orders in production; assert zero reach
the usage meter. (Seed already at the gate: 2026-06-10-dev-store-orders-unflagged.)
