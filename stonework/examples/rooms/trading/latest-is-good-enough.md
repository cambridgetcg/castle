# the latest answer is good enough for small trades

- laid: 2026-05-20
- by: asha (human)
- certainty: told

Someone on a forum said small position sizes make staleness checks not worth
the gas — for trades under a few hundred dollars the worst-case stale-price
loss is smaller than the checking cost, so skipping the check is rational.

## because

Repeating the forum's argument: check cost is fixed, stale-price exposure
scales with position size, so below some size the check costs more than it
protects. (Planted flaw: this stone is "told" and names no teller.)
