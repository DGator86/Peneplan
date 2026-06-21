# Design — 00: User Flow Overview

---

## Full Screen Map

```
┌─────────────────────────────────────────┐
│  01. LANDING PAGE                       │
│  Hook → CTA: "Start Analysis"           │
└────────────────────┬────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────┐
│  02. INTAKE FORM (multi-step)           │
│  Step 1: Role Selection                 │
│  Step 2: Project Type                   │
│  Step 3: Site Conditions                │
│  Step 4: Scope Details                  │
│  Step 5: Project Info (optional)        │
└────────────────────┬────────────────────┘
                     │ [Calculate]
                     ▼
┌─────────────────────────────────────────┐
│  03. RESULTS REVEAL                     │
│  Three headline metrics animate in      │
│  ↓ scroll                               │
│  04. COMPARISON: Traditional vs Penetron│
│  ↓ scroll                               │
│  05. FAILURE-POINT VISUALIZER           │
│  ↓ scroll                               │
│  06. ELEVATOR PIT MODULE (conditional)  │
│  ↓ scroll                               │
│  07. PDF REPORT PREVIEW                 │
│  ↓ scroll                               │
│  08. LEAD CAPTURE FORM                  │
│  ↓ CTA                                  │
│  09. REQUEST REVIEW BUTTON              │
└────────────────────┬────────────────────┘
                     │ [Submit]
                     ▼
┌─────────────────────────────────────────┐
│  10. THANK YOU / FOLLOW-UP PAGE         │
└─────────────────────────────────────────┘
```

---

## Screen Count

| # | Screen | Type |
|---|---|---|
| 01 | Landing page | Static + CTA |
| 02 | Intake form | Multi-step form (5 steps) |
| 03 | Results reveal | Animated results header |
| 04 | Comparison page | Scrollable section |
| 05 | Failure-point visualizer | Scrollable section |
| 06 | Elevator pit module | Conditional scrollable section |
| 07 | PDF report preview | Scrollable section |
| 08 | Lead capture form | Form inline in results page |
| 09 | Request review CTA | Button + modal |
| 10 | Thank you page | Confirmation |

Screens 03–09 are all sections on a single results page — not separate routes. The user scrolls through one long results page after the intake form.

---

## Routes

```
/                    Landing page
/analyze             Intake form
/results/[id]        Results page (all sections 03–09)
/thank-you           Confirmation page
```

Results are stored by ID in Supabase so results pages are shareable (by link).

---

## Role-Specific Behavior

The role selected in Step 1 of the intake form (02) affects:
- Language on all results sections
- Output emphasis order (cost vs. technical vs. risk)
- PDF report structure
- Email notification template

No other routing or structural change — same URL, same page, same sections. Only copy and emphasis change.

---

## Key UX Principles for This Flow

1. **Speed to the "holy shit" moment.** The three headline metrics should appear within 2 scrolls of completing the form. No padding, no loading screens, no setup content between form and results.

2. **Progressive depth.** First screen = three numbers. Second scroll = comparison table. Third scroll = failure point detail. Lead capture comes last — after the user has seen the value.

3. **Never hide the assumptions.** Every number should have a visible "assumptions used" expand panel. This is what makes the platform credible to engineers and skeptical GCs.

4. **The PDF is the sales asset.** The PDF report preview section exists to show the user what they're getting before they give their email. Show the cover and summary page. Then ask for the email.

5. **The disclaimer is always present.** A persistent sticky footer disclaimer on the results page: "PenePlan outputs are estimating tools only. Not engineering approval, warranty, or contract documentation."

---

## Mobile Behavior

- Intake form: fully functional on mobile (single-column, step-by-step)
- Results page: all sections reflow to single-column
- PDF preview: shows cover only on mobile (scrollable PDF preview is desktop-only)
- Lead capture: full-width on mobile

Target: 80%+ of usage will be desktop (GC office, estimating). Mobile support is important but not primary.

---

*Design v1.0 — Phase 3*
