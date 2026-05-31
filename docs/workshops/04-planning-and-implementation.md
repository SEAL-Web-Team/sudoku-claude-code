# Workshop 4 – Planning and Implementation

**Status:** Facilitator-ready.

## Learning objectives

- Write a plan with `/plan` before any implementation.
- Implement a small, scoped feature in minimal-api (one PR-sized change).
- Run tests locally before asking for review.

## Prerequisites

- Modules 1–3 complete
- minimal-api running with passing tests
- Familiarity with [plan-first workflow](../../workflows/plan-first.md)

## Activities (90 min suggested)

### Part A — Plan-first discipline (20 min)

1. Walk [planning-before-coding.md](../knowledge-guides/planning-before-coding.md).
2. Demo `/plan` on this task (facilitator):

   ```text
   Add GET /items?q=search to filter items by title substring.
   Do not write code yet.
   ```

3. Review plan structure: goal, steps, risks, definition of done.

### Part B — Implement in small steps (50 min)

1. Hands-on: [example 01-build-crud-app](../../examples/01-build-crud-app/README.md) — **extension track** on minimal-api (search, PATCH complete, or validation — student picks one):

   | Step | Task |
   | --- | --- |
   | 1 | `/plan` the chosen extension |
   | 2 | Implement store + route changes for **one** step from the plan |
   | 3 | Add or update tests for the new behavior |
   | 4 | `/test` — run `npm test`; fix failures |
   | 5 | `/summarize` — handoff if session ends early |

2. Enforce scope: one feature, no drive-by refactors ([modular-development.md](../knowledge-guides/modular-development.md)).

### Part C — Simplify and scope-check (20 min)

1. Ask Claude: "What did you change outside the plan?" — revert extras.
2. Walk [small-commits](../../workflows/small-commits.md): logical commit messages (student runs `git commit` or asks `/commit`).
3. Optional: `/review` on `git diff` before module 5.

## Done when

Students have:

- [ ] A written plan (chat export or markdown file)
- [ ] A working feature with passing `npm test`
- [ ] Can explain the diff in under two minutes

## Facilitator notes

- If students finish early: pick a second extension from [example 01](../../examples/01-build-crud-app/README.md).
- If behind: implement only the route; add one happy-path test.
- Do not open PRs to the workshop repo — work stays in personal forks.

## Links

- [Example: build CRUD / extend API](../../examples/01-build-crud-app/README.md)
- [Plan-first workflow](../../workflows/plan-first.md)
- [Slash command: plan](../../slash-commands/plan.md)
- [minimal-api starter](../../starter-projects/minimal-api/README.md)
