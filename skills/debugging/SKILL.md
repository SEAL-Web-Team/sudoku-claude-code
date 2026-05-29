---
name: debugging
description: Debug errors systematically. Use when tests fail, the app crashes, or behavior is wrong.
---

# Debugging (investigate lite)

Adapted from gstack `/investigate` — **Iron Law: no fix without investigation.**

## Steps

1. Capture exact error text, stack trace, and reproduction steps.
2. Form hypotheses; **read** code to confirm or reject (`/analyze` before editing).
3. Trace data flow: where does bad value enter, where does it fail?
4. Change **one** thing at a time; re-run the **same** test or command.
5. Explain root cause in plain language when fixed.
6. If three fix attempts fail, stop and `/summarize` for a human — do not guess.

## Anti-patterns

- Disabling tests or silencing errors without user approval
- Refactoring unrelated files while debugging (see [safety-mode workflow](../../workflows/safety-mode.md))
- Applying a fix without stating the hypothesis it tests

## Pair with

- [ai-debugging.md](../../workflows/ai-debugging.md)
- [safety-mode.md](../../workflows/safety-mode.md) for prod-like environments

## Upstream

Full gstack `/investigate` adds freeze hooks and structured timelines. See [resources/gstack/PICKS.md](../../resources/gstack/PICKS.md).
