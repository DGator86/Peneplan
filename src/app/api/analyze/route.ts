import { NextRequest, NextResponse } from "next/server";
import { runAnalysis } from "@/lib/engine";
import { saveAnalysis } from "@/lib/supabase";
import { localStore } from "@/lib/localStore";
import type { AnalysisInput } from "@/lib/engine";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const input: AnalysisInput = body.input;
    const projectName: string = body.projectName ?? "";

    if (!input || !input.role || !input.categories || !input.foundationCondition) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const output = runAnalysis(input);

    const savedId = await saveAnalysis(
      { ...input, projectName } as Record<string, unknown>,
      output as unknown as Record<string, unknown>
    );

    // Fall back to a local UUID when Supabase is not configured
    const id = savedId ?? randomUUID();

    if (!savedId) {
      localStore.set(id, { input: { ...input, projectName } as Record<string, unknown>, output: output as unknown as Record<string, unknown> });
    }

    return NextResponse.json({ id });
  } catch (err) {
    console.error("analyze error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
