# Logic Engine — 05: Sequencing Database

This database defines the construction phases required for traditional membrane systems vs. Penetron systems, by project category. The sequencing comparison is a core output of the platform.

---

## How to Read This Document

Each phase entry includes:
- **Phase name**
- **Trade responsible**
- **Duration** (typical range in working days)
- **Critical path dependency** (what must happen before / what is blocked until this completes)
- **Penetron equivalent** (eliminated / simplified / unchanged)

---

## CAT-01: Foundation Wall System

### Traditional Sequence

| Step | Phase | Trade | Duration | CP Dependency |
|---|---|---|---|---|
| 1 | Excavation | Excavation contractor | Varies | None |
| 2 | Form and pour footings | Concrete sub | 2–5 days | After excavation |
| 3 | Form and pour foundation walls | Concrete sub | 3–7 days/lift | After footings cure |
| 4 | Strip forms | Concrete sub | 1–2 days | After wall cure |
| 5 | Surface preparation (patching, tie holes) | Waterproofing sub | 1–2 days | After strip |
| 6 | **Waterproofing membrane application (walls)** | Waterproofing sub | 2–5 days | After prep |
| 7 | **Membrane inspection and repair** | Waterproofing sub | 1–2 days | After membrane |
| 8 | **Protection board installation** | Waterproofing sub | 1–2 days | After inspection |
| 9 | **Drainage composite installation** | Waterproofing sub | 1–2 days | After protection board |
| 10 | Backfill | Excavation contractor | 1–3 days | After drainage composite |

**Total waterproofing-dependent phases:** 5 (steps 6–9 + hold before backfill)
**Total waterproofing sub mobilizations:** 1–2 (initial application + possible return for repairs)
**Backfill delay caused by waterproofing:** 5–11 working days after form strip

---

### Penetron Sequence (Wall)

| Step | Phase | Trade | Duration | CP Dependency |
|---|---|---|---|---|
| 1 | Excavation | Excavation contractor | Varies | None |
| 2 | Form and pour footings | Concrete sub | 2–5 days | After excavation |
| 3 | Form and pour foundation walls (Penetron admixture in mix) | Concrete sub | 3–7 days/lift | After footings cure |
| 4 | Strip forms | Concrete sub | 1–2 days | After wall cure |
| 5 | **Tie hole and joint treatment** | Concrete sub or waterproofing applicator | 0.5–1 day | After strip |
| 6 | Backfill | Excavation contractor | 1–3 days | After joint treatment |

**Total waterproofing-dependent phases:** 1 (step 5 — joint treatment)
**Waterproofing sub mobilizations:** 0–1 (joint treatment can be done by concrete sub if trained)
**Backfill delay caused by waterproofing:** 0.5–1 working day after form strip

**Phases eliminated:** 4 (membrane application, inspection, protection board, drainage composite)
**Days saved:** 5–10 working days before backfill

---

## CAT-02: Below-Grade Slab System

### Traditional Sequence

| Step | Phase | Trade | Duration | CP Dependency |
|---|---|---|---|---|
| 1 | Excavation and sub-base | Excavation contractor | Varies | None |
| 2 | Mud slab / lean concrete pour | Concrete sub | 1 day + cure | After sub-base |
| 3 | **Underslab membrane installation** | Waterproofing sub | 1–3 days | After mud slab cures (min 24–48 hrs) |
| 4 | **Membrane inspection** | Waterproofing sub | 0.5–1 day | After installation |
| 5 | **Drainage composite/protection layer** | Waterproofing sub | 0.5–1 day | After inspection |
| 6 | Structural slab reinforcing and forming | Concrete sub | 2–5 days | After drainage composite |
| 7 | Structural slab pour | Concrete sub | 1–2 days | After reinforcing |

**Waterproofing-dependent hold between mud slab and structural slab:** 3–6 days
**Waterproofing sub mobilizations:** 1

---

### Penetron Sequence (Slab)

| Step | Phase | Trade | Duration | CP Dependency |
|---|---|---|---|---|
| 1 | Excavation and sub-base | Excavation contractor | Varies | None |
| 2 | Structural slab reinforcing and forming | Concrete sub | 2–5 days | After sub-base |
| 3 | Structural slab pour (Penetron admixture in mix) | Concrete sub | 1–2 days | After reinforcing |

**Mud slab eliminated** (Penetron admixture in the structural slab itself means no separate pre-applied membrane substrate is required in many conditions — consult project engineer)
**Waterproofing-dependent hold:** 0
**Waterproofing sub mobilizations:** 0

**Phases eliminated:** 3–4 (mud slab may be simplified or eliminated, underslab membrane, inspection, drainage composite)
**Days saved:** 3–6 working days in the underslab sequence

---

## CAT-03: Combined Wall + Slab System

