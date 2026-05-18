# Sandboxing guidance

## Expectations

- Claude Code / Cursor may run terminal commands you approve
- "Sandbox" does not mean risk-free — read prompts and diffs

## Reduce risk

- Work on a branch
- Use git-safety hooks
- Limit scope in prompts ("only edit `src/foo.ts`")
- Run tests locally after edits

## Network

Be cautious with URLs and package installs; prefer known registries and pinned versions.
