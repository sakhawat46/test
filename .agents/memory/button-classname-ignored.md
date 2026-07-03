---
name: shadcn Button className silently ignored
description: Debugging heuristic for when className/variant/size overrides on a UI component have no visual effect.
---

When repeated `className`/`variant`/`size` tweaks to a shadcn-style component produce **zero** visual change (every screenshot looks identical regardless of edits), suspect the component is rendering a **hardcoded class string** and never merging the incoming props.

**Why:** In `artifacts/aureon`, the `Button` component destructured `className`, `variant`, and `size` but rendered a single hardcoded class string, so every caller's overrides app-wide were dead. Multiple attempts to shrink the quiz nav buttons did nothing because the prop never reached the DOM.

**How to apply:**
- Symptom: identical rendering across edits; user-side screenshots unchanged after every tweak (easy to misdiagnose as browser caching).
- Confirm the component uses `cn(componentVariants({ variant, size, className }))` (or `cn(base, className)`), not a static string.
- `cn` here = `twMerge(clsx(...))`, so later/caller classes win conflicts — overrides belong in the caller's `className`.
- When restoring merge behavior on a customized component, reconstruct the variants so the **default** output reproduces the prior hardcoded look, or every plain `<Button />` across the app shifts.
- Note `min-h-*` and `h-*` are different properties: to force a smaller button than the default `min-h`, also pass `min-h-0`.
