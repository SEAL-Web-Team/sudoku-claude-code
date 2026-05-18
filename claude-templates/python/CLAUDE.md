# Project guide (Python)

## Stack

- Python 3.11+
- Formatter/linter: ruff (if configured)
- Tests: pytest

## Commands

```bash
python -m venv .venv
# activate venv, then:
pip install -r requirements.txt
ruff check .
ruff format .
pytest
```

## Style

- Type hints on public functions.
- `snake_case` for functions and modules.
- Prefer standard library; add dependencies only when justified.

## Workflow

1. Locate tests for the module you change.
2. Plan → implement → run `pytest` for affected paths.
3. Update docstrings only when behavior changes.

## Safety

- Never log or commit secrets.
- Use environment variables for credentials.
- Ask before shell commands that delete files or reset git history.
