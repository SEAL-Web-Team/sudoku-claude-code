# Google Sheets and Apps Script: minimal data ranges

When you use Claude Code (or any AI) to design **formulas**, **IMPORTRANGE**, **QUERY**, or **Apps Script** for Google Sheets, the assistant will often default to **wide, “safe” ranges** (for example entire columns or `A1:ZZ` style rectangles). That habit is easy to copy into production and can make a sheet **slow, fragile, and expensive** in quota terms.

---

## What went wrong (example)

A “grader” depended on **GPS-style report** data. The implementation pulled report data **per person** (for example one `IMPORTRANGE` or equivalent per row). Worse, each pull was **uncapped**: it imported the **entire** source tab for every person, not just the header and summary table at the top.

In one real sheet the report tab was on the order of **thousands of rows** (scores plus long free-text). Multiplying that by **every person** on a roster meant the spreadsheet was doing enormous redundant work on every recalculation.

**Better pattern:**

1. **One staging area** (or tab) that imports **only the slice you need** from each source—typically the fixed top block where names and scores live (for example rows `1:51` if that is where the structured table ends), not the whole narrative section.
2. **Grader logic** (formula or script) that **looks up** a person’s name and score **inside that small table**, instead of re-importing the full remote range per person.

The exact row counts will vary by sheet; the rule is **smallest sufficient rectangle**, not “the whole tab.”

---

## Mandatory step (for you and for the AI)

Before accepting any formula or script that touches external or large tabs, stop and answer:

1. **What range or slice is strictly necessary for this task?** (Rows, columns, and whether the layout is fixed or variable.)
2. **What does the sheet actually look like?** (Where is the table? Where is long-form text? Are there repeating blocks per person?)
3. **What is the smallest range that is still sufficient?** Prefer explicit bounds (`Sheet1!A1:H50`) over open-ended ranges (`A:Z` or whole columns) unless you have a documented reason.

Ask the assistant to **state the proposed range in plain language** and **justify** why nothing smaller works. If it suggests importing “everything,” treat that as a red flag until narrowed.

---

## Personas and prompts (Claude Code / YBR / Sudoku-style helpers)

When you use a **persona** or standing instruction for spreadsheet automation, include something like:

- **No uncapped imports.** Never recommend `IMPORTRANGE` (or similar) of an entire tab per row without proving the source has no unbounded narrative or detail sections.
- **Prefer one consolidated pull** over N identical pulls for N people.
- **Prefer QUERY / FILTER / VLOOKUP / XLOOKUP** on a **local staging table** over repeated heavy cross-spreadsheet reads.
- **Apps Script:** batch reads with explicit `getRange(row, col, numRows, numCols)` (or equivalent) instead of `getDataRange()` on monster sheets when you only need a header block.

If the model still drifts toward “include all columns for safety,” **repeat the minimal-range question** and paste a short description of tab layout (where the real table ends).

---

## Why the AI does this

Assistants are tuned to be **inclusive and defensive**: “make sure we do not miss a column.” That is the wrong default when **performance and quotas** matter. Your job is to supply **structure** (where the data lives, what can be cut) so the answer can be **narrow and correct**, not maximally broad.

---

## Quick checklist

- [ ] I named the **exact** source range (not “the whole sheet”).
- [ ] I avoided **per-row** duplicate imports of the same remote block.
- [ ] Long text / logs / notes live **outside** the imported slice unless this task truly needs them.
- [ ] I can explain **row and column bounds** to someone else on the team in one sentence.

If any box is unchecked, revise before shipping.
