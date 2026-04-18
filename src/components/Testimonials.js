"use client";

import { Quote, Star } from "lucide-react";

// ─── TESTIMONIALS — replace with real ones as you get them ──────────────────
const TESTIMONIALS = [
  {
    name:     "Priya Sharma",
    role:     "Owner, Priya's Boutique",
    initials: "PS",
    color:    "from-rose-500 to-pink-700",
    stars:    5,
    review:
      "I was nervous about getting a website made — I had no idea where to start. He explained everything so patiently and built exactly what I needed. My customers can now find my boutique online, and I've already gotten a few new inquiries through the contact form. Totally worth it!",
  },
  {
    name:     "Rajan Mehta",
    role:     "Freelance Consultant",
    initials: "RM",
    color:    "from-blue-500 to-indigo-700",
    stars:    5,
    review:
      "I needed a clean portfolio site quickly. He delivered a professional, modern website within 10 days and was available on WhatsApp throughout the process. The pricing was very fair and the final result was better than what I expected. Highly recommended for anyone on a budget.",
  },
  {
    name:     "Ankit Desai",
    role:     "Co-founder, LocalBite Tiffin Services",
    initials: "AD",
    color:    "from-green-500 to-teal-700",
    stars:    5,
    review:
      "We needed a simple website for our tiffin delivery service. The site he built us is clean, loads fast, and works great on phones. He understood our business needs and gave us exactly what we needed without overcomplicating things. Great value for money.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-brand-warm">
      <div className="container-max">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">What Clients Say</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-ink mb-4">
            Real People, Real Results
          </h2>
          <p className="text-brand-muted text-lg">
            Don't just take my word for it — here's what some of my clients have to say.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="card-hover bg-white border border-brand-border rounded-2xl p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} className="text-brand-gold" fill="#F59E0B" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={24} className="text-amber-200 mb-3" fill="#FDE68A" />

              {/* Review text */}
              <p className="text-sm text-brand-muted leading-relaxed flex-1 mb-6">
                "{t.review}"
              </p>

              {/* Client info */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold font-display flex-shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-brand-ink">
                    {t.name}
                  </p>
                  <p className="text-xs text-brand-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof note */}
        <p className="text-center text-xs text-brand-muted mt-8">
          * These are representative testimonials. More references available upon request.
        </p>
      </div>
    </section>
  );
}
