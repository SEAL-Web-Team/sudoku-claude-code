# Docs after ship (lite)

Adapted from gstack's `/document-release` and the [Diataxis](https://diataxis.fr/) framework — keep docs honest after code changes.

Run this after a merged PR or before marking a quest task done.

## Four doc types (pick what changed)

| Type | Question it answers | Examples in a student repo |
| --- | --- | --- |
| **Tutorial** | How do I learn by doing? | Workshop examples, onboarding |
| **How-to** | How do I accomplish X? | Workflows, slash commands |
| **Reference** | What are the facts? | README tables, config options |
| **Explanation** | Why is it built this way? | Architecture notes, ADRs |

You do not need all four for every PR — only update types affected by your change.

## Checklist

- [ ] **README** — install steps, commands, and folder list still match the repo
- [ ] **CLAUDE.md** (in your project) — stack, test commands, and conventions updated
- [ ] **Example README** — if you changed an exercise, update its steps
- [ ] **CHANGELOG** — optional; add a line for user-visible changes
- [ ] **Comments** — remove TODOs you finished; do not leave stale "coming soon"

## Prompt template

```text
Summarize what shipped in this branch. List which doc files are now wrong or incomplete.
Propose minimal edits (tutorial / how-to / reference / explanation). Do not rewrite unrelated docs.
```

## Pair with examples

- [07-generate-readme](../examples/07-generate-readme/README.md) — first doc pass
- This workflow — keep docs in sync after later PRs

## Upstream

gstack `/document-release` audits the whole repo and builds a Diataxis coverage map. See [`resources/gstack/PICKS.md`](../resources/gstack/PICKS.md).
