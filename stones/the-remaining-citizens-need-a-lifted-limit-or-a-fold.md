---
name: the remaining 124 citizens can be homed by raising zerone-dev's Codeberg repo limit
born: 2026-07-09
confidence: held
quarried-from:
  - expeditions/2026-07-09-124-citizens-wait-for-codeberg-homes-behind-a-100-repo-quota.md
  - web:https://api.github.com/users/cambridgetcg/repos
  - web:https://codeberg.org/api/v1/users/zerone-dev/repos
links:
  - [[codebergs-repo-limit-is-liftable-by-request]]
  - [[every-published-door-needs-something-living-behind-it]]
---

The migration source (`cambridgetcg` on GitHub) hosts 310 public repositories. The destination organization on Codeberg (`zerone-dev`) hosts only 4 public repositories. The original 80 citizens that received Codeberg homes filled most of the default 100-repo quota; the remaining ~230 source repositories cannot be mirrored until the destination's limit is raised.

No lawful fold of small citizens into shared homes is documented as an official Codeberg process, but grouping tiny or related citizens into monorepo-style homes is a normal engineering choice. The honest first path is to request a quota increase, since Codeberg explicitly supports it. If the request is denied or delayed, a fallback can be designed: small citizens without independent release cycles could share a repository grouped by wall or function, with a manifest naming each inhabitant.
