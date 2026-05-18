# Small iterative commits

## Principle

One commit = one logical change someone can understand in one sentence.

## Steps

1. Stage related files only: `git add path/to/file`
2. Review diff: `git diff --staged`
3. Use `/commit` for message help
4. Repeat for the next logical chunk

## When to split

- Feature + unrelated formatting → two commits
- Fix + new tests → often one commit is fine
- Drive-by refactors in files you did not need → avoid

## Safety

- Never commit unless you intend to
- Run lint/test before commit when hooks are enabled
