import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PenePlan — Reduce Time. Simplify Construction. Stay Dry.",
  description:
    "Identify hidden cost, sequencing complexity, and leak-path exposure in below-grade construction.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
