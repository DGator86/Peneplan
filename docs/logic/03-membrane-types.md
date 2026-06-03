# Logic Engine — 03: Membrane Types

The membrane type being replaced is the primary cost variable in the savings calculation. Each type has a different unit rate, failure-point profile, and sequencing footprint.

---

## Membrane Type List

### MT-01: Self-Adhered Sheet Membrane (SBS Bituminous)
**Common products:** Grace Bituthene, Carlisle Barritech, Henry Blueskin

**Description:** Pre-fabricated rubberized asphalt sheet with factory-applied adhesive. Applied to prepared substrate with roller pressure. Most common below-grade membrane type in commercial construction.

**Application surfaces:** Walls (vertical), slabs (horizontal, under-slab)

**Material cost range:** $1.50–$3.00/SF (material only)
**Installed cost range (labor + material):** $5.00–$9.00/SF
**Protection board required:** Yes (typically)
**Drainage composite required:** Typically yes for walls

**Failure-point profile:**
- High lap seam count (sheets typically 36–48" wide = many seams)
- Termination bar required at top of wall (high-risk point)
- All inside and outside corners require pre-formed corners or field fabrication
- Penetrations require field-cut boots + mastic
- Construction joint treatment requires embedded accessory or field flashing

**Relative failure-point density:** High

---

### MT-02: Fluid-Applied Membrane (Polyurethane)
**Common products:** Tremco Paraseal LM, Sika Sikalastic, BASF MasterSeal

**Description:** Liquid membrane applied by roller, brush, or spray. Cures to form a seamless elastomeric coating. No lap seams but requires careful application at transitions and penetrations.

**Application surfaces:** Walls, slabs, complex geometry

**Material cost range:** $1.00–$2.50/SF (material only)
**Installed cost range:** $4.00–$8.00/SF
**Protection board required:** Yes
**Drainage composite required:** Typically yes for walls

**Failure-point profile:**
- No lap seams (advantage over sheet membrane)
- Transitions and penetrations still require reinforcing fabric + additional passes
- Termination at grade is a common failure zone
- Inconsistent film thickness on vertical surfaces is a common defect
- Temperature and humidity sensitive during application

**Relative failure-point density:** Medium

---

### MT-03: Fluid-Applied Membrane (Polyurea/Polyurethane Hybrid)
**Common products:** Tremco ExoAir, Soprema Colphene

**Description:** High-performance spray-applied membrane. Fast cure, seamless, high elongation. Higher cost than standard polyurethane.

**Application surfaces:** Walls, slabs, complex geometry, bridges

**Material cost range:** $2.50–$5.00/SF
**Installed cost range:** $7.00–$14.00/SF
**Protection board required:** Yes
**Drainage composite required:** Typically yes

**Failure-point profile:**
- Similar to MT-02 (no lap seams)
- Requires plural-component spray equipment (contractor specialty)
- Transitions and terminations still required
- Lower defect rate than MT-02 when properly applied

**Relative failure-point density:** Medium-Low (best of traditional systems)

---

### MT-04: Bentonite Panel / Blanket System
**Common products:** Cetco Voltex, Colloid Environmental Laponite, Cetco Paraseal

**Description:** Panels or blankets of sodium bentonite clay sandwiched between geotextile layers. Hydrates and swells when exposed to moisture to form a gel barrier. Applied loose to soil-side of wall or under slab before concrete pour (pre-applied system).

**Application surfaces:** Walls (soil-side), slabs (pre-applied)

**Material cost range:** $1.25–$2.50/SF
**Installed cost range:** $3.00–$6.00/SF
**Protection board required:** No (geotextile face provides protection)
**Drainage composite required:** Typically yes for walls

**Failure-point profile:**
- Overlap laps (less critical than sheet membrane but still failure zones)
- Contaminated soil can degrade bentonite (calcium-rich groundwater can ion-exchange with sodium bentonite, reducing effectiveness)
- Penetrations are high-risk (requires bentonite rope and waterstop)
- Vertical migration risk: bentonite can migrate down the wall face before hydrating
- Construction joint treatment is a significant failure zone

**Relative failure-point density:** Medium-High

**Special note:** Bentonite systems have a specific vulnerability to calcium-rich or saline groundwater. This should be flagged in the results if FC-06 is selected.

---

### MT-05: HDPE/LLDPE Sheet Membrane
**Common products:** Carlisle CCW-500, Tremco ExoAir 230, Soprema Colphene 3000

**Description:** High-density or linear low-density polyethylene sheet membrane, typically 40–60 mil. Heat-welded or solvent-welded seams. Often used in tunnels, vaults, and high-hydrostatic conditions.

**Application surfaces:** Walls, slabs, tunnels, vaults

**Material cost range:** $1.50–$3.50/SF
**Installed cost range:** $5.00–$10.00/SF
**Protection board required:** Yes (typically)
**Drainage composite required:** Typically yes

**Failure-point profile:**
- Heat-welded seams (high quality when done properly, but require specialized equipment)
- Large number of seams (sheets are typically 6–10 ft wide)
- Penetration details are complex (mechanical seals required)
- Termination details are high-risk

**Relative failure-point density:** High (seam count)

---

### MT-06: Hybrid System (Sheet + Fluid at Transitions)
**Description:** Base system is sheet membrane (MT-01 or MT-05) with fluid-applied membrane used at all transitions, corners, and penetrations. Common on high-performance projects.

**Installed cost range:** $7.00–$13.00/SF (blended rate)

**Failure-point profile:** Lower than sheet-only (fluid transitions reduce defects at high-risk zones), but highest material and labor cost.

**Relative failure-point density:** Medium

---

### MT-07: Crystalline Cementitious Coating (Non-Penetron)
**Description:** Competitive crystalline product applied as a slurry coat to concrete surface. Interior or exterior application.

**Installed cost range:** $2.00–$5.00/SF

**Conversion note:** If a competitive crystalline product is specified, the conversion to Penetron is primarily a product substitution, not a system redesign. Savings are primarily in product cost differential, not sequencing simplification. PenePlan still calculates this but notes the limited sequencing savings.

---

## Membrane Type → Intake Form Mapping

> "What type of below-grade waterproofing membrane is specified or currently in place?"
> - Self-adhered sheet membrane (SBS bituminous)
> - Fluid-applied polyurethane membrane
> - Fluid-applied polyurea or hybrid spray membrane
> - Bentonite panel or blanket system
> - HDPE or LLDPE sheet membrane
> - Hybrid system (sheet base + fluid transitions)
> - Competitive crystalline coating
> - Not sure / need help identifying

"Not sure" triggers a helper tooltip with images and descriptions.

---

## Membrane Type → Default Sequencing Phases

| Type | Underslab Phases | Wall Phases | Total Mobs |
|---|---|---|---|
| MT-01 Sheet | 2 (install + inspect/repair) | 3 (install + inspect + repair) | 2–3 |
| MT-02 Fluid PU | 2 | 2 | 2 |
| MT-03 Fluid Polyurea | 2 | 2 | 2 |
| MT-04 Bentonite | 1 | 2 | 1–2 |
| MT-05 HDPE Sheet | 2 | 3 | 2–3 |
| MT-06 Hybrid | 2 | 3 | 2–3 |
| MT-07 Crystalline | 1 | 1 | 1 |

---

*Logic Engine v1.0 — Phase 2*
