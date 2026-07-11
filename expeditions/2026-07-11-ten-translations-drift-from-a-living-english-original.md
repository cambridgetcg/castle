# expedition: ten-translations-drift-from-a-living-english-original
- friction served: frictions/ten-translations-drift-from-a-living-english-original.md
- date: 2026-07-11
- question carried: Does the kingdom-standard's English already carry a version or content pin that lets its ten translations declare what original they track, and if not, what pin can the castle honestly propose?

## sources visited

- https://api.github.com/repos/cambridgetcg/kingdom-standard — public repo, last pushed 2026-06-19T22:04:02Z, default branch `main`, no tags, no releases.
- https://raw.githubusercontent.com/cambridgetcg/kingdom-standard/main/README.md — English README governs if translations differ; no version number, no date header, no content hash in the file.
- https://api.github.com/repos/cambridgetcg/kingdom-standard/contents/README.md and STANDARD.md — English SHA/sizes fetched: README `ab311b53144b7dd5716e10b66d109ca8f2d75054` (3395 bytes), STANDARD `5a7b5b605ce3127f240a52d4ff7a74bc02acd032` (23956 bytes), CONFORMANCE `290960ace674dcb1e55d41609d17e43110ba85ce` (6422 bytes).
- https://api.github.com/repos/cambridgetcg/kingdom-standard/contents/translations — ten translation folders: ar, cy, es, fr, hi, ja, ko, pt, sw, zh.
- Per-translation STANDARD.md content SHAs/sizes fetched (2026-07-11): ar `f08a7b7eb7f556d4354ffec80e6b6691b57f492c` (32098), cy `96314c9d71359fae06a6d2ebf28786344125e5f8` (25577), es `fa7d7565be4582865b8204ad60693c4a485b258c` (25410), fr `7ccc854fff18abd9227c2ec294e1e0a95148cf007` (27761), hi `31f149a4e7515e0039b816227d0d16ea084c9069` (52866), ja `372e10f2f2a8fe402bf250c65bfb325d4466926e` (31237), ko `6b239bf5b9264c1ff1d10c95324429c82b2d8c77` (28630), pt `3b922af9ac5e0ec16e947c7e464e66d57a04b5af` (25165), sw `5b48b6d4b8a9b7fe321e4942258dea34cbdee555` (24307), zh `cb012d3450ff09aa3c03af10dc078150e91721fb` (22191).
- Per-translation README and STANDARD first-line headers checked: every translation opens with an English-governs clause (e.g. es "Traducido del original en inglés — si difieren, prevalece el texto en inglés."), but none names a version, review date, or source SHA of the English original.
- https://github.com/cambridgetcg/kingdom-standard/blob/main/README.md (Languages section) — confirms the rule "Translations track the English at their own pace; the English text governs if they differ."
- Castle stone [[a-translation-names-the-version-it-tracks]] — already records that the Plain Standard on this device pins per-file headers naming English version and review date; the kingdom-standard does not yet do this.

## what came home

- Stone [[ten-translations-drift-from-a-living-english-original]] sharpened: the friction is now named precisely — the English original has no version number, no date, and no content hash, so the ten translations cannot say which English they track even though every one of them declares the English governs.
- New stone quarried: [[kingdom-standard-needs-a-versioned-pin-or-a-dated-hash]] (stones/kingdom-standard-needs-a-versioned-pin-or-a-dated-hash.md) — a `tested` stone carrying the fetched SHA/sizes as evidence, proposing three lawful pins: Git tag/release, per-file `<!-- en-sha: ... -->` comment, or per-translation header with English SHA and review date.
- Friction status: closed 2026-07-11 — castle's work complete. The castle can measure the drift and name the missing pin; adding the pin to the public kingdom-standard repo is keeper's work, not the castle's.
