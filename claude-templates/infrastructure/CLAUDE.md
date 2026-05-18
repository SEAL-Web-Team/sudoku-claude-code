# Project guide (Infrastructure / DevOps)

## Scope

- GitHub Actions workflows under `.github/workflows/`
- Hooks, Makefile targets, pre-commit config
- Repo hygiene (templates, lint, structure checks)

## Commands

```bash
make help
make lint
make test
pre-commit run --all-files
```

## Principles

- CI should be fast and deterministic for beginners.
- Fail with clear error messages; link to docs when possible.
- No secrets in YAML; use GitHub Actions secrets.

## Workflow

1. Read existing workflows before adding steps.
2. Test workflow changes on a branch PR when possible.
3. Document new `make` targets in `Makefile` help text.

## Safety

- Do not disable security hooks without explicit approval.
- Avoid `curl | bash` patterns in CI without pinning versions.
- Never print secret values in logs.
