# Design — 01: Landing Page

Route: `/`

---

## Purpose

Convert a visiting GC, estimator, engineer, or super into someone who starts the analysis. One job: get them to click "Start Analysis."

The landing page is not a product tour. It is not a feature list. It is a single hook followed by a single action.

---

## Above the Fold (Hero Section)

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│   [Logo: PenePlan]                          [Log In]         │
│                                                              │
│                                                              │
│            PenePlan                                          │
│                                                              │
│     Reduce Time.                                             │
│     Simplify Construction.                                   │
│     Stay Dry.                                                │
│                                                              │
│     Identify hidden cost, sequencing complexity,             │
│     and leak-path exposure in below-grade construction.      │
│                                                              │
│     ┌─────────────────────────────┐                          │
│     │      Start Analysis  →      │                          │
│     └─────────────────────────────┘                          │
│                                                              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Hero Copy

**Headline (stacked, large):**
```
Reduce Time.
Simplify Construction.
Stay Dry.
```
Each line on its own row. Heavy weight. Not a sentence — three commands.

**Subheadline (body size, muted):**
```
Identify hidden cost, sequencing complexity, and leak-path exposure
in below-grade construction.
```

**CTA button:**
```
Start Analysis  →
```
Primary button. Full width on mobile. Centered on desktop.

**No secondary CTA above the fold.** One action. That's it.

---

## Visual Treatment (Hero)

- Background: dark navy or near-black (`#0D1117` or similar)
- Headline text: white
- Subheadline: muted gray (`#8B949E`)
- CTA button: high-contrast accent (Penetron blue or concrete gray — TBD in brand sprint)
- No hero image, no illustration — the numbers are the visual
- Optionally: subtle animated counter in the background (counting failure points eliminated on sample projects) — deferred to Phase 5

---

## Below the Fold — Three Metric Proof Points

Immediately below the hero, three stat cards. These are the output — shown before the user even starts. Gives them a taste of what the tool produces.

```
┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│  Time Reduced  │  │  Construction  │  │  Failure       │
│                │  │  Simplified    │  │  Points Cut    │
│    8–16        │  │    7           │  │    73%         │
│    days        │  │  phases        │  │  reduction     │
│    saved       │  │  eliminated    │  │  per pit       │
│                │  │                │  │                │
│  per typical   │  │  per typical   │  │  on elevator   │
│  foundation    │  │  foundation    │  │  pit scope     │
└────────────────┘  └────────────────┘  └────────────────┘
```

Copy under cards:
```
These are outputs from an actual PenePlan analysis of a typical below-grade foundation.
Your numbers depend on your project. Start to find out.
```

---

## Below the Fold — "What This Is" (One Line)

```
PenePlan is a constructability and sequencing evaluation tool
for below-grade waterproofing conversion — not a vendor pitch.
```

This one line is critical. It tells engineers and skeptical GCs: this is not a Penetron brochure. It is a tool.

---

## Below the Fold — Who Uses It

Three cards. Brief. No fluff.

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  GC          │  │  Engineer    │  │  Estimator   │
│  Estimators  │  │  /Architect  │  │  /PM/Super   │
│              │  │              │  │              │
│  Quantify VE │  │  Evaluate    │  │  Simplify    │
│  opportunity │  │  system      │  │  the below-  │
│  before bid  │  │  continuity  │  │  grade scope │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

## Footer CTA (Repeated)

```
Ready to run the numbers?

┌─────────────────────────────┐
│      Start Analysis  →      │
└─────────────────────────────┘
```

---

## Navigation

Minimal nav. Logo left, Log In right (Phase 7+). No nav links to other pages — there are no other pages during MVP.

---

## What the Landing Page Does NOT Include

- No product feature list
- No "How It Works" multi-step explainer
- No testimonials (Phase 9)
- No pricing page
- No FAQ
- No "About Penetron" section
- No video

All of that is for later. The landing page's only job is: hook → click.

---

## Performance Requirements

- Loads in < 2 seconds on 4G
- No layout shift on hero
- CTA button is visible without scrolling on all common desktop and mobile viewports

---

*Design v1.0 — Phase 3*
