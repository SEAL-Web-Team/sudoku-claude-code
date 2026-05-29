# Sudoku picks from gstack

Curated subset for beginners. Full project: [garrytan/gstack](https://github.com/garrytan/gstack).

gstack is a **workflow factory** (slash-command skills for plan → review → QA → ship), not a monorepo or Docker starter. App scaffolding lives in [`starter-projects/`](../../starter-projects/README.md) and SEAL project repos.

## Shipped in this repo (use these first)

| gstack concept | Location here |
| --- | --- |
| Sprint loop (Think → Plan → Build → Review → Test → Ship) | [`docs/knowledge-guides/sprint-loop.md`](../../docs/knowledge-guides/sprint-loop.md) |
| Product thinking before code (`/office-hours` lite) | [`docs/knowledge-guides/product-thinking-before-code.md`](../../docs/knowledge-guides/product-thinking-before-code.md), [`skills/product-thinking/`](../../skills/product-thinking/SKILL.md) |
| Systematic debugging (`/investigate` lite) | [`skills/debugging/`](../../skills/debugging/SKILL.md), [`workflows/ai-debugging.md`](../../workflows/ai-debugging.md) |
| Safety guardrails (`/careful`, `/freeze`) | [`workflows/safety-mode.md`](../../workflows/safety-mode.md), [`docs/security/command-safety.md`](../../docs/security/command-safety.md) |
| Code review habits (`/review` lite) | [`skills/code-review/`](../../skills/code-review/SKILL.md), [`docs/best-practices/review-checklist.md`](../../docs/best-practices/review-checklist.md) |
| Browser QA methodology (`/qa` lite) | [`workflows/qa-with-browser.md`](../../workflows/qa-with-browser.md), [`playwright/`](../../playwright/README.md) |
| Ship checklist (`/ship` lite) | [`workflows/ship-checklist.md`](../../workflows/ship-checklist.md) |
| Docs after ship (`/document-release` lite) | [`workflows/docs-after-ship.md`](../../workflows/docs-after-ship.md) |

## Install upstream when ready (week 3+)

| Skill | Why |
| --- | --- |
| `/review` | Full staff-engineer review with auto-fix patterns |
| `/qa` | Real browser pass with regression tests per bug |
| `/ship` | Sync main, coverage audit, open PR |
| `/browse` | Agent-driven Chromium (requires gstack setup) |
| `/retro` | Weekly reflection across repos |

Install: see [`README.md`](README.md).

## Browse when ready (link only — not for week one)

| Skill | Why wait |
| --- | --- |
| `/autoplan`, `/plan-ceo-review`, `/plan-eng-review` | Heavy planning pipeline |
| `/design-shotgun`, `/design-html`, `/design-consultation` | Design exploration stack |
| `/cso` | Full OWASP + STRIDE security audit |
| `/codex` | Requires OpenAI Codex CLI |
| `/setup-gbrain`, `/sync-gbrain` | Separate memory product |
| iOS QA suite | Niche platform |
| `/pair-agent`, parallel Conductor sprints | Multi-agent complexity |

## Patterns we adapted (not copied verbatim)

- Sprint ordering from gstack README → Sudoku quest loop + sprint-loop guide
- Investigate "Iron Law" → debugging skill + ai-debugging workflow
- Review checklist themes (N+1, validation bypass, secrets) → beginner review-checklist
- Diataxis doc types → docs-after-ship workflow
- Careful destructive-command patterns → safety-mode workflow + existing git-safety hook

Add new picks via PR with one paragraph on why it is beginner-safe.
