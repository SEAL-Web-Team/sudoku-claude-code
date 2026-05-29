# Product thinking before code

Adapted from gstack's `/office-hours` — six forcing questions, beginner scale.

Use this when you have a **new feature idea** or a vague task like "build a dashboard." Do not write code until you can answer these in plain language.

## Six questions

1. **Who feels the pain?** Name a real person or role, not "users."
2. **What do they do today without your feature?** Status quo beats hypotheticals.
3. **What is the smallest thing that would help tomorrow?** Narrowest wedge, not the full vision.
4. **How will you know it worked?** One observable outcome (time saved, error gone, task completed).
5. **What are you assuming?** List 2–3 assumptions; mark which you will validate first.
6. **What is explicitly out of scope for this PR?** Prevents scope creep.

## Prompt template

```text
I want to build: [one sentence]

Answer the six product-thinking questions. Do not write code yet.
Propose the narrowest first PR and what to defer.
```

## Pair with planning

After this exercise, run `/plan` with **Goal**, **Constraints**, **Scope**, **Done when**.

## Upstream

Full YC-style office hours with design docs: gstack `/office-hours`. See [`resources/gstack/PICKS.md`](../../resources/gstack/PICKS.md).
