# Workshop 7 – Community Best Practices

**Status:** Facilitator-ready.

## Learning objectives

- Name two community catalogues: Awesome Claude Code (tooling) and gstack (sprint workflows).
- Use the SEAL quest loop and the extended sprint loop (plan → review → test → ship).
- Apply safety habits before destructive commands and wide refactors.

## Prerequisites

- Modules 1–5 complete or equivalent
- Slash commands installed
- Optional: read [sprint-loop.md](../knowledge-guides/sprint-loop.md)

## Activities (90 min suggested)

### Part A — Awesome Claude Code (30 min)

1. Walk [`resources/awesome-claude-code/PICKS.md`](../../resources/awesome-claude-code/PICKS.md): what is **in** Sudoku vs upstream only.
2. Walk [instruction-layers.md](../knowledge-guides/instruction-layers.md) — where CLAUDE.md, skills, commands, and plugins fit.
3. Demo one slash command students have not used yet (`/summarize`, `/gha` on a failed CI link, or `/refactor` on a toy diff).
4. Optional: `npx cc-safe .` — see [tool-auditing.md](../security/tool-auditing.md).
5. Discuss: why we do not mirror entire external repos into the workshop.

### Part B — gstack sprint habits (40 min)

1. Walk [`resources/gstack/PICKS.md`](../../resources/gstack/PICKS.md).
2. **Product thinking:** [product-thinking-before-code.md](../knowledge-guides/product-thinking-before-code.md) — answer six questions for a fake feature ("student task notifications").
3. **Self-review:** run `/review` on a prepared diff; use [review-checklist.md](../best-practices/review-checklist.md).
4. **Ship habits:** [ship-checklist.md](../../workflows/ship-checklist.md) — fill a PR template together.
5. Optional demo for mentors: install upstream gstack and run `/qa` on a staging URL.

### Part C — Guardrails (20 min)

1. [command-safety.md](../security/command-safety.md) + [safety-mode.md](../../workflows/safety-mode.md).
2. Show `git-safety` hook once.
3. Q&A: when to ask a human vs keep prompting Claude.

## Done when

Students can explain:

- Quest loop vs full sprint loop
- Where Sudoku assets live vs what requires upstream install
- One safety rule they will not break

## Links

- [Awesome Claude Code picks](../../resources/awesome-claude-code/PICKS.md)
- [gstack picks](../../resources/gstack/PICKS.md)
- [Beginner track](../../beginner-track/README.md)
- [Security basics](../security/README.md)
- [Example: review PR](../../examples/06-review-pr-with-claude/README.md)
