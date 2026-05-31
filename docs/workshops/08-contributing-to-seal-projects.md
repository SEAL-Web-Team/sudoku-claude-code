# Workshop 8 – Contributing to SEAL Projects

**Status:** Facilitator-ready.

## Learning objectives

- Open a draft PR with `gh` or GitHub UI following SEAL conventions.
- Self-review with `/review` before requesting human review.
- Complete the ship checklist and PR template.

## Prerequisites

- Modules 1–7 complete or equivalent
- GitHub CLI authenticated (`gh auth status`)
- A branch with changes ready (minimal-api feature or docs fix)

## Activities (90 min suggested)

### Part A — Branch and draft PR (25 min)

1. Walk [git-branches workflow](../../workflows/git-branches.md) — naming, pull before branch, **draft PR early**.
2. Demo draft PR:

   ```bash
   git checkout -b feature/short-description
   git push -u origin HEAD
   gh pr create --draft --title "feat: ..." --body "..."
   ```

3. Students open a draft PR on their practice repo (or a docs fix to workshop repo if contributing upstream).

### Part B — Self-review (40 min)

1. Hands-on: [example 06-review-pr-with-claude](../../examples/06-review-pr-with-claude/README.md).
2. Run `/review` with PR description + diff.
3. Use [review-checklist.md](../best-practices/review-checklist.md) — fix critical/major items.
4. If CI fails: `/gha` with the Actions run URL ([slash command](../../slash-commands/gha.md)).

### Part C — Ship and handoff (25 min)

1. Complete [ship-checklist.md](../../workflows/ship-checklist.md) and [PR template](../../.github/pull_request_template.md).
2. Mark PR ready: `gh pr ready` when checks pass and self-review is done.
3. `/summarize` for next session if work continues.
4. Discuss reviewers (Max / Blake per quest YBR) and when to ask in Slack vs keep prompting.

## Done when

Students have:

- [ ] A draft or ready PR with filled template
- [ ] Self-review notes addressed
- [ ] Requested human review (or documented blocker)

## Facilitator notes

- Never force-push shared branches; reinforce [command-safety.md](../security/command-safety.md).
- Workshop repo contributions: small docs/template fixes welcome; large refactors need issue first ([CONTRIBUTING.md](../../CONTRIBUTING.md)).
- Students without a SEAL target repo may PR to their personal fork only — process is the same.

## Links

- [Example: review PR with Claude](../../examples/06-review-pr-with-claude/README.md)
- [PR review workflow](../../workflows/pr-review.md)
- [Ship checklist](../../workflows/ship-checklist.md)
- [Contributing](../../CONTRIBUTING.md)
- [Beginner track step 8](../../beginner-track/README.md)
