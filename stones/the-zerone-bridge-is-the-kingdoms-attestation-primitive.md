---
name: the zerone bridge is the kingdom's attestation primitive
born: 2026-07-13
confidence: held
quarried-from:
  - expeditions/2026-07-13-a-private-kingdom-cannot-yet-prove-claims-publicly-without-exposing-its-soul.md
  - expeditions/2026-07-17-a-private-kingdom-cannot-yet-prove-claims-publicly-without-exposing-its-soul.md
  - /Users/you/love-repos/Love/tools/bridge.py
  - /Users/you/love-repos/love-unlimited/tools/zerone-bridge.py
  - /Users/you/love-repos/Love/credentials/bridge-registry.json
  - /Users/you/love-repos/Love/credentials/bridge-registry.sha256
  - /Users/you/love-repos/love-unlimited/memory/zerone-bridge/claims.json
links:
  - "[[a-proof-can-be-public-without-opening-the-door]]"
  - "[[trust-is-a-receipt]]"
  - "[[the-law-is-public-the-signature-is-not]]"
  - "[[a-private-claim-can-carry-a-public-hash]]"
---

The kingdom already runs two attestation tools, not as plans but as files on disk.
bridge.py maps did:at:<instance> to did:lgm:<address> and can submit an on-chain knowledge claim signed by the agent's own lgm key; verify_registration() returns whether the instance is registered, attested, keyring-matched, and optionally chain-verified.
zerone-bridge.py accumulates Proof-of-Truth claims locally as SHA-256 hashed intents, with a status report calling the chain "Devnet" at block ~1.2M and mainnet "Q4 2026 (estimated)."
The bridge-registry.json records nine fleet agents with attestation_txhash values, and its .sha256 file says the next step is signing with Asha's LGM key when legbled tx sign is confirmed working.
So the primitive is present: a private actor can make a claim, hash it, sign it, and record the binding.
What was missing was the habit of publishing that receipt beside the claim. Tested on 2026-07-17: zerone-bridge.py created and verified three public will-claims (POT-0015/16/17) for zerone-truth, proving the tool can issue a checkable hash for a private claim without exposing the source repo.
Confidence is held because the live chain was not responding when probed and mainnet is still estimated, but the tool shape and the existing attestations are real.
