"use client";

// ─── PROCESS STEPS — edit the steps here ────────────────────────────────────
const STEPS = [
  {
    number: "01",
    title:  "Tell Me About Your Needs",
    desc:   "We start with a simple conversation — over call, WhatsApp, or email. You tell me what you need and I ask a few questions to understand your business, audience, and goals.",
    duration: "Day 1",
  },
  {
    number: "02",
    title:  "Plan Your Website Together",
    desc:   "I put together a clear plan: what pages we'll build, what the design will look like, and what the timeline is. You'll know exactly what you're getting before we begin.",
    duration: "Day 2–3",
  },
  {
    number: "03",
    title:  "Build & Review",
    desc:   "I build the website and share a live preview for your feedback. We review it together, make changes until you're happy, and keep the process transparent throughout.",
    duration: "Day 4–10",
  },
  {
    number: "04",
    title:  "Final Delivery & Support",
    desc:   "Once you approve everything, the website goes live. I also provide basic handover support so you know how to manage your site — no hidden extras.",
    duration: "Day 10–14",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-brand-warm">
      <div className="container-max">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">How I Work</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-ink mb-4">
            A Simple, Stress-Free Process
          </h2>
          <p className="text-brand-muted text-lg">
            From first message to final website — here's exactly how we'll work together.
            No surprises, no confusion.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Step card */}
                <div className="bg-white border border-brand-border rounded-2xl p-6 h-full card-hover">

                  {/* Step number badge */}
                  <div className="relative flex items-center justify-between mb-4">
                    <span className="w-10 h-10 bg-brand-ink text-brand-gold rounded-xl flex items-center justify-center font-display font-bold text-sm">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-display font-semibold text-brand-muted bg-brand-light px-2 py-1 rounded-lg">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-brand-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow between steps (mobile hidden, show on lg+) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-8 z-10 w-6 h-6 bg-white border border-brand-border rounded-full items-center justify-center text-brand-gold text-xs font-bold">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-brand-muted mt-8">
          ✦ Timeline may vary depending on project complexity. Custom timelines available on request.
        </p>
      </div>
    </section>
  );
}
