# Ship checklist (lite)

Adapted from gstack's `/ship` — release habits without vendoring the full skill.

Use before opening a PR or when a mentor says "ready to ship."

## Pre-flight

- [ ] Branch is up to date with `main` (or you know why it is not)
- [ ] Scope is **one concern** (feature, fix, or docs — not all three)
- [ ] No secrets, tokens, or `.env` values in the diff
- [ ] Tests run locally (`/test` or project test command)
- [ ] You ran `/review` on your own diff and addressed critical/major items

## PR body

- [ ] **Why** this change exists (not only what files changed)
- [ ] **Test plan** — commands run or manual steps for reviewers
- [ ] Screenshots for UI changes (if any)
- [ ] Links to quest/task ID when applicable

## After merge (optional week 2+)

- [ ] README or setup docs still accurate — [docs-after-ship.md](docs-after-ship.md)
- [ ] Facilitator notified if this affects workshop exercises

## Out of scope for beginners

- Force-push, production deploy, or bypassing CI
- Auto-bootstrapping an entire test framework in one session

## Full upstream

gstack `/ship` adds coverage audits, framework bootstrap, and PR automation. Install when ready: [`resources/gstack/README.md`](../resources/gstack/README.md).
