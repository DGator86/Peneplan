# Logic Engine — 09: Savings Calculation Formulas

This document defines the complete calculation engine. Every formula maps directly to inputs from the intake form and outputs displayed on the results page.

All variable names use snake_case for direct implementation reference.

---

## Input Variables (from Intake Form)

```
// Project scope
project_category[]         // array of selected categories (CAT-01 through CAT-07)
wall_area_sf               // SF of below-grade wall membrane area
slab_area_sf               // SF of below-grade slab membrane area
total_membrane_area_sf     // sum of all membrane areas
elevator_pit_count         // integer, 0 or more
concrete_volume_cy         // estimated CY of below-grade concrete (if unknown, estimated from area)

// System specification
membrane_type              // MT-01 through MT-07
has_protection_board       // boolean
has_drainage_composite     // boolean
mob_count_traditional      // estimated traditional waterproofing mobilizations

// Site conditions
foundation_condition       // FC-01 through FC-07
project_type               // new_construction | renovation | remediation

// Project details
penetration_count          // count of pipe/conduit penetrations
construction_joint_lf      // LF of construction joints
project_location_region    // region code for labor multiplier

// Calculated internally
complexity_score           // from doc 08
complexity_tier            // Low | Medium-Low | Medium | Medium-High | High
spread_pct                 // from complexity tier table
```

---

## Step 1: Estimate Concrete Volume (if not provided)

```
If concrete_volume_cy is not provided by user:

  wall_volume_cy = (wall_area_sf × wall_thickness_ft) / 27
    wall_thickness_ft = 1.0  // default 12" wall; user can override

  slab_volume_cy = (slab_area_sf × slab_thickness_ft) / 27
    slab_thickness_ft = 0.833  // default 10" slab; user can override

  concrete_volume_cy = wall_volume_cy + slab_volume_cy
```

---

## Step 2: Traditional System Cost

### 2a. Membrane Base Cost

```
membrane_unit_rate = lookup(membrane_type, 'mid')
  // Uses mid-range unit rate from doc 06 cost table
  // low/high variants used for range calculation

membrane_base_cost = total_membrane_area_sf × membrane_unit_rate
```

### 2b. Accessory Costs

```
// Protection board
protection_board_cost = 0
if has_protection_board:
  protection_board_cost = total_membrane_area_sf × protection_board_unit_rate_mid
  // protection_board_unit_rate: low=$0.75, mid=$1.25, high=$1.75

// Drainage composite
drainage_composite_cost = 0
if has_drainage_composite:
  drainage_composite_cost = total_membrane_area_sf × drainage_composite_unit_rate_mid
  // drainage_composite_unit_rate: low=$1.50, mid=$2.75, high=$4.00

// Termination bar (wall perimeter)
wall_perimeter_lf = wall_area_sf / avg_wall_height_ft
  avg_wall_height_ft = 9  // default; user can override
termination_bar_cost = wall_perimeter_lf × termination_bar_unit_rate_mid
  // termination_bar_unit_rate: low=$4.00, mid=$6.00, high=$8.00

// Corner details (estimated from project footprint)
inside_corner_count = penetration_count × 0.5 + (elevator_pit_count × 4) + 4
  // rough estimate: 4 base corners + elevator pit corners + ratio of penetrations
outside_corner_count = inside_corner_count × 0.3  // typically fewer outside than inside
corner_cost = (inside_corner_count × inside_corner_unit_rate_mid)
            + (outside_corner_count × outside_corner_unit_rate_mid)
  // inside_corner_unit_rate: low=$25, mid=$40, high=$60
  // outside_corner_unit_rate: low=$20, mid=$35, high=$55

// Penetration seals
penetration_cost = penetration_count × penetration_seal_unit_rate_mid
  // penetration_seal_unit_rate: low=$75, mid=$125, high=$175

// Construction joint waterstop
waterstop_cost = construction_joint_lf × waterstop_unit_rate_mid
  // waterstop_unit_rate: low=$8, mid=$12, high=$18

// Inspection and repair allowance
repair_allowance = membrane_base_cost × repair_rate_mid
  // repair_rate: low=0.05, mid=0.08, high=0.15
```

### 2c. Mobilization Costs

