# Testing mindset and habits

If Claude writes code, Claude (and you) must prove it works.

## Default testing loop

1. Write or update a test that captures the intended behavior.
2. Run tests and confirm failure when appropriate.
3. Implement the smallest fix.
4. Run tests again until green.
5. Re-check related areas for regressions.

## TDD-friendly pattern

- Commit or stage failing tests first for clarity.
- Use tests as a contract for behavior.
- Avoid “fake pass” tests that only mirror implementation details.

## Verification layers

- **Unit tests:** logic correctness.
- **Integration tests:** boundaries and data flow.
- **UI/browser checks:** only when behavior depends on rendered flows.
- **Manual sanity pass:** quick smoke check on changed path.

## For autonomous or long tasks

- Give the agent a deterministic test command.
- Prefer repeatable checks over visual/manual interpretation.
- For background/long jobs, poll status with increasing intervals.

## Anti-patterns

- “Looks right” without running checks.
- Editing many files without test updates.
- Passing tests that do not cover the changed behavior.
- Shipping unreviewed large diffs from one prompt.
