# Native Claude Code commands

This repo ships custom slash commands (`/plan`, `/fix`, `/test`, …). Claude Code also has **built-in** commands — type `/` in the terminal to see the full list for your version.

## Session health

| Command | When to use |
| --- | --- |
| `/usage` | Check rate limits before a long session |
| `/clear` | Start fresh when switching to a new topic |
| `/compact` | Summarize the conversation to free context space |
| `/stats` | View usage history and activity |

**Habit:** If answers feel sluggish or off-topic, `/clear` or `/compact` and paste a handoff from [`/summarize`](../../slash-commands/summarize.md). See [context-management.md](context-management.md).

## Plan mode

Press **Shift+Tab** or type `/plan` (built-in) to enter plan mode. Claude explores and proposes a plan **without editing files** until you approve.

Use plan mode when:

- The task spans multiple files and you want a roadmap first
- You are handing off to a fresh session (plan becomes the new agent's context)

Our workshop `/plan` command is a lighter, copy-paste prompt with the same spirit. Either works; plan mode is interactive, `/plan` is a fixed template.

## Configuration and tools

| Command | Purpose |
| --- | --- |
| `/config` | Toggle settings (e.g. auto-compact, permissions) |
| `/mcp` | List and manage MCP servers |
| `/permissions` | Review allowed and denied commands |
| `/release-notes` | See what changed in your installed version |
| `/terminal-setup` | Keyboard shortcuts for multi-line input |

## Useful shortcuts (input box)

| Shortcut | Action |
| --- | --- |
| `Ctrl+A` / `Ctrl+E` | Jump to start / end of line |
| `Ctrl+W` | Delete previous word |
| `Ctrl+G` | Open prompt in external editor (good for long paste) |
| `\` + Enter | New line without sending |
| `Alt+V` (Windows) / `Ctrl+V` (Mac/Linux) | Paste image from clipboard |

On Mac Terminal, run `/terminal-setup` for Option+Enter newline support.

## Fork a conversation

To try a different approach without losing the original thread:

- `/fork` — branch from the current session
- `claude -c --fork-session` — continue last session as a new fork

See [context-management.md](context-management.md) for when to fork vs. write a handoff.

## Related

- [instruction-layers.md](instruction-layers.md) — CLAUDE.md vs skills vs commands
- [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) — advanced session tips (optional)
