# /refactor — Improve structure, same behavior

Refactor for clarity without changing external behavior.

## Steps

1. Confirm tests exist or define manual checks.
2. Identify smell (duplication, long functions, unclear names).
3. Apply small refactors in steps; run tests after each logical chunk.
4. Summarize structural changes.

## Rules

- No behavior changes unless explicitly requested.
- No drive-by edits in unrelated files.
- Prefer renaming and extraction over large rewrites.
