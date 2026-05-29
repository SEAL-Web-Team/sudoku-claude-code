# Review checklist (beginner)

Subset of themes from [gstack review](https://github.com/garrytan/gstack/blob/main/review/checklist.md). Use with `/review` and [code-review skill](../../skills/code-review/SKILL.md).

## Before you ask a human

### Correctness

- [ ] Change matches the stated goal / quest task
- [ ] Edge cases considered (empty input, errors, permissions)
- [ ] No commented-out code or debug `console.log` left behind

### Data and security

- [ ] No secrets in diff (keys, tokens, `.env` values)
- [ ] User input is validated before use (forms, API bodies)
- [ ] SQL/ORM: prefer parameterized queries; avoid string-built SQL
- [ ] No `dangerouslySetInnerHTML` / raw HTML with user content without sanitization

### Performance (when relevant)

- [ ] No obvious N+1 queries (loading related records in a loop without `include` / `join`)
- [ ] Large lists paginated or limited in dev demos

### Tests

- [ ] New behavior has a test or a clear manual test plan in the PR
- [ ] Existing tests still pass

## Severity guide

| Level | Action |
| --- | --- |
| **Critical** | Must fix before merge (security, data loss, broken core flow) |
| **Major** | Should fix before merge (wrong behavior, missing tests on risky change) |
| **Minor** | Nice to fix; can follow up |

## Upstream

Full gstack `/review` includes auto-fix patterns and specialist sub-checks. See [`resources/gstack/PICKS.md`](../../resources/gstack/PICKS.md).
