# Design — 08: Lead Capture Form

Section on the results page. Appears below the PDF Report Preview.

---

## Purpose

Capture the lead. Get enough information to score the opportunity and follow up intelligently. Do not ask for more than necessary — every extra field reduces completion rate.

---

## Section Header

```
GET YOUR FULL REPORT
```

Subheading:
```
We'll send the PDF to your inbox and follow up if the project warrants a
Penetron technical review.
```

---

## Form Layout

Two-column on desktop. Single-column on mobile.

```
┌─────────────────────────────┬──────────────────────────────┐
│  First name *               │  Last name *                  │
│  [ ___________________ ]    │  [ ___________________ ]      │
├─────────────────────────────┼──────────────────────────────┤
│  Email *                    │  Phone (optional)             │
│  [ ___________________ ]    │  [ ___________________ ]      │
├─────────────────────────────┼──────────────────────────────┤
│  Company *                  │  Your role *                  │
│  [ ___________________ ]    │  [ GC / Estimator ▼ ]        │
├─────────────────────────────┴──────────────────────────────┤
│  Project name (optional)                                    │
│  [ _________________________________________________ ]     │
├─────────────────────────────────────────────────────────────┤
│  Project location (City, State) (optional)                  │
│  [ _________________________________________________ ]     │
├─────────────────────────────────────────────────────────────┤
│  Estimated project value (optional)                         │
│  [ $_____________ ]                                         │
├─────────────────────────────────────────────────────────────┤
│  Bid date or project timeline (optional)                    │
│  [ _____________ ] (date)                                   │
├─────────────────────────────────────────────────────────────┤
│  How did you hear about PenePlan? (optional)                │
│  [ _________________________________ ▼ ]                    │
│    - Referred by a colleague                                │
│    - Penetron sales rep                                     │
│    - Web search                                             │
│    - LinkedIn                                               │
│    - Trade publication                                      │
│    - Other                                                  │
└─────────────────────────────────────────────────────────────┘
```

---

## Required Fields

- First name
- Last name
- Email
- Company
- Role (pre-filled from Step 1 of intake form, editable)

All other fields optional.

---

## Role Dropdown (in Lead Form)

Pre-filled from intake form Step 1. Editable. Options:

```
- GC / Estimator
- GC / Project Manager
- GC / Superintendent
- GC Executive / VPO
- Engineer / Architect
- Owner / Developer
- Subcontractor
- Ready-Mix Supplier
- Other
```

---

## Privacy Statement

Below the form, before the submit button:

```
We use your information to send your report and follow up on this
analysis. We do not share your information with third parties.
[ Privacy policy ]
```

---

## Submit Button

```
┌────────────────────────────────────────────┐
│   Send My Report + Save This Analysis  →   │
└────────────────────────────────────────────┘
```

On submit:
1. Validate required fields
2. POST lead data to Supabase
3. Trigger PDF generation (async)
4. Send confirmation email with PDF link
5. Redirect to `/thank-you`

---

## Pre-Population from Intake Form

Fields that the user already entered in the intake form are pre-filled and highlighted:

- Role: from Step 1
- Project name: from Step 5A
- Project value: from Step 5B
- Timeline: from Step 5C
- Project location: from Step 4F

Pre-filled fields get a subtle "from your analysis" label so users know where the data came from and can trust it's correct.

---

## Lead Scoring Data (Stored in Supabase, Not Shown to User)

The following are stored alongside the form submission:

```
result_id            UUID of the analysis
analysis_inputs      Full intake form JSON
analysis_outputs     Full calculation output JSON
complexity_score     Integer
conversion_rating    String
elevator_pit_count   Integer
membrane_type        String
foundation_condition String
project_type_new_remedial String
total_membrane_area  Number
estimated_savings_mid Number
schedule_days_mid    Number
fp_reduction_pct     Number
submitted_at         Timestamp
```

This data enables lead scoring without asking the user for any additional information.

---

## Lead Scoring Logic (for Internal Use)

Leads are automatically scored in Supabase on submission:

| Signal | Points |
|---|---|
| Project value > $5M | +3 |
| Project value > $20M | +5 |
| Elevator pit in scope | +3 |
| High water table (FC-03/04) | +2 |
| Savings mid > $50,000 | +3 |
| Bid date within 30 days | +4 |
| Bid date within 90 days | +2 |
| Role = GC Estimator or PM | +2 |
| Role = Engineer or Owner | +1 |
| Phone number provided | +2 |
| Source = Penetron rep referral | +3 |

Max score: ~25. Scores ≥ 12 trigger same-day internal notification.

---

## Notification Email (Internal)

On submission, an email is sent to the configured internal recipient(s) with:

```
Subject: New PenePlan Lead — [Company] — [Project Name or "Unnamed"]

Name: [First Last]
Company: [Company]
Role: [Role]
Email: [email]
Phone: [phone or "not provided"]

Project: [Project Name]
Location: [Location]
Value: [$X]
Bid date: [date]

Savings estimate: $XX,XXX – $XX,XXX (mid: $XX,XXX)
Schedule savings: X–X days
Failure points eliminated: XX of XX (XX%)
Elevator pits: [N or "None"]
Conversion rating: [rating]
Lead score: [score]/25

[ View full analysis → ]  (links to /results/[id])
```

---

*Design v1.0 — Phase 3*
