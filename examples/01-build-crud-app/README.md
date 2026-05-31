# Example: Build a CRUD app

## Goal

Extend the [minimal-api starter](../../starter-projects/minimal-api/README.md) with one new feature — plan first, then implement with tests.

The starter already includes full CRUD and `?completed=` filtering. Pick **one** extension below.

## Extension options (choose one)

| Option | Feature | Hints |
| --- | --- | --- |
| A | `GET /items?q=search` | Filter titles by substring (case-insensitive) |
| B | `PATCH /items/:id/complete` | Toggle or set `completed` without full PUT |
| C | Title validation | Reject titles over 100 chars; return 400 |

## Steps

1. `/plan` — list files to change, test cases, and definition of done.
2. Implement **one** step from the plan; run `npm test`.
3. Finish remaining steps; re-run tests after each.
4. `/review` your diff.
5. `/summarize` — handoff note if switching sessions.

## Done when

- All existing tests still pass
- New tests cover your feature
- You can demo the feature with `curl` or REST client

## Setup

```bash
cd starter-projects/minimal-api   # or your copied fork
npm install
npm test
```

Copy [`claude-templates/typescript/CLAUDE.md`](../../claude-templates/typescript/CLAUDE.md) to `CLAUDE.md` before starting.
