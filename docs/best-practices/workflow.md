# Core workflow with Claude Code

This is the default loop for Sudoku projects:

1. **Understand** the task and constraints.
2. **Plan** a small, testable change.
3. **Implement** only that change.
4. **Verify** with tests/checks.
5. **Review** and simplify.

Use this loop repeatedly instead of asking for one giant “do everything” response.

## Practical habits

- Keep tasks small; break large requests into smaller tickets.
- Start a fresh conversation when topic/context drifts.
- Before long sessions, create a short handoff note (`goal`, `what worked`, `what failed`, `next step`).
- Prefer draft PRs for higher-risk changes.
- Ask for explanation when code feels overcomplicated, then simplify.

## Suggested prompt pattern

Use this structure when assigning work:

- **Goal:** one sentence
- **Constraints:** tech stack, policies, limits
- **Scope:** files or modules allowed
- **Definition of done:** exact checks/tests expected

Example:

```text
Goal: fix slow formula lookup.
Constraints: no full-sheet imports, no per-user duplicate pulls.
Scope: formulas in grader tab and staging tab only.
Done when: existing checks pass and new formula uses bounded range.
```

## Verification checklist

- [ ] The change matches the requested scope.
- [ ] Tests/checks were actually run.
- [ ] Edge cases were considered.
- [ ] Diff is understandable in one pass.
- [ ] If context grew too large, a handoff was written.
