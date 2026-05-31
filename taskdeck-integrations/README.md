# taskdeck integrations

**TaskDeck** is SEAL's internal operator console: Next.js UI + Node runtime + Claude tool loop + Google Workspace (Sheets, Drive, Gmail) + optional Playwright browser sidecar. This folder orients workshop students **without** vendoring taskdeck code or secrets.

## Two different “Playwright” stories

| | Workshop [`playwright/`](../playwright/README.md) | taskdeck `src/browser/` |
| --- | --- | --- |
| Package | `@playwright/test` | `playwright-core` |
| Purpose | Automated **tests** (specs, CI) | Runtime **browser agent** for Claude tools |
| In taskdeck repo? | No — lives here | Yes — no `.spec` files |

Learn test patterns here first; study taskdeck's browser agent when contributing to taskdeck itself.

## Learning path

1. Read taskdeck's `README.md` locally (clone required — internal repo).
2. Copy [`claude-templates/CLAUDE.taskdeck.md`](../claude-templates/CLAUDE.taskdeck.md) → taskdeck root as `CLAUDE.md`.
3. Run locally: `npm install`, configure `.env` (mentor), `npm run dev`.
4. Trace one flow in the codebase (pick one):

   | If your quest touches… | Start reading… |
   | --- | --- |
   | Q-YBR / Column O drafting | `src/quests/quest-runner.js`, `src/quests/quest-sheet.js` |
   | Sheet or Gmail tools | `src/google/connectors.js`, `src/runtime/tool-definitions.js` |
   | Browser automation in tasks | `src/browser/chrome.js`, `src/browser/agent-server.js` |
   | UI / new page | `app/`, `src/web/server.js` (API routes) |
   | Claude API / agent loop | `src/runtime/session-manager.js`, `src/runtime/anthropic-client.js` |

5. Practice browser **testing** in this workshop: [`examples/05-automate-browser-workflow`](../examples/05-automate-browser-workflow/README.md).

## Local run (summary)

```bash
cd taskdeck          # your local clone — path varies
npm install
cp .env.example .env # mentor fills Claude + Google OAuth — never commit
npm run dev          # UI at http://127.0.0.1:3000
```

Optional browser sidecar (free-form browser tasks):

```bash
npx playwright install chromium
npm run browser:agent
```

**There is no `npm test` in taskdeck.** Validation is manual + mentor review.

## Key modules (file map)

```
taskdeck/
├── app/                    # Next.js UI (tasks, quests, proposal, gps, grading)
├── src/
│   ├── index.js            # Bootstrap
│   ├── web/server.js       # Server + API routes
│   ├── runtime/            # Claude session loop, tools, prompts
│   ├── google/             # OAuth, Sheets, Drive, Gmail
│   ├── browser/            # Playwright CDP agent
│   ├── quests/             # Q-YBR quest runner + sheet I/O
│   ├── proposal/           # Proposal workspace
│   └── core/               # Tasks, SQLite store
├── scripts/run-taskdeck.mjs
└── .env.example
```

Note: `docs/architecture.md` in taskdeck describes an older terminal UI design — the product is web-based; prefer `README.md`.

## What students should *not* copy into this workshop repo

- `.env`, OAuth tokens, service account JSON
- `data/` contents (quests, uploads, sqlite)
- Internal sheet URLs or production hostnames
- Quest-specific IDs from a live environment

## Workshop constraint

Keep this public workshop repo free of taskdeck secrets and internal URLs. Point students to local clones and mentors for credentials.

## Quest reference

Sudoku Claude Code quest (P2) — operational target June 1, 2026; see team QO / YBR for status.
