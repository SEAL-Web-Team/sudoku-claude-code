# PR and review workflow

## Author checklist

- [ ] PR description explains **why**, not only what
- [ ] Tests run locally or in CI
- [ ] Scope is one concern
- [ ] No secrets in diff
- [ ] Screenshots for UI changes (if applicable)

## Self-review with Claude

1. Run `/review` on your branch diff.
2. If CI failed, run `/gha` with the Actions run URL.
3. Use [review-checklist](../docs/best-practices/review-checklist.md).
3. Address critical and major items.
4. Complete [ship-checklist](ship-checklist.md).
5. Request human review from task reviewer (Max / Blake per quest).

## Reviewer checklist

- Does it match the quest/task?
- Are edge cases covered?
- Is there a test or clear manual test plan?
- Would a beginner understand the change in six months?

## Templates

Use [`.github/pull_request_template.md`](../.github/pull_request_template.md).
