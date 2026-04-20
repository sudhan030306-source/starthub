"use client";
import PageShell from "@/components/PageShell";
import Services  from "@/components/Services";
import Process   from "@/components/Process";

export default function ServicesPage() {
  return (
    <PageShell>
      <Services />
      <Process />
    </PageShell>
  );
}
