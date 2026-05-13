"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Role } from "@/lib/engine";

interface Props {
  analysisId: string;
  role?: Role;
  projectName?: string;
}

export default function LeadCaptureForm({ analysisId, role, projectName }: Props) {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [projectLocation, setProjectLocation] = useState("");
  const [projectValue, setProjectValue] = useState("");
  const [bidDate, setBidDate] = useState("");

  if (submitted) {
    return (
      <div className="card p-6 mt-6" style={{ borderColor: "var(--success)" }}>
        <p className="font-bold mb-1" style={{ color: "var(--success)" }}>Report sent.</p>
        <p style={{ color: "var(--muted)" }} className="text-sm">
          A Penetron representative will follow up within 1 business day with a project-specific spec review.
        </p>
        <button
          onClick={() => router.push("/thank-you")}
          style={{ background: "var(--accent)" }}
          className="mt-4 px-5 py-2 rounded-md text-sm font-semibold text-white"
        >
          View confirmation →
        </button>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName || !email || !company) {
      setError("First name, email, and company are required.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          analysisId,
          firstName,
          lastName,
          email,
          phone,
          company,
          role: role ?? "",
          projectName,
          projectLocation,
          projectValue: projectValue ? Number(projectValue) : undefined,
          bidDate,
          source: "peneplan_results",
          leadScore: computeLeadScore(),
        }),
      });
      setSubmitted(true);
    } catch {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function computeLeadScore(): number {
    let score = 10; // base
    if (email) score += 10;
    if (phone) score += 5;
    if (company) score += 10;
    if (projectValue && Number(projectValue) > 500000) score += 15;
    if (bidDate) score += 10;
    if (projectLocation) score += 5;
    return Math.min(score, 65);
  }

  return (
    <div className="card p-6 mt-6">
      <h2 className="text-base font-bold mb-1">Get a free spec review</h2>
      <p style={{ color: "var(--muted)" }} className="text-sm mb-5">
        A Penetron representative will review this analysis and provide a project-specific specification within 1 business day.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label">First name *</label>
            <input className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div>
            <label className="label">Last name</label>
            <input className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <label className="label">Email *</label>
            <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="label">Phone</label>
            <input className="input" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <label className="label">Company *</label>
            <input className="input" value={company} onChange={(e) => setCompany(e.target.value)} required />
          </div>
          <div>
            <label className="label">Project location</label>
            <input className="input" value={projectLocation} onChange={(e) => setProjectLocation(e.target.value)} placeholder="City, State" />
          </div>
          <div>
            <label className="label">Estimated project value ($)</label>
            <input className="input" type="number" value={projectValue} onChange={(e) => setProjectValue(e.target.value)} placeholder="e.g. 2500000" />
          </div>
          <div>
            <label className="label">Bid date</label>
            <input className="input" type="date" value={bidDate} onChange={(e) => setBidDate(e.target.value)} />
          </div>
        </div>
        {error && <p className="text-sm" style={{ color: "var(--danger)" }}>{error}</p>}
        <button
          type="submit"
          disabled={loading}
          style={{ background: "var(--accent)" }}
          className="py-3 rounded-md text-sm font-semibold text-white disabled:opacity-60"
        >
          {loading ? "Submitting…" : "Request Free Spec Review →"}
        </button>
        <p style={{ color: "var(--muted)" }} className="text-xs text-center">
          No spam. Your data is used only to prepare your spec review.
        </p>
      </form>
    </div>
  );
}
