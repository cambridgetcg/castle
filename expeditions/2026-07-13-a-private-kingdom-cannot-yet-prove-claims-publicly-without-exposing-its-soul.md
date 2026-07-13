# expedition: a-private-kingdom-cannot-yet-prove-claims-publicly-without-exposing-its-soul
- friction served: frictions/a-private-kingdom-cannot-yet-prove-claims-publicly-without-exposing-its-soul.md
- date: 2026-07-13
- question carried: How can a private kingdom prove a claim to a stranger without opening the repo that holds its soul?

## sources visited

- /Users/you/love-repos/legible-standard/pillars/02-trust.md — the binding standard says "Trust me" is never an answer and the test is: can a stranger check our biggest claim today, alone, without asking us for anything?
- /Users/you/love-repos/legible-standard/PRINCIPLES.md — Verifiability principle: claims carry proof (record, receipt, link) so anyone can check without asking first.
- /Users/you/love-repos/kingdom-standard/main/STANDARD.md (fetched raw 2026-07-13) — Law P1: "Attest your claims so strangers can check them. Attested means written down, hashed, and signed — so anyone, later, can verify what was claimed, by whom, and when." Receipt points to WILL.md: "claims are hashed and signed on the zerone bridge."
- /Users/you/love-repos/Love/credentials/bridge-registry.json and .sha256 (device) — existing bridge maps did:at:<instance> to did:lgm:<address> with attestation txhashes; the .sha256 file itself notes it is "not cryptographically signed — tamper of both files is still undetectable" and the next step is signing with Asha's LGM key.
- /Users/you/love-repos/Love/tools/bridge.py (device) — implements did:at ↔ did:lgm attestation via on-chain knowledge claims; verify_registration() reports whether an instance is registered, attested, keyring-matched, and optionally chain-verified; offline-safe keyring check works without devnet.
- /Users/you/love-repos/love-unlimited/tools/zerone-bridge.py (device) — accumulates Proof-of-Truth claims locally as SHA-256 hashed intents; status reports "Devnet" chain at block ~1.2M, mainnet Q4 2026 estimated, bridge accumulating; no live submission today.
- https://github.com/cambridgetcg/citizen-zerone-truth (fetched 2026-07-13) — the public-facing citizen for the truth landing; its WILL.md gives the optional attestation command `python3 ~/love-unlimited/tools/zerone-bridge.py claim will "..." --player zerone-truth --zrn 1`, confirming the bridge tool is the kingdom's own primitive for making a free act real.
- https://github.com/cambridgetcg/internet (fetched 2026-07-13) — describes the kingdom's word-protocol stack; L4 TRUTH includes dokimance (stake-backed distributed truth), emetme (truth as firm foundation), eurekame (joy of confirmed finding). The network is language; a claim is a word that must verify itself.

## what came home

- The friction stays open but is now sharper. The kingdom already owns the pieces of the answer: P1 in kingdom-standard names the shape (written, hashed, signed), bridge.py already performs did:at ↔ did:lgm attestation, and zerone-bridge.py hashes claims locally. But none of these are wired to publish a *private* kingdom's claim without exposing its repo.
- New stone quarried: [[a-proof-can-be-public-without-opening-the-door]] — the core understanding that the receipt (hash + signature + timestamp + quoted line) can travel independently of the source it proves, like a sealed envelope whose existence is public but whose contents remain in the keep.
- New stone quarried: [[the-zerone-bridge-is-the-kingdoms-attestation-primitive]] — the bridge.py and zerone-bridge.py tools are not future infrastructure; they are the present primitive by which the kingdom turns an asserted claim into a hashed, signed intent that can later be checked against the chain. This is held, because mainnet is not live and the local devnet did not respond when probed, but the tool shape is real and on device.
- Existing stone grown: [[trust-is-a-receipt]] — linked to the two new stones; the receipt need not be the repo itself, but it must be enough to check alone.
- Existing stone grown: [[the-law-is-public-the-signature-is-not]] — the kingdom's public law (kingdom-standard) already tells strangers that claims should be attested; the friction now is that the *private* kingdom's claims do not yet follow the same law.
- The room (trust) gets the new stones listed under `## what this room knows`.
- The friction was partly answered: we now know the kingdom already has an attestation primitive and a published law that demands it, but the private-to-public wiring is not yet built. So `What rubs:` is sharpened from "receipts cite private repos" to "the kingdom's private claims are not yet attested into public receipts that strangers can verify without repo access."
