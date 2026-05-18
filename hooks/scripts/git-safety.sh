#!/usr/bin/env bash
# Block destructive git operations unless CLAUDE_ALLOW_DANGEROUS_GIT=1
set -euo pipefail

INPUT="${CLAUDE_TOOL_INPUT:-}"
if [[ -z "$INPUT" ]]; then
  exit 0
fi

if [[ "${CLAUDE_ALLOW_DANGEROUS_GIT:-}" == "1" ]]; then
  exit 0
fi

DANGEROUS_PATTERNS=(
  'git push --force'
  'git push -f'
  'git reset --hard'
  'git clean -fd'
  'git checkout -- .'
  'git branch -D'
)

for pattern in "${DANGEROUS_PATTERNS[@]}"; do
  if echo "$INPUT" | grep -qF "$pattern"; then
    echo "Blocked dangerous git command: $pattern" >&2
    echo "Set CLAUDE_ALLOW_DANGEROUS_GIT=1 only if you intend this." >&2
    exit 2
  fi
done

exit 0
