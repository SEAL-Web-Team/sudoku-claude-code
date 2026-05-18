# /fix — Implement a focused fix

Fix one bug or one small issue. Avoid scope creep.

## Steps

1. Confirm the symptom and expected behavior.
2. Locate the root cause (read tests and callers).
3. Propose the smallest change that fixes it.
4. Implement the fix.
5. Run relevant tests or describe how to verify manually.
6. Summarize what changed and why.

## Rules

- One logical fix per session when possible.
- Do not refactor unrelated code.
- Do not commit unless the user asks.
- If the fix needs a design decision, stop and ask.
