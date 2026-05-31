# dashboard-website-2025 guide

Copy this file to the **dashboard-website-2025 repo root** as `CLAUDE.md` when contributing (the dashboard does not ship its own yet).

## What this app is

Internal **SEAL member dashboard**: quest/task lists, stats, check-ins, team roster, scheduler. Built with **Next.js 15 App Router**, React 19, TypeScript, Tailwind CSS, **PostgreSQL**, and **Google Sheets** APIs.

## Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js App Router (`app/`) |
| Auth | NextAuth v5 beta — Google OAuth + sheet-access gate |
| User identity | Handle lookup + `localStorage` (after Google login) |
| Data | Postgres (ingested from Sheets) + direct Sheets writes for check-ins/updates |
| Styling | Tailwind (inline patterns; minimal shared primitives in `app/ui/`) |

## Where to look first

| Area | Paths |
| --- | --- |
| Main UI | `app/components/Dashboard.tsx`, `app/components/dashboard/` |
| Data fetching | `app/components/UserDataContext.tsx`, `app/api/user-data/route.ts` |
| Types / contracts | `app/lib/user-data.ts`, `app/lib/definitions.ts` |
| API calls from client | `app/lib/verified-fetch.ts` |
| Auth | `auth.ts`, `middleware.ts`, `app/login/page.tsx` |
| Route handlers | `app/api/*/route.ts` |

Upstream `README.md` may still describe passcode login — **current flow is Google OAuth then handle**, not `verify-passcode`.

## Local setup

```bash
npm install
npm run dev    # turbopack; http://localhost:3000
```

Requires mentor-provided env (Google OAuth, `AUTH_SECRET`, DB, sheet IDs). **Never commit `.env` or service account JSON.**

There is no `npm test`. Run `npm run build` before opening a PR; verify manually in the browser.

## Before changing code

1. Find the closest existing component or route and **match its patterns** (this repo is client-component heavy).
2. Use `/plan` — one UI or API concern per change.
3. If you touch auth, data loading, or API routes, trace **both** NextAuth middleware and handle/localStorage flow.
4. Update `app/components/dashboard/constants.ts` for copy/labels; avoid hardcoding strings in multiple files.

## Conventions

- Path alias: `@/*` → repo root (`tsconfig.json`).
- Prefer extending `UserDataContext` / `verifiedFetch` over new fetch patterns.
- Task status labels: `TASK_LABEL_OPTIONS` in `constants.ts`; helpers in `dashboard/utils.tsx`.
- **Accessibility:** labels on forms, keyboard-friendly modals — match existing components.
- **No PII in logs or commits** — handles, spreadsheet IDs, and user stats stay out of git.

## Auth rules (do not weaken)

- Middleware requires NextAuth session with `hasSheetAccess` for most routes.
- Ingest routes (`/api/ingest-*`) use token auth — do not expose tokens.
- Do not bypass login for "easier local testing" without mentor approval.

## Workshop Playwright vs this repo

This workshop's [`playwright/`](../playwright/README.md) teaches **`@playwright/test`** for apps you own. The dashboard has **no in-repo test suite**. Manual + `npm run build` is the default verification here.

## Related (workshop repo)

- [`dashboard-integrations/`](../dashboard-integrations/README.md) — file map and learning path
- [`claude-templates/nextjs/CLAUDE.md`](nextjs/CLAUDE.md) — generic Next.js notes (adapt commands to this repo's `package.json`)
