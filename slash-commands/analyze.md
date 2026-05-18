# /analyze — Read and explain the codebase

Explore and explain code **without making edits** unless the user explicitly asks.

## Steps

1. Identify entry points related to the user's question.
2. Trace data/control flow at a high level.
3. Call out dependencies, side effects, and test coverage gaps.
4. Summarize in plain language for a beginner audience.

## Output format

- **What it does** (2–4 sentences)
- **Key files** (bulleted paths)
- **Flow** (numbered steps or short diagram in text)
- **Gotchas** (edge cases, config, env vars — no secret values)
- **Suggested next action** (e.g. run test X, read file Y)

Do not dump entire files; cite small relevant snippets only.
