# SEAL lab project guide

## Context

This project is part of SEAL (Sudoku / Web Team). Prefer patterns from:

- **taskdeck** – AI operator console (Quests, Google Workspace, Claude tools, browser agent)
- **dashboard-website-2025** – member dashboard (Next.js, NextAuth, quests/tasks UI)
- **SEAL-Web-Team** GitHub org conventions

## Quest workflow

1. **Understand** the task from YBR / quest docs.
2. **Plan** small, testable steps (use `/plan` in Claude Code).
3. **Implement** one concern at a time.
4. **Verify** with tests and manual checks.
5. **Review** your diff before requesting review from Blake / Max.

## Communication

- Coordinate in the project Slack channel when assigned.
- Link PRs to quest tasks when applicable.
- Keep handoff notes when sessions span multiple days (`goal`, `done`, `next`).

## Guardrails

- Internal URLs and credentials stay out of public commits.
- Students: ask before force-push, amending published commits, or skipping hooks.
- Workshop repos: prioritize clarity over cleverness.

## Commands

Use the stack-specific section in this file or the sibling template you copied from (`typescript`, `nextjs`, `python`).
