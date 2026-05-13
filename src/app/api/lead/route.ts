import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/supabase";
import type { LeadRecord } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const lead: LeadRecord = {
      analysis_id:      body.analysisId ?? "",
      first_name:       body.firstName ?? "",
      last_name:        body.lastName ?? "",
      email:            body.email ?? "",
      phone:            body.phone,
      company:          body.company ?? "",
      role:             body.role ?? "",
      project_name:     body.projectName,
      project_location: body.projectLocation,
      project_value:    body.projectValue ? Number(body.projectValue) : undefined,
      bid_date:         body.bidDate,
      source:           body.source ?? "peneplan_results",
      lead_score:       body.leadScore,
    };

    if (!lead.email || !lead.first_name || !lead.company) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await saveLead(lead);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("lead error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
