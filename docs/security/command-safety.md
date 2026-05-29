# Command safety

## Never without mentor approval

- `git push --force` on shared branches
- `git reset --hard`
- `rm -rf` on uncertain paths
- Piping `curl` to `bash`
- Disabling pre-commit with `--no-verify`

## Hooks

Enable [`git-safety.sh`](../../hooks/scripts/git-safety.sh) via [`hooks/hooks.json.example`](../../hooks/hooks.json.example).

## Safety mode in chat

Tell Claude to warn before destructive commands and lock edit scope. See [safety-mode workflow](../../workflows/safety-mode.md) (adapted from gstack `/careful` and `/freeze`).

## Habit

Read the command Claude proposes before approving terminal execution.
