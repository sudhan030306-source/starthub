"use client";

import {
  BadgeDollarSign,
  Paintbrush2,
  Smartphone,
  MessageSquare,
  HandHeart,
  Wrench,
} from "lucide-react";

// ─── VALUE PROPS — edit or add points here ──────────────────────────────────
const REASONS = [
  {
    icon: BadgeDollarSign,
    title: "Genuinely Affordable Pricing",
    desc:  "I believe every business deserves a good website regardless of budget. My pricing is designed for small businesses, not corporations.",
  },
  {
    icon: Paintbrush2,
    title: "Clean, Modern Design",
    desc:  "No outdated templates. Every site I build looks contemporary, professional, and reflects your brand properly.",
  },
  {
    icon: Smartphone,
    title: "100% Mobile Responsive",
    desc:  "Most of your visitors come from phones. Every site I build is optimized for mobile-first experience from day one.",
  },
  {
    icon: MessageSquare,
    title: "Fast Communication",
    desc:  "No ghosting, no long wait times. You'll always know the status of your project, and I respond quickly.",
  },
  {
    icon: HandHeart,
    title: "Beginner-Friendly Process",
    desc:  "You don't need to know anything about websites. I explain everything in plain language and guide you through every step.",
  },
  {
    icon: Wrench,
    title: "Practical, Business-First Thinking",
    desc:  "With a commerce background, I build websites that serve real business goals — not just pretty designs with no purpose.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="section-padding bg-brand-ink text-white overflow-hidden relative">

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold font-display tracking-widest uppercase text-brand-gold bg-amber-900/30 border border-amber-700/40 px-3 py-1 rounded-full mb-4">
            Why Work With Me
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            The Kind of Work Partner You Actually Want
          </h2>
          <p className="text-white/60 text-lg">
            I know there are thousands of web developers out there. Here's what makes
            working with me different — and better for small businesses.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-gold/40 rounded-2xl p-6 transition-all duration-200"
            >
              <div className="w-11 h-11 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-gold/20 transition">
                <Icon size={20} className="text-brand-gold" />
              </div>
              <h3 className="font-display font-semibold text-base text-white mb-2">
                {title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-14 bg-brand-gold rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-brand-ink text-xl mb-1">
              Ready to get your website built?
            </h3>
            <p className="text-brand-ink/70 text-sm">
              Let's chat about your project. No pressure, no jargon — just a friendly conversation.
            </p>
          </div>
          <a href="#contact" className="btn-outline flex-shrink-0 border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white">
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
