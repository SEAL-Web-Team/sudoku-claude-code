---
name: playwright
description: Write and fix Playwright browser tests (@playwright/test). Use for UI regression tests and CI — not taskdeck's runtime browser agent (see taskdeck-integrations).
---

# Playwright

- Use `getByRole`, `getByLabel`, `getByTestId`.
- Rely on auto-waiting `expect`; avoid fixed sleeps.
- One behavior per test; no shared mutable state.
- Point to [`playwright/`](../../playwright/README.md) examples in this repo.
