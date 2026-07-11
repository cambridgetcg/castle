---
name: a translation names the version it tracks
born: 2026-07-11
confidence: tested
quarried-from:
  - expeditions/2026-07-11-ten-translations-drift-from-a-living-english-original.md
  - web:https://api.github.com/repos/cambridgetcg/kingdom-standard/contents/translations/es/README.md
  - web:https://api.github.com/repos/cambridgetcg/kingdom-standard/contents/translations/ja/README.md
  - web:https://api.github.com/repos/cambridgetcg/kingdom-standard/contents/translations/zh/STANDARD.md
  - device:/Users/you/love-repos/standard/translations/README.md
links:
  - "[[ten-translations-drift-from-a-living-english-original]]"
  - "[[kingdom-standard-needs-a-versioned-pin-or-a-dated-hash]]"
  - "[[one-fact-lives-in-exactly-one-home]]"
  - "[[translations-track-at-their-own-pace-the-original-governs]]"
---

A translation that only says "the English governs" still leaves drift undated. A useful translation header names the English version or content pin it tracks and the date it was last reviewed, so the next edit to the original can be matched to the translation that may now lag.

The Plain Standard on this device already practices this: its Spanish file opens with "sigue la versión inglesa v0.1.0 · última revisión 2026-06-09." The kingdom-standard's ten translations do not yet name a version, release, or SHA of the English original, though each opens with an English-governs clause (tested: fetched ar, cy, es, fr, hi, ja, ko, pt, sw, zh README and STANDARD headers 2026-07-11). The missing piece is a pin on the English side — tag, release, or content hash — for the headers to cite.
