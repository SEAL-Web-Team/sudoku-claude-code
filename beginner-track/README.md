# SEAL-approved beginner path

Follow this order on your first week. Each step maps to workshop modules and copy-paste assets in this repo.

| Step | Focus | Where to go |
| --- | --- | --- |
| 1 | Understand the quest loop | [`docs/best-practices/workflow.md`](../docs/best-practices/workflow.md) |
| 2 | Set up Claude + project rules | [`claude-templates/`](../claude-templates/README.md) → copy one `CLAUDE.md` into your project |
| 3 | Learn slash commands | [`slash-commands/`](../slash-commands/README.md) → install into `.claude/commands/` |
| 4 | Enable safe automation | [`hooks/`](../hooks/README.md) |
| 5 | Workshop module 1–3 | [`docs/workshops/`](../docs/workshops/README.md) |
| 6 | Run a browser test | [`playwright/`](../playwright/README.md) |
| 7 | Try a guided example | [`examples/`](../examples/README.md) |
| 8 | Contribute with a PR | [`workflows/pr-review.md`](../workflows/pr-review.md) |

## Quest loop (what reviewers expect)

> Read the codebase → propose a plan → write the fix → run tests

Use `/plan` before coding, `/test` before opening a PR, and `/review` on your own diff first.

## What we deliberately skip (for now)

- Multi-agent orchestration swarms
- Production deployment pipelines
- Advanced security audits

See [`resources/awesome-claude-code/PICKS.md`](../resources/awesome-claude-code/PICKS.md) for the full upstream catalogue when you are ready to go deeper.
