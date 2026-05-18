# /test — Run and interpret tests

Run the project's test suite (or a subset) and explain failures clearly.

## Steps

1. Find test commands in `package.json`, `Makefile`, `pyproject.toml`, or `CLAUDE.md`.
2. Run the narrowest relevant tests first, then broader suites if needed.
3. For each failure: file, assertion, likely cause, suggested fix.
4. Report pass/fail counts and what was not run.

## Rules

- Prefer real test output over guessing.
- If tests cannot run (missing deps), say what to install.
- Do not disable failing tests to "make green" without user approval.
