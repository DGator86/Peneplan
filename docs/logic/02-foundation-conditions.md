# Logic Engine — 02: Foundation Conditions

Foundation conditions affect two things in the calculation engine:
1. **Conversion confidence** — how reliably Penetron performs relative to traditional membranes in this condition
2. **Complexity score modifier** — how much the condition increases or decreases the savings range spread

---

## Condition List

### FC-01: Dry Soil / No Groundwater
**Definition:** Site is well above the water table. No hydrostatic pressure. Waterproofing is primarily a dampproofing/vapor control function.

**Characteristics:**
- Low moisture drive
- Membrane functions as vapor barrier and dampproofing
- Failure consequence is low (damp intrusion, not flooding)

**Conversion confidence:** High — Penetron performs well as a crystalline dampproofing/waterproofing system in dry conditions.

**Savings confidence:** High — traditional membrane scope is often over-specified for this condition; conversion savings are clear.

**Complexity modifier:** −1 (reduces complexity score — lower risk, tighter savings range)

---

### FC-02: Seasonal Groundwater
**Definition:** Water table rises during wet season (spring snowmelt, rainy season) but is below foundation level in dry season. Intermittent hydrostatic exposure.

**Characteristics:**
- Pressure varies by season
- Membrane must handle positive hydrostatic pressure episodically
- Failure consequence is moderate

**Conversion confidence:** High — Penetron crystalline systems self-seal under positive hydrostatic pressure by design.

**Savings confidence:** High

**Complexity modifier:** 0 (no adjustment)

---

### FC-03: Permanent High Water Table
**Definition:** Water table is consistently at or above foundation slab level. Constant positive hydrostatic pressure on slab and lower wall sections.

**Characteristics:**
- Continuous hydrostatic pressure
- Traditional membrane must be fully continuous and defect-free
- Any failure in traditional membrane = active leak
- Highest-consequence failure mode

**Conversion confidence:** High — this is Penetron's strongest use case. Crystalline technology is specifically designed for positive hydrostatic head. The crystalline matrix grows into cracks under moisture drive.

**Savings confidence:** High for material/labor savings. Schedule savings are also highest here because traditional membrane inspection and repair cycles are longest in high-water-table conditions.

**Complexity modifier:** +2 (increases complexity score — higher stakes, wider savings range)

---

### FC-04: Artesian / Hydrostatic Pressure
**Definition:** Groundwater is under significant pressure — typically encountered in urban excavations, coastal sites, or sites near bodies of water. Pressure may exceed 20 psi.

**Characteristics:**
- Extreme positive hydrostatic head
- Traditional membranes require special detailing, drainage relief, and often secondary systems
- Very high failure consequence

**Conversion confidence:** Medium-High — Penetron performs well, but extreme pressure conditions may require supplemental joint treatment systems (PENECRETE MORTAR at all joints, PENEPLUG for active leaks). Conversion is strongly recommended but requires Penetron technical review for confirmation.

**Savings confidence:** Medium — savings are substantial but depend on the complexity of the traditional spec being replaced. High variability in this condition.

**Complexity modifier:** +3

**Note:** Projects with FC-04 always trigger the "Request Technical Review" CTA prominently in the results.

---

### FC-05: Rock / Minimal Soil Cover
**Definition:** Foundation bearing on rock, with minimal soil between rock face and membrane. May include rock-anchored walls.

**Characteristics:**
- Rock may be damp but typically low hydrostatic pressure
- Detailing at rock-to-concrete interfaces is complex
- Limited drainage path options

**Conversion confidence:** Medium — Penetron performs well in concrete but rock interfaces require specific detailing review.

**Savings confidence:** Medium (wider range)

**Complexity modifier:** +1

---

### FC-06: Contaminated Soil / Chemical Exposure
**Definition:** Site soil contains chemicals, solvents, petroleum products, or other contaminants that may degrade membrane systems.

**Characteristics:**
- Some membranes are chemically incompatible with specific contaminants
- Penetron crystalline systems are chemically inert to most common contaminants (consult technical data for specific exposure)
- Conversion benefit may include improved chemical resistance

**Conversion confidence:** Variable — depends on contaminant type. Flag for technical review.

**Savings confidence:** Low-Medium (high variability)

**Complexity modifier:** +2

**Note:** Always triggers "Request Technical Review" in results.

---

### FC-07: Remedial / Existing Leaking Structure
**Definition:** Existing below-grade structure is actively leaking or has documented water intrusion. Project involves remediation of existing failed waterproofing.

**Characteristics:**
- Traditional remediation requires excavation and full re-membrane, OR interior negative-side systems
- Penetron offers negative-side crystalline application options
- Conversion pathway is different from new construction

**Conversion confidence:** Medium — negative-side Penetron application is well-established, but remediation scope varies widely.

**Savings confidence:** Low-Medium (highly project-specific)

**Complexity modifier:** +3

**Note:** Remediation projects always trigger "Request Technical Review."

---

## Foundation Condition → Intake Form Mapping

The intake form presents foundation condition as a single-choice question:

> "What best describes the water conditions at this site?"
> - Dry / No groundwater
> - Seasonal groundwater (wet season only)
> - Permanent high water table
> - Artesian or high hydrostatic pressure
> - Rock foundation
> - Contaminated soil / chemical exposure
> - Existing leak / remediation

---

## Condition Impact on Output Language

| Condition | Results Page Language Modifier |
|---|---|
| FC-01 Dry | "Penetron is well-suited for this condition as a crystalline dampproofing system." |
| FC-02 Seasonal | "Penetron's self-sealing crystalline matrix is designed for variable hydrostatic conditions." |
| FC-03 High water table | "This is Penetron's highest-confidence application. Crystalline technology is specifically engineered for positive hydrostatic head." |
| FC-04 Artesian | "Penetron performs well under extreme hydrostatic pressure with proper joint treatment. Technical review recommended." |
| FC-05 Rock | "Rock interface detailing requires Penetron technical review to confirm conversion pathway." |
| FC-06 Contaminated | "Chemical compatibility should be confirmed with Penetron technical team for this site condition." |
| FC-07 Remedial | "Negative-side crystalline application is available for remediation. Technical review required to scope properly." |

---

*Logic Engine v1.0 — Phase 2*
