# a stale price is a lie wearing a timestamp

- laid: 2026-06-01
- by: asha (human)
- certainty: reasoned
- source: https://docs.chain.link/data-feeds (fetched 2026-06-01)
- rubs-against: ./latest-is-good-enough.md

A price feed that stops updating does not say "I stopped." It keeps serving
its last number, and the number looks exactly like a fresh one. The lie is
not in the value — it is in the missing admission of age.

## because

Chainlink's `latestRoundData` returns `updatedAt` precisely so a caller can
refuse old answers. A reader that ignores that field has chosen not to know.

## still unknown

What is a sane staleness bound for a feed with an irregular heartbeat?
Tighter than the heartbeat rejects honest prices; looser accepts dead ones.
