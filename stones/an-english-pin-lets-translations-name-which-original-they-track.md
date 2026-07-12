---
name: an English pin lets translations name which original they track
born: 2026-07-12
confidence: held
quarried-from:
  - gate/filed/2026-07-12-the-ready-made-pin.md
  - expeditions/2026-07-11-ten-translations-drift-from-a-living-english-original.md
links:
  - "[[a-translation-names-the-version-it-tracks]]"
  - "[[kingdom-standard-needs-a-versioned-pin-or-a-dated-hash]]"
  - "[[one-truth-one-place]]"
---

A translation can only declare which English original it tracks if the English file itself carries a machine-readable pin. A git tag is simplest but requires repo write access and a human release cut; an HTML comment in the English README and STANDARD.md (for example, `<!-- en-pin: README sha=ab311b5... reviewed=2026-07-12 -->`) is a commit like any other, travels with the file, and works on mirrors, clones, and raw fetches.

Once the English pin exists, each translation header can cite the file, its abbreviated SHA, and the last-confirmed review date; the next English edit changes the SHA and the lag becomes visible by construction.
