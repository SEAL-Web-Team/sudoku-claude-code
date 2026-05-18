# Git branch workflow

## Branch naming

`feature/short-description` | `fix/short-description` | `docs/short-description`

## Steps

1. Start from updated `main`: `git pull origin main`
2. Create branch: `git checkout -b feature/my-change`
3. Make small commits on the branch (see [small-commits.md](small-commits.md))
4. Push: `git push -u origin feature/my-change`
5. Open a draft PR early if the change is large

## With Claude

- Ask Claude to **propose** commands; you run them, or explicitly approve each command.
- Never force-push to shared branches without team approval.
