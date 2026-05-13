# Logic Engine — 10: Elevator Pit Monolithic Pathway Logic

The elevator pit is the single highest-impact, highest-confidence conversion case in the platform. It gets its own module because:
1. The failure-point reduction is dramatic relative to scope area
2. The monolithic pour pathway eliminates the waterproofing sub entirely from this zone
3. The "holy shit" moment for GCs and supers is strongest here
4. The Penetron conversion narrative is clearest and most defensible

---

## Why Elevator Pits Are Special

Traditional elevator pit waterproofing is one of the most labor-intensive, detail-intensive, and failure-prone below-grade scopes in commercial construction.

The pit is a small, confined, complex three-dimensional box. Every face must be waterproofed. Every corner is an inside corner. There are always penetrations (sump drain, conduit for elevator controls, floor drain). The transition to the building slab above is a critical failure zone.

Traditional membrane installers must:
- Work in a confined space
- Wrap all four walls and the floor
- Form and flash all four inside corners
- Boot all penetrations
- Transition the membrane up and out to the building slab
- Install protection board in a tight space
- Coordinate with the elevator contractor

With Penetron:
- The concrete mix for the pit contains the admixture
- Construction joints get PENECRETE MORTAR treatment
- Penetrations get PENECRETE collar
- That's it

---

## Elevator Pit Failure Point Detail

### Typical Traditional Pit: Failure Point Inventory

| FP # | Location | Type | Risk Level |
|---|---|---|---|
| 1 | Pit floor | Construction joint (floor to wall) — all 4 sides | High |
| 2 | NW inside corner | Sheet membrane inside corner | High |
| 3 | NE inside corner | Sheet membrane inside corner | High |
| 4 | SE inside corner | Sheet membrane inside corner | High |
| 5 | SW inside corner | Sheet membrane inside corner | High |
| 6 | Sump drain | Membrane boot at drain body | Very High |
| 7 | Pit floor lap seam | Horizontal sheet overlap | Medium |
| 8–11 | Wall lap seams (1 per wall face) | Vertical sheet overlap | Medium |
| 12 | Elevator conduit penetration #1 | Field-cut boot + mastic | High |
| 13 | Elevator conduit penetration #2 | Field-cut boot + mastic | High |
| 14 | Pit-to-building slab transition | Membrane turn-up + termination | Very High |
| 15 | Termination bar (top of pit walls) | Mechanically fastened termination | High |

**Total traditional failure points: 15 (typical single pit)**

---

### Penetron Monolithic Pit: Residual Failure Points

| FP # | Location | Type | Penetron Treatment | Residual Risk |
|---|---|---|---|---|
| 1 | Floor-to-wall joint | Construction joint | PENECRETE MORTAR keyway | Low |
| 2 | Sump drain | Penetration at drain body | PENECRETE collar + plug | Low-Medium |
| 3 | Conduit #1 | Penetration | PENECRETE collar | Low |
| 4 | Conduit #2 | Penetration | PENECRETE collar | Low |

**Total Penetron residual failure points: 4 (typical single pit)**

**Failure points eliminated: 11 of 15 (73%)**

---

## Penetron Monolithic Pathway — Pour Sequence

### Option A: Monolithic Single Pour (Preferred)
The ideal scenario: pit slab and pit walls are formed and poured in a single concrete event. Penetron Admixture is in the entire batch.

```
Pour Sequence:
1. Form pit: set floor forms or prepare formed pit walls as one unit
2. Set reinforcing (slab + walls)
3. Install conduit sleeves and sump crock per elevator drawings
4. Pre-treat sleeve annular spaces with hydraulic cement or PENECRETE before pour
5. Pour concrete (Penetron Admixture in mix)
6. Cure 24–48 hours
7. Strip forms
8. Apply PENECRETE MORTAR to construction joint at pit floor/wall interface (if any)
9. Apply PENECRETE MORTAR collar around all penetrations
10. Done — pit is waterproofed
```

**Trades involved:** Concrete sub only (+ elevator contractor for sleeve locations)
**Waterproofing sub required:** No
**Duration:** 1 pour event + 0.5 day treatment

---

### Option B: Sequential Pour (Wall After Slab)
More common in practice — pit slab poured first, then walls formed and poured.

```
Pour Sequence:
1. Pour pit slab (Penetron Admixture in mix)
2. Install PENECRETE MORTAR keyway in slab at wall perimeter (before wall pour)
3. Form and pour pit walls (Penetron Admixture in mix)
4. Strip forms
5. Apply PENECRETE MORTAR to all construction joints
6. Apply PENECRETE MORTAR collar around all penetrations
7. Done
```

**Construction joints created:** 1 (slab-wall interface at bottom of walls)
**Treatment at joint:** PENECRETE MORTAR keyway installed in slab top before wall pour

---

## Elevator Pit Module Activation

The elevator pit module activates automatically when:
```
elevator_pit_count > 0
```

