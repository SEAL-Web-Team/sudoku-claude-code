# Sudoku Claude Code

Beginner-oriented workshop repository for SEAL Sudoku students learning **AI-assisted development** with Claude Code: read codebases, plan changes, implement fixes, and run tests.

**Canonical repo:** [github.com/SEAL-Web-Team/sudoku-claude-code](https://github.com/SEAL-Web-Team/sudoku-claude-code)

**Quest:** P2 Sudoku Claude Code Repo 2026 — operational target June 1, 2026 (see team QO/YBR).

## Start here

| Audience | First link |
| --- | --- |
| New student | [`docs/onboarding.md`](docs/onboarding.md) → [`beginner-track/README.md`](beginner-track/README.md) |
| Returning contributor | [`docs/best-practices/README.md`](docs/best-practices/README.md) |
| Facilitator | [`workshop-materials/README.md`](workshop-materials/README.md) |

## Quest loop

> Read the codebase → propose a plan → write the fix → run tests

Use [`slash-commands/`](slash-commands/README.md): `/plan`, `/fix`, `/test`, `/review`.

## Repository layout (SEAL-approved beginner path)

Curated from [Awesome Claude Code](https://github.com/hesreallyhim/awesome-claude-code)

| Path | Purpose |
| --- | --- |
| [`beginner-track/`](beginner-track/README.md) | Ordered learning path |
| [`claude-templates/`](claude-templates/README.md) | `CLAUDE.md` for TypeScript, Next.js, Python, infra + SEAL variants |
| [`slash-commands/`](slash-commands/README.md) | `/plan`, `/analyze`, `/fix`, `/review`, `/test`, … |
| [`hooks/`](hooks/README.md) | Format, lint, test, git-safety automation |
| [`workflows/`](workflows/README.md) | Plan-first, git, debugging, PR, commits, exploration |
| [`skills/`](skills/README.md) | Beginner-safe agent skills |
| [`playwright/`](playwright/README.md) | Browser tests (taskdeck-aligned) |
| [`examples/`](examples/README.md) | Workshop exercises (CRUD, fix test, PR review, …) |
| [`workshop-materials/`](workshop-materials/README.md) | Session map for facilitators |
| [`taskdeck-integrations/`](taskdeck-integrations/README.md) | taskdeck pointers |
| [`dashboard-integrations/`](dashboard-integrations/README.md) | dashboard-website-2025 pointers |
| [`github-actions/`](github-actions/README.md) | Playwright CI + repo health templates |
| [`starter-projects/`](starter-projects/README.md) | Minimal boilerplates |
| [`docs/workshops/`](docs/workshops/README.md) | 8-module curriculum |
| [`docs/knowledge-guides/`](docs/knowledge-guides/README.md) | Prompting, context, planning |
| [`docs/security/`](docs/security/README.md) | Command safety, secrets, approvals |
| [`docs/output-styles/`](docs/output-styles/README.md) | Concise, teaching, reviewer modes |
| [`resources/awesome-claude-code/PICKS.md`](resources/awesome-claude-code/PICKS.md) | What we imported vs upstream |

### Legacy / supporting paths

| Path | Purpose |
| --- | --- |
| [`docs/best-practices/`](docs/best-practices/README.md) | Core methodology |
| [`tools/`](tools/claude-integration/README.md) | Integration notes (MCP, workflow) |
| [`templates/`](templates/project-starters/README.md) | Starters and exercises |
| [`resources/seal-integration/`](resources/seal-integration/README.md) | SEAL infra links |

## Developer tooling

```bash
make help
make hooks-install   # pre-commit
make lint
```

See [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`.pre-commit-config.yaml`](.pre-commit-config.yaml).

## Using without cloning

Browse on GitHub; copy templates and commands into your own project when ready.

## License

Educational use within SEAL; see repository license file when added.
