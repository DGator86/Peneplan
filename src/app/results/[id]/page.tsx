import { notFound } from "next/navigation";
import Link from "next/link";
import { getAnalysis } from "@/lib/supabase";
import { localStore } from "@/lib/localStore";
import type { AnalysisOutput, AnalysisInput } from "@/lib/engine";
import { formatCurrency } from "@/lib/utils";
import LeadCaptureForm from "@/components/LeadCaptureForm";

interface Props {
  params: Promise<{ id: string }>;
}

function getRatingColor(rating: string): string {
  if (rating === "Strong Candidate") return "pill-green";
  if (rating === "Good Candidate") return "pill-green";
  if (rating === "Viable with Review") return "pill-yellow";
  return "pill-orange";
}

function getConditionLabel(condition: string): string {
  const map: Record<string, string> = {
    dry: "Dry / No groundwater",
    seasonal: "Seasonal water table",
    high_water_table: "Permanent high water table",
    artesian: "Artesian / high hydrostatic pressure",
    rock: "Rock foundation",
    contaminated: "Contaminated soil",
    remedial: "Existing leak / remediation",
  };
  return map[condition] ?? condition;
}

function getMembraneLabel(m: string): string {
  const map: Record<string, string> = {
    sheet_sbs: "Self-adhered sheet (SBS)",
    fluid_pu: "Fluid-applied polyurethane",
    fluid_polyurea: "Fluid-applied polyurea",
    bentonite: "Bentonite panel/blanket",
    hdpe: "HDPE / LLDPE sheet",
    hybrid: "Hybrid system",
    crystalline_competitor: "Competitive crystalline",
  };
  return map[m] ?? m;
}

