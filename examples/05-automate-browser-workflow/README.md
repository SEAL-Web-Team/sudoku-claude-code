# Example: Automate a browser workflow

## Goal

Automate a repeatable click/type flow with **`@playwright/test`** (this workshop repo). This teaches browser **testing** — not taskdeck's Playwright browser **agent** (see [`taskdeck-integrations/`](../../taskdeck-integrations/README.md)).

## Steps

1. Record the manual steps you do today.
2. Copy patterns from [`playwright/examples/`](../../playwright/examples/).
3. Write one spec per user journey.
4. Run `npx playwright test` locally.
5. Copy [`github-actions/playwright-ci.yml`](../../github-actions/playwright-ci.yml) into your app repo.

## Suggested targets

| Target | URL |
| --- | --- |
| minimal-api (module 2–5) | `http://localhost:3000/health` |
| Dashboard staging | Mentor-provided URL only |
| taskdeck UI | **Not** recommended for week-one tests — no spec suite in taskdeck; use isolated env + mentor if required |

## Done when

CI runs Playwright on push (or you document why not yet).

When contributing to **taskdeck**, read [`CLAUDE.taskdeck.md`](../../claude-templates/CLAUDE.taskdeck.md) and trace `src/browser/` — different layer from this exercise.
