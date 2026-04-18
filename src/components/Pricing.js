"use client";

import { Check, ArrowRight } from "lucide-react";

// ─── PRICING PLANS — update features and pricing as needed ──────────────────
// Note: price is shown as "Starting from ₹X,XXX" — adjust to your actual rates
const PLANS = [
  {
    name:        "Starter",
    price:       "₹3,999",
    tagline:     "Perfect for getting online fast",
    description: "Ideal for freelancers, students, and personal brands who need a clean, professional online presence without the big price tag.",
    features: [
      "Up to 3 pages",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "WhatsApp chat button",
      "1 round of revisions",
      "Delivered in ~7 days",
    ],
    cta:       "Get Started",
    highlight: false,
  },
  {
    name:        "Business",
    price:       "₹7,999",
    tagline:     "Most popular for small businesses",
    description: "Built for local shops, service businesses, and startups who need a complete, polished website that actually brings in customers.",
    features: [
      "Up to 6 pages",
      "Premium UI design",
      "Mobile responsive",
      "Contact & inquiry forms",
      "Google Maps integration",
      "Full SEO setup",
      "Social media links",
      "2 rounds of revisions",
      "Delivered in ~14 days",
    ],
    cta:       "Most Popular",
    highlight: true,  // featured plan
  },
  {
    name:        "Custom",
    price:       "Let's talk",
    tagline:     "For complex or specific needs",
    description: "Need something beyond a standard website? E-commerce, data dashboards, custom tools, or a large multi-page site — let's scope it together.",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "E-commerce / payments",
      "Data dashboards",
      "API integrations",
      "Priority delivery",
      "Ongoing support available",
      "Custom timeline",
    ],
    cta:       "Get a Custom Quote",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-max">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Pricing</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-ink mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-brand-muted text-lg">
            No hidden charges. No confusing packages. Just fair prices for quality work
            that any small business can afford.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`card-hover relative rounded-3xl border p-7 flex flex-col ${
                plan.highlight
                  ? "bg-brand-ink text-white border-brand-ink shadow-2xl scale-105"
                  : "bg-brand-warm border-brand-border"
              }`}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-ink text-xs font-bold font-display uppercase tracking-wider px-4 py-1.5 rounded-full shadow">
                  ⭐ Best Value
                </div>
              )}

              {/* Plan name */}
              <div className="mb-4">
                <span
                  className={`text-xs font-bold font-display tracking-widest uppercase ${
                    plan.highlight ? "text-brand-gold" : "text-brand-muted"
                  }`}
                >
                  {plan.name}
                </span>
                <div className="mt-2">
                  <span
                    className={`font-display font-extrabold text-3xl ${
                      plan.highlight ? "text-white" : "text-brand-ink"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.price !== "Let's talk" && (
                    <span
                      className={`text-sm ml-1 ${
                        plan.highlight ? "text-white/50" : "text-brand-muted"
                      }`}
                    >
                      starting from
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm mt-1 ${
                    plan.highlight ? "text-white/60" : "text-brand-muted"
                  }`}
                >
                  {plan.tagline}
                </p>
              </div>

              {/* Divider */}
              <div
                className={`w-full h-px mb-5 ${
                  plan.highlight ? "bg-white/10" : "bg-brand-border"
                }`}
              />

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-5 ${
                  plan.highlight ? "text-white/65" : "text-brand-muted"
                }`}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      size={15}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.highlight ? "text-brand-gold" : "text-brand-gold"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlight ? "text-white/80" : "text-brand-muted"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`w-full text-center font-semibold font-display text-sm py-3 rounded-xl transition-all duration-200 ${
                  plan.highlight
                    ? "bg-brand-gold text-brand-ink hover:scale-105"
                    : "bg-brand-ink text-white hover:scale-105"
                }`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-brand-muted mt-8 max-w-lg mx-auto">
          * Prices listed are starting points. Final cost depends on specific requirements,
          features, and timeline. All projects include a free initial consultation.
        </p>

        {/* Custom quote banner */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
          <h3 className="font-display font-bold text-xl text-brand-ink mb-2">
            Need something that doesn't fit these plans?
          </h3>
          <p className="text-brand-muted mb-5 max-w-lg mx-auto">
            Every project is different. Tell me what you need and I'll give you an honest
            quote with no fluff, no pressure, and no hidden charges.
          </p>
          <a href="#contact" className="btn-primary">
            Request a Custom Quote <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
