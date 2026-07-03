---
name: MDI Webhook Integration
description: Pending integration — MDI needs to receive medication/plan selection data via webhook when a patient completes the intake flow.
---

When a patient completes medication + plan selection and submits intake, the app will need to fire a webhook to MDI (the telehealth/prescribing platform) containing at minimum:

- Selected medication (semaglutide or tirzepatide)
- Selected plan (m2m, 3mo, 6mo)
- Patient identity from the intake form

**Why:** MDI needs to know the patient's medication preference before the physician consultation so they can prep the right prescription.

**How to apply:** When building the intake form submission endpoint in the API server, add a post-submit webhook call to MDI's endpoint. The medication and plan params are already threaded through the URL as `?medication=<id>&plan=<id>` and will need to be included in the intake form payload.
