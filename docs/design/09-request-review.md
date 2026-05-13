# Design — 09: Request Review CTA

Section on the results page. Appears below the Lead Capture Form, above the footer.

---

## Purpose

Convert the analysis into an action. "Request Review" is the highest-intent CTA on the platform — it signals the user is ready for a technical conversation. This is the direct sales handoff.

---

## When to Emphasize This CTA

The Request Review CTA is always present, but it is **visually elevated** when:
- Complexity score ≥ 12 (requires technical review)
- Foundation condition is FC-03, FC-04, FC-06, or FC-07
- Elevator pit count > 0
- Savings mid > $75,000
- Lead score ≥ 12 (calculated server-side — not shown to user)

When elevated, the CTA appears as a full-width section. When not elevated, it appears as a more subtle call to action below the lead form.

---

## Standard Version (Default)

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  Want a Penetron technical rep to review this project?       │
│                                                              │
│  We can confirm the conversion pathway, validate the        │
│  assumptions, and walk through the spec substitution        │
│  with your engineer or PM.                                  │
│                                                              │
│  ┌──────────────────────────────────────┐                   │
│  │   Request a Technical Review  →      │                   │
│  └──────────────────────────────────────┘                   │
│                                                              │
│  No commitment. Typically 24–48 hour response.              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Elevated Version (High-Value Projects)

```
┌──────────────────────────────────────────────────────────────┐
│  ● This project is a strong candidate for technical review.  │
│                                                              │
│  Based on your inputs, this conversion has significant       │
│  schedule and cost potential. A Penetron technical rep       │
│  can confirm the system details and work directly with       │
│  your engineer to get the spec substitution approved.        │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │   Request Penetron Technical Review for This Project │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  Typical response: 24 hours.                                 │
│  No commitment required.                                     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## On Click: Review Request Modal

Clicking "Request a Technical Review" opens a modal (not a new page). The modal is brief — the heavy lifting is already done by the lead form.

```
┌──────────────────────────────────────────────────┐
│  Request Technical Review                    [×]  │
│                                                   │
│  We'll have a Penetron technical rep reach out    │
│  within 24–48 hours to discuss this project.      │
│                                                   │
│  Name: [pre-filled from lead form]                │
│  Email: [pre-filled]                              │
│  Phone: [pre-filled or blank]                     │
│                                                   │
│  What's most important to you?                    │
│  ○ Confirm savings estimate                       │
│  ○ Get engineer / architect buy-in                │
│  ○ Understand the spec substitution process       │
│  ○ Confirm elevator pit pathway                   │
│  ○ Other: [ _________________________ ]           │
│                                                   │
│  Additional notes (optional):                     │
│  [ ____________________________________________ ] │
│                                                   │
│  ┌────────────────────────────────────┐           │
│  │   Submit Review Request  →         │           │
│  └────────────────────────────────────┘           │
│                                                   │
│  No commitment. Response within 24–48 hours.      │
└──────────────────────────────────────────────────┘
```

**If user has not completed lead form:** Modal shows full name/email/company fields first.
**If user has completed lead form:** Modal pre-fills from that submission.

---

## On Submit: Review Request Data (Supabase)

```
review_request_id   UUID
result_id           UUID (linked to analysis)
lead_id             UUID (linked to lead form, if completed)
name                String
email               String
phone               String
priority            String (confirm_savings | engineer_buyin | spec_process | elevator_pit | other)
notes               String
requested_at        Timestamp
status              String (default: "new")
```

---

## Internal Notification (Elevated)

High-value review requests (lead score ≥ 12) trigger an elevated notification:

```
Subject: 🔴 High-Priority Review Request — [Company] — $[Savings] Potential

[Name] at [Company] requested a technical review for a project
with $XX,XXX – $XX,XXX in estimated Penetron savings.

Priority: [priority selected]
Lead score: [score]/25

[ View Analysis ]  [ View Lead ]
```

---

## "Already Reviewed?" Link

For returning users who have already requested a review:

```
Already requested a review? [ Check status → ]
```

Phase 7 feature. Not in MVP. Placeholder link only.

---

*Design v1.0 — Phase 3*
