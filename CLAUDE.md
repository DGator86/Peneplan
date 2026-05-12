# PenePlan — Claude Code Reference

## What This Is
PenePlan is a below-grade construction simplification platform that helps GCs, engineers, subcontractors, owners, and ready-mix suppliers evaluate the constructability and cost/schedule impact of replacing traditional below-grade membrane waterproofing with Penetron crystalline systems.

**Tagline:** Reduce Time. Simplify Construction. Stay Dry.

## Repository Layout (target state)
```
/docs           Product requirements, brand, personas, logic specs
/src             Next.js application source
  /app           App router pages
  /components    UI components (shadcn/ui)
  /lib           Calculation engine, DB helpers, PDF generator
  /types         TypeScript type definitions
/supabase        Migrations and edge functions
/public          Static assets
```

## Tech Stack (Phase 5 target)
- **Framework:** Next.js (App Router)
- **Styling:** TailwindCSS + shadcn/ui
- **Database:** Supabase (Postgres)
- **Hosting:** Vercel
- **PDF:** React-PDF or similar
- **Auth:** Supabase Auth (Phase 7+)

## Key Domain Concepts
- **Penetron** — crystalline waterproofing system applied to/mixed into concrete; eliminates discrete membrane layers
- **Below-grade** — foundation walls, slabs, elevator pits, and other underground structural concrete
- **Failure points** — discrete interfaces between waterproofing components where leaks initiate (terminations, laps, penetrations, transitions)
- **Sequencing simplification** — removing trades/mobilizations/phases required by traditional sheet/fluid membrane systems
- **Monolithic pathway** — single-trade, single-material approach using Penetron admixture in the concrete pour itself

## Current Phase
Phase 1 complete — Product defined.
Phase 2 next — Build the Logic Engine (databases: project categories, foundation conditions, membrane types, failure points, sequencing, cost/schedule assumptions, scoring formulas).

## Core Principle
The platform must feel like a **constructability and sequencing evaluation tool**, not sales software. That's what gives it credibility with engineers and sophisticated GCs.
