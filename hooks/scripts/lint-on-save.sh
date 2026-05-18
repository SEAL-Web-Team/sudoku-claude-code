#!/usr/bin/env bash
set -euo pipefail

if [[ -f package.json ]] && npm run -s lint 2>/dev/null; then
  exit 0
fi

if command -v ruff >/dev/null 2>&1; then
  ruff check . 2>/dev/null || exit 1
fi

exit 0
