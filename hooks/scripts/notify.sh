#!/usr/bin/env bash
# Optional notification when agent stops (OS-dependent)
set -euo pipefail

MSG="${CLAUDE_NOTIFY_MSG:-Claude Code session finished}"

if [[ "$(uname -s)" == "Darwin" ]]; then
  osascript -e "display notification \"$MSG\"" 2>/dev/null || true
elif command -v notify-send >/dev/null 2>&1; then
  notify-send "Claude Code" "$MSG" 2>/dev/null || true
fi

exit 0
