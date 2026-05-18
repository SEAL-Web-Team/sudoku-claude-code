# AI-assisted debugging

## Steps

1. Copy the **full error message** and stack trace.
2. Note what you did immediately before the error.
3. Ask Claude: "Explain this error and list the 3 most likely causes" (`/explain`).
4. Ask Claude to **read** the relevant files (`/analyze`) before suggesting a fix.
5. Apply one fix; re-run the same command or test.
6. If still stuck, `/summarize` and ask a teammate or post in Slack with the handoff.

## Prompt template

```text
Error: [paste]
Command I ran: [paste]
Expected: ...
Actual: ...
Files I think are involved: ...
```

## Rules

- Do not paste secrets, tokens, or private URLs into chats.
- Prefer fixing root cause over silencing errors.
