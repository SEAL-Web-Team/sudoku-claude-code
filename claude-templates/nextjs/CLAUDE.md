# Project guide (Next.js)

## Stack

- Next.js (App Router), React, TypeScript
- Styling: follow existing project (Tailwind / CSS modules)
- Tests: see `package.json` (`test`, `lint`, `build`)

## Commands

```bash
npm install
npm run dev      # local dev server
npm run lint
npm run test
npm run build
```

## Conventions

- Server Components by default; add `"use client"` only when needed.
- Colocate route files under `app/`.
- Fetch data in server components or route handlers unless client interactivity requires otherwise.

## Workflow

1. Identify the route or component under change.
2. Plan UI + data flow in a few bullets.
3. Implement; verify in browser or Playwright if tests exist.
4. Run `lint` and `build` before PR.

## Safety

- No secrets in client bundles or `NEXT_PUBLIC_*` without review.
- Do not commit unless asked.
- Prefer accessible markup (labels, focus states) for form work.
