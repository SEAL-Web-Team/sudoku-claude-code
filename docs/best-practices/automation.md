# Automation (lightweight)

Automate repeated work, not everything at once.

## What to automate first

- Repeated test commands.
- Repeated formatting/lint checks.
- Repeated environment setup steps.
- Repeated reporting tasks (status, logs, summaries).

## Keep automation safe

- Start with read-only or low-risk actions.
- Require explicit confirmation for destructive operations.
- Review approved command permissions regularly.
- Prefer draft PR creation over direct merge flows.

## Claude Code-friendly automation ideas

- Small helper scripts for routine checks.
- Standard handoff markdown template for context transfer.
- Reusable slash command patterns for recurring tasks.
- Optional hooks that guard quality (lint/test reminders) without blocking all work.

## Signals to automate

- You ran the same command sequence 3+ times this week.
- Team members ask the same setup questions repeatedly.
- Review comments keep repeating the same issues.

## Stop conditions

Do not automate when:

- The process is still changing daily.
- You cannot define a reliable pass/fail signal.
- Safety controls are unclear.
