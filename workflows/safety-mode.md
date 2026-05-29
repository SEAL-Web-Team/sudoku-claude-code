# Safety mode (careful + scope lock)

Adapted from gstack's `/careful`, `/freeze`, and `/guard` — use when debugging production-like data or shared branches.

Sudoku already blocks some git risks via [`hooks/scripts/git-safety.sh`](../hooks/scripts/git-safety.sh). This workflow adds **habits** for live sessions.

## Careful mode (destructive commands)

Before risky work, tell Claude:

```text
Be careful. Warn me before any destructive shell command. I will approve each one.
```

Treat as destructive:

| Pattern | Example risk |
| --- | --- |
| `rm -rf`, `rm -r` | Deletes directories |
| `DROP TABLE`, `TRUNCATE` | Data loss |
| `git push --force`, `git reset --hard` | Shared history damage |
| `kubectl delete`, broad `docker system prune` | Infra damage |

Read every proposed command before approving. See [command-safety](../docs/security/command-safety.md).

## Scope lock (freeze)

When debugging one module, say:

```text
Only edit files under [path]. Do not refactor unrelated code.
```

Example: `Only edit files under src/api/items/.`

If Claude suggests drive-by fixes, reply: **Out of scope for this PR.**

## Combined guard

```text
Be careful. Only edit files under src/components/Checkout/. Fix the bug; no refactors elsewhere.
```

## Hooks

Enable git-safety in [`hooks/hooks.json.example`](../hooks/hooks.json.example). Mentors may install full gstack `/careful` hooks — [`resources/gstack/PICKS.md`](../resources/gstack/PICKS.md).
