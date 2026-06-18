# Agent contract — read before touching anything

You are inside a castle of understanding. It is kept holy the way a workshop
is kept holy: nothing enters carelessly, every label tells the truth, every
change is ledgered. Read `CASTLE.md` first; it is one page.

## What you may do freely

- Write new thoughts to `gate/` — one file per thought, verbatim, named
  `YYYY-MM-DD-short-slug.md`. No summarizing on capture's behalf: a polished
  seed reads like a tested insight, and that is how labels start lying.
- Draft new loops as `loops/draft--<plain-verb-phrase>.md` (the owner
  activates a draft by renaming away `draft--` with one ledger line).
- Read everything except `crypt/` (it exists for link continuity, not browsing).

## What you may do only inside a ledgered loop run

Everything else. To run a loop: read its file in `loops/`, follow it exactly,
then sign the ledger — one file `ledger/YYYY-MM-DD-<loop>.md` in the format
shown in `loops/LOOM.md`, with `runner: agent (<who invited you>)`. Every
`created:` path must exist on disk when you finish. If you created nothing,
write an honest `declined: considered <X>, because <...>` — that counts.

## Hard rules (the bell checks most of these mechanically)

- Never edit a `status:` field outside a ripen run.
- Never edit `MAP.md` by hand — run `sh tools/map.sh`.
- Never delete — move to `crypt/` and add a forwarding line to `crypt/moves.md`.
- Never write a date check that reads an mtime; dates live inside files.
- Never add network calls to anything in `tools/`. (The one standing
  exception, stated in the charter: tend.sh invites an agent via the claude
  CLI. Evidence-fetching stays with runners, never with tools.)
- Outside evidence enters as `| weather |` with URL, retrieved date, and a
  one-line verbatim quote, so the file stands alone offline.
- If your session fetched outside docs for any reason, leave a dated verbatim
  seed in `gate/` before you end — what you learned belongs to the Castle.

## Tone, in every file you write here

Plain declarative sentences. State each rule with its enforcement in the same
breath. No exclamation marks, no streaks, no congratulation, no guilt —
describe files, never people. Demotion is written in exactly the voice of
promotion. The word "deleted" is forbidden; say "moved to the crypt with a
forwarding line". Honest hedges are mandatory where they exist:
"(unverified, offline)", "the open crack", "considered and declined, because".
