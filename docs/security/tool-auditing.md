# Tool-call auditing

## What to track

- Which files were edited
- Which commands ran
- Whether tests ran after edits

## Habits

- End sessions with `/summarize`
- Keep PR diffs small so review is auditable
- If something surprising changed, `git diff` immediately
- Review **approved commands** in `/permissions` periodically — stale approvals can allow dangerous reruns

## Scan approved commands (cc-safe)

[cc-safe](https://github.com/ykdojo/cc-safe) scans `.claude/settings.json` for risky patterns (`rm -rf`, `curl | sh`, force push, etc.):

```bash
npx cc-safe .
```

Run on your project folder or ask Claude to run it for you. Fix or remove risky entries before your next session.

## Workshop repo

Maintainers use GitHub PR review for changes to shared templates and hooks.
