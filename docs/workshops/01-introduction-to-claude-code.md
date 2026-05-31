# Workshop 1 – Introduction to Claude Code

**Status:** Facilitator-ready.

## Learning objectives

- Explain what Claude Code is and how it differs from chat-only AI.
- Describe the SEAL quest loop: read → plan → fix → test.
- Run one successful agent session that produces a useful doc (no code deploy required).

## Prerequisites

- GitHub account (SEAL org access or personal practice repo)
- Laptop with terminal access
- Claude Code or Cursor installed ([module 02](02-development-environment.md) covers install if needed)

## Activities (75 min suggested)

### Part A — Why agentic coding (20 min)

1. Facilitator demo: same task in chat vs Claude Code with file access and `/plan`.
2. Walk [core workflow](../best-practices/workflow.md) — small tasks, verify, handoff.
3. Show this repo's layout from [README](../../README.md): templates, commands, examples — not a single app to deploy.

### Part B — First session (35 min)

1. Students open a **personal practice repo** (or empty repo they own).
2. Copy [`claude-templates/CLAUDE.SEAL.md`](../../claude-templates/CLAUDE.SEAL.md) → `CLAUDE.md` in the project root.
3. Skim [instruction-layers.md](../knowledge-guides/instruction-layers.md) — what loads every session vs on demand.
4. Hands-on: [example 07-generate-readme](../../examples/07-generate-readme/README.md).
   - Paste project context; ask Claude to draft a README.
   - Student edits for accuracy; removes hallucinated commands.

### Part C — Quest loop habit (20 min)

1. Introduce `/plan` and `/summarize` from [slash-commands](../../slash-commands/README.md) — install not required yet if time is short; show facilitator copy.
2. Exercise: student writes a 4-line prompt using [effective-prompting.md](../knowledge-guides/effective-prompting.md) (goal, constraints, scope, done when).
3. Q&A: when to start a new chat ([context-management.md](../knowledge-guides/context-management.md)).

## Done when

Students can:

- State the quest loop in order
- Name one thing that belongs in `CLAUDE.md` vs a slash command
- Show a README draft they verified manually

## Facilitator notes

- Do not require production API keys or SEAL internal repos in session 1.
- If install fails, pair students and defer full setup to module 2.
- Emphasize: **you approve terminal commands** — read before accepting.

## Links

- [Onboarding](../onboarding.md)
- [Beginner track](../../beginner-track/README.md)
- [Example: generate README](../../examples/07-generate-readme/README.md)
- [Native Claude Code commands](../knowledge-guides/native-claude-code-commands.md)
