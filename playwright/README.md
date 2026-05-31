# Playwright (workshop)

Browser **testing** with `@playwright/test` — specs, assertions, CI. This is how students learn stable UI automation before contributing to SEAL apps.

## How this relates to taskdeck

TaskDeck uses **`playwright-core`** as a **runtime browser agent** (Claude drives Chrome via CDP; `npm run browser:agent`). TaskDeck has **no** `.spec.ts` files or `playwright.config` in its repo.

| | This folder | taskdeck `src/browser/` |
| --- | --- | --- |
| Goal | Regression tests you run in CI | Live browser control for the AI agent |
| Run with | `npx playwright test` | `npm run browser:agent` (inside taskdeck) |

Selector habits transfer (`getByRole`, stable locators). The tooling layer is different — see [`taskdeck-integrations/`](../taskdeck-integrations/README.md).

## Setup

```bash
cd playwright
npm install
npx playwright install
```

## Layout

| Path | Purpose |
| --- | --- |
| [`playwright.config.ts`](playwright.config.ts) | Shared config |
| [`examples/basic-navigation.spec.ts`](examples/basic-navigation.spec.ts) | First test |
| [`examples/ui-regression.spec.ts`](examples/ui-regression.spec.ts) | Snapshot-style check |
| [`../github-actions/playwright-ci.yml`](../github-actions/playwright-ci.yml) | CI workflow to copy into your app repo |

## Run locally

```bash
npx playwright test
npx playwright test --ui
```

Point `baseURL` in config at your app (e.g. minimal-api on port 3000, dashboard staging — mentor-approved URL only).

## Practices

- Prefer `getByRole` and `getByTestId`.
- Avoid `sleep`; use `expect` auto-waiting.
- Keep tests independent (no order dependency).

## SEAL

- **Module 6:** run specs here; study taskdeck's agent separately if you contribute to taskdeck.
- **Dashboard / apps:** copy CI template into the app repo once tests exist.
