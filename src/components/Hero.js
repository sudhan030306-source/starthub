"use client";

import { ArrowRight, ChevronDown, Star, CheckCircle2 } from "lucide-react";

// ─── HERO CONTENT — edit the copy here ─────────────────────────────────────
const HERO = {
  badge:       "Open for freelance projects",
  headline1:   "Affordable Websites",
  headline2:   "That Help You Grow",
  subtext:
    "I build clean, modern, and mobile-friendly websites for small businesses, local shops, startups, and personal brands — at a price that makes sense for you.",
  cta1:   { label: "View My Work",            href: "#projects" },
  cta2:   { label: "Get Your Website Built",  href: "#contact"  },
  stats: [
    { value: "10+",   label: "Projects Delivered"  },
    { value: "100%",  label: "Client Satisfaction" },
    { value: "48hr",  label: "First Draft Ready"   },
  ],
  trustedBy: ["Small Businesses", "Freelancers", "Startups", "Personal Brands"],
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center hero-grid overflow-hidden pt-16"
    >
      {/* ── Decorative blobs ── */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #1E3A5F 0%, transparent 70%)" }}
      />

      <div className="container-max section-padding flex flex-col lg:flex-row items-center gap-16 relative z-10">

        {/* ── LEFT: Text Content ── */}
        <div className="flex-1 text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold font-display text-amber-700 tracking-wide">
              {HERO.badge}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up delay-100">
            <span className="text-gradient">{HERO.headline1}</span>
            <br />
            <span className="text-brand-ink">{HERO.headline2}</span>
          </h1>

          {/* Subtext */}
          <p className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-up delay-200">
            {HERO.subtext}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10 animate-fade-up delay-300">
            <a href={HERO.cta1.href} className="btn-outline">
              {HERO.cta1.label}
            </a>
            <a href={HERO.cta2.href} className="btn-primary">
              {HERO.cta2.label}
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Trusted By Tags */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start animate-fade-up delay-400">
            <span className="text-xs text-brand-muted font-medium mr-1">Trusted by:</span>
            {HERO.trustedBy.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs bg-white border border-brand-border text-brand-muted px-2.5 py-1 rounded-full"
              >
                <CheckCircle2 size={10} className="text-brand-gold" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Stats Card ── */}
        <div className="flex-shrink-0 animate-fade-up delay-300">
          <div className="relative bg-white rounded-3xl shadow-xl border border-brand-border p-8 w-72">

            {/* Floating star badge */}
            <div className="absolute -top-4 -right-4 bg-brand-gold text-brand-ink rounded-2xl px-3 py-1.5 flex items-center gap-1 shadow-md">
              <Star size={12} fill="currentColor" />
              <span className="text-xs font-bold font-display">Top Rated</span>
            </div>

            {/* Avatar placeholder — replace with your real photo */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-ink to-brand-slate flex items-center justify-center text-white text-2xl font-bold font-display mb-4 shadow-inner">
              {/* ↑ Replace this div with: <Image src="/your-photo.jpg" ... /> */}
              YN
              {/* ↑ Replace with your initials or a real image */}
            </div>

            {/* Name & role — UPDATE THESE */}
            <h3 className="font-display font-bold text-brand-ink text-lg">Your Name</h3>
            <p className="text-sm text-brand-muted mb-6">
              Freelance Web Developer & Business Tech Specialist
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-brand-border mb-6" />

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2">
              {HERO.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display font-extrabold text-xl text-brand-gold">
                    {s.value}
                  </div>
                  <div className="text-[10px] text-brand-muted leading-tight mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA mini */}
            <a
              href="#contact"
              className="mt-6 flex items-center justify-center gap-2 w-full bg-brand-light text-brand-ink text-sm font-semibold font-display py-2.5 rounded-xl transition hover:bg-brand-gold hover:text-brand-ink"
            >
              Let's Work Together <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll Hint ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brand-muted opacity-60">
        <span className="text-xs font-display tracking-wide">Scroll down</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
