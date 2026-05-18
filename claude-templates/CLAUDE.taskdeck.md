# taskdeck integration guide

## Purpose

taskdeck is SEAL's automation platform (JavaScript, Playwright, Claude). Use this guide when extending or learning from taskdeck patterns.

## Focus areas

- Browser automation with Playwright
- Claude-assisted task flows
- Google Workspace integrations (when present in the codebase)

## Before changing taskdeck

1. Read existing Playwright specs and helper utilities.
2. Run the project's install and test scripts locally.
3. Prefer extending existing abstractions over new one-off scripts.

## Playwright habits

- Use stable selectors (`getByRole`, `getByTestId`) over brittle CSS.
- One logical assertion group per test.
- See [`playwright/`](../playwright/README.md) in this workshop repo for starter examples.

## Safety

- taskdeck may touch production-adjacent systems; never commit service account JSON or API keys.
- Test against staging or mocked endpoints when available.

## Related

- [`taskdeck-integrations/`](../taskdeck-integrations/README.md)
- [`playwright/`](../playwright/README.md)