```
mob_cost = mob_count_traditional × mob_unit_rate_mid
  // mob_unit_rate: low=$1,500, mid=$3,500, high=$6,000
```

### 2d. Regional Labor Adjustment

```
labor_multiplier = lookup(project_location_region)
  // From regional table in doc 06

// Labor portion of membrane base cost (estimated at 40% of installed rate)
labor_portion = membrane_base_cost × 0.40
material_portion = membrane_base_cost × 0.60

membrane_base_cost_adjusted = (labor_portion × labor_multiplier) + material_portion

// Same adjustment for protection board, drainage composite, termination bar
protection_board_cost_adjusted = protection_board_cost × ((0.35 × labor_multiplier) + 0.65)
drainage_composite_cost_adjusted = drainage_composite_cost × ((0.35 × labor_multiplier) + 0.65)
termination_bar_cost_adjusted = termination_bar_cost × ((0.5 × labor_multiplier) + 0.50)
mob_cost_adjusted = mob_cost × labor_multiplier
```

### 2e. Traditional System Total

```
traditional_total_mid = membrane_base_cost_adjusted
                      + protection_board_cost_adjusted
                      + drainage_composite_cost_adjusted
                      + termination_bar_cost
                      + corner_cost
                      + penetration_cost
                      + waterstop_cost
                      + repair_allowance
                      + mob_cost_adjusted
```

---

## Step 3: Penetron System Cost

```
// Admixture (primary cost)
admixture_cost = concrete_volume_cy × admixture_unit_rate_mid
  // admixture_unit_rate: low=$4.00, mid=$6.50, high=$9.00

// Joint treatment
joint_treatment_cost = construction_joint_lf × penecrete_joint_unit_rate_mid
  // penecrete_joint_unit_rate: low=$3.00, mid=$5.00, high=$8.00

// Penetration collars
penetration_collar_cost = penetration_count × penecrete_penetration_unit_rate_mid
  // penecrete_penetration_unit_rate: low=$40, mid=$65, high=$100

// Tie hole patching (estimated from wall area)
tie_hole_count = wall_area_sf × 0.5  // 1 tie hole per 2 SF of wall (typical snap tie pattern)
tie_hole_cost = tie_hole_count × peneplug_unit_rate_mid
  // peneplug_unit_rate: low=$15, mid=$25, high=$40

// Crystalline coating (walls, applied after strip — optional, depends on condition)
coating_cost = 0
if foundation_condition in [FC-03, FC-04, FC-07]:
  coating_cost = wall_area_sf × penetron_coating_unit_rate_mid
  // penetron_coating_unit_rate: low=$1.25, mid=$2.00, high=$3.00
// FC-01, FC-02: no coating required (admixture sufficient)
// FC-05, FC-06: coating is recommended but optional

penetron_total_mid = admixture_cost
                   + joint_treatment_cost
                   + penetration_collar_cost
                   + tie_hole_cost
                   + coating_cost
```

---

## Step 4: Gross Material/Labor Savings

```
gross_savings_mid = traditional_total_mid - penetron_total_mid
```

---

## Step 5: Schedule Savings

```
// Look up schedule savings range from doc 07 based on category and project size
project_size = categorize(total_membrane_area_sf)
  // small: < 5,000 SF | medium: 5,000–20,000 SF | large: > 20,000 SF

schedule_days_mid = lookup(project_category, project_size, 'mid')
  // From schedule savings table in doc 07

phases_eliminated = lookup(project_category, 'phases_eliminated')
mobs_eliminated = lookup(project_category, 'mobs_eliminated')
```

---

## Step 6: Failure Point Reduction

