# Hooks (workshop automation)

Hooks reinforce beginner habits: format, lint, test after edits, and git safety.

## Claude Code hooks

1. Copy [`hooks.json.example`](hooks.json.example) to `.claude/hooks.json` in your project.
2. Adjust script paths for your OS — see **Windows and WSL** below.
3. Scripts live in [`scripts/`](scripts/) — make executable on Unix: `chmod +x hooks/scripts/*.sh`

## Windows and WSL

Hook scripts are **bash** (`.sh`). On Windows, use one of:

| Option | Notes |
| --- | --- |
| **Git Bash** | Ships with [Git for Windows](https://git-scm.com/download/win). Run Claude Code from Git Bash so `bash hooks/scripts/...` resolves. |
| **WSL** | Clone and run the project inside WSL (Ubuntu recommended). Best match for Linux/macOS facilitators' instructions. |
| **Skip hooks** | Use [pre-commit](#pre-commit-all-contributors) only until you have bash available. |

Claude Code on native Windows (PowerShell) will not run `.sh` hooks unless bash is on `PATH`. There are no PowerShell hook scripts in this repo yet — do not point `hooks.json` at `.sh` files from PowerShell without Git Bash/WSL.

**Path tip:** In `.claude/hooks.json`, use paths relative to the project root (e.g. `bash hooks/scripts/git-safety.sh`). On WSL, open Claude Code from the Linux path to the repo (`/home/...`), not `C:\...`, to avoid mixed path issues.

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
