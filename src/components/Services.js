"use client";

import {
  Globe,
  UserSquare,
  Megaphone,
  ShoppingCart,
  RefreshCcw,
  BarChart2,
} from "lucide-react";

// ─── SERVICES — add, remove, or edit cards here ─────────────────────────────
const SERVICES = [
  {
    icon:  Globe,
    title: "Business Websites",
    desc:  "A professional online presence for your shop, company, or service. Clean, modern, and fully mobile-friendly — built to win customer trust from the first visit.",
    highlight: true,  // set true for the featured / most popular card
  },
  {
    icon:  UserSquare,
    title: "Portfolio Websites",
    desc:  "Showcase your work, skills, and services with a personal portfolio that stands out. Perfect for freelancers, consultants, and creative professionals.",
    highlight: false,
  },
  {
    icon:  Megaphone,
    title: "Landing Pages",
    desc:  "A focused, conversion-driven page to promote a product, campaign, or offer. Built to turn visitors into leads or customers quickly.",
    highlight: false,
  },
  {
    icon:  ShoppingCart,
    title: "Basic E-commerce Sites",
    desc:  "Start selling online with a simple, easy-to-manage store. Product listings, cart, and payment integration — without the complexity.",
    highlight: false,
  },
  {
    icon:  RefreshCcw,
    title: "Website Redesign",
    desc:  "Got an outdated website? I'll give it a fresh, modern look that loads faster, looks great on all devices, and represents your business better.",
    highlight: false,
  },
  {
    icon:  BarChart2,
    title: "Data Dashboards & Business Tools",
    desc:  "Power BI dashboards, Python scripts, and custom reporting tools to help you track your business numbers and make smarter decisions.",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-brand-warm">
      <div className="container-max">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">What I Do</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-ink mb-4">
            Services Built for Real Business Needs
          </h2>
          <p className="text-brand-muted text-lg">
            No bloated packages, no unnecessary fluff. Just practical, results-focused
            work at a price that makes sense for small businesses and individuals.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc, highlight }) => (
            <div
              key={title}
              className={`card-hover relative rounded-2xl p-6 border transition-all duration-200 ${
                highlight
                  ? "bg-brand-ink text-white border-brand-ink shadow-xl"
                  : "bg-white text-brand-ink border-brand-border hover:border-amber-200"
              }`}
            >
              {/* Popular badge */}
              {highlight && (
                <span className="absolute top-4 right-4 bg-brand-gold text-brand-ink text-[10px] font-bold font-display uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  highlight ? "bg-white/10" : "bg-amber-50"
                }`}
              >
                <Icon
                  size={22}
                  className={highlight ? "text-brand-gold" : "text-brand-gold"}
                />
              </div>

              {/* Title */}
              <h3
                className={`font-display font-bold text-lg mb-2 ${
                  highlight ? "text-white" : "text-brand-ink"
                }`}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed ${
                  highlight ? "text-white/70" : "text-brand-muted"
                }`}
              >
                {desc}
              </p>

              {/* CTA link */}
              <a
                href="#contact"
                className={`inline-block mt-4 text-sm font-semibold font-display transition ${
                  highlight
                    ? "text-brand-gold hover:underline"
                    : "text-brand-gold hover:underline"
                }`}
              >
                Get a quote →
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-brand-muted mb-4">
            Not sure which service fits your needs?
          </p>
          <a href="#contact" className="btn-primary">
            Tell Me About Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
