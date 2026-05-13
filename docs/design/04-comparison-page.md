# Design — 04: Traditional vs. Penetron Comparison

Section on the results page. Appears immediately below the Results Reveal header on scroll.

---

## Purpose

Show the user exactly what changes between the traditional system and the Penetron conversion — side by side. This is the "show your work" section. It makes the savings numbers credible.

---

## Section Header

```
THE COMPARISON
Traditional Waterproofing  vs.  Penetron Conversion
```

Subheading (role-specific):
- GC View: "What you're replacing and what you're getting instead."
- Engineer View: "System components and interface comparison."
- Owner View: "What changes in your below-grade scope."

---

## Layout: Side-by-Side Table

Two columns. Left = Traditional. Right = Penetron. Rows = scope line items.

```
┌────────────────────────────────────────────────────────────┐
│              TRADITIONAL              │     PENETRON        │
├────────────────────────────────────────────────────────────┤
│ SCOPE                                                       │
├─────────────────────────┬──────────────────────────────────┤
│ Sheet membrane (walls)  │ Penetron Admixture in wall pour  │
│ 8,400 SF @ $7.00/SF     │ 155 CY @ $6.50/CY               │
│ $58,800                 │ $1,008                           │
├─────────────────────────┬──────────────────────────────────┤
│ Sheet membrane (slab)   │ Penetron Admixture in slab pour  │
│ 5,200 SF @ $7.00/SF     │ (included above)                 │
│ $36,400                 │ —                                │
├─────────────────────────┬──────────────────────────────────┤
│ Protection board        │ Not required                     │
│ 8,400 SF @ $1.25/SF     │ —                                │
│ $10,500                 │                                  │
├─────────────────────────┬──────────────────────────────────┤
│ Drainage composite      │ Not required                     │
│ 8,400 SF @ $2.75/SF     │ —                                │
│ $23,100                 │                                  │
├─────────────────────────┬──────────────────────────────────┤
│ Construction joint      │ PENECRETE MORTAR (all joints)   │
│ waterstop               │ 120 LF @ $5.00/LF               │
│ 120 LF @ $12/LF         │ $600                            │
│ $1,440                  │                                  │
├─────────────────────────┬──────────────────────────────────┤
│ Penetration seals       │ PENECRETE collars                │
│ 14 EA @ $125/EA         │ 14 EA @ $65/EA                  │
│ $1,750                  │ $910                             │
├─────────────────────────┬──────────────────────────────────┤
│ Mobilizations (2×)      │ No dedicated mob required        │
│ $7,000                  │ —                                │
├─────────────────────────┬──────────────────────────────────┤
│ Inspection + repair     │ Not required                     │
│ allowance (8%)          │ —                                │
│ $7,736                  │                                  │
├─────────────────────────┬──────────────────────────────────┤
│ Termination bar         │ Not required                     │
│ 280 LF @ $6.00/LF       │ (no membrane edge to terminate) │
│ $1,680                  │                                  │
├─────────────────────────┴──────────────────────────────────┤
│ TOTAL         $148,406  │  TOTAL           $2,518          │
│                         │                                  │
│                         │  SAVINGS         $145,888        │
│                         │  (mid estimate)                  │
└────────────────────────────────────────────────────────────┘
```

**Note on display:** The table shows mid-estimate values. Low/high toggle available.

---

## Cost Toggle

Above the table:
```
Show estimates:  [ Low ]  [ Mid ●]  [ High ]
```

Toggling recalculates all dollar values in the table in real time.

---

## Sequencing Comparison

Below the cost table, a second side-by-side comparison: **phases**.

```
┌──────────────────────────────────────────────────────────────┐
│         TRADITIONAL SEQUENCE    │    PENETRON SEQUENCE        │
├─────────────────────────────────┼──────────────────────────────┤
│ 1. Excavation                   │ 1. Excavation                │
│ 2. Mud slab pour                │ 2. Slab pour (admixture)     │
│ 3. ⏱ HOLD: mud slab cure        │ 3. Wall pour (admixture)     │
│ 4. ⚠ Underslab membrane install │ 4. Form strip                │
│ 5. ⚠ Underslab inspection       │ 5. ⚡ Joint treatment (0.5d) │
│ 6. ⚠ Drainage composite         │ 6. Backfill                  │
│ 7. Slab pour                    │                              │
│ 8. Wall pour                    │     6 steps total            │
│ 9. Form strip                   │                              │
│ 10. ⏱ HOLD: membrane mob        │                              │
│ 11. ⚠ Wall prep                 │                              │
│ 12. ⚠ Wall membrane install     │                              │
│ 13. ⏱ HOLD: inspection          │                              │
│ 14. ⚠ Wall membrane repair      │                              │
│ 15. ⚠ Protection board          │                              │
│ 16. ⚠ Drainage composite        │                              │
│ 17. Backfill                    │                              │
│                                 │                              │
│     17 steps total              │                              │
│     ⚠ = waterproofing step      │                              │
│     ⏱ = critical path hold      │                              │
└─────────────────────────────────┴──────────────────────────────┘
```

Summary line below:
```
11 waterproofing steps removed.  3 critical-path holds eliminated.
```

---

## Trade Coordination Comparison

Simple two-column list:

```
TRADITIONAL                          PENETRON
────────────────────────────────────────────────
Concrete sub                         Concrete sub
Waterproofing sub (mob 1)            (no separate waterproofing sub)
Waterproofing sub (mob 2)
Waterproofing inspector
Drainage/protection installer
────────────────────────────────────────────────
4–5 trades / mobilizations           1 trade
```

---

## Role-Specific Emphasis

**GC View:** Cost table prominent, sequencing below it.
**Engineer View:** Sequencing prominent, cost table collapsed by default (expandable).
**Owner View:** Savings summary at top, schedule below, cost table expandable.
**Sub View:** Sequencing only, cost table hidden.

---

## Assumptions Transparency Panel

Sticky "expand" at the bottom of the comparison section:

```
[ 📋 View all assumptions used in this comparison ▼ ]
```

On expand, a full table of every input value and its source:
```
Input                     Value         Source
─────────────────────────────────────────────────
Membrane type             MT-01 Sheet   User input
Wall area                 8,400 SF      User input
Slab area                 5,200 SF      User input
Membrane unit rate        $7.00/SF      PenePlan database (mid)
Protection board rate     $1.25/SF      PenePlan database (mid)
Admixture rate            $6.50/CY      PenePlan database (mid)
Concrete volume           155 CY        Estimated (8" wall, 10" slab)
Regional labor multiplier 1.10          Chicago, IL
Complexity tier           Medium        Score: 8
...
```

---

*Design v1.0 — Phase 3*
