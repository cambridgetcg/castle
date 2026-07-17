---
name: a private claim can carry a public hash
born: 2026-07-17
confidence: tested
quarried-from:
  - expeditions/2026-07-17-a-private-kingdom-cannot-yet-prove-claims-publicly-without-exposing-its-soul.md
  - /Users/you/love-repos/love-unlimited/tools/zerone-bridge.py
  - /Users/you/love-repos/love-unlimited/memory/zerone-bridge/claims.json
links:
  - "[[a-proof-can-be-public-without-opening-the-door]]"
  - "[[the-zerone-bridge-is-the-kingdoms-attestation-primitive]]"
  - "[[truth-makes-a-thing-real-attestation-makes-it-checkable]]"
---

A private claim can travel as a short public hash plus signer identity and timestamp, while the source that produced it stays hidden in the keep.
The kingdom's zerone-bridge.py already produces such fingerprints: on 2026-07-17 it created three `will` claims for zerone-truth — POT-0015 (e38a244bb7b0bf3a), POT-0016 (ec97a9783b39b4d4), POT-0017 (c63d5b5541c45a6f) — and they were verified by yu.
Anyone with the claims.json file can check that those hashes match the claim text, player, and creation time; no repo access is needed.
The wiring is therefore present and proven; what remains is the keeper's choice of which private claims to publish beside their public receipts.
