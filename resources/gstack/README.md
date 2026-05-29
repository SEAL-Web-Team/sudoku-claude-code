# gstack (curated)

External project: [garrytan/gstack](https://github.com/garrytan/gstack) — Garry Tan's Claude Code "virtual engineering team" (plan, review, QA, ship, docs).

## Sudoku subset

**Start here:** [`PICKS.md`](PICKS.md) — what we adapted into this repo vs what to install upstream later.

**Beginner path:** [`beginner-track/README.md`](../../beginner-track/README.md)

We do not vendor the full gstack repository (large skills, Bun browser build, team auto-update). Sudoku ships **workflows and lite skills** that teach the same sprint habits in beginner-safe form.

## Mentors: full gstack install

```bash
git clone --single-branch --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
cd ~/.claude/skills/gstack && ./setup
```

Cursor users: `cd ~/gstack && ./setup --host cursor` (see upstream README).