export default async function ResultsPage({ params }: Props) {
  const { id } = await params;

  // Try Supabase first, fall back to in-process store
  let record = await getAnalysis(id);
  let inputData: Record<string, unknown> | null = null;
  let outputData: Record<string, unknown> | null = null;

  if (record) {
    inputData = record.inputs;
    outputData = record.outputs;
  } else {
    const local = localStore.get(id);
    if (local) {
      inputData = local.input;
      outputData = local.output;
    }
  }

  if (!inputData || !outputData) notFound();

  const input = inputData as unknown as AnalysisInput & { projectName?: string };
  const out = outputData as unknown as AnalysisOutput;

  const projectName = input.projectName || "Your Project";

  return (
    <main className="min-h-screen flex flex-col">
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid var(--border)" }} className="flex items-center justify-between px-8 py-4">
        <Link href="/" className="font-bold text-lg tracking-tight hover:opacity-80">PenePlan</Link>
        <Link href="/analyze" className="text-sm" style={{ color: "var(--muted)" }}>
          New Analysis →
        </Link>
      </nav>

      {/* Sticky disclaimer */}
      <div style={{ background: "var(--card)", borderBottom: "1px solid var(--border)", color: "var(--muted)" }} className="text-xs text-center py-2 px-4">
        Outputs are estimating tools only. Not engineering approval or warranty authorization.
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 w-full">

        {/* Header */}
        <div className="mb-8">
          <p style={{ color: "var(--muted)" }} className="text-sm mb-1">{projectName}</p>
          <h1 className="text-3xl font-bold mb-3">Below-Grade Conversion Analysis</h1>
          <span className={`pill ${getRatingColor(out.conversionRating)}`}>
            {out.conversionRating}
          </span>
          {out.requiresTechnicalReview && (
            <span className="pill pill-orange ml-2">Technical Review Recommended</span>
          )}
        </div>

        {/* Three key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="card p-6">
            <p className="section-heading">Estimated Savings</p>
            <p className="metric-value" style={{ color: "var(--success)" }}>
              {formatCurrency(out.savingsRange.mid)}
            </p>
            <p style={{ color: "var(--muted)" }} className="text-xs mt-2">
              Range: {formatCurrency(out.savingsRange.low)} – {formatCurrency(out.savingsRange.high)}
            </p>
          </div>
          <div className="card p-6">
            <p className="section-heading">Schedule Savings</p>
            <p className="metric-value" style={{ color: "var(--accent)" }}>
              {out.scheduleRange.mid}
            </p>
            <p className="font-semibold mt-1">days saved</p>
            <p style={{ color: "var(--muted)" }} className="text-xs mt-1">
              Range: {out.scheduleRange.low}–{out.scheduleRange.high} days
            </p>
          </div>
          <div className="card p-6">
            <p className="section-heading">Failure Point Reduction</p>
            <p className="metric-value" style={{ color: "var(--warning)" }}>
              {out.failurePoints.reductionPct}%
            </p>
            <p style={{ color: "var(--muted)" }} className="text-xs mt-2">
              {out.failurePoints.traditional} → {out.failurePoints.penetron} failure points
            </p>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-bold mb-4">Cost Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ color: "var(--muted)" }} className="text-left">
                  <th className="pb-3 font-semibold">System</th>
                  <th className="pb-3 font-semibold text-right">Low</th>
                  <th className="pb-3 font-semibold text-right">Mid</th>
                  <th className="pb-3 font-semibold text-right">High</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderTop: "1px solid var(--border)" }}>
                  <td className="py-3">Traditional membrane system</td>
                  <td className="py-3 text-right">{formatCurrency(Math.round(out.traditionalCostMid * 0.85))}</td>
                  <td className="py-3 text-right font-semibold">{formatCurrency(out.traditionalCostMid)}</td>
                  <td className="py-3 text-right">{formatCurrency(Math.round(out.traditionalCostMid * 1.15))}</td>
                </tr>
                <tr style={{ borderTop: "1px solid var(--border)" }}>
                  <td className="py-3" style={{ color: "var(--accent)" }}>Penetron crystalline system</td>
                  <td className="py-3 text-right" style={{ color: "var(--accent)" }}>{formatCurrency(Math.round(out.penetronCostMid * 0.85))}</td>
                  <td className="py-3 text-right font-semibold" style={{ color: "var(--accent)" }}>{formatCurrency(out.penetronCostMid)}</td>
                  <td className="py-3 text-right" style={{ color: "var(--accent)" }}>{formatCurrency(Math.round(out.penetronCostMid * 1.15))}</td>
                </tr>
                <tr style={{ borderTop: "2px solid var(--border)" }}>
                  <td className="py-3 font-bold" style={{ color: "var(--success)" }}>Estimated savings</td>
                  <td className="py-3 text-right font-bold" style={{ color: "var(--success)" }}>{formatCurrency(out.savingsRange.low)}</td>
                  <td className="py-3 text-right font-bold" style={{ color: "var(--success)" }}>{formatCurrency(out.savingsRange.mid)}</td>
                  <td className="py-3 text-right font-bold" style={{ color: "var(--success)" }}>{formatCurrency(out.savingsRange.high)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sequencing & Failure Points side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="card p-6">
            <h2 className="text-base font-bold mb-4">Sequencing Simplification</h2>
            <div className="flex gap-6 mb-4">
              <div>
                <p className="text-3xl font-bold" style={{ color: "var(--success)" }}>
                  {out.sequencing.phasesEliminated}
                </p>
                <p style={{ color: "var(--muted)" }} className="text-xs mt-1">construction phases eliminated</p>
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: "var(--success)" }}>
                  {out.sequencing.mobsEliminated}
                </p>
                <p style={{ color: "var(--muted)" }} className="text-xs mt-1">mobilizations eliminated</p>
              </div>
            </div>
            <p style={{ color: "var(--muted)" }} className="text-xs leading-relaxed">
              Crystalline admixture is added at the batch plant — no separate waterproofing trade, no cure/protection window, no re-entry sequencing.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-base font-bold mb-4">Failure Points</h2>
            <div className="flex items-end gap-4 mb-4">
              <div className="text-center">
                <p className="text-3xl font-bold" style={{ color: "var(--danger)" }}>
                  {out.failurePoints.traditional}
                </p>
                <p style={{ color: "var(--muted)" }} className="text-xs mt-1">Traditional</p>
              </div>
              <div className="text-2xl" style={{ color: "var(--muted)" }}>→</div>
              <div className="text-center">
                <p className="text-3xl font-bold" style={{ color: "var(--success)" }}>
                  {out.failurePoints.penetron}
                </p>
                <p style={{ color: "var(--muted)" }} className="text-xs mt-1">Penetron</p>
              </div>
            </div>
            <p style={{ color: "var(--muted)" }} className="text-xs leading-relaxed">
              {out.failurePoints.eliminated} failure points eliminated. Crystalline treatment migrates into concrete — lap seams, corner patches, and termination details disappear.
            </p>
          </div>
        </div>

        {/* Elevator pit module */}
        {out.elevatorPitSavings && (
          <div className="card p-6 mb-6" style={{ borderColor: "var(--accent)" }}>
            <h2 className="text-base font-bold mb-2">Elevator Pit Module</h2>
            <p style={{ color: "var(--muted)" }} className="text-xs mb-4">
              {input.elevatorPitCount} elevator pit{input.elevatorPitCount > 1 ? "s" : ""} — monolithic pour pathway
            </p>
            <div className="flex gap-6 mb-3">
              <div>
                <p className="text-2xl font-bold" style={{ color: "var(--success)" }}>
                  {formatCurrency(out.elevatorPitSavings.mid)}
                </p>
                <p style={{ color: "var(--muted)" }} className="text-xs mt-1">pit savings (mid)</p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "var(--warning)" }}>73%</p>
                <p style={{ color: "var(--muted)" }} className="text-xs mt-1">failure point reduction per pit</p>
              </div>
            </div>
            <p style={{ color: "var(--muted)" }} className="text-xs leading-relaxed">
              Typical pit: 15 traditional failure points → 4 residual. Monolithic crystalline pour eliminates sump box penetration risk, separate membrane sub, and below-grade re-entry.
            </p>
          </div>
        )}

        {/* Recommendations */}
        <div className="card p-6 mb-6">
          <h2 className="text-base font-bold mb-4">Recommended Penetron Scope</h2>
          <div className="flex flex-col gap-2 text-sm">
            {out.recommendation.admixture && (
              <div className="flex items-center gap-3">
                <span className="pill pill-green">✓</span>
                <span>PENETRON ADMIX — added at batch plant, treats full concrete mass</span>
              </div>
            )}
            {out.recommendation.jointTreatment && (
              <div className="flex items-center gap-3">
                <span className="pill pill-green">✓</span>
                <span>PENECRETE MORTAR — construction joints and cold joints</span>
              </div>
            )}
            {out.recommendation.penetrationTreatment && (
              <div className="flex items-center gap-3">
                <span className="pill pill-green">✓</span>
                <span>PENEPLUG / collars — pipe and conduit penetrations</span>
              </div>
            )}
            {out.recommendation.crystallineCoating && (
              <div className="flex items-center gap-3">
                <span className="pill pill-yellow">✓</span>
                <span>PENETRON coating — positive-side surface treatment (elevated hydrostatic conditions)</span>
              </div>
            )}
            {out.recommendation.elevatorPitMonolithic && (
              <div className="flex items-center gap-3">
                <span className="pill pill-green">✓</span>
                <span>Monolithic pour protocol — elevator pit(s)</span>
              </div>
            )}
          </div>
        </div>

        {/* Assumptions */}
        <div className="card p-6 mb-6">
          <h2 className="text-base font-bold mb-4">Analysis Assumptions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <div>
              <p style={{ color: "var(--muted)" }} className="text-xs">Foundation condition</p>
              <p className="font-medium">{getConditionLabel(input.foundationCondition)}</p>
            </div>
            <div>
              <p style={{ color: "var(--muted)" }} className="text-xs">Existing membrane</p>
              <p className="font-medium">{getMembraneLabel(input.membraneType)}</p>
            </div>
            <div>
              <p style={{ color: "var(--muted)" }} className="text-xs">Wall area</p>
              <p className="font-medium">{input.wallAreaSf.toLocaleString()} SF</p>
            </div>
            <div>
              <p style={{ color: "var(--muted)" }} className="text-xs">Slab area</p>
              <p className="font-medium">{input.slabAreaSf.toLocaleString()} SF</p>
            </div>
            <div>
              <p style={{ color: "var(--muted)" }} className="text-xs">Penetrations</p>
              <p className="font-medium">{input.penetrationCount}</p>
            </div>
            <div>
              <p style={{ color: "var(--muted)" }} className="text-xs">Construction joints</p>
              <p className="font-medium">{input.constructionJointLf} LF</p>
            </div>
            <div>
              <p style={{ color: "var(--muted)" }} className="text-xs">Complexity score</p>
              <p className="font-medium">{out.complexityScore} / {out.complexityTier}</p>
            </div>
            <div>
              <p style={{ color: "var(--muted)" }} className="text-xs">Confidence</p>
              <p className="font-medium">{out.confidenceLevel}</p>
            </div>
            <div>
              <p style={{ color: "var(--muted)" }} className="text-xs">Region</p>
              <p className="font-medium capitalize">{String(input.region).replace(/_/g, " ")}</p>
            </div>
          </div>
        </div>

        {/* Lead capture */}
        <LeadCaptureForm analysisId={id} role={input.role} projectName={input.projectName} />

        {/* Actions */}
        <div className="flex gap-3 mt-6 flex-wrap">
          <Link href="/analyze">
            <button className="px-5 py-3 rounded-md text-sm font-medium" style={{ border: "1px solid var(--border)", color: "var(--muted)" }}>
              ← New Analysis
            </button>
          </Link>
          <button
            onClick={undefined}
            className="px-5 py-3 rounded-md text-sm font-medium"
            style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
            aria-label="Print results"
          >
            Print / Save PDF
          </button>
        </div>
      </div>

      <footer style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }} className="px-6 py-4 text-center text-xs mt-auto">
        PenePlan · Outputs are estimating tools only. Not engineering approval or warranty authorization.
      </footer>
    </main>
  );
}
