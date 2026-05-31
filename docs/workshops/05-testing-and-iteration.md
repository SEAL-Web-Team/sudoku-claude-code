# Workshop 5 – Testing and Iteration

**Status:** Facilitator-ready.

## Learning objectives

- Run tests, read failures, and fix bugs without disabling tests.
- Complete the write-test cycle: change → test → interpret → fix.
- Understand how CI would run the same checks on a PR.

## Prerequisites

- Module 4 complete — students have edited minimal-api
- `npm test` works locally

## Activities (90 min suggested)

### Part A — Tests as contract (20 min)

1. Walk [testing best practices](../best-practices/testing.md).
2. Open `tests/items.test.ts` in minimal-api — what does each case assert?
3. Rule: **fix the code or the test intent — never `skip` without mentor OK.**

### Part B — Fix a broken test (45 min)

1. Facilitator introduces a bug **or** student follows [example 02-fix-broken-test](../../examples/02-fix-broken-test/README.md):

   **Option A (facilitator branch):** provide a `buggy` git branch with one failing test.

   **Option B (self-serve):** student breaks one assertion intentionally, then:

   1. Run `npm test`; copy failure output
   2. `/explain` the error
   3. `/analyze` the code under test
   4. `/fix` with smallest change
   5. Re-run tests

2. Document root cause in one sentence in the chat or PR notes.

### Part C — CI mental model (25 min)

1. Read [`github-actions/README.md`](../../github-actions/README.md).
2. Walk [example 08-deploy-simple-app](../../examples/08-deploy-simple-app/README.md) — push → CI → (deploy later).
3. Optional: copy [`playwright-ci.yml`](../../github-actions/playwright-ci.yml) into a student app repo as discussion only.
4. If a public CI run fails later, demo [`/gha`](../../slash-commands/gha.md) on the Actions URL.

## Done when

Students can:

- Make a previously failing test pass and explain why it failed
- Run `npm test` and name what command CI would use
- Describe push → CI in one sentence

## Facilitator notes

- Keep bugs small: wrong status code, off-by-one id, missing `Content-Type` — not architectural rewrites.
- Celebrate reading stack traces aloud before prompting Claude.
- Playwright hands-on is module 6; mention it here only as preview.

## Links

- [Example: fix broken test](../../examples/02-fix-broken-test/README.md)
- [Example: deploy / CI concept](../../examples/08-deploy-simple-app/README.md)
- [GitHub Actions templates](../../github-actions/README.md)
- [AI debugging workflow](../../workflows/ai-debugging.md)
