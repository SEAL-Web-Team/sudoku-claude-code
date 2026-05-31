# Workshop 2 – Setting up Development Environment

**Status:** Facilitator-ready.

## Learning objectives

- Install Claude Code (or confirm Cursor agent setup) and GitHub CLI.
- Install workshop slash commands and optional git-safety hook.
- Clone or copy the minimal-api starter into a personal practice repo.

## Prerequisites

- Module 1 complete or equivalent
- Git installed
- Node.js 20+ (`node -v`)

## Activities (90 min suggested)

### Part A — Tooling check (25 min)

1. Verify installs:

   ```bash
   git --version
   node -v
   gh auth status    # optional but recommended by module 8
   claude --version  # or confirm Cursor agent
   ```

2. Walk [native-claude-code-commands.md](../knowledge-guides/native-claude-code-commands.md): `/usage`, `/clear`, `/permissions`.
3. Windows students: read [hooks README](../../hooks/README.md) — Git Bash or WSL for bash hook scripts.

### Part B — Project rules and commands (30 min)

1. Copy one template from [`claude-templates/`](../../claude-templates/README.md):
   - General SEAL work → `CLAUDE.SEAL.md`
   - API exercise → `typescript/CLAUDE.md`
2. Install slash commands:

   ```bash
   mkdir -p .claude/commands
   cp path/to/sudoku-claude-code/slash-commands/*.md .claude/commands/
   ```

3. Test: run `/explain` on a file in the practice repo.

### Part C — Hooks and repo hygiene (15 min)

1. Demo [`git-safety`](../../hooks/scripts/git-safety.sh) hook once (facilitator machine).
2. Optional student install: copy [`hooks.json.example`](../../hooks/hooks.json.example) → `.claude/hooks.json`.
3. Start with git-safety only; add format/lint hooks when project has those scripts ([hooks README](../../hooks/README.md)).

### Part D — minimal-api starter (20 min)

1. Copy [`starter-projects/minimal-api`](../../starter-projects/minimal-api/) into the student's practice repo (or clone workshop repo and `cd starter-projects/minimal-api`).

   ```bash
   cd minimal-api
   npm install
   npm test
   npm run dev
   ```

2. Hit `GET http://localhost:3000/health` and `GET http://localhost:3000/items`.
3. Copy `claude-templates/typescript/CLAUDE.md` into the minimal-api folder if not already present.

## Done when

Students have:

- [ ] `CLAUDE.md` in practice project
- [ ] Slash commands in `.claude/commands/`
- [ ] minimal-api running locally with passing tests
- [ ] Know where to find `/plan` and `/test`

## Facilitator notes

- Pre-download Node installers if lab Wi-Fi is slow.
- Pair Windows users on Git Bash/WSL early — do not debug every machine synchronously.
- `gh auth login` can be homework if time runs out.

## Links

- [Hooks](../../hooks/README.md)
- [Slash commands](../../slash-commands/README.md)
- [minimal-api starter](../../starter-projects/minimal-api/README.md)
- [Command safety](../security/command-safety.md)
