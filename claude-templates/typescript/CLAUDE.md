# Project guide (TypeScript)

## Stack

- TypeScript, Node 20+
- Package manager: npm or pnpm (match `package.json`)
- Tests: vitest or jest (see `package.json` scripts)

## Commands

```bash
npm install
npm run lint
npm run test
npm run build
```

## Workflow

1. Read related files before editing.
2. Propose a short plan for non-trivial changes.
3. Make the smallest change that satisfies the task.
4. Run lint and tests before suggesting a commit.

## Code style

- Prefer explicit types on public APIs.
- Use existing patterns in the repo; do not introduce a new framework without approval.
- Keep functions small; extract helpers when a file grows past ~200 lines.

## Safety

- Do not commit secrets, `.env` values, or tokens.
- Ask before running destructive git commands.
- Only create git commits when the user explicitly asks.
