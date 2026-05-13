# Design — 10: Thank You / Follow-Up Page

Route: `/thank-you`

---

## Purpose

Confirm the submission. Set expectations. Give the user something useful right now so they don't feel like they just handed over their email and got nothing.

---

## When This Page Appears

- After lead capture form submission (doc 08)
- After review request submission (doc 09) — same page, slightly different messaging

---

## Layout

```
┌──────────────────────────────────────────────────────────────┐
│  PenePlan                                                    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│         ✓                                                    │
│                                                              │
│  You're all set, [First Name].                               │
│                                                              │
│  Your report is on its way to [email].                       │
│  Check your inbox — it should arrive within a few minutes.   │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  WHILE YOU WAIT                                              │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  [ View your results →  ]                              │  │
│  │  Your analysis is saved at this link.                  │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  [ Copy shareable link ]                               │  │
│  │  Send your results to a PM, engineer, or owner.        │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  [ Run another analysis →  ]                           │  │
│  │  Analyze a different project or scope.                 │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Messaging Variants

### Variant A: Report Only (No Review Request)

```
You're all set, [First Name].

Your report is on its way to [email].
Check your inbox in the next few minutes.

If a Penetron technical rep should reach out about this project,
use the "Request Review" button in your report.
```

---

### Variant B: Review Request Submitted

```
You're all set, [First Name].

Your report is on its way to [email], and a Penetron technical
rep will be in touch within 24–48 hours.

We'll reach out to [email] — or [phone] if you prefer.
```

---

### Variant C: High-Value Lead (Lead Score ≥ 12, Same-Day Flag)

Same as Variant B, but with an added line:

```
Given the scope of this project, we'll prioritize a same-day response.
```

This is determined server-side. The user doesn't know their lead score — they just get a faster response.

---

## "While You Wait" Actions

Three cards below the confirmation message:

### Card 1: View Results
```
View your results →
Your analysis is saved at a permanent link.
Share it with your PM, engineer, or owner.
```
Button links to `/results/[id]`.

### Card 2: Copy Shareable Link
```
[ Copy link ]
/results/[id] — copied to clipboard on click
```
Toast: "Link copied. Share it with your team."

### Card 3: Run Another Analysis
```
Analyze another project →
New project? Different scope? Start a new analysis.
```
Button links to `/analyze` (fresh form, no pre-fill).

---

## Email: Report Delivery

The email sent to the user after lead form submission:

**Subject:**
```
Your PenePlan Analysis — [Project Name or "Below-Grade Waterproofing Analysis"]
```

**Body:**
```
Hi [First Name],

Your PenePlan analysis is attached.

Summary:
• Estimated cost savings: $XX,XXX – $XX,XXX
• Schedule compression: X–X days
• Failure points eliminated: XX of XX (XX%)
• Conversion rating: [rating]

[View your full analysis online →]
[Download PDF →]

If you'd like a Penetron technical rep to review this project:
[Request Technical Review →]

—
PenePlan
Reduce Time. Simplify Construction. Stay Dry.

This report is for estimating purposes only. Not engineering approval,
warranty authorization, or contract documentation.
```

---

## Email: Review Request Confirmation

Sent when review request is submitted:

**Subject:**
```
Review Request Received — [Project Name]
```

**Body:**
```
Hi [First Name],

We've received your review request for [Project Name].

A Penetron technical rep will be in touch within 24–48 hours
at [email] [or phone if provided].

Your analysis is available here: [link]

—
PenePlan
```

---

## Footer

Persistent across all pages:

```
PenePlan · Reduce Time. Simplify Construction. Stay Dry.
[Privacy Policy] · [Terms of Use] · [Contact]

Outputs are estimating tools only. Not engineering approval or warranty authorization.
```

---

*Design v1.0 — Phase 3*
