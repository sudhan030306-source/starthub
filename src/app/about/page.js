"use client";
import PageShell from "@/components/PageShell";
import About     from "@/components/About";
import WhyChooseMe from "@/components/WhyChooseMe";

export default function AboutPage() {
  return (
    <PageShell>
      <About />
      <WhyChooseMe />
    </PageShell>
  );
}
