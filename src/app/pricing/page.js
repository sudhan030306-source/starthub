"use client";
import PageShell from "@/components/PageShell";
import Pricing   from "@/components/Pricing";
import FAQ       from "@/components/FAQ";

export default function PricingPage() {
  return (
    <PageShell>
      <Pricing />
      <FAQ />
    </PageShell>
  );
}
