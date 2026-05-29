# Sprint loop (from gstack, simplified)

gstack describes product work as a **sprint**, not a single chat. Sudoku uses the same order at beginner scale.

## The loop

```text
Think → Plan → Build → Review → Test → Ship → (Reflect)
```

| Phase | Your specialist (concept) | Sudoku tools |
| --- | --- | --- |
| Think | Product / founder | [product-thinking-before-code.md](product-thinking-before-code.md) |
| Plan | Eng manager | `/plan`, [plan-first workflow](../../workflows/plan-first.md) |
| Build | You + Claude | `/fix`, small commits |
| Review | Staff engineer | `/review`, [code-review skill](../../skills/code-review/SKILL.md) |
| Test | QA | `/test`, [Playwright](../../playwright/README.md), [qa-with-browser](../../workflows/qa-with-browser.md) |
| Ship | Release engineer | [ship-checklist](../../workflows/ship-checklist.md) |
| Reflect | Eng manager | Quest retro in Slack; optional upstream `/retro` |

## Map to the quest loop

SEAL's short form is the middle of the sprint:

> Read the codebase → propose a plan → write the fix → run tests

"Read" covers Think + early Plan. "Ship" adds PR hygiene and docs — see [ship-checklist](../../workflows/ship-checklist.md).

## Rules for beginners

1. **Do not skip Plan** on multi-file work.
2. **Review your own diff** before asking a human.
3. **Run the same test** after every fix attempt.
4. **Update docs** when behavior or setup changes — [docs-after-ship](../../workflows/docs-after-ship.md).

## When you outgrow this doc

Install full [gstack](https://github.com/garrytan/gstack) for `/office-hours`, `/qa`, `/ship`, and `/review` with browser automation. See [`resources/gstack/PICKS.md`](../../resources/gstack/PICKS.md).
