---
name: Funnel pricing/medication data module
description: Single source of truth for medication + plan pricing across the SculptRx funnel pages
---

The SculptRx funnel (SelectMedication → SelectPlan → Intake) shares medication
labels, plan definitions, and pricing through one module rather than redefining
them per page.

**Rule:** medication labels, plan ids/labels/badges/months, and per-medication
pricing live in `artifacts/aureon/src/lib/plans.ts`. SelectPlan and Intake both
import from it. `resolveSelection(medicationId, planId)` reads the URL query
params and returns the resolved medication + plan + price, defaulting safely
(semaglutide / m2m) when params are missing or invalid.

**Why:** the same pricing tables and plan labels were duplicated in two pages,
which drifts silently — a price changed in one place but not the other shows
mismatched numbers between plan selection and checkout. Centralizing prevents
that and keeps the funnel handoff (`?medication=<id>&plan=<id>`) authoritative.

**How to apply:** when adding a medication, plan tier, or changing prices, edit
`lib/plans.ts` only. Plan order/index is meaningful — pricing arrays in
`plansByMedication` are positionally aligned with `planLabels`. Presentation-only
copy (e.g. SelectPlan's savings descriptions) can stay local to the page.
