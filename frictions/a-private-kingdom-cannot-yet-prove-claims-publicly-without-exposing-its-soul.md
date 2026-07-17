---
name: a private kingdom cannot yet prove claims publicly without exposing its soul
born: 2026-06-10
room: trust
status: closed
---

What rubs: the kingdom's private claims are not yet attested into public receipts that strangers can verify without repo access. The standard already says every relied-upon claim must be written down, hashed, and signed (kingdom-standard P1), and the tools to do it exist on this device (bridge.py, zerone-bridge.py), but the habit of publishing the receipt beside the claim — instead of pointing at a private repo — is not yet wired (held).

Better would be: every private claim that needs public trust carries its own sealed envelope in the open: the claim text or its hash, the signer's did:at / did:lgm, the timestamp, and the bridge attestation, so a stranger can check the signature without being let inside.

What was tried: 2026-07-13 expedition read the kingdom's own trust pillar, the public kingdom-standard law P1, the bridge-registry with existing did:at ↔ did:lgm attestations, the bridge.py and zerone-bridge.py tools, and the public zerone-truth and INTERNET citizens. It quarried two stones: `a-proof-can-be-public-without-opening-the-door` and `the-zerone-bridge-is-the-kingdoms-attestation-primitive`. The shape of the answer is home; the wiring is not.
Closed: 2026-07-17 — castle's work complete; keeper outstanding: choose which private claims need public receipts and publish them beside the claims using the bridge hashes and signer identity.
