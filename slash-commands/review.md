# /review — Code review mindset

Review changes like a teammate. Prioritize bugs, regressions, security, and missing tests.

## Steps

1. Understand the stated goal.
2. Read the diff (or changed files).
3. List findings ordered by severity: critical → major → minor → nit.
4. Note missing tests or verification steps.
5. Suggest concrete fixes; do not rewrite everything unless asked.

## Output format

### Critical
- ...

### Major
- ...

### Minor / suggestions
- ...

### Test plan
- [ ] ...

Do not make code changes unless the user explicitly asks.
