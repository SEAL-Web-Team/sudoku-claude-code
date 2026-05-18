# dashboard-website-2025 guide

## Purpose

Reference patterns for SEAL's TypeScript/React dashboard (auth, API routes, UI components).

## Stack (typical)

- Next.js or React SPA (confirm in target repo)
- TypeScript
- Existing auth and API client modules

## Workflow

1. Find the page or API route closest to your feature.
2. Match component and hook patterns already in the repo.
3. Add or update tests if the repo includes them.
4. Verify login/session flows if you touch auth.

## UI guidelines

- Reuse design tokens, spacing, and components from the dashboard.
- Keep forms accessible (labels, error text, keyboard navigation).

## Safety

- User data: follow SEAL privacy practices; no PII in logs.
- Do not weaken auth checks for convenience.

## Related

- [`dashboard-integrations/`](../dashboard-integrations/README.md)
- [`claude-templates/nextjs/CLAUDE.md`](nextjs/CLAUDE.md)
