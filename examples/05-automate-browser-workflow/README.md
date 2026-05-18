# Example: Automate a browser workflow

## Goal

Automate a repeatable click/type flow with Playwright.

## Steps

1. Record the manual steps you do today.
2. Copy patterns from [`playwright/examples/`](../../playwright/examples/).
3. Write one spec per user journey.
4. Run `npx playwright test` locally.
5. Copy [`github-actions/playwright-ci.yml`](../../github-actions/playwright-ci.yml) into your app repo.

## Done when

CI runs Playwright on push (or you document why not yet).

Connect to **taskdeck** when ready via [`taskdeck-integrations/`](../../taskdeck-integrations/README.md).
