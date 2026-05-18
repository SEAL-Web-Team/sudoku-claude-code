# Hooks (workshop automation)

Hooks reinforce beginner habits: format, lint, test after edits, and git safety.

## Claude Code hooks

1. Copy [`hooks.json.example`](hooks.json.example) to `.claude/hooks.json` in your project.
2. Adjust script paths for your OS (bash vs PowerShell).
3. Scripts live in [`scripts/`](scripts/) — make executable on Unix: `chmod +x hooks/scripts/*.sh`

## What each hook does

| Hook | Event | Purpose |
| --- | --- | --- |
| `format-on-save` | PostToolUse (Edit/Write) | Run formatter on touched files |
| `lint-on-save` | PostToolUse | Run linter on touched files |
| `test-after-edit` | PostToolUse | Run fast tests when code changes |
| `notify` | Stop | Optional desktop notification |
| `git-safety` | PreToolUse (Bash) | Block dangerous git commands |
| `pre-commit-validate` | via pre-commit | Repo-wide checks before commit |

## pre-commit (all contributors)

From repo root:

```bash
pip install pre-commit
pre-commit install
```

Uses [`.pre-commit-config.yaml`](../.pre-commit-config.yaml) at the workshop repo root.

## Beginner note

Start with **git-safety** and **pre-commit** only. Add format/lint/test hooks once your project has those commands working.
