# Design — 07: PDF Report Preview

Section on the results page. Appears below the Elevator Pit Module (or Failure-Point Visualizer if no pit). Positioned just before the lead capture form.

---

## Purpose

Show the user what they're getting before they give their email. The PDF is the sales asset — it's what gets forwarded to engineers, owners, and executives. The preview makes the value of the email ask obvious.

---

## Section Header

```
YOUR REPORT IS READY
A shareable PDF summarizing everything above.
```

Subheading:
```
Enter your email below to receive the full report.
It includes all assumptions, calculations, and a one-page executive summary.
```

---

## Preview Layout

A "document mockup" — the visual representation of the PDF without revealing all content.

```
┌──────────────────────────────────────────────────────┐
│  ████████████████  PenePlan                          │
│                                                      │
│  BELOW-GRADE WATERPROOFING ANALYSIS                  │
│  [Project Name]                                      │
│  Prepared for: [Role]        Date: [Today]           │
│                                                      │
│  ══════════════════════════════════════════          │
│  EXECUTIVE SUMMARY                                   │
│  ══════════════════════════════════════════          │
│                                                      │
│  Estimated Cost Savings:                             │
│  ████████████████████████████  $47,000 – $83,000    │
│                                                      │
│  Schedule Compression:                               │
│  ██████████████████████████    8–14 days             │
│                                                      │
│  Failure Points Eliminated:                          │
│  ███████████████████████████   34 of 47 (72%)        │
│                                                      │
│  Conversion Rating: ● Strong Candidate               │
│                                                      │
│  ┌──────────────────────────────────────────────┐   │
│  │  🔒  Full report available after email entry │   │
│  └──────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────┘
```

The preview shows the cover page and executive summary in full. Pages beyond that are blurred / shown as stacked pages behind the main card.

**Stacked pages visual:**
```
[Page 1: cover — full preview]
[Page 2: assumptions — partially visible / blurred]
[Page 3: comparison — blurred]
[Page 4: failure points — blurred]
[Page 5: sequencing — blurred]
[Page 6: elevator pit — blurred, conditional]
[Page 7: disclaimer — blurred]
```

---

## What the Full Report Contains

Below the preview, a bullet list:

```
The full report includes:

✓ Executive savings summary (shareable one-pager)
✓ All project assumptions with sources
✓ Traditional membrane scope breakdown
✓ Penetron conversion scope breakdown
✓ Side-by-side failure-point comparison
✓ Side-by-side sequencing comparison
[✓ Elevator pit monolithic pathway — included because pit scope detected]
✓ Disclaimer and next-steps guidance
✓ Contact information for technical review

12 pages total · PDF format · Instant delivery
```

---

## Email Input (Inline Preview CTA)

Directly below the preview, a minimal inline form:

```
┌──────────────────────────────────────┐  ┌──────────────────┐
│  your@email.com                      │  │  Get My Report → │
└──────────────────────────────────────┘  └──────────────────┘
```

This is a simplified single-field capture. Full lead capture (name, company, etc.) happens in Section 08, which this scrolls to / expands when the user clicks "Get My Report."

**On click:** scrolls down to Section 08 (lead capture form) and focuses the first field, with the email they entered pre-filled.

---

## Alternate: Print / No Email Option

Small text link below the inline form:

```
Want to print or save now without entering your email?
[ Print this page ] · [ Save as browser PDF ]
```

This lets the user get something without committing an email. It's the right thing to do — and it builds trust. The print version won't have the branded PDF, but it captures the results.

---

## Report Preview Note

```
⚠ This report is for estimating and VE evaluation purposes only.
It is not engineering documentation, warranty authorization, or a construction
specification. All figures are estimates based on the inputs provided.
```

---

*Design v1.0 — Phase 3*
