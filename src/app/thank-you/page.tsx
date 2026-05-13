import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <nav style={{ borderBottom: "1px solid var(--border)" }} className="flex items-center justify-between px-8 py-4">
        <Link href="/" className="font-bold text-lg tracking-tight hover:opacity-80">PenePlan</Link>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-24 flex flex-col items-center text-center flex-1">
        <div className="mb-8">
          <p className="text-5xl mb-4">✓</p>
          <h1 className="text-3xl font-bold mb-3">You&apos;re all set.</h1>
          <p style={{ color: "var(--muted)" }} className="text-base leading-relaxed">
            A Penetron representative will review your analysis and follow up within 1 business day with a project-specific specification.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-12">
          <div className="card p-5 text-left">
            <p className="font-semibold text-sm mb-1">What happens next</p>
            <p style={{ color: "var(--muted)" }} className="text-xs">
              Your Penetron rep reviews your scope inputs and prepares a spec recommendation.
            </p>
          </div>
          <div className="card p-5 text-left">
            <p className="font-semibold text-sm mb-1">Timeline</p>
            <p style={{ color: "var(--muted)" }} className="text-xs">
              1 business day response time. Urgent reviews available for active bids — mention in your initial contact.
            </p>
          </div>
          <div className="card p-5 text-left">
            <p className="font-semibold text-sm mb-1">What you&apos;ll get</p>
            <p style={{ color: "var(--muted)" }} className="text-xs">
              Project-specific Penetron scope, mix design guidance, and a spec-ready product list.
            </p>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          <Link href="/analyze">
            <button
              style={{ background: "var(--accent)" }}
              className="px-6 py-3 rounded-md text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Run Another Analysis →
            </button>
          </Link>
          <Link href="/">
            <button
              className="px-6 py-3 rounded-md text-sm font-medium"
              style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
            >
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>

      <footer style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }} className="px-6 py-4 text-center text-xs">
        PenePlan · Reduce Time. Simplify Construction. Stay Dry.<br />
        Outputs are estimating tools only. Not engineering approval or warranty authorization.
      </footer>
    </main>
  );
}
