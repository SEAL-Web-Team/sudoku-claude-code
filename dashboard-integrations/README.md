# dashboard-website-2025 integrations

**SEAL Dashboard** is the internal member dashboard (quests, tasks, check-ins, team roster) — Next.js App Router + React + TypeScript + Tailwind, backed by **PostgreSQL** and **Google Sheets**. This folder orients workshop students **without** vendoring dashboard code or secrets.

## What it is (one sentence)

Next.js 15 app where SEAL members sign in with **Google (NextAuth)**, enter a **handle**, and view/update their quest and task data from Postgres and Sheets.

Not a generic React SPA — use the **App Router** under `app/`.

## Learning path

1. Read dashboard's `README.md` locally (clone required — internal repo). **Note:** upstream README still mentions passcode/`verify-passcode`; auth is **Google OAuth + handle** only.
2. Copy [`claude-templates/CLAUDE.dashboard.md`](../claude-templates/CLAUDE.dashboard.md) → dashboard root as `CLAUDE.md`.
3. Run locally (mentor provides `.env` — never commit):

   ```bash
   cd dashboard-website-2025   # your local clone
   npm install
   npm run dev               # http://localhost:3000
   ```

4. Trace one flow (pick one):

   | If your quest touches… | Start reading… |
   | --- | --- |
   | Dashboard UI / stats / tasks | `app/components/Dashboard.tsx`, `app/components/dashboard/` |
   | Shared data loading | `app/components/UserDataContext.tsx`, `app/lib/user-data.ts` |
   | API routes | `app/api/user-data/route.ts`, other `app/api/*/route.ts` |
   | Login / session | `auth.ts`, `middleware.ts`, `app/login/page.tsx`, `app/lib/verified-fetch.ts` |
   | Task labels / copy | `app/components/dashboard/constants.ts`, `utils.tsx` |

5. Practice UI workflow: [example 04-add-frontend-feature](../examples/04-add-frontend-feature/README.md).

## Auth (two layers — read before editing)

| Layer | What | Where |
| --- | --- | --- |
| **NextAuth** | Google sign-in; user must have access to SEAL Life sheet | `auth.ts`, `app/api/auth/[...nextauth]/`, `middleware.ts` |
| **Handle session** | User enters handle → spreadsheet ID in **localStorage** | `app/login/page.tsx`, `POST /api/validate-handle` |

Do not bypass middleware or weaken sheet-access checks. Do not log handles, spreadsheet IDs, or user stats in commits.

## Key paths (file map)

```
dashboard-website-2025/
├── auth.ts                 # NextAuth (Google + sheet gate)
├── middleware.ts           # Protects routes; ingest routes excepted
├── app/
│   ├── page.tsx            # Home → Dashboard
│   ├── login/page.tsx      # Google + handle login
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── UserDataContext.tsx
│   │   └── dashboard/      # StatsGrid, QuestListPanel, TaskDetails, …
│   ├── api/                # Route handlers (user-data, check-in, …)
│   └── lib/
│       ├── user-data.ts    # Data contracts / shaping
│       └── verified-fetch.ts  # Auth-aware fetch wrapper
└── package.json            # dev, build, start only — no npm test
```

**Legacy:** `app/src/` is an older tree — prefer `app/` for new work unless a mentor points you elsewhere.

## UI and API patterns

- **No formal design system** — mostly inline Tailwind (purple brand). Reuse patterns in `app/components/dashboard/`; constants in `constants.ts`.
- **No centralized API client** — components use `verifiedFetch` from `app/lib/verified-fetch.ts`.
- **Client-heavy** — many files use `"use client"`; match existing files before defaulting to Server Components.

## Tests and verification

Dashboard has **no** `npm test`, **no** Playwright suite, and **no** `npm run lint` script. Before a PR:

```bash
npm run build
```

Manual test in browser (login flow + the feature you changed). Optional: add a Playwright spec in **this workshop repo** [`playwright/`](../playwright/README.md) against a mentor-provided staging URL — not copied from dashboard.

## What students should *not* copy into this workshop repo

- `.env`, OAuth secrets, `AUTH_SECRET`, DB passwords
- Service account JSON from `app/lib/` (credentials stay in dashboard repo only)
- User PII, handles, or spreadsheet IDs from dev sessions

## Workshop constraint

Keep this public workshop repo free of dashboard secrets and internal URLs. Point students to local clones and mentors for credentials.

## Related

- [`claude-templates/nextjs/CLAUDE.md`](../claude-templates/nextjs/CLAUDE.md) — generic Next.js habits (adapt scripts to dashboard's `package.json`)
- [`resources/seal-integration/README.md`](../resources/seal-integration/README.md)
