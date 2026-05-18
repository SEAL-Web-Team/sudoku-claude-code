#!/usr/bin/env bash
# Optional: set CLAUDE_HOOK_RUN_TESTS=1 to run fast tests after edits
set -euo pipefail

[[ "${CLAUDE_HOOK_RUN_TESTS:-}" == "1" ]] || exit 0

if [[ -f package.json ]] && npm run -s test -- --passWithNoTests 2>/dev/null; then
  exit 0
fi

if [[ -f pyproject.toml ]] || [[ -d tests ]]; then
  pytest -q --tb=no 2>/dev/null || exit 1
fi

exit 0
