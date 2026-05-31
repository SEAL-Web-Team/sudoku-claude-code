# Workshop 6 – SEAL Tool Integration

**Status:** Facilitator-ready.

## Learning objectives

- Describe what **taskdeck** is (operator console + Quests + Google Workspace + Claude tools) vs what it is not (a Playwright test repo).
- Copy the correct `CLAUDE.md` variant for taskdeck or dashboard work.
- Write one `@playwright/test` spec using this workshop repo (separate from taskdeck's browser agent).

## Prerequisites

- Modules 1–5 complete
- taskdeck clone locally **or** facilitator walkthrough (read-only)
- Node.js 20+

## Activities (90 min suggested)

### Part A — SEAL map (20 min)

1. Walk [`resources/seal-integration/README.md`](../../resources/seal-integration/README.md).
2. **taskdeck in one sentence:** AI operator console for Google Workspace and Q-YBR Quests — Claude calls tools (Sheets, Drive, Gmail, browser), operator approves risky writes.
3. Compare templates:
   - [`CLAUDE.taskdeck.md`](../../claude-templates/CLAUDE.taskdeck.md) — taskdeck backend/runtime/UI
   - [`CLAUDE.dashboard.md`](../../claude-templates/CLAUDE.dashboard.md) — dashboard-website-2025 frontend
4. Discuss: **no secrets, no internal URLs** in public commits ([secrets-management.md](../security/secrets-management.md)).

### Part B — Understand taskdeck (25 min)

1. Read [`taskdeck-integrations/README.md`](../../taskdeck-integrations/README.md) — file map and the two-Playwright distinction.
2. With repo access, facilitator demos **one** trace (students follow along or take notes):

   | Demo option | Show |
   | --- | --- |
   | Quests | `/quests` UI → `src/quests/quest-runner.js` |
   | Agent loop | `src/runtime/session-manager.js` + one tool in `tool-definitions.js` |
   | Browser sidecar | `npm run browser:agent` → `src/browser/agent-server.js` (optional) |

3. Explicitly **do not** search taskdeck for `*.spec` or `playwright.config` — they are not there.

### Part C — Browser testing in the workshop (30 min)

Taskdeck uses Playwright as a **runtime agent**; students learn **automated tests** here:

1. Workshop [`playwright/`](../../playwright/README.md):

   ```bash
   cd playwright
   npm install
   npx playwright install
   npx playwright test
   ```

2. Hands-on: [example 05-automate-browser-workflow](../../examples/05-automate-browser-workflow/README.md).
   - Target: `http://localhost:3000/health` (minimal-api) or mentor-approved staging URL.
   - Not taskdeck's UI unless mentor provides an isolated test environment.

### Part D — Dashboard path (15 min)

1. Read [`dashboard-integrations/README.md`](../../dashboard-integrations/README.md) — Next.js member app, dual auth (NextAuth + handle), file map.
2. Facilitator demo (optional): trace `UserDataContext` → `POST /api/user-data` → `Dashboard.tsx`.
3. Hands-on: [example 04-add-frontend-feature](../../examples/04-add-frontend-feature/README.md) — `/plan` a constants or UI tweak (implement if repo access).
4. Q&A: taskdeck (backend/agent console) vs dashboard (member UI) — which `CLAUDE.md` template.

**Note:** Dashboard has no `npm test`; verification is `npm run build` + manual browser test.

## Done when

Students can:

- Explain taskdeck vs workshop Playwright in one sentence each
- Name two dashboard folders for a UI task (`app/components/dashboard/`, `app/api/`, etc.) **or** two taskdeck paths for backend work
- Show one passing Playwright spec **from this workshop repo** (or documented skip with reason)
- State one rule about secrets in SEAL repos

## Facilitator notes

- Dashboard `.env` and Google OAuth require mentor — do not screen-share keys.
- Upstream dashboard `README.md` still mentions passcode login — **trust workshop `dashboard-integrations/` and `CLAUDE.dashboard.md`** for current auth flow.
- Students without taskdeck access: Part B is facilitator demo only; Parts C–D still work with minimal-api.
- `docs/architecture.md` inside taskdeck is outdated (TUI era) — use taskdeck `README.md` instead.

## Links

- [taskdeck integrations](../../taskdeck-integrations/README.md)
- [dashboard integrations](../../dashboard-integrations/README.md)
- [Playwright (workshop tests)](../../playwright/README.md)
- [Example: browser workflow](../../examples/05-automate-browser-workflow/README.md)
- [CLAUDE.taskdeck.md](../../claude-templates/CLAUDE.taskdeck.md)
- [CLAUDE.dashboard.md](../../claude-templates/CLAUDE.dashboard.md)
