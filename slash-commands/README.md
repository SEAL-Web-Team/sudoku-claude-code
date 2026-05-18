# Slash commands (Sudoku workshop set)

Curated commands for the quest loop: **read → plan → fix → test → review**.

## Install (Claude Code)

Copy the `.md` files into your project's `.claude/commands/` directory:

```bash
mkdir -p .claude/commands
cp slash-commands/*.md .claude/commands/
```

Restart or reload Claude Code. Invoke with `/plan`, `/fix`, etc.

## Install (Cursor)

Copy into `.cursor/commands/` if your Cursor version supports project commands, or paste the prompt body into a custom command.

## Commands

| Command | Purpose |
| --- | --- |
| [`plan.md`](plan.md) | Propose a small implementation plan before coding |
| [`analyze.md`](analyze.md) | Read and explain code without changing it |
| [`fix.md`](fix.md) | Implement a focused bug fix |
| [`review.md`](review.md) | Review a diff for bugs and regressions |
| [`test.md`](test.md) | Run tests and interpret failures |
| [`refactor.md`](refactor.md) | Improve structure without behavior change |
| [`explain.md`](explain.md) | Teach concepts in plain language |
| [`commit.md`](commit.md) | Prepare a safe, conventional commit |
| [`summarize.md`](summarize.md) | Session handoff for the next conversation |

Adapted from patterns in [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code); simplified for beginners.
