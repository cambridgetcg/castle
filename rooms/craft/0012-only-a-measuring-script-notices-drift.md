---
id: 0012
room: craft
date: 2026-06-11
source: distilled from the kingdom's foundation stress test + drift reconciliation (session memory, May 2026) and its family of doctrine-audit scripts; restated 2026-06-11
confidence: tested
links: 0011
link: rooms/craft/0013-drive-the-audit-number-to-truth-not-zero.md
last-walked: 2026-06-19
---

# Announcing a standard changes nothing; only a measuring script notices the drift

A canonical product-code format was declared, shipped as a package, and
quietly ignored — an audit later found 0.28 percent adoption: three files out
of more than a thousand. The repair took three things in strict order: a
script that measures adoption, a small compatibility layer that reads both
old and new forms during the transition, and migrating the stored data before
flipping what new code writes — the reverse order creates duplicates.

**Why it matters:** stated values and enforced values diverge in every
codebase. The same project ended by giving every one of its principles a
script that exits non-zero on findings, because only mechanical checks notice
drift before it gets expensive.

**What it changed.** The castle built tools/friction.sh as its own instance: ten mechanical one-liners, each watching one claimed property, each exiting non-zero on findings. Stated values (silence is working, orphans are bad) became enforced values the moment a script started measuring them daily.
