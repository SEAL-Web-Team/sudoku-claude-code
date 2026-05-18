# /commit — Safe commit preparation

Help create a clear commit. **Only commit when the user explicitly asks.**

## Steps

1. Run `git status` and `git diff` (staged and unstaged).
2. If nothing is staged, ask whether to stage specific files (do not stage secrets).
3. Check for multiple unrelated changes; suggest splitting commits if needed.
4. Propose a message: `<type>: <short description>` (e.g. `fix:`, `docs:`, `test:`).
5. Remind user to run lint/tests if not already run.

## Rules

- Never use `--no-verify` unless the user explicitly requests it.
- Never force-push to `main` / `master`.
- Never commit `.env`, keys, or credentials.
- Present tense, imperative mood ("add feature" not "added feature").

## Types

`feat` | `fix` | `docs` | `test` | `refactor` | `chore` | `ci`
