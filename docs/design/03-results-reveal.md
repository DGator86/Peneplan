# Design — 03: Results Reveal Page

Route: `/results/[id]`

This is the top of the results page — the first thing the user sees after the form. Everything above the fold is the "holy shit" moment.

---

## Page Structure (Full Results Page)

The results page is one long scrollable page:

```
[03] Results Reveal Header       ← this document
[04] Comparison Section          ← doc 04
[05] Failure-Point Visualizer    ← doc 05
[06] Elevator Pit Module         ← doc 06 (conditional)
[07] PDF Report Preview          ← doc 07
[08] Lead Capture Form           ← doc 08
[09] Request Review CTA          ← doc 09
```

A sticky nav bar appears after scrolling past the hero, linking to each section:
```
[ Overview ] [ Comparison ] [ Failure Points ] [ Elevator Pit ] [ Report ] [ Get PDF ]
```

---

## Results Header Layout

```
┌──────────────────────────────────────────────────────────────────┐
│  PenePlan                                          [Print / Save] │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  [Project Name or "Your Project"]  •  [Role Badge]  •  [Date]   │
│                                                                  │
│  Based on a [CAT label] in [Location / "your area"]             │
│  with [membrane type] and [FC label] site conditions             │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌────────────────┐ │
│  │  COST SAVINGS    │  │  SCHEDULE        │  │  FAILURE       │ │
│  │                  │  │  SAVINGS         │  │  POINTS        │ │
│  │  $XX,XXX         │  │  X–X days        │  │  ELIMINATED    │ │
│  │  – $XX,XXX       │  │  removed         │  │                │ │
│  │                  │  │  from critical   │  │   XX           │ │
│  │  estimated range │  │  path            │  │  of XX (XX%)   │ │
│  └──────────────────┘  └──────────────────┘  └────────────────┘ │
│                                                                  │
│  [Conversion Rating Badge: e.g., "Strong Candidate ●"]          │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Metric Card Detail

### Cost Savings Card
```
ESTIMATED COST SAVINGS
$47,000 – $83,000

Based on replacing [MT-01: self-adhered sheet membrane]
with Penetron integrated waterproofing system.

[ See assumptions ▼ ]
```

On "See assumptions" expand:
```
Assumptions used:
• Membrane area: 8,400 SF (walls) + 5,200 SF (slab)
• Membrane type: SBS self-adhered sheet
• Protection board: included
• Drainage composite: included
• 2 waterproofing mobilizations
• Location: Chicago, IL (labor multiplier: 1.10)
• Complexity tier: Medium (±30% range)

[ Edit inputs ]
```

---

### Schedule Savings Card
```
SCHEDULE SAVINGS
8–14 days removed

From the below-grade critical path.
3 phases eliminated. 2 mobilizations removed.

[ See assumptions ▼ ]
```

On expand:
```
Assumptions used:
• Traditional waterproofing phases: 8
• Penetron phases: 1 (joint treatment only)
• Project size: Medium (8,000–15,000 SF)
• Phase durations per industry standard ranges

[ Edit inputs ]
```

---

### Failure Points Card
```
FAILURE POINTS ELIMINATED
34 of 47 (72%)

34 discrete leak-path interfaces removed.
13 residual failure points remain — all treated.

[ See detail ▼ ]
```

On expand → scrolls to Section 05 (Failure-Point Visualizer).

---

## Conversion Rating Badge

Below the three cards, a single-line rating:

```
● Strong Candidate for Penetron Conversion
  Complexity score: 6/30 · Confidence: High
```

Color codes:
- Green dot: Strong Candidate (score ≤ 6)
- Yellow-green dot: Good Candidate (7–11)
- Yellow dot: Viable with Review (12–15)
- Orange dot: Requires Technical Review (16+)

---

## Role-Specific Headline (Above the Cards)

The headline above the three metric cards changes by role:

| Role | Headline |
|---|---|
| GC Estimator | "Here's what switching to Penetron could save on this project." |
| GC PM/Super | "Here's how Penetron simplifies this project." |
| GC Executive | "Here's the risk and cost case for Penetron on this project." |
| Engineer | "Here's the constructability and interface analysis for this project." |
| Owner | "Here's the schedule and lifecycle risk reduction potential." |
| Sub/Supplier | "Here's how Penetron changes the execution scope." |

---

## Animation

On first load (after redirect from intake form):

1. Page fades in
2. "Analyzing..." text briefly shown (if not already complete)
3. Three metric cards animate in sequentially (stagger: 150ms each)
4. Numbers count up from 0 to final value (duration: 800ms each)
5. Conversion rating badge fades in last

This animation only plays once. On page refresh or share link: static display.

---

## Persistent Disclaimer Bar

Pinned to the bottom of the viewport on the results page:

```
┌──────────────────────────────────────────────────────────────────┐
│ ⚠ PenePlan outputs are estimating tools only. Not engineering    │
│ approval, warranty authorization, or contract documentation.     │
│                                    [What this means →]           │
└──────────────────────────────────────────────────────────────────┘
```

"What this means" opens a modal with the full disclaimer text.

---

## Share / Save Bar (Top Right)

```
[ 🖨 Print ]  [ 📄 Save as PDF ]  [ 🔗 Copy link ]
```

- Print: opens browser print dialog (print-optimized CSS)
- Save as PDF: triggers PDF generation and download (Phase 5)
- Copy link: copies `/results/[id]` to clipboard with toast confirmation

---

## Edit Inputs Button

Below the conversion rating badge:
```
Not right? [ Edit your inputs → ]
```
Returns to `/analyze` with form pre-populated from this result's inputs.

---

*Design v1.0 — Phase 3*
