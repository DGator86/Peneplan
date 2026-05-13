# Design — 05: Failure-Point Visualizer

Section on the results page. Appears below the Comparison section on scroll.

---

## Purpose

Make the failure-point reduction tangible and visual. This is where the "Stay Dry" metric becomes real. A GC or engineer should be able to look at this section and immediately understand: here are all the places a traditional membrane can fail, and here's what Penetron eliminates.

---

## Section Header

```
FAILURE POINTS
Where traditional waterproofing fails — and what Penetron eliminates.
```

Subheading (role-specific):
- GC View: "Every dot is a place a leak can start. Here's what you're eliminating."
- Engineer View: "Waterproofing interface analysis: traditional system vs. integrated crystalline."
- Owner View: "These are the lifecycle risk points your below-grade envelope carries."

---

## Layout: Two-Panel Visualizer

Left panel: Traditional system. Right panel: Penetron system.

Each panel shows a simplified isometric or elevation diagram of the project scope with failure points marked as colored dots.

```
┌─────────────────────────────┬───────────────────────────────┐
│   TRADITIONAL SYSTEM        │   PENETRON SYSTEM             │
│   47 failure points         │   13 residual points          │
│                             │   (all treated)               │
│   [Foundation diagram       │   [Same diagram with          │
│    with red dots at each    │    most dots removed,         │
│    failure location]        │    remaining dots yellow]     │
│                             │                               │
│                             │   34 eliminated (72%)         │
└─────────────────────────────┴───────────────────────────────┘
```

**MVP implementation:** The diagram is a static SVG illustration with dots positioned at standard failure locations. Dot count and positions are driven by the calculation output. Full custom drawing is Phase 10.

---

## Failure Point Dot Legend

```
● Red    = High-risk failure point (traditional system)
● Orange = Medium-risk failure point (traditional)
● Yellow = Treated (Penetron residual — low risk)
● ○ Gray = Eliminated entirely (no residual)
```

---

## Failure Point Detail Table

Below the visual panels, a table listing every failure point category:

```
┌────────────────────────────────────────────────────────────────┐
│ FAILURE POINT          TRADITIONAL    PENETRON    OUTCOME       │
├────────────────────────────────────────────────────────────────┤
│ Lap seams (sheet)          18             0       ✓ Eliminated │
│ Inside corners              4             4       ◎ Treated    │
│ Outside corners             2             2       ◎ Treated    │
│ Wall-to-slab transition     2             1       ◎ Treated    │
│ Pipe penetrations          14             7       ◎ Treated    │
│ Termination bar             3             0       ✓ Eliminated │
│ Construction joints         2             1       ◎ Treated    │
│ Tie holes                   2             0       ✓ Eliminated │
├────────────────────────────────────────────────────────────────┤
│ TOTAL                      47            13       34 removed    │
│                                                   (72%)         │
└────────────────────────────────────────────────────────────────┘
```

**Legend:**
- ✓ Eliminated: No membrane = no failure point of this type
- ◎ Treated: Crystalline treatment applied; risk substantially reduced

---

## Expandable Row Detail

Each row in the table is expandable. On expand:

**Lap seams:**
```
Lap seams are the overlapping joints between adjacent sheet membrane panels.
Traditional: 18 seams across this project scope, each a potential adhesion failure.
Penetron: No sheet membrane = no lap seams. Zero.
```

**Inside corners:**
```
Inside corners are the most difficult detail in sheet waterproofing. The membrane
cannot conform to a tight 90° angle without bridging or voids.
Traditional: 4 inside corners in this project, each requiring pre-formed corners
or field fabrication.
Penetron: Corners receive PENECRETE MORTAR cove fillet. Crystalline treatment
penetrates both concrete elements. Risk is substantially reduced, not eliminated —
hence "treated" status.
```

---

## Risk Reduction Summary Line

Below the table:

```
This project's traditional membrane system carries 47 discrete leak-path interfaces.
The Penetron conversion eliminates 34 of them entirely and treats the remaining 13
with integrated crystalline waterproofing.
```

---

## Role-Specific Frame (Engineer View Only)

In Engineer View, an additional panel appears below the summary:

```
INTERFACE DENSITY ANALYSIS

Traditional system interfaces per 1,000 SF:   4.4
Penetron system interfaces per 1,000 SF:       1.2

Interface density reduction: 72%

Note: "Interface" in this context refers to any discrete transition between
waterproofing system components — seams, terminations, transitions, and
penetration seals — as defined in waterproofing industry practice.
```

---

## Disclaimer (In-Section)

```
⚠ Failure point counts are estimates based on typical project configurations
and the scope inputs provided. Actual failure point inventory may vary.
This analysis does not substitute for field review.
```

---

*Design v1.0 — Phase 3*
