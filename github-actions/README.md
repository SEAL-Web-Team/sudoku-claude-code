# GitHub Actions (templates)

Copy workflows into your **application** repository's `.github/workflows/`, not into this docs repo unless you are testing CI here.

| Workflow | Purpose |
| --- | --- |
| [`playwright-ci.yml`](playwright-ci.yml) | Install browsers, run Playwright on PR |
| [`repo-health.yml`](repo-health.yml) | Markdown link check, structure sanity |

## Secrets

Store tokens in **GitHub Actions secrets**, never in YAML literals. Students: ask a mentor to add org secrets.

## Related

- [`.github/workflows/`](../.github/workflows/) — CI for this workshop repo
- [`docs/security/governance.md`](../docs/security/governance.md)
