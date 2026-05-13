import Link from "next/link";

const metrics = [
  { label: "Time Reduced",            value: "8–16", unit: "days saved",        sub: "per typical foundation" },
  { label: "Construction Simplified", value: "7",    unit: "phases eliminated", sub: "per typical foundation" },
  { label: "Failure Points Cut",      value: "73%",  unit: "reduction",         sub: "on elevator pit scope"  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav style={{ borderBottom: "1px solid var(--border)" }} className="flex items-center justify-between px-8 py-4">
        <span className="font-bold text-lg tracking-tight">PenePlan</span>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center flex-1 px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Reduce Time.<br />
          Simplify Construction.<br />
          Stay Dry.
        </h1>
        <p style={{ color: "var(--muted)" }} className="text-lg max-w-xl mb-10 leading-relaxed">
          Identify hidden cost, sequencing complexity, and leak-path exposure in below-grade construction.
        </p>
        <Link href="/analyze">
          <button style={{ background: "var(--accent)" }} className="text-white font-semibold px-8 py-4 rounded-md text-base hover:opacity-90 transition-opacity">
            Start Analysis →
          </button>
        </Link>
      </section>

      {/* Proof metrics */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="px-6 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="card p-6">
              <p className="section-heading">{m.label}</p>
              <p className="metric-value" style={{ color: "var(--accent)" }}>{m.value}</p>
              <p className="font-semibold mt-1">{m.unit}</p>
              <p style={{ color: "var(--muted)" }} className="text-sm mt-1">{m.sub}</p>
            </div>
          ))}
        </div>
        <p style={{ color: "var(--muted)" }} className="text-center text-sm mt-8 max-w-xl mx-auto">
          These are outputs from a PenePlan analysis of a typical below-grade foundation. Your numbers depend on your project.
        </p>
      </section>

      {/* Positioning */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="px-6 py-12 text-center">
        <p style={{ color: "var(--muted)" }} className="max-w-2xl mx-auto text-sm leading-relaxed">
          PenePlan is a constructability and sequencing evaluation tool for below-grade waterproofing conversion — not a vendor pitch.
        </p>
      </section>

      {/* Who uses it */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="px-6 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { role: "GC / Estimator",       line: "Quantify VE opportunity before bid" },
            { role: "Engineer / Architect",  line: "Evaluate system continuity" },
            { role: "PM / Super / Owner",    line: "Simplify the below-grade scope" },
          ].map((u) => (
            <div key={u.role} className="card p-5">
              <p className="font-semibold mb-1">{u.role}</p>
              <p style={{ color: "var(--muted)" }} className="text-sm">{u.line}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ borderTop: "1px solid var(--border)" }} className="px-6 py-16 text-center">
        <p style={{ color: "var(--muted)" }} className="mb-6 text-sm">Ready to run the numbers?</p>
        <Link href="/analyze">
          <button style={{ background: "var(--accent)" }} className="text-white font-semibold px-8 py-4 rounded-md text-base hover:opacity-90 transition-opacity">
            Start Analysis →
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }} className="px-6 py-6 text-center text-xs">
        PenePlan · Reduce Time. Simplify Construction. Stay Dry.<br />
        Outputs are estimating tools only. Not engineering approval or warranty authorization.
      </footer>
    </main>
  );
}
