# Logic Engine — 01: Project Categories

These are the project types PenePlan evaluates. Each category carries its own default scope profile: typical membrane area, typical concrete volume, typical failure-point count, and sequencing complexity multiplier.

---

## Category List

### CAT-01: Below-Grade Foundation Wall System
**Description:** Cast-in-place concrete foundation walls with applied exterior membrane waterproofing.

**Typical scope includes:**
- Exterior wall waterproofing membrane (vertical)
- Cove/fillet at wall-slab transition
- Inside/outside corners
- Pipe and conduit penetrations through walls
- Construction joints (horizontal and vertical)
- Termination at grade

**Default scope profile (per 1,000 SF of wall area):**
- Membrane area: 1,000 SF wall + 15% for laps and terminations = 1,150 SF billed
- Failure points: 8–14 (see failure-point database)
- Mobilizations: 1–2
- Sequencing complexity: Medium

---

### CAT-02: Below-Grade Slab-on-Grade System
**Description:** Below-grade floor slab with underslab waterproofing membrane applied to mud slab or compacted base.

**Typical scope includes:**
- Underslab membrane (horizontal)
- Slab edge termination
- Construction joint at slab-wall interface
- Pipe and conduit penetrations through slab
- Sump pit transition (if present)

**Default scope profile (per 1,000 SF of slab area):**
- Membrane area: 1,000 SF slab + 10% for laps = 1,100 SF billed
- Failure points: 5–10
- Mobilizations: 1
- Sequencing complexity: Low–Medium

---

### CAT-03: Combined Wall + Slab System
**Description:** Full below-grade envelope — walls and slab — with membrane waterproofing on both surfaces. Most common project type.

**Typical scope includes:**
- All CAT-01 wall scope
- All CAT-02 slab scope
- Wall-to-slab transition (highest-risk failure zone)
- Drainage composite on walls and underslab
- Protection board on walls

**Default scope profile:**
- Combined: wall area + slab area + 12% average overage
- Failure points: 14–28 (additive from both systems plus transition)
- Mobilizations: 2–3 (underslab, wall, repairs/inspection)
- Sequencing complexity: Medium–High

---

### CAT-04: Elevator Pit
**Description:** Below-grade elevator pit — typically 10–15 ft deep, 60–100 SF footprint. High failure-point density relative to area. Special module (see logic doc 10).

**Typical scope includes:**
- Pit floor membrane
- Pit wall membrane (all four faces)
- All corners (4 inside corners minimum)
- Sump/drain transition
- Conduit penetrations (2–6 typical)
- Pit top transition to building slab
- Construction joints

**Default scope profile:**
- Membrane area: 300–600 SF (floor + 4 walls at typical pit size)
- Failure points: 12–22 (high density relative to area)
- Mobilizations: 1–2
- Sequencing complexity: High
- **Monolithic pathway eligible:** Yes (highest confidence conversion)

---

### CAT-05: Parking Structure Below-Grade Level
**Description:** Below-grade parking deck — cast-in-place concrete, typically post-tensioned or conventionally reinforced, with traffic-rated waterproofing membrane.

**Typical scope includes:**
- Deck waterproofing membrane (traffic-bearing)
- Expansion joints
- Drain bodies and transitions
- Curb details
- Ramp transitions
- Column base details

**Default scope profile (per 10,000 SF deck):**
- Membrane area: 10,000 SF + 8% for details = 10,800 SF billed
- Failure points: 20–40 (high joint and penetration density)
- Mobilizations: 2–4
- Sequencing complexity: High

**Note:** Traffic-bearing membrane replacement has a more complex conversion pathway than CAT-01–04. Savings confidence is Medium vs. High for non-traffic applications.

---

### CAT-06: Retaining Wall
**Description:** Cast-in-place or precast retaining wall with exterior membrane waterproofing. Often combined with CAT-01 or CAT-02 scope.

**Typical scope includes:**
- Vertical face membrane
- Base transition to footing
- Weep hole/drainage integration
- Expansion joints

**Default scope profile (per 1,000 SF wall):**
- Membrane area: 1,000 SF + 12% = 1,120 SF
- Failure points: 6–12
- Mobilizations: 1
- Sequencing complexity: Low–Medium

---

### CAT-07: Utility Tunnel / Vault
**Description:** Below-grade concrete utility tunnel or vault with membrane waterproofing on exterior surfaces.

**Typical scope includes:**
- Roof/lid membrane
- Side wall membrane
- Floor membrane
- All transitions and corners
- Penetrations (conduit, pipe, cable)
- Access hatch frames

**Default scope profile (per 100 LF tunnel):**
- Membrane area: varies widely; estimate 3× interior perimeter × length
- Failure points: 18–35 (high penetration count)
- Mobilizations: 2–3
- Sequencing complexity: High

---

## Category Selection in the Intake Form

The intake form lets users select one or more categories. Multi-category projects are additive:
- Failure points are summed
- Membrane areas are summed
- Mobilizations are summed (with a discount for shared mobilizations where categories overlap)
- Complexity score uses the highest-complexity category as the base, then increments for each additional category

---

## Category → Complexity Multiplier Base

| Category | Base Complexity Score |
|---|---|
| CAT-01 Wall only | 3 |
| CAT-02 Slab only | 2 |
| CAT-03 Wall + Slab | 5 |
| CAT-04 Elevator Pit | 6 |
| CAT-05 Parking Deck | 7 |
| CAT-06 Retaining Wall | 3 |
| CAT-07 Utility Tunnel | 7 |

Score is modified further by foundation conditions (doc 02), water table, and project-specific inputs before applying to savings ranges.

---

*Logic Engine v1.0 — Phase 2*
