# Plan-first workflow

## When

Any task that touches more than one file or takes more than ~30 minutes.

## Steps

1. Paste the task into Claude with **Goal**, **Constraints**, **Scope**, **Done when** (see best-practices workflow doc).
2. Run `/plan` or ask: "Propose a plan only; do not code yet."
3. Review the plan; ask questions until steps are clear.
4. Approve one step; implement only that step.
5. Run tests; use `/summarize` before ending the session.

## Anti-patterns

- "Rewrite the whole app"
- Skipping tests because the plan "looks right"
- Mixing unrelated fixes in one PR