### Traditional Sequence (Combined)

| Step | Phase | Duration | Notes |
|---|---|---|---|
| 1 | Excavation | Varies | |
| 2 | Mud slab | 1 day + cure | |
| 3 | Underslab membrane | 1–3 days | Mob 1 |
| 4 | Membrane inspection | 0.5–1 day | |
| 5 | Underslab drainage composite | 0.5–1 day | |
| 6 | Structural slab pour | 1–2 days | |
| 7 | Form and pour walls | 3–10 days | |
| 8 | Strip forms | 1–2 days | |
| 9 | Surface prep (tie holes, patching) | 1–2 days | |
| 10 | Wall membrane application | 2–5 days | Mob 2 |
| 11 | Wall membrane inspection | 1–2 days | |
| 12 | Wall protection board | 1–2 days | |
| 13 | Wall drainage composite | 1–2 days | |
| 14 | Backfill | 1–3 days | |

**Total waterproofing phases:** 8
**Total waterproofing mobilizations:** 2–3
**Total waterproofing-induced delays:** 8–18 working days

---

### Penetron Sequence (Combined)

| Step | Phase | Duration | Notes |
|---|---|---|---|
| 1 | Excavation | Varies | |
| 2 | Structural slab reinforcing and pour (admixture) | 3–7 days | |
| 3 | Form and pour walls (admixture) | 3–10 days | |
| 4 | Strip forms | 1–2 days | |
| 5 | Joint and penetration treatment | 0.5–1 day | Single treatment event |
| 6 | Backfill | 1–3 days | |

**Total waterproofing phases:** 1 (treatment event)
**Total waterproofing mobilizations:** 0–1
**Total waterproofing-induced delays:** 0.5–1 working day

**Phases eliminated:** 7
**Mobilizations eliminated:** 2–3
**Days saved on critical path:** 8–17 working days

---

## CAT-04: Elevator Pit
*(See logic doc 10 for full elevator pit monolithic pathway detail)*

### Traditional Sequence (Elevator Pit)

| Step | Phase | Duration |
|---|---|---|
| 1 | Pit excavation | Varies |
| 2 | Pit mud slab | 1 day + cure |
| 3 | Pre-applied membrane to mud slab | 0.5–1 day |
| 4 | Pit wall forming and pour | 1–2 days |
| 5 | Strip forms | 0.5 day |
| 6 | Pit wall membrane application | 0.5–1 day |
| 7 | Inside corner pre-formed flashing (4 corners) | 0.5 day |
| 8 | Sump/drain transition membrane boot | 0.5 day |
| 9 | Conduit penetration seals | 0.5 day |
| 10 | Membrane inspection | 0.5 day |
| 11 | Protection board (pit walls) | 0.5 day |
| 12 | Transition to building slab membrane | 0.5 day |

**Total waterproofing phases:** 8–10 distinct steps
**Mobilizations:** 1–2
**Duration:** 4–7 days for waterproofing scope alone

---

### Penetron Sequence (Elevator Pit — Monolithic)

| Step | Phase | Duration |
|---|---|---|
| 1 | Pit excavation | Varies |
| 2 | Pit forming | 1 day |
| 3 | Single pour: pit slab + walls in one event (admixture in mix) | 1 day |
| 4 | Strip forms | 0.5 day |
| 5 | Joint treatment: construction joints + penetrations | 0.5 day |

**Total waterproofing phases:** 1
**Mobilizations:** 0
**Duration:** 0.5 day for waterproofing scope

**Phases eliminated:** 7–9
**Days saved:** 3–6 working days

---

## Sequencing Summary Table

| Category | Traditional Waterproofing Phases | Penetron Phases | Phases Eliminated | Mobs Eliminated |
|---|---|---|---|---|
| CAT-01 Wall | 5 | 1 | 4 | 1–2 |
| CAT-02 Slab | 4 | 0 | 3–4 | 1 |
| CAT-03 Wall + Slab | 8 | 1 | 7 | 2–3 |
| CAT-04 Elevator Pit | 8–10 | 1 | 7–9 | 1–2 |
| CAT-05 Parking Deck | 6–9 | 2–3 | 4–6 | 1–2 |
| CAT-06 Retaining Wall | 4–6 | 1 | 3–5 | 1 |
| CAT-07 Utility Tunnel | 8–12 | 1–2 | 6–10 | 2–3 |

---

## Sequencing Simplification Score (for Results Display)

```
phases_eliminated = traditional_phases - penetron_phases
mobs_eliminated = traditional_mobs - penetron_mobs
sequencing_simplification_score = phases_eliminated + (mobs_eliminated × 2)
```

Display: **"X phases eliminated, Y mobilizations removed"**

---

*Logic Engine v1.0 — Phase 2*
