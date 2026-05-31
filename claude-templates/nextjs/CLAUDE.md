# Project guide (Next.js)

## Stack

- Next.js (App Router), React, TypeScript
- Styling: follow existing project (Tailwind / CSS modules)
- **Check `package.json`** — scripts vary by repo (SEAL dashboard has `dev` / `build` / `start` only)

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build — use when no test script exists
npm run start    # serve production build
```

If the target repo defines `lint` or `test`, run those too before a PR.

## Conventions

- Match the target repo: many SEAL apps use `"use client"` heavily — do not assume Server Components by default.
- Colocate route files under `app/`.
- Fetch via existing helpers (e.g. dashboard's `verifiedFetch`) before adding new patterns.

## Workflow

1. Identify the route or component under change.
2. Plan UI + data flow in a few bullets (`/plan`).
3. Implement; verify in browser (and Playwright from the **workshop** repo if mentor provides a staging URL).
4. Run `npm run build` (and `lint`/`test` if present).

## Safety

- No secrets in client bundles or `NEXT_PUBLIC_*` without review.
- Do not commit unless asked.
- Prefer accessible markup (labels, focus states) for form work.
- No user PII in logs or commits.

## SEAL dashboard

Contributing to **dashboard-website-2025**? Use [`CLAUDE.dashboard.md`](../CLAUDE.dashboard.md) instead — it documents auth, paths, and verification for that repo.
