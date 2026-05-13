"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { AnalysisInput, Role, FoundationCondition, MembraneType, ProjectType, Region } from "@/lib/engine";

const STEPS = ["Role", "Project Type", "Site Conditions", "Scope Details", "Project Info"];

const ROLES: { value: Role; label: string; sub: string }[] = [
  { value: "gc_estimator",  label: "GC / Estimator",      sub: "Quantify cost and VE savings" },
  { value: "gc_pm_super",   label: "GC / PM / Super",     sub: "Reduce schedule and coordination" },
  { value: "gc_executive",  label: "GC Executive",        sub: "Evaluate project risk and value" },
  { value: "engineer",      label: "Engineer / Architect", sub: "Evaluate system continuity" },
  { value: "owner",         label: "Owner / Developer",   sub: "Lifecycle risk and schedule" },
  { value: "sub_supplier",  label: "Sub / Supplier",      sub: "Simplify field execution" },
];

const CATEGORIES = [
  { value: "CAT-01", label: "Foundation walls",     sub: "vertical membrane" },
  { value: "CAT-02", label: "Below-grade slab",     sub: "underslab membrane" },
  { value: "CAT-03", label: "Wall + slab combined", sub: "full envelope" },
  { value: "CAT-04", label: "Elevator pit(s)",       sub: "monolithic pathway" },
  { value: "CAT-05", label: "Parking deck",         sub: "below grade" },
  { value: "CAT-06", label: "Retaining wall",       sub: "exterior membrane" },
  { value: "CAT-07", label: "Utility tunnel/vault", sub: "below grade" },
];

const WATER_OPTIONS: { value: FoundationCondition; label: string }[] = [
  { value: "dry",              label: "Dry / No groundwater" },
  { value: "seasonal",         label: "Seasonal (wet season only)" },
  { value: "high_water_table", label: "Permanent high water table" },
  { value: "artesian",         label: "Artesian / high hydrostatic pressure" },
  { value: "rock",             label: "Rock foundation" },
  { value: "contaminated",     label: "Contaminated soil / chemical exposure" },
  { value: "remedial",         label: "Existing leak / remediation" },
];

const MEMBRANE_OPTIONS: { value: MembraneType; label: string }[] = [
  { value: "sheet_sbs",              label: "Self-adhered sheet membrane (SBS bituminous)" },
  { value: "fluid_pu",               label: "Fluid-applied polyurethane" },
  { value: "fluid_polyurea",         label: "Fluid-applied polyurea / hybrid spray" },
  { value: "bentonite",              label: "Bentonite panel or blanket" },
  { value: "hdpe",                   label: "HDPE or LLDPE sheet membrane" },
  { value: "hybrid",                 label: "Hybrid system (sheet + fluid at transitions)" },
  { value: "crystalline_competitor", label: "Competitive crystalline coating" },
];

const PROJECT_TYPES: { value: ProjectType; label: string }[] = [
  { value: "new",         label: "New construction" },
  { value: "renovation",  label: "Renovation (existing structure)" },
  { value: "remediation", label: "Remediation (existing leak / retrofit)" },
];

const REGIONS: { value: Region; label: string }[] = [
  { value: "northeast",     label: "Northeast US (NYC, Boston, DC)" },
  { value: "west_coast",    label: "West Coast (LA, SF, Seattle)" },
  { value: "midwest",       label: "Midwest (Chicago, Minneapolis)" },
  { value: "southeast",     label: "Southeast (Atlanta, Charlotte, Miami)" },
  { value: "south_central", label: "South Central (Dallas, Houston)" },
  { value: "mountain_west", label: "Mountain West (Denver, Phoenix)" },
  { value: "national",      label: "National average / not sure" },
];

