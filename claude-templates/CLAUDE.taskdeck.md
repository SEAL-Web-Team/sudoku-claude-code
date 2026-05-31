# taskdeck integration guide

Copy this file to the **taskdeck repo root** as `CLAUDE.md` when contributing (taskdeck does not ship its own yet).

## What taskdeck is

**TaskDeck** is SEAL's AI-powered **operator console** for Google Workspace + Claude — not a generic CLI or test runner.

| Mode | Route | Purpose |
| --- | --- | --- |
| Free-form tasks | `/` | Parallel ad-hoc tasks: Sheets edits, Drive search, Gmail drafts, browser automation, file uploads |
| Quests | `/quests` | Q-YBR workflow: interview → draft Column O cells → review-gated writes to Google Sheets |

Other workspaces: Proposal (`/proposal`), GPS (`/gps`), Grading (`/grading`), Admin (`/admin`).

**Stack:** Node.js 20+ (ES modules), Next.js UI, custom Node server, SQLite (tasks), Anthropic Messages API, Google OAuth (Sheets/Drive/Gmail), `playwright-core` browser sidecar.

## Architecture (read this first)

```
Operator (browser UI) → Next.js → Node runtime → Claude API (tool loop)
                                      ↓
                         Google APIs + Browser agent (Playwright CDP)
```

Entry points:

- `src/index.js` — app bootstrap
- `src/web/server.js` — HTTP server, API routes, SSE
- `src/runtime/session-manager.js` — Claude tool-calling loop
- `scripts/run-taskdeck.mjs` — `npm run dev` / `npm start`

## Where to look (not `*.spec` files)

TaskDeck has **no** `@playwright/test` suite, no `playwright.config`, and no `npm test`. Playwright is a **runtime browser agent**, not a test framework.

| Area | Paths |
| --- | --- |
| Claude agent + tools | `src/runtime/session-manager.js`, `tool-definitions.js`, `prompts.js`, `anthropic-client.js` |
| Google Sheets / Drive / Gmail | `src/google/sheets-client.js`, `connectors.js`, `oauth-client.js` |
| Quests (Q-YBR sheets) | `src/quests/quest-runner.js`, `quest-sheet.js`, `instructions.md` |
| Browser automation | `src/browser/chrome.js`, `agent-server.js`, `agent-client.js`, `src/browser-agent.js` |
| UI | `app/` (Next.js pages and components) |

## Local setup

```bash
npm install
cp .env.example .env   # configure Claude + Google OAuth — ask mentor, never commit .env
npm run dev            # http://127.0.0.1:3000
```

**Browser agent (optional, for free-form browser tasks):**

```bash
npx playwright install chromium
npm run browser:agent   # separate terminal; CDP sidecar on port 3333 by default
```

There is no automated test script. Verify changes by running the app and exercising the relevant UI or API path.

## Before changing code

1. Read the README and the area you are touching (runtime vs google vs quests vs browser vs UI).
2. Run `npm run dev` locally; reproduce the behavior in the UI.
3. Prefer extending existing abstractions (`connectors.js`, tool definitions, quest runner) over one-off scripts.
4. Use `/plan` — scope to one concern (one tool, one quest step, one UI panel).

## Conventions

- **Review gates:** Risky Sheets and Gmail writes go through propose → operator approve → apply. Do not bypass review flows.
- **API vs browser:** System prompts direct Claude to use Google API tools for Sheets/Drive/Gmail; browser tools are for external websites.
- **ES modules:** `"type": "module"` — use `.js` import paths with extensions where the codebase does.
- **Env loading:** Follow existing `load-env` patterns; avoid reading `process.env` at top level in new modules if the repo uses lazy loading.
- **Per-user data:** OAuth tokens and quests are per-user; do not hardcode user emails or sheet IDs in shared code.
- **No secrets in git:** API keys, OAuth JSON, session secrets, browser agent tokens stay in `.env` or local `data/` — never in commits.

## Workshop Playwright vs taskdeck browser

This workshop repo's [`playwright/`](../playwright/README.md) folder teaches **`@playwright/test`** (specs, CI). That is a **different layer** from taskdeck's `playwright-core` CDP agent. Selector habits (`getByRole`, stable locators) transfer; do not expect to find `.spec.ts` files in taskdeck.

## Related (workshop repo)

- [`taskdeck-integrations/`](../taskdeck-integrations/README.md) — file map and learning path
- [`playwright/`](../playwright/README.md) — browser **testing** for students
