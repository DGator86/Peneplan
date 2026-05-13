# Logic Engine — 04: Failure-Point Database

A failure point is any discrete interface in the waterproofing system where two materials meet, terminate, or transition — and where field conditions can create a gap, defect, or water pathway.

This database catalogs every failure point type, assigns a base count per project category, and maps the Penetron conversion outcome for each.

---

## Failure Point Types

### FP-01: Horizontal Lap Seam (Sheet Membrane)
**Description:** Overlap between two adjacent sheets of membrane. Typically 3–4" minimum overlap, sealed with adhesive or torch.

**Risk:** Adhesion failure, incomplete overlap, contamination under seam.
**Applies to:** MT-01, MT-05, MT-06
**Count method:** Total membrane area (SF) ÷ sheet width (SF/LF) = approximate seam LF → each 10 LF = 1 failure point

**Penetron outcome:** Eliminated (no sheet membrane = no lap seams)
**Penetron residual FP count:** 0

---

### FP-02: Vertical Lap Seam (Sheet Membrane)
**Description:** End-lap between vertically applied sheet membrane strips on wall faces.

**Risk:** Same as FP-01 but on vertical surface — more prone to slippage before adhesive sets.
**Applies to:** MT-01, MT-05, MT-06
**Count method:** Wall height ÷ sheet width × number of wall panels

**Penetron outcome:** Eliminated
**Penetron residual FP count:** 0

---

### FP-03: Inside Corner
**Description:** Transition at the inside corner where two wall planes meet, or where wall meets floor slab.

**Risk:** Sheet membranes cannot easily conform to tight inside corners — bridging, voids, and stress cracking are common. Fluid membranes require additional thickness and fabric reinforcing.
**Applies to:** All membrane types
**Count method:** Count of inside corners in project

**Penetron outcome:** Treated with PENECRETE MORTAR cove fillet or crystalline slurry. Not eliminated but significantly de-risked.
**Penetron residual FP count:** 0.25 per original inside corner (low-risk residual)

---

### FP-04: Outside Corner
**Description:** Transition at outside corner (re-entrant angle). Less common than inside corners but present in complex foundations.

**Risk:** Membrane bridging and tension at outside corner radius.
**Applies to:** All membrane types
**Count method:** Count of outside corners

**Penetron outcome:** Treated with crystalline coating. Residual risk is low.
**Penetron residual FP count:** 0.25 per original outside corner

---

### FP-05: Wall-to-Slab (Cove) Transition
**Description:** The horizontal-to-vertical transition at the base of a foundation wall where it meets the floor slab. The highest-risk single failure zone in below-grade waterproofing.

**Risk:** Differential settlement, construction joint between wall and slab pours, membrane continuity across two different planes and two different pour events. Most below-grade leaks initiate here.
**Applies to:** All membrane types
**Count method:** Perimeter of below-grade structure (LF) = number of linear failure feet. Count: 1 per structure (but weight ×2 in scoring due to high risk)

**Penetron outcome:** PENECRETE MORTAR cove fillet installed at this joint. Construction joint between wall and slab also treated. This zone is substantially de-risked — crystalline treatment penetrates into both concrete elements.
**Penetron residual FP count:** 0.5 per wall-slab interface (residual joint, treated)

---

### FP-06: Pipe Penetration
**Description:** Any pipe, sleeve, or conduit passing through the below-grade wall or slab.

**Risk:** Annular space between pipe and membrane is a primary leak pathway. Field-cut boots and mastic seals are prone to failure, especially with vibration or settlement.
**Applies to:** All membrane types
**Count method:** Count of penetrations

**Penetron outcome:** Treated with PENECRETE MORTAR collar around penetration. If sleeve is present, annular space is grouted and crystalline-treated.
**Penetron residual FP count:** 0.5 per penetration (treated joint, lower risk)

---

### FP-07: Termination Bar (Top of Wall)
**Description:** The termination of the membrane at the top of the below-grade wall, typically at grade or at the transition to above-grade cladding. Secured with mechanically fastened termination bar and sealant.

**Risk:** Most membranes eventually fail at their termination edge. Freeze-thaw cycling, UV exposure, building movement, and sealant degradation make this a high-frequency failure point.
**Applies to:** All applied membrane types (MT-01 through MT-06)
**Count method:** LF of wall perimeter at grade. Count: 1 per perimeter run (weight ×1.5 in scoring)

**Penetron outcome:** Eliminated. Penetron Admixture in the concrete wall means the waterproofing is integral — there is no membrane edge to terminate.
**Penetron residual FP count:** 0

---

### FP-08: Horizontal Construction Joint (Wall)
**Description:** Cold joint between concrete pours at the same wall — typically between footing and wall, or between wall lifts in tall foundations.

**Risk:** Construction joints are inherent crack planes. Traditional membranes bridge this joint externally but cannot address internal movement.
**Applies to:** All membrane types
**Count method:** LF of horizontal construction joints in walls

**Penetron outcome:** PENECRETE MORTAR keyway treatment installed in joint prior to second pour. Crystalline treatment extends into both concrete lifts.
**Penetron residual FP count:** 0.3 per joint LF unit (treated joint)

