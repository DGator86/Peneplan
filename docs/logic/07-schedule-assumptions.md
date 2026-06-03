# Logic Engine — 07: Schedule Assumptions

Schedule savings are expressed in two ways:
1. **Working days removed from the critical path** — the primary headline metric
2. **Phases/mobilizations eliminated** — the simplification metric

---

## Schedule Calculation Method

Traditional waterproofing creates critical path holds — construction cannot proceed to the next phase until waterproofing is complete and inspected. These holds are the schedule cost of traditional membrane systems.

Penetron eliminates most of these holds because the waterproofing is integral to the concrete pour. The only schedule activity is joint treatment, which is brief and does not block backfill or subsequent trades.

---

## Phase Duration Assumptions

### Traditional Membrane Phase Durations (working days)

| Phase | Small Project (<5,000 SF) | Medium Project (5,000–20,000 SF) | Large Project (>20,000 SF) |
|---|---|---|---|
| Waterproofing sub mobilization | 0.5 | 1 | 1–2 |
| Underslab membrane installation | 0.5–1 | 1–3 | 3–6 |
| Underslab inspection | 0.5 | 0.5–1 | 1–2 |
| Underslab protection/drainage | 0.5 | 0.5–1 | 1–2 |
| Wall membrane application | 1–2 | 2–5 | 5–10 |
| Wall membrane inspection | 0.5 | 1–2 | 2–3 |
| Wall membrane repair (allowance) | 0.5 | 1 | 1–3 |
| Wall protection board | 0.5–1 | 1–2 | 2–4 |
| Wall drainage composite | 0.5–1 | 1–2 | 2–4 |
| Waterproofing sub demob / cleanup | 0.5 | 0.5 | 1 |

---

### Penetron Phase Durations (working days)

| Phase | Small Project | Medium Project | Large Project |
|---|---|---|---|
| Joint treatment (all joints + penetrations) | 0.5 | 0.5–1 | 1–2 |
| Tie hole patching | 0.25 | 0.5 | 0.5–1 |
| Crystalline coating (if specified, walls only) | 0 | 0–1 | 0–2 |

**Note:** Penetron Admixture adds zero schedule time — it is batched at the plant or added on-site at the truck. No separate trade, no separate mobilization, no hold.

---

## Critical Path Impact

The schedule savings number represents days removed from the **critical path** — the sequence that directly controls when the next phase can start.

For below-grade construction, the critical path typically looks like:
```
Traditional:
Excavation → Mud slab → [HOLD: membrane cure] → Underslab membrane → [HOLD: inspection] 
→ Slab pour → Wall pour → [HOLD: form strip] → Wall prep → [HOLD: membrane mob] 
→ Wall membrane → [HOLD: inspection + repair] → Protection board → Drainage → Backfill

Penetron:
Excavation → Slab pour (w/ admixture) → Wall pour (w/ admixture) → Form strip 
→ Joint treatment [0.5 day] → Backfill
```

---

## Schedule Savings by Project Category (Working Days)

| Category | Small Project | Medium Project | Large Project |
|---|---|---|---|
| CAT-01 Wall only | 3–6 | 5–10 | 8–16 |
| CAT-02 Slab only | 2–4 | 3–6 | 5–10 |
| CAT-03 Wall + Slab | 5–10 | 8–16 | 14–28 |
| CAT-04 Elevator Pit | 3–5 | 4–7 | N/A (pit is always "small") |
| CAT-05 Parking Deck | 4–8 | 8–14 | 12–22 |
| CAT-06 Retaining Wall | 3–6 | 5–9 | 8–14 |
| CAT-07 Utility Tunnel | 5–10 | 10–18 | 16–28 |

---

## Project Size Thresholds (for schedule calculation)

| Size | Below-Grade Membrane Area |
|---|---|
| Small | < 5,000 SF |
| Medium | 5,000–20,000 SF |
| Large | > 20,000 SF |

If the user does not provide membrane area, project size is estimated from total project value:
- Under $5M total: Small
- $5M–$20M: Medium
- Over $20M: Large

---

## Schedule Savings in Dollar Terms (Optional Display)

PenePlan can optionally convert schedule savings to dollar value for the owner/developer audience. This uses a general contractor overhead rate.

**Default GC time-cost assumption:** $2,500–$8,000 per working day of schedule compression, depending on project size.

| Project Size | $/Day Saved (Low) | $/Day Saved (Mid) | $/Day Saved (High) |
|---|---|---|---|
| Small | $1,500 | $2,500 | $4,000 |
| Medium | $3,000 | $5,000 | $8,000 |
| Large | $6,000 | $10,000 | $18,000 |

**This conversion is shown only in Owner View** and is clearly labeled as a general estimate based on GC overhead rate, not a contract guarantee.

---

## Sequencing Simplification Display

In addition to raw days, the results page shows:

```
phases_removed = traditional_waterproofing_phases - penetron_phases
mobs_removed = traditional_mobs - penetron_mobs
trades_removed = 1 if waterproofing sub eliminated, else 0
```

Display format (GC View):
> "**X phases eliminated.** Y mobilizations removed. Below-grade sequence compressed by Z working days."

Display format (Engineer View):
> "**Waterproofing interface density reduced.** X fewer installation phases. Sequential trades at this interface reduced from Y to Z."

---

## Schedule Assumptions Confidence Flags

| Input Provided | Confidence |
|---|---|
| Membrane area + project type + location | High |
| Project type only | Medium |
| Project value only (no area) | Low-Medium |

---

*Logic Engine v1.0 — Phase 2*