It always displays as a **separate section** on the results page — never buried in the aggregate numbers.

---

## Elevator Pit Results Display

### GC View
```
ELEVATOR PIT: MONOLITHIC WATERPROOFING PATHWAY

[Pit Count] elevator pits identified.

Traditional approach:
- Confined space membrane installation
- 4 inside corners per pit
- Boot seals at all penetrations
- Termination at slab transition
- Waterproofing sub mobilization required
- 15 failure points per pit (typical)

Penetron monolithic approach:
- Admixture in concrete pour
- PENECRETE MORTAR at construction joints and penetrations
- No waterproofing sub required in pit zone
- 4 residual failure points per pit (treated, low risk)
- 11 failure points eliminated per pit (73%)

[Pit Count × $X,XXX – $XX,XXX] estimated savings per pit
[Pit Count × X] days removed from pit sequence
```

### Engineer View
```
ELEVATOR PIT: CRYSTALLINE WATERPROOFING PATHWAY

Monolithic crystalline system: Penetron Admixture in all pit concrete + PENECRETE MORTAR 
at construction joints and penetrations.

Interface analysis:
- Floor-to-wall construction joint: treated with PENECRETE MORTAR keyway (integral crystalline 
  treatment penetrates both concrete elements)
- Penetrations: PENECRETE MORTAR collar (crystalline treatment 1–2" radius around sleeve)
- No applied membrane: no termination, no lap seams, no corners requiring membrane detailing

System continuity: Maintained. Crystalline treatment is integral to the concrete substrate — 
no discrete membrane layer to terminate, lap, or boot.

Note: Expansion joints, if present, require separate mechanical treatment and are not 
addressed by this pathway.
```

---

## Elevator Pit Cost Formula

```
// Per pit
pit_floor_area_sf = 80  // default; user can override (typical pit 8×10 = 80 SF)
pit_wall_area_sf = 200  // default; 4 walls × ~5 ft average height × 10 ft perimeter (simplified)
pit_concrete_volume_cy = (pit_floor_area_sf × 0.833 + pit_wall_area_sf × 0.833) / 27
  // assumes 10" floor and 10" walls

pit_admixture_cost = pit_concrete_volume_cy × admixture_unit_rate_mid

// Joints and penetrations (per typical pit)
pit_joint_lf = pit_perimeter_lf = 36  // default: 8+8+10+10 = 36 LF floor perimeter
pit_joint_cost = pit_joint_lf × penecrete_joint_unit_rate_mid

pit_penetration_count = 3  // default: 1 sump + 2 conduits
pit_penetration_cost = pit_penetration_count × penecrete_penetration_unit_rate_mid

// Total Penetron pit cost (per pit)
penetron_pit_cost = pit_admixture_cost + pit_joint_cost + pit_penetration_cost


// Traditional pit cost
traditional_pit_membrane_sf = pit_floor_area_sf + pit_wall_area_sf  // = ~280 SF
traditional_pit_cost = (traditional_pit_membrane_sf × membrane_unit_rate_mid)
                     + (inside_corner_count × inside_corner_unit_rate_mid)  // 4 corners
                     + (penetration_count × penetration_seal_unit_rate_mid)  // 3 penetrations
                     + (pit_wall_area_sf × protection_board_unit_rate_mid)
                     + (mob_unit_rate_mid × 0.5)  // partial mob if combined with main scope

// Per-pit savings
pit_savings_mid = traditional_pit_cost - penetron_pit_cost

// Total pit savings
total_pit_savings_mid = pit_savings_mid × elevator_pit_count
```

---

## Typical Elevator Pit Numbers (Single Pit, Default Inputs)

| Item | Traditional | Penetron | Savings |
|---|---|---|---|
| Membrane cost | $1,400–$2,520 | $0 | $1,400–$2,520 |
| Protection board | $140–$350 | $0 | $140–$350 |
| Corner details (4) | $100–$240 | $0 | $100–$240 |
| Penetration seals (3) | $225–$525 | $0 | $225–$525 |
| Admixture | $0 | $550–$800 | −$550–−$800 |
| Joint treatment | $0 | $108–$288 | −$108–−$288 |
| Penetration collars (3) | $0 | $120–$300 | −$120–−$300 |
| **Total** | **$1,865–$3,635** | **$778–$1,388** | **$1,087–$2,247** |

**Typical mid-range savings per pit: ~$1,600**
**Failure points eliminated: 11 of 15 (73%)**
**Days saved: 3–5 per pit**

---

## Elevator Pit Output in PDF Report

The elevator pit section of the PDF report includes:
1. Pit count and typical dimensions used
2. Side-by-side: traditional vs. Penetron failure point inventory
3. Monolithic pour sequence diagram (simple flow chart)
4. Per-pit and total pit savings
5. "Why this works" — brief technical rationale (2–3 sentences)
6. Disclaimer: actual savings depend on pit dimensions, concrete mix design, and engineer approval

---

*Logic Engine v1.0 — Phase 2*
