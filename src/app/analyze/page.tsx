import IntakeForm from "@/components/IntakeForm";
import Link from "next/link";

export default function AnalyzePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <nav style={{ borderBottom: "1px solid var(--border)" }} className="flex items-center justify-between px-8 py-4">
        <Link href="/" className="font-bold text-lg tracking-tight hover:opacity-80">PenePlan</Link>
      </nav>
      <IntakeForm />
      <footer style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }} className="px-6 py-4 text-center text-xs mt-auto">
        Outputs are estimating tools only. Not engineering approval or warranty authorization.
      </footer>
    </main>
  );
}
