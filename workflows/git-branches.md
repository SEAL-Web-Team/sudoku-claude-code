# Git branch workflow

## Branch naming

`feature/short-description` | `fix/short-description` | `docs/short-description`

## Steps

1. Start from updated `main`: `git pull origin main`
2. Create branch: `git checkout -b feature/my-change`
3. Make small commits on the branch (see [small-commits.md](small-commits.md))
4. Push: `git push -u origin feature/my-change`
5. Open a **draft PR** early if the change is large

## Draft PRs with GitHub CLI

Draft PRs let you share work-in-progress without requesting review yet.

Ask Claude to propose (you approve each command):

```bash
gh pr create --draft --title "feat: short description" --body "Summary of why and how to test"
```

Update as you go:

```bash
gh pr ready    # mark ready for review when done
gh pr view     # check status and CI
```

If CI fails, use [`/gha`](../slash-commands/gha.md) with the Actions run URL.

## With Claude

- Ask Claude to **propose** commands; you run them, or explicitly approve each command.
- Never force-push to shared branches without team approval.
- Prefer draft PRs over pushing directly to `main`.
