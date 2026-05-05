# Navigating and reading code

Claude Code is strongest when used as a structured reader, not a guesser.

## Read in this order

1. **Entry points** (main routes, commands, handlers).
2. **Core logic** (services, domain functions).
3. **Boundaries** (APIs, DB, external tools).
4. **Tests** (expected behavior and edge cases).

## High-signal questions to ask

- “Where is this behavior implemented?”
- “What inputs and outputs does this function rely on?”
- “What are the side effects?”
- “Which tests cover this path?”
- “What would break if we changed this?”

## Good exploration workflow

- Start broad, then narrow to specific files.
- Ask for a short map first, then inspect details.
- Keep one concern per thread (do not mix unrelated bugs).
- If output is noisy, ask for only relevant symbols/files.

## Context hygiene

- Start fresh for new topics.
- Compact/summarize only after capturing the real state.
- Keep notes in markdown so future sessions can reload quickly.
- Prefer absolute or clear relative paths when handing off work.

## Review before trusting

- Cross-check findings against actual file contents.
- Ask for specific evidence (“show function and call sites”).
- Verify behavior with tests or runnable checks, not narrative alone.
