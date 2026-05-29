# QA with a browser (lite)

Adapted from gstack's `/qa` — manual and automated browser verification for workshop apps.

Pair with [`playwright/`](../playwright/README.md) for tests you keep in CI.

## When

- UI feature shipped or bug fix touches the frontend
- taskdeck or dashboard integration exercise
- Before you say "it works on my machine" in a PR

## Steps

1. **Define flows** — 3–5 user paths (login optional; use test data).
2. **Reproduce the bug** — exact URL, click path, expected vs actual.
3. **Run Playwright** — `npx playwright test` or project script.
4. **Manual spot-check** — one flow Claude cannot see in code alone (layout, auth redirect).
5. **Regression** — add or extend a test for each bug you fixed.

## Prompt template

```text
Staging or local URL: [url]
Flows to verify: [list]
Known bug: [steps]

Walk through each flow. For each failure: reproduce, hypothesize, fix one issue, re-run the same flow.
Propose a Playwright test for every fix.
```

## Rules

- No production credentials in chat; use mentor-provided test accounts.
- Do not disable failing tests to green CI without approval.
- Screenshot or short screen recording for UI PRs when reviewers are remote.

## Upstream

gstack `/qa` opens a real browser session, fixes with atomic commits, and auto-suggests regression tests. Requires gstack install — [`resources/gstack/README.md`](../resources/gstack/README.md).
