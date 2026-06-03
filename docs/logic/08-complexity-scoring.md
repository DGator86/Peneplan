# Logic Engine — 08: Complexity Scoring System

The complexity score determines how wide the savings range is and how confident the platform is in the output. A high complexity score means high absolute savings potential but a wider low-to-high range.

---

## Why Complexity Scoring Exists

Two projects with the same membrane area can have very different savings potential:
- A simple single-pour slab with no penetrations and dry soil = tight, confident range
- A multi-level below-grade structure with 40 penetrations, high water table, and elevator pits = large savings with wide uncertainty

The complexity score captures this variability and adjusts the output accordingly.

---

## Complexity Score Components

The total complexity score is the sum of all component scores below. Maximum theoretical score: ~30. Typical range: 2–18.

---

### 1. Project Category Score (base)

From doc 01:

| Category | Base Score |
|---|---|
| CAT-02 Slab only | 2 |
| CAT-01 Wall only | 3 |
| CAT-06 Retaining Wall | 3 |
| CAT-03 Wall + Slab | 5 |
| CAT-04 Elevator Pit | 6 |
| CAT-05 Parking Deck | 7 |
| CAT-07 Utility Tunnel | 7 |
| Multi-category (add for each additional) | +2 per additional CAT |

---

### 2. Foundation Condition Modifier

From doc 02:

| Condition | Score Modifier |
|---|---|
| FC-01 Dry soil | −1 |
| FC-02 Seasonal groundwater | 0 |
| FC-03 Permanent high water table | +2 |
| FC-04 Artesian / high hydrostatic | +3 |
| FC-05 Rock foundation | +1 |
| FC-06 Contaminated soil | +2 |
| FC-07 Remedial / existing leak | +3 |

---

### 3. Project Size Modifier

| Membrane Area | Score Modifier |
|---|---|
| < 2,500 SF | −1 |
| 2,500–10,000 SF | 0 |
| 10,000–30,000 SF | +1 |
| > 30,000 SF | +2 |

---

### 4. Penetration Count Modifier

| Penetrations (pipes + conduits) | Score Modifier |
|---|---|
| 0–5 | 0 |
| 6–15 | +1 |
| 16–30 | +2 |
| > 30 | +3 |

---

### 5. Construction Joint Modifier

| Construction Joints (LF) | Score Modifier |
|---|---|
| 0–50 LF | 0 |
| 51–150 LF | +1 |
| > 150 LF | +2 |

---

### 6. Project Type Modifier

| Project Type | Score Modifier |
|---|---|
| New construction | 0 |
| Renovation (existing structure, new waterproofing) | +1 |
| Remediation (existing leak, retrofit) | +3 |

---

### 7. Elevator Pit Modifier

| Elevator Pits | Score Modifier |
|---|---|
| None | 0 |
| 1 pit | +1 |
| 2–3 pits | +2 |
| 4+ pits | +3 |

---

## Total Complexity Score → Output Tier

| Total Score | Complexity Tier | Savings Range Spread | Confidence Level |
|---|---|---|---|
| 1–4 | Low | Mid ± 15% | High |
| 5–8 | Medium-Low | Mid ± 20% | High |
| 9–12 | Medium | Mid ± 30% | Medium-High |
| 13–16 | Medium-High | Mid ± 40% | Medium |
| 17+ | High | Mid ± 50% | Medium |

---

## How the Spread Is Applied

```
savings_mid = base savings calculation (doc 09)
spread_factor = complexity_spread_pct / 100

savings_low = savings_mid × (1 - spread_factor)
savings_high = savings_mid × (1 + spread_factor)
```

Both savings_low and savings_high are rounded to the nearest $500 for display.

---

## Complexity Score → Recommendation Language

| Tier | Recommendation Text |
|---|---|
| Low | "This project is a strong candidate for Penetron conversion. Savings estimate is high-confidence." |
| Medium-Low | "This project has a favorable conversion profile. Savings estimate is reliable for budgeting purposes." |
| Medium | "Conversion savings are significant. A Penetron technical review is recommended to confirm system details before bid." |
| Medium-High | "Conversion potential is high, but project complexity warrants Penetron technical review before finalizing scope." |
| High | "This project has substantial conversion opportunity. Due to complexity, Penetron technical review is required to confirm assumptions." |

---

## Conversion Strength Rating (for Results Display)

The complexity score feeds into an overall conversion recommendation strength:

| Score | Rating | Display |
|---|---|---|
| 1–6 | Strong Candidate | Green indicator |
| 7–11 | Good Candidate | Green-yellow indicator |
| 12–15 | Viable with Review | Yellow indicator |
| 16+ | Requires Technical Review | Orange indicator |

**Note:** All outputs regardless of rating include the standard disclaimer that technical review is required before conversion is implemented.

---

## Example Calculations

### Example A: Simple Slab + Walls, New Construction, Dry Site
- CAT-03 (Wall + Slab): 5
- FC-01 (Dry soil): −1
- 8,000 SF area: 0
- 8 penetrations: +1
- 60 LF construction joints: +1
- New construction: 0
- No elevator pits: 0
- **Total: 6 → Medium-Low → Spread ±20%**

### Example B: Wall + Slab + Elevator Pit, High Water Table, 25 Penetrations
- CAT-03 (Wall + Slab): 5
- CAT-04 (Elevator Pit, additional): +2
- FC-03 (High water table): +2
- 15,000 SF area: +1
- 25 penetrations: +2
- 100 LF construction joints: +1
- New construction: 0
- 1 elevator pit: +1
- **Total: 14 → Medium-High → Spread ±40%**

### Example C: Remediation, Artesian Pressure, Multi-Category
- CAT-03 base: 5
- CAT-04 additional: +2
- FC-04 (Artesian): +3
- 20,000 SF: +1
- 35 penetrations: +3
- 200 LF joints: +2
- Remediation: +3
- 2 pits: +2
- **Total: 21 → High → Spread ±50%**

---

*Logic Engine v1.0 — Phase 2*
