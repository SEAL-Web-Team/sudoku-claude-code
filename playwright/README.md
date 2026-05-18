# Playwright (workshop)

Browser testing aligned with **taskdeck** patterns. Students learn stable UI automation before touching production taskdeck code.

## Setup

```bash
cd playwright
npm init -y
npm install -D @playwright/test
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

## Practices

- Prefer `getByRole` and `getByTestId`.
- Avoid `sleep`; use `expect` auto-waiting.
- Keep tests independent (no order dependency).

## SEAL

When ready, compare with Playwright usage in the internal **taskdeck** repository.
