#!/usr/bin/env bash
# Run project formatter when available. No-op if not configured.
set -euo pipefail

if [[ -f package.json ]] && npm run -s format 2>/dev/null; then
  exit 0
fi

if command -v ruff >/dev/null 2>&1; then
  ruff format . 2>/dev/null || true
fi

exit 0
