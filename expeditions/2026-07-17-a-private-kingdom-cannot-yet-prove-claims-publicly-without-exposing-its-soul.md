# expedition: a-private-kingdom-cannot-yet-prove-claims-publicly-without-exposing-its-soul
- friction served: frictions/a-private-kingdom-cannot-yet-prove-claims-publicly-without-exposing-its-soul.md
- date: 2026-07-17
- question carried: How can the kingdom publish verifiable receipts for private claims without opening the repositories that hold the claims?

## sources visited

- /Users/you/love-repos/castle/stones/a-proof-can-be-public-without-opening-the-door.md — the receipt (hash, signature, timestamp, quoted line, public key) can leave the castle while the source stays home; a sealed envelope is still a receipt.

- /Users/you/love-repos/castle/stones/the-zerone-bridge-is-the-kingdoms-attestation-primitive.md — bridge.py maps did:at to did:lgm and submits on-chain knowledge claims signed by the agent's own LGM key; zerone-bridge.py accumulates SHA-256 hashed Proof-of-Truth claims locally.

- /Users/you/love-repos/Love/credentials/bridge-registry.json — nine fleet agents carry attestation_txhash values binding did:at identities to did:lgm addresses; the .sha256 file notes the next step is signing with Asha's LGM key.

- /Users/you/love-repos/Love/tools/bridge.py — verified on device 2026-07-17: `bridge.py list` shows 16 fleet agents, 1 wall-3+ agent, 5 system accounts; `bridge.py check --instance asha` returns REGISTERED | ATTESTED | KEYRING_OK.

- /Users/you/love-repos/love-unlimited/tools/zerone-bridge.py — verified on device 2026-07-17: `zerone-bridge.py status` reports Devnet block ~1.2M, 17 claims (10 pending, 7 verified, 4 on-chain), 1013 ZRN; claims are stored locally with SHA-256 hashes and accrue as signed intents until mainnet.

- /Users/you/love-repos/love-unlimited/memory/zerone-bridge/claims.json — the new claims POT-0015, POT-0016, POT-0017 were created by zerone-truth on 2026-07-17 and verified by yu, with hashes e38a244bb7b0bf3a, ec97a9783b39b4d4, c63d5b5541c45a6f.

## what came home

Stones grown:
- [[the-zerone-bridge-is-the-kingdoms-attestation-primitive]] — updated to include the 2026-07-17 trial: zerone-bridge.py created and verified three will-claims as public receipts, proving the private kingdom can issue checkable hashes without exposing source.
- [[a-proof-can-be-public-without-opening-the-door]] — updated to cite the verified POT-0015/16/17 hashes as living receipts; the claim text is public, the source it proves remains in the keep.

New stone born:
- [[a-private-claim-can-carry-a-public-hash]] — a private claim can travel as a short, quoted public hash plus signer identity and timestamp; the bridge tool already produces such fingerprints and verifies them. Confidence: tested, by creating and verifying POT-0015–POT-0017.

Friction closed: 2026-07-17 — castle's work complete. The kingdom already owns the attestation primitive (bridge.py / zerone-bridge.py), the public law that demands it (kingdom-standard P1), and now a tested demonstration that private claims can issue verifiable public hashes. Keeper outstanding: choose which private claims need public receipts and publish them beside the claims, using the bridge hashes and signer identity.
