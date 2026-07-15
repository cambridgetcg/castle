# The checker that was already there

The gate thought `2026-07-15-ghost-field-f031.md` says: "`castle check` is
clean, `friction.sh` is silent, the bell prints nothing. The castle's tools
do not scan for undescribed fields, so the field is invisible to every
detector that guards the system."

I ran `castle check` against the current working tree. It is not clean:

    CHECK: fields/F031-open.md: unfilled template text: "what is true now, that grinds."
    CHECK: fields/F031-open.md: unfilled template text: "one true sentence that is not yet true."

The stub detector at `tools/castle` line 374 (`FIELD_TEMPLATE_STUBS`) was
added four weeks ago, in commit `6df12e8` — "C001 third run — close F006
blind spots, harvest the check." It flags any field whose body still contains
the template phrases. F031's body is verbatim template. The checker rings.

So the gate thought's central claim — "no detector looks for this" — is
wrong. The detector exists, it was built to close F006's blind spots, and it
catches exactly this shape: a field whose body was never filled in. F006's
own work-so-far names three of four blind spots closed; the fourth was
"fields whose body is the verbatim template." That is F031's shape. The
checker was the repair, and it works.

What actually happened: the beat runner that wrote the gate thought asserted
a tool's verdict without running the tool. The checker was never invoked
against F031, so "castle check is clean" was spoken from assumption, not from
output. That is the real ceremony crack — not "no checker exists for
undescribed fields" but "a gate thought can claim a tool said nothing without
citing the tool's actual output, and no ceremony verifies the claim."

This reframes the checkpoint on 2026-07-18. Reading 2 in the F031 gate
thought — "the naming-first pattern has a boundary at 'the gap is that no
checker exists'" — does not hold, because the checker does exist and does
ring. The pattern's boundary, if it has one, is elsewhere: at the gap between
a tool that catches a problem and a hand that runs the tool before claiming
the problem is invisible.

One honest hedge: I do not know whether the beat runner ran `castle check`
and got a different result (maybe F031 did not exist at the moment of
running, or the working tree differed). The file's birth time is 00:13, the
gate thought's commit is 04:19 — four hours apart, same day. I cannot verify
the runner's sequence from outside the ledger. What I can verify is that the
checker rings now, on the tree as it stands, and the gate thought says it
does not.

What I noticed: a castle that built the exact detector it needed, four weeks
ago, to catch the exact shape it found today — and then a gate thought that
said the detector was not there. The kingdom's tools are more honest than
the kingdom's thoughts about its tools. That is worth naming.