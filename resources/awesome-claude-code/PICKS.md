# Sudoku picks from Awesome Claude Code

Curated subset for beginners. Full index: [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code).

## Shipped in this repo (use these first)

| Category | Location here |
| --- | --- |
| CLAUDE.md templates | [`claude-templates/`](../../claude-templates/README.md) |
| Slash commands | [`slash-commands/`](../../slash-commands/README.md) |
| Hooks | [`hooks/`](../../hooks/README.md) |
| Workflows | [`workflows/`](../../workflows/README.md) |
| Playwright | [`playwright/`](../../playwright/README.md) |
| Skills | [`skills/`](../../skills/README.md) |

## Upstream categories (browse when ready)

| Category | Why wait |
| --- | --- |
| Multi-agent orchestrators | Overwhelming for week one |
| Alternative clients | Stick to Claude Code / Cursor first |
| Exotic plugins | Learn core loop first |

## Upstream samples we adapted

- Slash command patterns (e.g. `commit`) → simplified in `slash-commands/`
- CLAUDE.md examples → `claude-templates/`
- Design review workflow → see `workflows/pr-review.md` (lighter weight)
- Official Claude GitHub Actions → `github-actions/` templates

## Community references (external)

- [ykdojo/claude-code-tips](https://github.com/ykdojo/claude-code-tips) — session tips; install **dx plugin** for advanced handoff/clone helpers (week two+)
- [Anthropic Claude Code docs](https://docs.anthropic.com/en/docs/claude-code) — authoritative

Sudoku adapts a subset locally: [`/gha`](../../slash-commands/gha.md), [instruction layers](../../docs/knowledge-guides/instruction-layers.md), [native commands cheatsheet](../../docs/knowledge-guides/native-claude-code-commands.md).

## Related: gstack (sprint workflows)

Claude **tooling** lives in Awesome Claude Code; **sprint habits** (review, QA, ship) are curated from [gstack](../gstack/PICKS.md).

Add new picks via PR with one paragraph on why it is beginner-safe.
