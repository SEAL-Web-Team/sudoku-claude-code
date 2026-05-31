# /gha — Investigate a GitHub Actions failure

Analyze a failed CI run. **Do not push fixes** unless the user explicitly asks.

## Input

User provides a GitHub Actions run URL, workflow run ID, or PR with failing checks.

Requires [GitHub CLI](https://cli.github.com/) (`gh`) authenticated.

## Steps

1. Parse the URL or run ID. Use `gh run view <id> --log-failed` and `gh run view <id> --json jobs,conclusion,headBranch,event`.
2. Identify the failing job and step. Quote the relevant log lines (last 30–50 lines of the failure, not the entire log).
3. Check if the failure is **flaky**: compare with recent runs on the same branch (`gh run list --branch <branch> --limit 5`).
4. If logs point to a commit, note when it broke (`git log` on the branch if the repo is local).
5. Propose a **small fix** or next diagnostic step. Do not edit files until the user approves.

## Output format

```markdown
## CI failure summary
- Workflow:
- Run:
- Failed job/step:
- Error (quoted):

## Likely cause
(one paragraph)

## Flaky?
yes / no / unknown — evidence

## Suggested fix
1. ...
2. ...

## Commands to verify locally
- ...
```

## Token tip

Prefer `gh run view <id> --log-failed` over streaming `gh run watch` — shorter output, fewer tokens.

## Safety

- Do not expose secrets from logs in your summary.
- Do not `git push` or open a PR without explicit user approval.
- For destructive recovery (`git reset --hard`, force push), stop and ask a mentor.

Adapted from [ykdojo/claude-code-tips /dx:gha](https://github.com/ykdojo/claude-code-tips); simplified for Sudoku beginners.
