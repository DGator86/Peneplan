import { roundToNearest500 } from "./utils";

// ─── Types ───────────────────────────────────────────────────────────────────

export type MembraneType =
  | "sheet_sbs"
  | "fluid_pu"
  | "fluid_polyurea"
  | "bentonite"
  | "hdpe"
  | "hybrid"
  | "crystalline_competitor";

export type FoundationCondition =
  | "dry"
  | "seasonal"
  | "high_water_table"
  | "artesian"
  | "rock"
  | "contaminated"
  | "remedial";

export type ProjectType = "new" | "renovation" | "remediation";

export type Role =
  | "gc_estimator"
  | "gc_pm_super"
  | "gc_executive"
  | "engineer"
  | "owner"
  | "sub_supplier";

export type Region =
  | "northeast"
  | "west_coast"
  | "midwest"
  | "southeast"
  | "south_central"
  | "mountain_west"
  | "national";

export interface AnalysisInput {
  role: Role;
  categories: string[]; // CAT-01 through CAT-07
  wallAreaSf: number;
  slabAreaSf: number;
  elevatorPitCount: number;
  penetrationCount: number;
  constructionJointLf: number;
  membraneType: MembraneType;
  hasProtectionBoard: boolean;
  hasDrainageComposite: boolean;
  foundationCondition: FoundationCondition;
  projectType: ProjectType;
  region: Region;
  concreteVolumeCy?: number; // optional override
}

export interface SavingsRange {
  low: number;
  mid: number;
  high: number;
}

export interface AnalysisOutput {
  savingsRange: SavingsRange;
  scheduleRange: SavingsRange; // in days
  failurePoints: {
    traditional: number;
    penetron: number;
    eliminated: number;
    reductionPct: number;
  };
  sequencing: {
    phasesEliminated: number;
    mobsEliminated: number;
  };
  complexityScore: number;
  complexityTier: string;
  confidenceLevel: "High" | "Medium-High" | "Medium";
  conversionRating: "Strong Candidate" | "Good Candidate" | "Viable with Review" | "Requires Technical Review";
  recommendation: {
    admixture: boolean;
    crystallineCoating: boolean;
    jointTreatment: boolean;
    penetrationTreatment: boolean;
    elevatorPitMonolithic: boolean;
  };
  requiresTechnicalReview: boolean;
  elevatorPitSavings?: SavingsRange;
  traditionalCostMid: number;
  penetronCostMid: number;
}

// ─── Lookup Tables ────────────────────────────────────────────────────────────

const MEMBRANE_UNIT_RATES: Record<MembraneType, { low: number; mid: number; high: number }> = {
  sheet_sbs:              { low: 5.00, mid: 7.00, high: 9.00 },
  fluid_pu:               { low: 4.00, mid: 6.00, high: 8.00 },
  fluid_polyurea:         { low: 7.00, mid: 10.00, high: 14.00 },
  bentonite:              { low: 3.00, mid: 4.50, high: 6.00 },
  hdpe:                   { low: 5.50, mid: 7.50, high: 10.00 },
  hybrid:                 { low: 7.00, mid: 10.00, high: 13.00 },
  crystalline_competitor: { low: 2.00, mid: 3.50, high: 5.00 },
};

const REGIONAL_LABOR_MULTIPLIERS: Record<Region, number> = {
  northeast:     1.35,
  west_coast:    1.30,
  midwest:       1.10,
  southeast:     0.95,
  south_central: 0.90,
  mountain_west: 1.00,
  national:      1.00,
};

const SCHEDULE_DAYS_MID: Record<string, { small: number; medium: number; large: number }> = {
  "CAT-01": { small: 4,  medium: 7,  large: 12 },
  "CAT-02": { small: 3,  medium: 4,  large: 7  },
  "CAT-03": { small: 7,  medium: 12, large: 20 },
  "CAT-04": { small: 4,  medium: 5,  large: 5  },
  "CAT-05": { small: 6,  medium: 11, large: 17 },
  "CAT-06": { small: 4,  medium: 7,  large: 11 },
  "CAT-07": { small: 7,  medium: 14, large: 22 },
};

