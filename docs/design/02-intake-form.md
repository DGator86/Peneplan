# Design — 02: Intake Form

Route: `/analyze`

---

## Purpose

Collect the minimum inputs needed to run the calculation engine. Fast, clear, non-intimidating. A GC estimator should be able to complete it in under 3 minutes.

---

## Form Structure

Multi-step form. Progress indicator at top. 5 steps. Back/Next navigation. No full-page reloads — client-side step transitions.

```
Step 1: Role
Step 2: Project Type
Step 3: Site Conditions
Step 4: Scope Details
Step 5: Project Info (optional, for PDF/lead)
         ↓
     [Calculate]
```

Progress bar shows current step. Steps are labeled, not just numbered.

---

## Step 1: Role Selection

**Heading:**
```
Who are you on this project?
```

**Subheading:**
```
Your role shapes how we present the results.
```

**Layout:** 2×3 card grid (or 3×2 on mobile, stacked)

**Cards:**

```
┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐
│  GC / Estimator    │  │  GC / PM / Super   │  │  GC Executive      │
│                    │  │                    │  │                    │
│  Quantify cost     │  │  Reduce schedule   │  │  Evaluate project  │
│  and VE savings    │  │  and coordination  │  │  risk and value    │
└────────────────────┘  └────────────────────┘  └────────────────────┘
┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐
│  Engineer /        │  │  Owner /           │  │  Subcontractor /   │
│  Architect         │  │  Developer         │  │  Supplier          │
│                    │  │                    │  │                    │
│  Evaluate system   │  │  Lifecycle risk    │  │  Simplify field    │
│  continuity        │  │  and schedule      │  │  execution         │
└────────────────────┘  └────────────────────┘  └────────────────────┘
```

Single select. Selected card gets a highlighted border. Required to proceed.

**UX note:** Role maps to one of 5 internal role codes: `gc_estimator`, `gc_pm_super`, `gc_executive`, `engineer`, `owner`, `sub_supplier`. The "GC / Estimator" and "GC / PM / Super" both map to GC View but with slightly different output emphasis.

---

## Step 2: Project Type

**Heading:**
```
What's the below-grade scope?
```

**Subheading:**
```
Select all that apply.
```

**Layout:** Checkbox card grid (multi-select)

**Cards:**

```
☐  Foundation walls        ☐  Below-grade slab        ☐  Elevator pit(s)
   (vertical membrane)        (underslab membrane)        (monolithic pathway)

☐  Parking deck            ☐  Retaining wall          ☐  Utility tunnel/vault
   (below grade)              (exterior membrane)         (below grade)
```

At least one required to proceed.

**Conditional follow-up (elevator pit only):**
If "Elevator pit(s)" is selected, a number input appears inline:
```
How many elevator pits?  [ 1 ]  ▲▼
```

---

## Step 3: Site Conditions

**Heading:**
```
What are the site conditions?
```

Two questions on this step.

---

**Question 3A — Water Table:**
```
What best describes groundwater at this site?
```

Radio card select:

```
○  Dry / No groundwater
○  Seasonal (wet season only)
○  Permanent high water table
○  Artesian / high hydrostatic pressure
○  Not sure
```

---

**Question 3B — Project Type:**
```
What type of project is this?
```

Radio select (inline, not cards):
```
○  New construction
○  Renovation (existing structure)
○  Remediation (existing leak / retrofit)
```

---

**Question 3C — Membrane Type (conditional display):**
```
What membrane is specified or currently in place?
```

Dropdown:
```
- Self-adhered sheet membrane (SBS bituminous)
- Fluid-applied polyurethane
- Fluid-applied polyurea / hybrid spray
- Bentonite panel or blanket
- HDPE or LLDPE sheet
- Hybrid system (sheet + fluid at transitions)
- Not sure / help me identify
```

"Not sure" opens a tooltip with images and brief descriptions of each type. This question is optional — if skipped, defaults to MT-01 (most common).

---

## Step 4: Scope Details

**Heading:**
```
Tell us about the scope.
```

**Subheading:**
```
Rough numbers are fine. We'll show the range.
```

---

**Field 4A — Wall Area:**
```
Below-grade wall area (SF)
[ _______ ]   ← numeric input
```
Helper text: "Exterior face of foundation walls that require waterproofing."
Optional — if blank, estimated from project value.

---

**Field 4B — Slab Area:**
```
Below-grade slab area (SF)
[ _______ ]
```
Helper text: "Footprint of below-grade floor slab requiring underslab waterproofing."
Optional.

---

**Field 4C — Penetrations:**
```
Approximate number of pipe/conduit penetrations through walls or slab
[ _______ ]
```
Helper text: "Plumbing, mechanical, electrical sleeves, etc."
Optional — defaults to estimate based on project type if blank.

---

**Field 4D — Construction Joints (LF):**
```
Approximate linear feet of construction joints (optional)
[ _______ ]
```
Helper text: "Horizontal and vertical cold joints between concrete pours."
Optional.

---

**Field 4E — Accessories:**
```
Does the traditional spec include:
☐  Protection board
☐  Drainage composite / drainage mat
```
Both checked by default (most common spec). User can uncheck if not in scope.

---

**Field 4F — Project Location:**
```
Project location (City, State)
[ _______ ]
```
Used for regional labor cost adjustment. Optional — defaults to national average if blank.

---

## Step 5: Project Info (Optional)

**Heading:**
```
Almost done. A few details for your report.
```

**Subheading:**
```
All fields on this step are optional. Skip to calculate now.
```

---

**Field 5A — Project Name:**
```
Project name
[ _______ ]
```
Appears on PDF report cover. Optional.

---

**Field 5B — Bid / Construction Value:**
```
Estimated total project value
[ $_______ ]
```
Used to estimate project size if area not provided.

---

**Field 5C — Timeline:**
```
Bid date or construction start
[ _______ ]  (date picker)
```
Used for lead scoring and follow-up timing.

---

**Field 5D — Notes:**
```
Anything else we should know about this project? (optional)
[ _______________________________ ]
[ _______________________________ ]
```
Free text. Appears in lead record.

---

## Calculate Button

At the bottom of Step 5 (and also accessible from Step 4 via "Skip & Calculate"):

```
┌───────────────────────────────────────┐
│     Calculate My Savings  →           │
└───────────────────────────────────────┘
```

On click:
1. Validate required fields (role, project type, water table)
2. If valid: POST to calculation API
3. Show loading state: animated counter (ticking up) with text "Analyzing your project..."
4. On response: redirect to `/results/[id]`

**Loading state copy:**
```
Analyzing your project...
Calculating failure points...
Building your comparison...
```
(These cycle while waiting for the API response — typically < 1 second)

---

## Form Validation Rules

| Field | Required? | Validation |
|---|---|---|
| Role (Step 1) | Yes | Must select one |
| Project type (Step 2) | Yes | Must select at least one |
| Water table (Step 3A) | Yes | Must select one |
| Project type (Step 3B) | Yes | Must select one |
| All Step 4 fields | No | Numeric fields: positive integers only |
| All Step 5 fields | No | None |

If user tries to proceed without required fields: inline error under the field, no full-page error.

---

## Back Navigation

Back button on every step except Step 1. Returns to previous step with state preserved (no data loss on back).

---

## Save State

Form state is saved to localStorage on every field change. If user navigates away and returns, state is restored with a banner:
```
You have an unfinished analysis. [Continue]  [Start over]
```

---

*Design v1.0 — Phase 3*