---

### FP-09: Vertical Construction Joint (Wall)
**Description:** Cold joint between adjacent wall pours (e.g., between pours at form breaks, or at re-entrant wall segments).

**Risk:** Same as FP-08 but vertical — more susceptible to hydrostatic pressure differential across the joint.
**Applies to:** All membrane types
**Count method:** LF of vertical construction joints

**Penetron outcome:** PENECRETE MORTAR treatment. Residual risk low.
**Penetron residual FP count:** 0.3 per joint LF unit

---

### FP-10: Slab Construction Joint
**Description:** Cold joint between adjacent slab pours.

**Risk:** Differential settlement creates opening over time. Traditional underslab membrane bridges joint but cannot tolerate significant movement.
**Applies to:** All membrane types
**Count method:** LF of slab construction joints

**Penetron outcome:** PENECRETE MORTAR keyway + waterstop treatment.
**Penetron residual FP count:** 0.3 per joint LF unit

---

### FP-11: Sump Pit Transition
**Description:** The transition of the membrane from the main slab surface down into and around a sump pit.

**Risk:** Complex three-dimensional transition — membrane must turn corners, maintain continuity, and accommodate the sump liner/crock. Very high failure rate in traditional systems.
**Applies to:** All membrane types
**Count method:** Count of sump pits × 3 (each sump pit has multiple failure sub-points)

**Penetron outcome:** Sump pit concrete treated with admixture. Crystalline coating applied at transitions. Risk substantially reduced.
**Penetron residual FP count:** 1 per sump pit

---

### FP-12: Drainage Board / Protection Board Laps
**Description:** Laps between adjacent drainage composite or protection board panels. Not a waterproofing failure point per se, but creates gaps where membrane is exposed to backfill damage.

**Risk:** Membrane damage during backfill operations is a significant source of failures. Gaps in protection board leave membrane vulnerable.
**Applies to:** All systems requiring protection board (MT-01, MT-03, MT-05, MT-06)
**Count method:** Perimeter LF of walls ÷ 4 (approximate lap count)

**Penetron outcome:** Eliminated (no protection board required with Penetron wall system).
**Penetron residual FP count:** 0

---

### FP-13: Form Tie Holes (Wall)
**Description:** Holes remaining from snap ties or she-bolts used to hold concrete forms. Must be patched in traditional membrane systems.

**Risk:** Each hole is a potential water pathway through the wall. Traditional membrane must be patched at every hole location.
**Applies to:** CAT-01, CAT-03, CAT-04, CAT-07 (concrete walls)
**Count method:** Estimated tie hole density × wall area. Typical: 1 per 2 SF of wall area. For scoring: every 20 tie holes = 1 failure point.

**Penetron outcome:** Each tie hole patched with PENEPLUG or PENECRETE MORTAR and crystalline treated. Tie holes are fully sealed.
**Penetron residual FP count:** 0.05 per hole (near-zero residual)

---

### FP-14: Expansion Joint
**Description:** Designed movement joint in the structure, typically filled with compressible filler and covered with a membrane flashing or expansion joint cover.

**Risk:** Highest-movement joint in the structure. Membranes at expansion joints are subjected to continuous cycling.
**Applies to:** All categories with expansion joints (especially CAT-05, CAT-07)
**Count method:** LF of expansion joints × 2 (each side)

**Penetron outcome:** Penetron does not eliminate expansion joint treatment. Expansion joints still require a mechanical waterstop or hydrophilic seal. This is a **residual failure point** with Penetron.
**Penetron residual FP count:** 1 per expansion joint (no reduction — crystalline cannot bridge designed movement joints)

---

## Failure Point Count by Project Category (Defaults)

These are default counts for a "typical" project in each category. They are adjusted based on actual user input (penetration count, joint count, etc.) in the intake form.

| Category | Typical Traditional FP Count | Typical Penetron Residual FP Count | Reduction % |
|---|---|---|---|
| CAT-01 Wall (1,000 SF) | 18–28 | 4–8 | 68–78% |
| CAT-02 Slab (1,000 SF) | 10–16 | 2–5 | 65–75% |
| CAT-03 Wall + Slab (1,000 SF each) | 32–48 | 7–14 | 68–78% |
| CAT-04 Elevator Pit | 16–24 | 3–7 | 72–82% |
| CAT-05 Parking Deck (10,000 SF) | 35–60 | 10–18 | 65–72% |
| CAT-06 Retaining Wall (1,000 SF) | 12–20 | 3–7 | 65–75% |
| CAT-07 Utility Tunnel (100 LF) | 28–45 | 8–14 | 67–75% |

---

## Failure Point Scoring for Results Display

The results page shows failure points as a headline number. The calculation:

```
traditional_fp_count = sum of all FP counts based on user inputs
penetron_fp_count = sum of all residual FP counts
fp_reduction = traditional_fp_count - penetron_fp_count
fp_reduction_pct = fp_reduction / traditional_fp_count × 100
```

Display: **"X failure points eliminated (Y% reduction)"**

---

*Logic Engine v1.0 — Phase 2*
