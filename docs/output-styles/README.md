# Output styles (prompting patterns)

Add one line to your prompt to set tone. Useful in Claude Code custom instructions or session preface.

| Mode | Instruction snippet |
| --- | --- |
| **Concise** | "Be brief. Bullets only. No preamble." |
| **Teaching** | "Explain like I am new to programming. Define terms." |
| **Reviewer** | "Act as a code reviewer. Findings by severity only." |
| **Architect** | "High-level design only. No code unless I ask." |
| **Pair programmer** | "Propose steps; wait for my OK before each edit." |

## Examples

**Teaching mode**

```text
Teaching mode: explain why this test failed and what `async` means here.
```

**Reviewer mode**

```text
Reviewer mode: critique this diff. Do not rewrite the whole file.
```

Pair with slash commands: `/explain` ≈ teaching, `/review` ≈ reviewer.
