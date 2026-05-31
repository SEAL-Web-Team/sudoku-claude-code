# Example: Add a frontend feature

## Goal

Plan one UI change in **dashboard-website-2025** (or another Next.js app) matching existing patterns.

## Prerequisites

- Dashboard clone locally **or** screenshots + file paths from a mentor
- [`CLAUDE.dashboard.md`](../../claude-templates/CLAUDE.dashboard.md) copied to dashboard root as `CLAUDE.md`
- Read [`dashboard-integrations/`](../../dashboard-integrations/README.md) — auth and file map

## Suggested starter tasks (dashboard)

| Option | Touch |
| --- | --- |
| A | Copy/label change in `app/components/dashboard/constants.ts` |
| B | Small UI tweak in `StatsGrid.tsx` or `QuestListPanel.tsx` |
| C | Helper function in `app/components/dashboard/utils.tsx` with manual test steps |

Avoid auth, middleware, or ingest routes for week one.

## Steps

1. Screenshot or describe current UI; note the file path.
2. `/plan` — component location, props/state, and how to verify in browser.
3. Implement matching existing Tailwind patterns (no new UI library).
4. Run `npm run build` in dashboard; manual test login + your feature.
5. `/review` your diff — check for PII in logs or hardcoded IDs.

Optional: add a Playwright spec in [`playwright/`](../../playwright/README.md) against staging (mentor URL only).

## Done when

Feature works after Google + handle login, `npm run build` passes, and you can explain which files you changed.
