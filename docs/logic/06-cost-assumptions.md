# Logic Engine — 06: Cost Assumptions

All costs are in USD. Ranges reflect geographic and market variability. The platform uses three tiers: **low**, **mid**, and **high** — which map to the savings range output.

---

## Cost Philosophy

- **Low savings estimate:** Uses conservative traditional membrane cost (low-end of range) and conservative Penetron cost (high-end of range). Represents minimum defensible savings.
- **Mid savings estimate:** Uses midpoint of all ranges. Represents expected savings.
- **High savings estimate:** Uses high-end traditional cost and low-end Penetron cost. Represents best-case savings.

The spread between low and high widens with complexity score (see doc 08).

---

## Traditional Membrane System Costs

### Material + Labor Unit Rates ($/SF of membrane area)

| Membrane Type | Low | Mid | High |
|---|---|---|---|
| MT-01 Self-adhered sheet (SBS) | $5.00 | $7.00 | $9.00 |
| MT-02 Fluid-applied polyurethane | $4.00 | $6.00 | $8.00 |
| MT-03 Fluid-applied polyurea/hybrid spray | $7.00 | $10.00 | $14.00 |
| MT-04 Bentonite panel/blanket | $3.00 | $4.50 | $6.00 |
| MT-05 HDPE/LLDPE sheet | $5.50 | $7.50 | $10.00 |
| MT-06 Hybrid system (sheet + fluid transitions) | $7.00 | $10.00 | $13.00 |

These rates include:
- Material
- Primer (where required)
- Labor for installation
- Sealing and detailing at transitions, corners, penetrations

---

### Accessory Costs (Added to Membrane Base Rate)

| Accessory | Unit | Low | Mid | High |
|---|---|---|---|---|
| Protection board (1/4" hardboard or similar) | $/SF | $0.75 | $1.25 | $1.75 |
| Drainage composite (dimple mat + filter fabric) | $/SF | $1.50 | $2.75 | $4.00 |
| Termination bar + sealant | $/LF | $4.00 | $6.00 | $8.00 |
| Pre-formed inside corner | $/EA | $25 | $40 | $60 |
| Pre-formed outside corner | $/EA | $20 | $35 | $55 |
| Pipe penetration boot (small, <3") | $/EA | $75 | $125 | $175 |
| Pipe penetration boot (medium, 3–6") | $/EA | $125 | $175 | $250 |
| Conduit penetration seal | $/EA | $50 | $90 | $130 |
| Construction joint waterstop (PVC) | $/LF | $8 | $12 | $18 |
| Inspection / repair allowance | % of base | 5% | 8% | 15% |

---

### Mobilization Costs

| Item | Low | Mid | High |
|---|---|---|---|
| Waterproofing sub mobilization (per mob) | $1,500 | $3,500 | $6,000 |

Mobilization covers: crew travel, equipment setup, material staging, daily protection of installed work.

---

## Penetron System Costs

### Penetron Admixture (Integral to Concrete)

| Item | Unit | Low | Mid | High |
|---|---|---|---|---|
| Penetron Admixture (PENETRON ADMIX) | $/CY concrete | $4.00 | $6.50 | $9.00 |

Notes:
- Rate is per cubic yard of concrete treated
- Typical dosage: 0.8–1.2 kg per 100 kg of cement
- Price varies by project size and region
- No additional labor cost beyond normal concrete pour operations

---

### Penetron Surface-Applied Products

| Product | Application | Unit | Low | Mid | High |
|---|---|---|---|---|---|
| PENETRON crystalline coating | Walls needing additional protection | $/SF | $1.25 | $2.00 | $3.00 |
| PENECRETE MORTAR (joint treatment) | Construction joints, coves, tie holes | $/LF | $3.00 | $5.00 | $8.00 |
| PENECRETE MORTAR (penetration collar) | Pipe/conduit penetrations | $/EA | $40 | $65 | $100 |
| PENEPLUG (active leak / tie hole patch) | Tie holes, active seepage | $/EA | $15 | $25 | $40 |

---

### Typical Penetron System Total (by Project Category)

These are blended estimates for a project with default inputs. Actual calculations use the formula in doc 09.

| Category | Per-Unit Scope | Low | Mid | High |
|---|---|---|---|---|
| CAT-01 Wall (per 1,000 SF wall) | Admixture + joint treatment | $3,500 | $6,000 | $9,500 |
| CAT-02 Slab (per 1,000 SF slab) | Admixture only | $2,000 | $3,500 | $5,500 |
| CAT-03 Wall + Slab (per 1,000 SF each) | Admixture + joints | $6,000 | $10,500 | $16,000 |
| CAT-04 Elevator Pit (typical pit) | Admixture + all joints | $1,200 | $2,200 | $3,500 |

---

## Traditional System Total Cost (by Project Category, per Unit Scope)

| Category | Per-Unit Scope | Low | Mid | High |
|---|---|---|---|---|
| CAT-01 Wall, MT-01 (per 1,000 SF) | Membrane + prot. board + drainage + mob | $9,500 | $14,500 | $20,000 |
| CAT-02 Slab, MT-01 (per 1,000 SF) | Membrane + protection + mob | $7,000 | $10,500 | $14,500 |
| CAT-03 Wall + Slab, MT-01 (per 1,000 SF each) | Full system + 2–3 mobs | $18,000 | $27,500 | $38,000 |
| CAT-04 Elevator Pit | Full pit system + mob | $7,500 | $12,000 | $18,000 |

---

## Gross Cost Savings Calculation (Preview)

```
gross_savings = traditional_total - penetron_total
```

Savings ranges are further refined by complexity score (doc 08) before display.

---

## Regional Adjustment Factors

Labor costs vary significantly by region. A multiplier is applied to labor-intensive line items.

| Region | Labor Multiplier |
|---|---|
| Northeast US (NYC, Boston, DC) | 1.35 |
| West Coast (LA, SF, Seattle) | 1.30 |
| Midwest (Chicago, Minneapolis) | 1.10 |
| Southeast (Atlanta, Charlotte, Miami) | 0.95 |
| South Central (Dallas, Houston) | 0.90 |
| Mountain West (Denver, Phoenix) | 1.00 |
| National average (default) | 1.00 |

Labor-intensive line items (adjusted by regional multiplier):
- All membrane installation rates
- Protection board installation
- Drainage composite installation
- Mobilization

Material-only line items (not adjusted):
- Penetron Admixture
- Penetron coating products

---

## Cost Assumption Confidence Flags

Outputs display a confidence indicator based on input completeness:

| Input Provided | Confidence |
|---|---|
| Membrane type + area + location | High |
| Membrane type + area, no location | Medium (national average applied) |
| Area only, membrane type not specified | Low (MT-01 assumed as default) |
| No area input (estimated from project value) | Low-Medium |

---

*Logic Engine v1.0 — Phase 2*
