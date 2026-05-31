# Workshop 3 – Code Reading and Analysis

**Status:** Facilitator-ready.

## Learning objectives

- Navigate an unfamiliar repo using paths, search, and Claude's read tools.
- Use `/analyze` and `/explain` without modifying code.
- Produce a short map of how minimal-api (or a SEAL repo) is structured.

## Prerequisites

- Module 2 complete — minimal-api installed locally
- Slash commands installed

## Activities (90 min suggested)

### Part A — Read before edit (15 min)

1. Walk [repo-exploration.md](../knowledge-guides/repo-exploration.md).
2. Rule: **no edits until you can name the entry point and test command.**

### Part B — Analyze minimal-api (40 min)

1. Prompt pattern:

   ```text
   /analyze
   Goal: explain how HTTP requests flow from index.ts to the items router.
   Scope: starter-projects/minimal-api/src only. Do not change files.
   ```

2. Student draws (paper or markdown) a 5-box diagram: client → Express → router → store → response.
3. `/explain` one function they do not understand (e.g. store helpers or test setup).
4. Optional stretch: `/analyze` on a SEAL repo they will join (read-only; mentor picks safe paths).

### Part C — Document what you learned (25 min)

1. Hands-on: [example 03-generate-api-docs](../../examples/03-generate-api-docs/README.md) on minimal-api.
2. Add `docs/api.md` listing each items endpoint (method, path, body, response).
3. Human-review: run `curl` or use REST client to verify one endpoint each.

### Part D — API reading habits (10 min)

1. Discuss: Claude can miss edge cases — verification is your job.
2. Introduce [navigating-code.md](../best-practices/navigating-code.md) if time allows.

## Done when

Students can:

- Point to the file where routes are registered
- Explain what the in-memory store does
- Show `docs/api.md` with at least four endpoints documented accurately

## Facilitator notes

- Keep scope on minimal-api for beginners; SEAL repo analysis is optional.
- Discourage "refactor while reading" — redirect to `/plan` in module 4.
- If `/analyze` tries to edit, remind: "plan only, no writes."

## Links

- [Example: API docs](../../examples/03-generate-api-docs/README.md)
- [Repo exploration guide](../knowledge-guides/repo-exploration.md)
- [Slash command: analyze](../../slash-commands/analyze.md)
- [Slash command: explain](../../slash-commands/explain.md)
