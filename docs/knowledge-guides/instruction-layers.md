# Instruction layers: CLAUDE.md, skills, commands, plugins

Sudoku ships all four. They look similar but load at different times and cost different amounts of context.

## Quick comparison

| Layer | Where it lives | When it loads | Best for |
| --- | --- | --- | --- |
| **CLAUDE.md** | Project root or `~/.claude/` | Every conversation | Stable project rules, stack, conventions |
| **Skills** | `.claude/skills/` or `~/.claude/skills/` | When Claude (or you) invokes them | Focused workflows Claude should pick up on demand |
| **Slash commands** | `.claude/commands/` | When you type `/name` | Repeatable prompts you trigger manually |
| **Plugins** | Installed via `claude plugin` | Bundles commands, skills, hooks, MCP | Upstream toolkits (install, don't copy wholesale) |

## CLAUDE.md — the default brief

Copy a template from [`claude-templates/`](../../claude-templates/README.md) into your project as `CLAUDE.md`.

**Put here:** stack, folder layout, test commands, SEAL policies, tone.

**Keep it short.** If you repeat the same instruction every session, add it. If it is only for one task type, move it to a skill or command instead.

Review periodically — stale rules confuse the agent. Ask Claude: "Read my CLAUDE.md and suggest what to remove or update."

## Skills — on-demand expertise

See [`skills/`](../../skills/README.md). Skills are markdown with front matter; Claude can load them when relevant, or you invoke them with `/skill-name`.

**Put here:** code review checklist, Playwright patterns, debugging playbooks.

**Why skills:** They stay out of context until needed — more token-efficient than a bloated CLAUDE.md.

## Slash commands — your quest loop

See [`slash-commands/`](../../slash-commands/README.md). Workshop set: `/plan`, `/analyze`, `/fix`, `/test`, `/review`, `/summarize`, `/gha`, …

**Put here:** step-by-step prompts you run at a specific moment in the workflow.

**Difference from skills:** Commands are primarily **user-triggered**; skills are primarily **agent-triggered** (though both can be invoked either way in recent Claude Code versions).

## Plugins — install, don't mirror

Plugins package commands, skills, hooks, and MCP config for one install step.

Examples:

- Anthropic's official plugins (e.g. frontend-design)
- [ykdojo/dx](https://github.com/ykdojo/claude-code-tips) — handoff, clone, GHA helpers (advanced; overlaps partially with Sudoku commands)

```bash
claude plugin marketplace add ykdojo/claude-code-tips
claude plugin install dx@ykdojo
```

For Sudoku week one, use **this repo's** templates and commands. Add plugins in week two via [Awesome Claude Code picks](../../resources/awesome-claude-code/PICKS.md).

## Decision tree

```
Same instruction every session?
  → CLAUDE.md

Repeatable prompt you run at a known step?
  → Slash command (copy from slash-commands/)

Claude should apply it when the task matches?
  → Skill

Whole toolkit from upstream with updates?
  → Plugin (link in PICKS.md)
```

## Related

- [context-management.md](context-management.md) — keep CLAUDE.md lean to save tokens
- [effective-prompting.md](effective-prompting.md) — structure tasks on top of these layers
