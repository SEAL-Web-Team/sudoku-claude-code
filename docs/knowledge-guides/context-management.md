# Context management

Long conversations use more tokens and answers can drift. Treat context like a whiteboard — erase and rewrite often.

## When context gets large

- Start a **new chat** for each new sub-task or topic
- Run workshop [`/summarize`](../../slash-commands/summarize.md) and paste the handoff into the next session
- Keep a `HANDOFF.md` on your branch (gitignored if personal)
- Use built-in `/compact` or `/clear` — see [native-claude-code-commands.md](native-claude-code-commands.md)

## Handoff template

```markdown
Goal:
Done:
Next:
Blockers:
Files:
```

Or use the structured output from `/summarize`.

## Fork vs. handoff

| Situation | Tool |
| --- | --- |
| Try a different approach from the same point | `/fork` or `claude -c --fork-session` |
| Session is too long; keep only the plan going forward | `/summarize` → new chat with handoff |
| Big task; need a clean agent with full plan | Plan mode (Shift+Tab) → approve → fresh session with plan only |

Fork keeps conversation history (branched). Handoff keeps only what you write down — usually better for token budget.

## Plan mode handoff

In plan mode, ask: "Gather everything the next agent needs; they will have no other context."

Approve the plan, then start fresh with just the plan file or pasted plan. Built-in plan mode can clear old context automatically.

## Proactive compaction

After completing a milestone, ask: "What should the next session know in under 200 words?"

Do not rely on the model remembering earlier chats.

## Optional (advanced)

- Disable auto-compact in `/config` if you prefer manual control
- [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) — status line, half-clone hooks (week two+)
