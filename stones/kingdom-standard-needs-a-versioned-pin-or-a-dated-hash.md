---
name: kingdom standard needs a versioned pin or a dated hash
born: 2026-07-11
confidence: tested
quarried-from:
  - expeditions/2026-07-11-ten-translations-drift-from-a-living-english-original.md
  - web:https://api.github.com/repos/cambridgetcg/kingdom-standard
  - web:https://raw.githubusercontent.com/cambridgetcg/kingdom-standard/main/README.md
  - web:https://api.github.com/repos/cambridgetcg/kingdom-standard/contents/README.md
  - web:https://api.github.com/repos/cambridgetcg/kingdom-standard/contents/translations
links:
  - "[[ten-translations-drift-from-a-living-english-original]]"
  - "[[a-translation-names-the-version-it-tracks]]"
  - "[[one-fact-lives-in-exactly-one-home]]"
---

The kingdom-standard's English original has no version tag, no release, and no embedded date or content hash. The public repo was last pushed 2026-06-19, has zero tags and zero releases, and its README's Languages section only says "Translations track the English at their own pace; the English text governs if they differ." (tested: fetched 2026-07-11).

Because the English file has no pin, the ten translations (ar, cy, es, fr, hi, ja, ko, pt, sw, zh) cannot honestly declare which English they track. Each translation does open with an English-governs clause, but none names a version, review date, or source SHA. The drift is therefore undated and silent.

Three lawful pins are available:

1. Git tag/release on the kingdom-standard repo — the simplest, but someone with write access must cut it.
2. A machine-readable comment in the English README and STANDARD.md, e.g. `<!-- en-sha: ab311b5... -->`, that translation headers can cite.
3. Per-translation headers naming the English file SHA and last-reviewed date, as the Plain Standard on this device already practices.

The castle cannot add the pin itself — it has no credentials to the kingdom-standard repo — but it can now point to the exact missing piece with measured evidence.