export default function IntakeForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [role, setRole] = useState<Role | "">("");
  const [categories, setCategories] = useState<string[]>([]);
  const [elevatorPitCount, setElevatorPitCount] = useState(1);
  const [foundationCondition, setFoundationCondition] = useState<FoundationCondition | "">("");
  const [projectType, setProjectType] = useState<ProjectType>("new");
  const [membraneType, setMembraneType] = useState<MembraneType>("sheet_sbs");
  const [wallAreaSf, setWallAreaSf] = useState("");
  const [slabAreaSf, setSlabAreaSf] = useState("");
  const [penetrationCount, setPenetrationCount] = useState("");
  const [constructionJointLf, setConstructionJointLf] = useState("");
  const [hasProtectionBoard, setHasProtectionBoard] = useState(true);
  const [hasDrainageComposite, setHasDrainageComposite] = useState(true);
  const [region, setRegion] = useState<Region>("national");
  const [projectName, setProjectName] = useState("");

  function toggleCategory(val: string) {
    setCategories((prev) =>
      prev.includes(val) ? prev.filter((c) => c !== val) : [...prev, val]
    );
  }

  function canProceed(): boolean {
    if (step === 0) return role !== "";
    if (step === 1) return categories.length > 0;
    if (step === 2) return foundationCondition !== "";
    return true;
  }

  async function handleCalculate() {
    setLoading(true);
    setError("");
    try {
      const input: AnalysisInput = {
        role: role as Role,
        categories: categories.length > 0 ? categories : ["CAT-03"],
        wallAreaSf: parseFloat(wallAreaSf) || 5000,
        slabAreaSf: parseFloat(slabAreaSf) || 3000,
        elevatorPitCount: categories.includes("CAT-04") ? elevatorPitCount : 0,
        penetrationCount: parseInt(penetrationCount) || 10,
        constructionJointLf: parseInt(constructionJointLf) || 80,
        membraneType,
        hasProtectionBoard,
        hasDrainageComposite,
        foundationCondition: foundationCondition as FoundationCondition,
        projectType,
        region,
      };
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, projectName }),
      });
      if (!res.ok) throw new Error("Calculation failed");
      const { id } = await res.json();
      router.push(`/results/${id}`);
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex gap-2 mb-3">
          {STEPS.map((s, i) => (
            <div
              key={s}
              className="flex-1 h-1 rounded-full"
              style={{ background: i <= step ? "var(--accent)" : "var(--border)" }}
            />
          ))}
        </div>
        <p style={{ color: "var(--muted)" }} className="text-sm">
          Step {step + 1} of {STEPS.length} — {STEPS[step]}
        </p>
      </div>

      {/* Step 0: Role */}
      {step === 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Who are you on this project?</h2>
          <p style={{ color: "var(--muted)" }} className="text-sm mb-6">Your role shapes how we present the results.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ROLES.map((r) => (
              <button
                key={r.value}
                onClick={() => setRole(r.value)}
                className="card p-4 text-left hover:opacity-90 transition-opacity"
                style={{ borderColor: role === r.value ? "var(--accent)" : undefined }}
              >
                <p className="font-semibold text-sm">{r.label}</p>
                <p style={{ color: "var(--muted)" }} className="text-xs mt-1">{r.sub}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Project Type */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">What&apos;s the below-grade scope?</h2>
          <p style={{ color: "var(--muted)" }} className="text-sm mb-6">Select all that apply.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CATEGORIES.map((c) => (
              <button
                key={c.value}
                onClick={() => toggleCategory(c.value)}
                className="card p-4 text-left hover:opacity-90 transition-opacity"
                style={{ borderColor: categories.includes(c.value) ? "var(--accent)" : undefined }}
              >
                <p className="font-semibold text-sm">{c.label}</p>
                <p style={{ color: "var(--muted)" }} className="text-xs mt-1">{c.sub}</p>
              </button>
            ))}
          </div>
          {categories.includes("CAT-04") && (
            <div className="mt-4 card p-4">
              <label className="label">How many elevator pits?</label>
              <input
                type="number"
                min={1}
                max={20}
                value={elevatorPitCount}
                onChange={(e) => setElevatorPitCount(parseInt(e.target.value) || 1)}
                className="input w-24"
              />
            </div>
          )}
        </div>
      )}

      {/* Step 2: Site Conditions */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">What are the site conditions?</h2>
          <div className="mb-6">
            <label className="label">Groundwater / water table</label>
            <div className="flex flex-col gap-2">
              {WATER_OPTIONS.map((o) => (
                <button
                  key={o.value}
                  onClick={() => setFoundationCondition(o.value)}
                  className="card p-3 text-left text-sm hover:opacity-90 transition-opacity"
                  style={{ borderColor: foundationCondition === o.value ? "var(--accent)" : undefined }}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label className="label">Project type</label>
            <div className="flex gap-2 flex-wrap">
              {PROJECT_TYPES.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setProjectType(p.value)}
                  className="card px-4 py-2 text-sm hover:opacity-90"
                  style={{ borderColor: projectType === p.value ? "var(--accent)" : undefined }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="label">Membrane type specified or in place</label>
            <select
              value={membraneType}
              onChange={(e) => setMembraneType(e.target.value as MembraneType)}
              className="input"
            >
              {MEMBRANE_OPTIONS.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Step 3: Scope Details */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Tell us about the scope.</h2>
          <p style={{ color: "var(--muted)" }} className="text-sm mb-6">Rough numbers are fine. We&apos;ll show the range.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="label">Wall area (SF)</label>
              <input type="number" min={0} value={wallAreaSf} onChange={(e) => setWallAreaSf(e.target.value)} className="input" placeholder="e.g. 8400" />
              <p style={{ color: "var(--muted)" }} className="text-xs mt-1">Exterior face of foundation walls</p>
            </div>
            <div>
              <label className="label">Slab area (SF)</label>
              <input type="number" min={0} value={slabAreaSf} onChange={(e) => setSlabAreaSf(e.target.value)} className="input" placeholder="e.g. 5200" />
              <p style={{ color: "var(--muted)" }} className="text-xs mt-1">Below-grade floor slab footprint</p>
            </div>
            <div>
              <label className="label">Pipe / conduit penetrations</label>
              <input type="number" min={0} value={penetrationCount} onChange={(e) => setPenetrationCount(e.target.value)} className="input" placeholder="e.g. 14" />
            </div>
            <div>
              <label className="label">Construction joints (LF)</label>
              <input type="number" min={0} value={constructionJointLf} onChange={(e) => setConstructionJointLf(e.target.value)} className="input" placeholder="e.g. 80" />
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" checked={hasProtectionBoard} onChange={(e) => setHasProtectionBoard(e.target.checked)} className="w-4 h-4" />
              Protection board in spec
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" checked={hasDrainageComposite} onChange={(e) => setHasDrainageComposite(e.target.checked)} className="w-4 h-4" />
              Drainage composite in spec
            </label>
          </div>
          <div className="mt-4">
            <label className="label">Region (for labor costs)</label>
            <select value={region} onChange={(e) => setRegion(e.target.value as Region)} className="input">
              {REGIONS.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
            </select>
          </div>
        </div>
      )}

      {/* Step 4: Project Info */}
      {step === 4 && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Almost done.</h2>
          <p style={{ color: "var(--muted)" }} className="text-sm mb-6">All fields optional. Skip to calculate now.</p>
          <div>
            <label className="label">Project name (appears on report)</label>
            <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="input" placeholder="e.g. 123 Main St Parking Structure" />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3 mt-10">
        {step > 0 && (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="px-5 py-3 rounded-md text-sm font-medium"
            style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
          >
            ← Back
          </button>
        )}
        {step < STEPS.length - 1 ? (
          <button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canProceed()}
            style={{ background: canProceed() ? "var(--accent)" : "var(--border)" }}
            className="flex-1 py-3 rounded-md text-sm font-semibold text-white disabled:opacity-50"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={handleCalculate}
            disabled={loading}
            style={{ background: "var(--accent)" }}
            className="flex-1 py-3 rounded-md text-sm font-semibold text-white disabled:opacity-60"
          >
            {loading ? "Calculating…" : "Calculate My Savings →"}
          </button>
        )}
      </div>
      {step === 3 && (
        <button onClick={handleCalculate} className="mt-3 text-xs w-full text-center" style={{ color: "var(--muted)" }}>
          Skip project info and calculate now →
        </button>
      )}
      {error && <p className="mt-4 text-sm" style={{ color: "var(--danger)" }}>{error}</p>}
    </div>
  );
}
