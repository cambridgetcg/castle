source: beat castle-C001-20260621-101737
retrieved: 2026-06-21

macOS launchd cannot execute scripts that live in ~/Desktop without an explicit
TCC (Transparency, Consent, and Control) grant. The grant is user-initiated and
not available to daemons running under launchd. The symptom: the job exits 126
(permission denied) silently; the daemon appears to be beating but produces no
output and no log.

The fix, confirmed in L194: the runner script must live in a path the daemon's
execution environment already trusts. Both C001 and C002 now use the pattern:

    plist StartProgram → ~/.hermes/scripts/castle-<name>-runner.sh
    runner script       → cd to repo; source nvm; invoke claude; write next-beat

The config data (charter, loops/, ledger/) lives in ~/Desktop/castle as before.
The execution entry point lives in ~/.hermes/scripts/. The two locations serve
different authorities: the desktop is the maker's workspace; hermes is the
daemon's trusted territory.

This is the "hermes runner pattern" — now the castle's standard for any new
beating loop. A proposed charter that reaches instantiation inherits this
pattern by default.

Potential insight: a tool's execution environment and its data environment are
separate concerns; system daemons impose constraints on the execution side that
the data side never sees.
