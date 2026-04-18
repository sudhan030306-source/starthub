"use client";

import { Code2, BarChart2, BookOpen, Lightbulb } from "lucide-react";

// ─── ABOUT CONTENT — edit this section to match your story ─────────────────
const ABOUT = {
  label:    "About Me",
  heading:  "Commerce Brain, Tech Skills, Real Results",
  intro: `Hi! I'm [Your Name], a freelance web developer and business tech specialist based in India.
I come from a commerce background, which means I understand how real businesses work —
not just how websites look. That combination helps me build websites that are actually
useful, not just pretty.`,
  para2: `Whether you're a local shop needing your first website, a startup wanting a clean landing page,
or a freelancer looking to showcase your work — I can help you get online without breaking the bank.`,
  skills: [
    { icon: Code2,      label: "Website Development",  desc: "HTML, CSS, React, Next.js, Tailwind"      },
    { icon: BarChart2,  label: "Data & Dashboards",     desc: "Power BI, Python, SQL, Excel"             },
    { icon: BookOpen,   label: "Business Tools",        desc: "Tally, accounting workflows, ERP basics"  },
    { icon: Lightbulb,  label: "Business Understanding", desc: "Commerce background, practical mindset"  },
  ],
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">

        {/* Label */}
        <div className="text-center mb-4">
          <span className="section-label">{ABOUT.label}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Photo placeholder ── */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-ink to-brand-slate aspect-[4/5] max-w-sm mx-auto lg:mx-0 shadow-2xl">
              {/* ── Replace this div with an <img> or <Image> tag ── */}
              <div className="w-full h-full flex items-center justify-center text-white/20 text-6xl font-bold font-display select-none">
                YOUR
                <br />
                PHOTO
                {/* ↑ Replace with: <Image src="/your-photo.jpg" fill alt="Your Name" className="object-cover" /> */}
              </div>

              {/* Overlay tag */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3">
                <p className="text-white text-sm font-semibold font-display">
                  Your Name
                  {/* ↑ Replace with your actual name */}
                </p>
                <p className="text-white/70 text-xs mt-0.5">
                  Freelance Web Developer · Commerce Graduate
                </p>
              </div>
            </div>

            {/* Decorative accent box */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-gold rounded-2xl -z-10 hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-brand-gold rounded-2xl -z-10 hidden lg:block" />
          </div>

          {/* ── RIGHT: Text content ── */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-ink mb-6 leading-tight">
              {ABOUT.heading}
            </h2>

            <p className="text-brand-muted leading-relaxed mb-4 whitespace-pre-line">
              {ABOUT.intro}
            </p>
            <p className="text-brand-muted leading-relaxed mb-8">
              {ABOUT.para2}
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-3">
              {ABOUT.skills.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="group bg-brand-warm border border-brand-border rounded-xl p-4 transition hover:border-brand-gold hover:shadow-sm"
                >
                  <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center mb-2 group-hover:bg-amber-100 transition">
                    <Icon size={18} className="text-brand-gold" />
                  </div>
                  <p className="font-display font-semibold text-sm text-brand-ink">{label}</p>
                  <p className="text-xs text-brand-muted mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