```
// Calculate traditional failure point count
fp_lap_seams = (total_membrane_area_sf / 3.0) / 10.0  // 36" sheets, 10 LF = 1 FP
fp_inside_corners = inside_corner_count
fp_outside_corners = outside_corner_count
fp_wall_slab_transition = (wall_area_sf > 0 and slab_area_sf > 0) ? 1 : 0  // weight ×2 applied in display
fp_penetrations = penetration_count
fp_termination = wall_perimeter_lf / 20.0  // 1 FP per 20 LF of termination
fp_construction_joints = construction_joint_lf / 10.0  // 1 FP per 10 LF
fp_tie_holes = tie_hole_count / 20.0  // 1 FP per 20 holes
fp_elevator_pits = elevator_pit_count × 4  // 4 FP per pit (corners + sump + transitions)

traditional_fp_total = fp_lap_seams + fp_inside_corners + fp_outside_corners
                     + (fp_wall_slab_transition × 2)  // double-weighted
                     + fp_penetrations + fp_termination
                     + fp_construction_joints + fp_tie_holes
                     + fp_elevator_pits

// Penetron residual failure points
penetron_fp_residual = (fp_inside_corners × 0.25)
                     + (fp_outside_corners × 0.25)
                     + (fp_wall_slab_transition × 0.5 × 2)  // treated, not eliminated
                     + (fp_penetrations × 0.5)
                     + (fp_construction_joints × 0.3)
                     + (fp_tie_holes × 0.05)
                     + (fp_elevator_pits × 0.3)
                     // Note: lap seams, termination, drainage board = fully eliminated

fp_reduction = traditional_fp_total - penetron_fp_residual
fp_reduction_pct = round(fp_reduction / traditional_fp_total × 100)
```

---

## Step 7: Apply Complexity Spread

```
spread_pct = lookup(complexity_tier, 'spread_pct')
  // Low=0.15, Medium-Low=0.20, Medium=0.30, Medium-High=0.40, High=0.50

// Cost range
savings_low = round_to_500(gross_savings_mid × (1 - spread_pct))
savings_high = round_to_500(gross_savings_mid × (1 + spread_pct))

// Schedule range (apply smaller spread)
schedule_spread_pct = spread_pct × 0.6  // schedule is more predictable than cost
schedule_days_low = round(schedule_days_mid × (1 - schedule_spread_pct))
schedule_days_high = round(schedule_days_mid × (1 + schedule_spread_pct))

// Failure point reduction is a single number (deterministic from inputs), no spread
```

---

## Step 8: Final Output Object

```javascript
{
  // Headline metrics
  savings_range: {
    low: savings_low,        // $
    mid: gross_savings_mid,  // $
    high: savings_high       // $
  },
  schedule_savings: {
    low: schedule_days_low,  // days
    mid: schedule_days_mid,  // days
    high: schedule_days_high // days
  },
  failure_point_reduction: {
    traditional_count: round(traditional_fp_total),
    penetron_count: round(penetron_fp_residual),
    eliminated: round(fp_reduction),
    reduction_pct: fp_reduction_pct
  },
  sequencing_simplification: {
    phases_eliminated: phases_eliminated,
    mobs_eliminated: mobs_eliminated,
    trades_removed: 1  // waterproofing sub = 1 trade removed (0 if sub retained for joint treatment)
  },

  // Supporting data
  complexity_score: complexity_score,
  complexity_tier: complexity_tier,
  confidence_level: lookup(complexity_tier, 'confidence'),
  conversion_rating: lookup(complexity_score, 'rating'),

  // Penetron recommendation
  recommendation: {
    admixture: true,  // always
    crystalline_coating: (foundation_condition in [FC-03, FC-04, FC-07]),
    joint_treatment: true,  // always
    penetration_treatment: (penetration_count > 0),
    elevator_pit_monolithic: (elevator_pit_count > 0)
  },

  // Cost breakdown (for assumptions page)
  traditional_cost_breakdown: { ... },
  penetron_cost_breakdown: { ... },

  // Disclaimer flags
  requires_technical_review: (complexity_score >= 12 or foundation_condition in [FC-04, FC-06, FC-07]),
  show_engineering_disclaimer: true  // always
}
```

---

## Rounding Rules

- Dollar amounts: round to nearest $500 for display
- Days: round to nearest whole day
- Failure points: round to nearest integer
- Percentages: round to nearest 1%

---

## Edge Cases

| Condition | Handling |
|---|---|
| savings_low < 0 | Display as "$0 – $X range. Project may not yield savings — technical review recommended." |
| traditional_total < $5,000 | Flag as small project; savings may not be material |
| penetron_total > traditional_total | "Penetron may not represent cost savings on this project at current inputs. Schedule and failure-point benefits may still apply." |
| membrane_type = MT-07 (crystalline) | Override: "Product substitution only. Sequencing savings do not apply." |
| project_type = remediation | Apply FC-07 logic; flag for technical review |

---

*Logic Engine v1.0 — Phase 2*