const PHASES_ELIMINATED: Record<string, number> = {
  "CAT-01": 4,
  "CAT-02": 3,
  "CAT-03": 7,
  "CAT-04": 8,
  "CAT-05": 5,
  "CAT-06": 4,
  "CAT-07": 8,
};

const MOBS_ELIMINATED: Record<string, number> = {
  "CAT-01": 1,
  "CAT-02": 1,
  "CAT-03": 2,
  "CAT-04": 1,
  "CAT-05": 2,
  "CAT-06": 1,
  "CAT-07": 2,
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function projectSize(totalAreaSf: number): "small" | "medium" | "large" {
  if (totalAreaSf < 5000) return "small";
  if (totalAreaSf < 20000) return "medium";
  return "large";
}

function estimateConcreteVolume(wallAreaSf: number, slabAreaSf: number): number {
  const wallCy = (wallAreaSf * 1.0) / 27; // 12" wall
  const slabCy = (slabAreaSf * 0.833) / 27; // 10" slab
  return wallCy + slabCy;
}

function computeComplexityScore(input: AnalysisInput): number {
  let score = 0;

  // Category base scores
  const catBaseScores: Record<string, number> = {
    "CAT-01": 3, "CAT-02": 2, "CAT-03": 5,
    "CAT-04": 6, "CAT-05": 7, "CAT-06": 3, "CAT-07": 7,
  };
  const sortedCats = [...input.categories].sort(
    (a, b) => (catBaseScores[b] ?? 0) - (catBaseScores[a] ?? 0)
  );
  if (sortedCats.length > 0) score += catBaseScores[sortedCats[0]] ?? 0;
  for (let i = 1; i < sortedCats.length; i++) score += 2;

  // Foundation condition
  const fcMod: Record<FoundationCondition, number> = {
    dry: -1, seasonal: 0, high_water_table: 2,
    artesian: 3, rock: 1, contaminated: 2, remedial: 3,
  };
  score += fcMod[input.foundationCondition];

  // Project size
  const total = input.wallAreaSf + input.slabAreaSf;
  if (total < 2500) score -= 1;
  else if (total >= 10000 && total < 30000) score += 1;
  else if (total >= 30000) score += 2;

  // Penetrations
  if (input.penetrationCount >= 6 && input.penetrationCount <= 15) score += 1;
  else if (input.penetrationCount >= 16 && input.penetrationCount <= 30) score += 2;
  else if (input.penetrationCount > 30) score += 3;

  // Construction joints
  if (input.constructionJointLf > 50 && input.constructionJointLf <= 150) score += 1;
  else if (input.constructionJointLf > 150) score += 2;

  // Project type
  if (input.projectType === "renovation") score += 1;
  else if (input.projectType === "remediation") score += 3;

  // Elevator pits
  if (input.elevatorPitCount === 1) score += 1;
  else if (input.elevatorPitCount >= 2 && input.elevatorPitCount <= 3) score += 2;
  else if (input.elevatorPitCount >= 4) score += 3;

  return score;
}

function complexityTierFromScore(score: number): {
  tier: string;
  spreadPct: number;
  confidence: "High" | "Medium-High" | "Medium";
  rating: "Strong Candidate" | "Good Candidate" | "Viable with Review" | "Requires Technical Review";
} {
  if (score <= 4)  return { tier: "Low",         spreadPct: 0.15, confidence: "High",        rating: "Strong Candidate" };
  if (score <= 8)  return { tier: "Medium-Low",  spreadPct: 0.20, confidence: "High",        rating: "Strong Candidate" };
  if (score <= 12) return { tier: "Medium",      spreadPct: 0.30, confidence: "Medium-High", rating: "Good Candidate" };
  if (score <= 16) return { tier: "Medium-High", spreadPct: 0.40, confidence: "Medium",      rating: "Viable with Review" };
  return               { tier: "High",        spreadPct: 0.50, confidence: "Medium",      rating: "Requires Technical Review" };
}

// ─── Main Engine ──────────────────────────────────────────────────────────────

export function runAnalysis(input: AnalysisInput): AnalysisOutput {
  const totalMembraneArea = input.wallAreaSf + input.slabAreaSf;
  const laborMult = REGIONAL_LABOR_MULTIPLIERS[input.region];
  const concreteVol =
    input.concreteVolumeCy ?? estimateConcreteVolume(input.wallAreaSf, input.slabAreaSf);

  // ── Traditional cost ──────────────────────────────────────────────────────
  const rate = MEMBRANE_UNIT_RATES[input.membraneType];

  // Membrane base (labor ~40%, material ~60%)
  const membaseMid = totalMembraneArea * rate.mid;
  const membaseAdj = membaseMid * 0.6 + membaseMid * 0.4 * laborMult;

  // Accessories
  const protBoardAdj = input.hasProtectionBoard
    ? totalMembraneArea * 1.25 * (0.65 + 0.35 * laborMult)
    : 0;
  const drainageAdj = input.hasDrainageComposite
    ? totalMembraneArea * 2.75 * (0.65 + 0.35 * laborMult)
    : 0;

  const avgWallHeight = 9;
  const wallPerimLf = input.wallAreaSf > 0 ? input.wallAreaSf / avgWallHeight : 0;
  const termBarCost = wallPerimLf * 6.0;

  const insideCorners = Math.round(input.penetrationCount * 0.5 + input.elevatorPitCount * 4 + 4);
  const outsideCorners = Math.round(insideCorners * 0.3);
  const cornerCost = insideCorners * 40 + outsideCorners * 35;

  const penetrationCost = input.penetrationCount * 125;
  const waterstopCost = input.constructionJointLf * 12;

  const repairAllowance = membaseAdj * 0.08;
  const mobCost = 3500 * laborMult; // 1 mob default; categories with 2+ add more
  const extraMobs = Math.max(0, input.categories.length - 1);
  const totalMobCost = mobCost * (1 + extraMobs * 0.5);

  const traditionalCostMid =
    membaseAdj + protBoardAdj + drainageAdj + termBarCost +
    cornerCost + penetrationCost + waterstopCost + repairAllowance + totalMobCost;

  // ── Penetron cost ─────────────────────────────────────────────────────────
  const admixtureCost = concreteVol * 6.50;
  const jointTreatCost = input.constructionJointLf * 5.0;
  const penetCollars = input.penetrationCount * 65;
  const tieHoleCount = input.wallAreaSf * 0.5;
  const tieHoleCost = tieHoleCount * 25;
  const needsCoating = ["high_water_table", "artesian", "remedial"].includes(
    input.foundationCondition
  );
  const coatingCost = needsCoating ? input.wallAreaSf * 2.0 : 0;

  const penetronCostMid =
    admixtureCost + jointTreatCost + penetCollars + tieHoleCost + coatingCost;

  // ── Savings ───────────────────────────────────────────────────────────────
  const grossSavingsMid = traditionalCostMid - penetronCostMid;

  // Complexity
  const complexityScore = computeComplexityScore(input);
  const { tier, spreadPct, confidence, rating } = complexityTierFromScore(complexityScore);

  const savingsMid = Math.max(0, grossSavingsMid);
  const savingsLow = roundToNearest500(savingsMid * (1 - spreadPct));
  const savingsHigh = roundToNearest500(savingsMid * (1 + spreadPct));

  // ── Schedule ──────────────────────────────────────────────────────────────
  const size = projectSize(totalMembraneArea);
  // Use highest-complexity category for schedule lookup
  const primaryCat = input.categories.includes("CAT-03")
    ? "CAT-03"
    : input.categories.includes("CAT-04")
    ? "CAT-04"
    : input.categories[0] ?? "CAT-01";

  const scheduleMid = SCHEDULE_DAYS_MID[primaryCat]?.[size] ?? 7;
  const schedSpread = spreadPct * 0.6;
  const scheduleLow = Math.max(1, Math.round(scheduleMid * (1 - schedSpread)));
  const scheduleHigh = Math.round(scheduleMid * (1 + schedSpread));

  // ── Failure points ────────────────────────────────────────────────────────
  const hasSheet = ["sheet_sbs", "hdpe", "hybrid"].includes(input.membraneType);
  const fpLapSeams = hasSheet ? (totalMembraneArea / 3.0) / 10.0 : 0;
  const fpInsideCorners = insideCorners;
  const fpOutsideCorners = outsideCorners;
  const fpWallSlab = input.wallAreaSf > 0 && input.slabAreaSf > 0 ? 2 : 0;
  const fpPenetrations = input.penetrationCount;
  const fpTermination = wallPerimLf / 20.0;
  const fpJoints = input.constructionJointLf / 10.0;
  const fpTieHoles = tieHoleCount / 20.0;
  const fpPits = input.elevatorPitCount * 4;

  const traditionalFp = Math.round(
    fpLapSeams + fpInsideCorners + fpOutsideCorners +
    fpWallSlab + fpPenetrations + fpTermination +
    fpJoints + fpTieHoles + fpPits
  );

  const penetronFp = Math.round(
    fpInsideCorners * 0.25 + fpOutsideCorners * 0.25 +
    fpWallSlab * 0.5 + fpPenetrations * 0.5 +
    fpJoints * 0.3 + fpTieHoles * 0.05 + fpPits * 0.3
  );

  const fpEliminated = traditionalFp - penetronFp;
  const fpReductionPct = traditionalFp > 0
    ? Math.round((fpEliminated / traditionalFp) * 100)
    : 0;

  // ── Sequencing ────────────────────────────────────────────────────────────
  const totalPhasesElim = input.categories.reduce(
    (acc, cat) => acc + (PHASES_ELIMINATED[cat] ?? 4), 0
  );
  const totalMobsElim = input.categories.reduce(
    (acc, cat) => acc + (MOBS_ELIMINATED[cat] ?? 1), 0
  );

  // ── Elevator pit savings ───────────────────────────────────────────────────
  let elevatorPitSavings: SavingsRange | undefined;
  if (input.elevatorPitCount > 0) {
    const pitFloor = 80;
    const pitWall = 200;
    const pitConcrCy = ((pitFloor + pitWall) * 0.833) / 27;
    const pitMemArea = pitFloor + pitWall;

    const tradPitMid =
      pitMemArea * rate.mid +
      4 * 40 + // 4 inside corners
      3 * 125 + // 3 penetrations
      pitWall * 1.25 + // protection board
      3500 * 0.5; // partial mob

    const penetPitMid =
      pitConcrCy * 6.5 +
      36 * 5.0 + // 36 LF joints
      3 * 65; // 3 penetration collars

    const pitSavMid = Math.max(0, tradPitMid - penetPitMid);
    elevatorPitSavings = {
      low:  roundToNearest500(pitSavMid * input.elevatorPitCount * (1 - spreadPct)),
      mid:  roundToNearest500(pitSavMid * input.elevatorPitCount),
      high: roundToNearest500(pitSavMid * input.elevatorPitCount * (1 + spreadPct)),
    };
  }

  return {
    savingsRange: { low: savingsLow, mid: savingsMid, high: savingsHigh },
    scheduleRange: { low: scheduleLow, mid: scheduleMid, high: scheduleHigh },
    failurePoints: {
      traditional: Math.max(traditionalFp, 0),
      penetron: Math.max(penetronFp, 0),
      eliminated: Math.max(fpEliminated, 0),
      reductionPct: fpReductionPct,
    },
    sequencing: {
      phasesEliminated: totalPhasesElim,
      mobsEliminated: totalMobsElim,
    },
    complexityScore,
    complexityTier: tier,
    confidenceLevel: confidence,
    conversionRating: rating,
    recommendation: {
      admixture: true,
      crystallineCoating: needsCoating,
      jointTreatment: true,
      penetrationTreatment: input.penetrationCount > 0,
      elevatorPitMonolithic: input.elevatorPitCount > 0,
    },
    requiresTechnicalReview:
      complexityScore >= 12 ||
      ["artesian", "contaminated", "remedial"].includes(input.foundationCondition),
    elevatorPitSavings,
    traditionalCostMid: Math.round(traditionalCostMid),
    penetronCostMid: Math.round(penetronCostMid),
  };
}
