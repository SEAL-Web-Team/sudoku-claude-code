# Secrets management

## Rules

- Secrets live in environment variables or GitHub Actions secrets
- Never commit `.env`, API keys, JSON service accounts, or tokens
- Never paste secrets into Claude chats or screenshots

## If you leaked a secret

1. Rotate/revoke the key immediately
2. Tell a mentor
3. Remove from git history only with mentor help

## pre-commit

This repo uses `detect-private-key` in [`.pre-commit-config.yaml`](../../.pre-commit-config.yaml).
