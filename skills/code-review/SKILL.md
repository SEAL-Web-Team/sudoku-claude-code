---
name: code-review
description: Review code changes for bugs, regressions, security issues, and missing tests. Use when the user asks for a review or before opening a PR.
---

# Code review (lite)

Adapted from gstack `/review` at beginner scale. Full checklist: [review-checklist.md](../../docs/best-practices/review-checklist.md).

## Steps

1. Read the stated goal and diff.
2. Check: correctness, security (secrets, input validation), tests, scope creep.
3. Flag N+1 or missing error handling when the diff touches data access or APIs.
4. Report findings by severity: **Critical** → **Major** → **Minor**.
5. Do not rewrite code unless asked; suggest concrete fixes with file paths.

## Output sections

- **Critical**
- **Major**
- **Minor**
- **Test plan** (what reviewer should run)

If nothing found: say so explicitly and still list a minimal test plan.

## Upstream

gstack `/review` auto-fixes obvious issues and runs deeper checklists. See [resources/gstack/PICKS.md](../../resources/gstack/PICKS.md).
