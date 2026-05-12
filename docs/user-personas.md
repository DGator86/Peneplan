# PenePlan — User Personas & Role Hierarchy

---

## Overview

PenePlan serves five tiers of users. The calculation engine is identical for all of them. The presentation layer — wording, output emphasis, PDF structure — adapts to each role's decision frame.

Role is selected at the start of every analysis session. It cannot be changed mid-session without starting over (to preserve data integrity).

---

## Tier 1 — General Contractor (Primary Driver)

### Roles Within This Tier
- **Estimator** (highest-volume user)
- **Project Manager**
- **Superintendent**
- **Executive / VPO**

### What They Care About
- Schedule compression (days, phases, critical path holds)
- Cost reduction (labor, material, subcontractor scope)
- Coordination simplification (fewer trades, fewer RFIs, fewer callbacks)
- VE opportunity quantification (defensible numbers for owner conversations)
- Risk reduction (fewer failure interfaces = fewer callbacks)

### Emotional Hook
> "This simplifies construction."

### How They Use PenePlan
- Run analysis during estimating to identify VE opportunity before bid
- Run analysis after award to build substitution request package
- Bring PDF to owner/engineer conversations as supporting evidence
- Share with waterproofing sub to scope the Penetron conversion

### Output Emphasis (GC View)
1. Cost savings range (primary headline)
2. Schedule days removed
3. Phases/trades eliminated
4. Failure points reduced
5. Penetron recommendation
6. Shareable PDF

### What Would Make Them Leave
- Unclear savings numbers (no range, no assumptions shown)
- Platform feels like a vendor brochure
- Can't export a clean PDF they can put in front of an engineer

---

## Tier 2 — Engineer / Architect / Waterproofing Consultant (Validation Layer)

### What They Care About
- System continuity (no unprotected transitions)
- Detailing logic (how interfaces are handled)
- Risk mitigation (is the alternative system proven?)
- Technical defensibility (can they point to precedent?)
- Constructability (will this actually work in the field?)

### Emotional Hook
> "This may reduce waterproofing interface density and sequencing complexity while maintaining system continuity."

### How They Use PenePlan
- Receive PDF from GC and review independently
- Use Engineer View directly to evaluate a conversion proposal
- Use as a screening tool for constructability before engaging in spec modification

### Output Emphasis (Engineer View)
1. Interface count comparison (traditional vs. Penetron)
2. System continuity diagram (which transitions are treated, how)
3. Constructability notes (pour sequence, curing requirements)
4. Failure-point detail (what each eliminated point was and why it's eliminated)
5. Disclaimer and technical review notice (prominent)

### What Would Make Them Leave
- Platform feels promotional
- No clear disclaimer about engineering approval
- No detail on how transitions and penetrations are handled
- Unsubstantiated savings claims without visible assumptions

---

## Tier 3 — Subcontractor (Execution Layer)

### Roles Within This Tier
- Concrete sub (form-and-place, foundation contractor)
- Waterproofing sub (may be displaced or converted)
- General concrete sub on smaller projects

### What They Care About
- Execution simplicity (fewer steps in the field)
- Fewer trades competing in the same zone
- Fewer callbacks and warranty disputes
- Simpler coordination with concrete pours

### Emotional Hook
> "This removes waterproofing coordination headaches."

### How They Use PenePlan
- Directed by GC as part of a VE package
- Use to scope their own Penetron offer on bid day
- Understand field sequencing before mobilizing

### Output Emphasis (Sub View)
1. Sequencing comparison (traditional steps vs. Penetron steps)
2. Mobilization count reduction
3. Coordination interfaces removed
4. Field notes on application timing (admixture vs. coating vs. joint treatment)

---

## Tier 4 — Owner / Developer (Risk & Lifecycle Layer)

### What They Care About
- Schedule reliability (fewer delays from membrane sequencing holds)
- Long-term leak exposure (fewer failure paths = lower lifecycle risk)
- Warranty confidence (is the system backed?)
- Cost transparency (what are they paying for and why?)

### Emotional Hook
> "Reduce long-term below-grade waterproofing risk."

### How They Use PenePlan
- Receive executive summary PDF from GC or engineer
- Use to evaluate VE proposal independently before approval
- Occasionally run their own analysis on projects they control

### Output Emphasis (Owner View)
1. Failure-point comparison (risk-framed)
2. Lifecycle simplification narrative
3. Schedule reliability improvement
4. Cost savings summary (presented as owner-benefit VE)
5. Technical review pathway (next steps to get engineer sign-off)

---

## Tier 5 — Ready-Mix Supplier (Distribution Amplifier)

### Why This Tier Matters Strategically
Ready-mix suppliers are distribution amplifiers. They are already in front of concrete buyers (GCs, foundation contractors) on every project. A Penetron admixture conversion turns their commodity concrete delivery into a value-added waterproofing system delivery.

### What They Care About
- Treated concrete yardage (admixture is priced per yard)
- Specification advantage over competing mix plants
- Differentiation in commodity bid environments
- Recurring project relationships built on integrated systems

### Emotional Hook
> "Convert waterproofing scope into concrete scope."

### How They Use PenePlan
- Run analysis alongside GC to identify admixture conversion opportunity
- Use output to calculate treated yardage and price premium
- Share PDF with GC as a co-selling tool

### Output Emphasis (Supplier View)
1. Estimated treated yardage
2. Admixture scope by element (walls, slab, pit, etc.)
3. Traditional waterproofing scope displaced
4. Project timeline and pour schedule

---

## Role Selection UX Notes

- Role selection happens on screen 2 (after landing page CTA)
- Role selection is a single-choice card grid, not a dropdown
- Each card shows: role title, 2-line description of what this view emphasizes
- Role cannot be changed mid-analysis (start over prompt)
- PDF report header shows the selected role (e.g., "GC Analysis — PenePlan")
- Default role if skipped: GC View

---

## Cross-Role Insight

The same three headline metrics work for every role — only the framing changes:

| Metric | GC Frame | Engineer Frame | Owner Frame |
|---|---|---|---|
| Days removed | "Schedule compression" | "Sequencing simplification" | "Schedule reliability" |
| Phases eliminated | "Coordination reduction" | "Interface density reduction" | "Construction simplification" |
| Failure points removed | "Risk reduction" | "System continuity improvement" | "Leak exposure reduction" |

This is the core of the common-language strategy.

---

*Document version: 1.0 — Phase 1 complete*
*Next: Phase 2 — Logic Engine (databases, scoring, formulas)*
