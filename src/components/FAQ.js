"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// ─── FAQ ITEMS — add, remove, or edit questions here ────────────────────────
const FAQS = [
  {
    q: "How much does a website cost?",
    a: "It depends on what you need. A simple personal website or landing page can start from ₹3,999, while a business website with multiple pages typically starts from ₹7,999. Complex projects with custom features are quoted separately. I always give you a clear price upfront — no surprise charges.",
  },
  {
    q: "How long will it take to build my website?",
    a: "A basic website typically takes 7–10 days, and a business website around 10–14 days. The timeline depends on how quickly we finalize the content and design, and how many revisions are needed. I'll give you a clear estimate before we start.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes! If you have an old or outdated website that no longer represents your business well, I can redesign it with a modern look and better user experience. I'll review your current site and suggest improvements.",
  },
  {
    q: "Will the website work well on mobile phones?",
    a: "Absolutely. Every website I build is mobile-first and fully responsive — meaning it will look and work great on phones, tablets, and desktops. This is a standard feature, not an extra.",
  },
  {
    q: "Do I need any technical knowledge to manage my site?",
    a: "Not at all. I build simple, easy-to-manage websites and will walk you through how to update basic content like text and images. If you need regular updates, I can help with that too.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just a brief description of what you need, your business name, some reference sites you like (optional), and any text or images you want on the site. I'll help you organize and structure everything else.",
  },
  {
    q: "Do you provide hosting and domain registration?",
    a: "I can guide you to affordable hosting and domain options and help you set everything up. Hosting and domain costs are separate from my development fee, but I'll recommend the most cost-effective options.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "I include 1–2 rounds of revisions in all plans. I share a live preview before the final delivery so you can give feedback and we can make changes together. Your satisfaction matters to me.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
        isOpen ? "border-amber-200 bg-amber-50" : "border-brand-border bg-white"
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={onToggle}
      >
        <span className="font-display font-semibold text-sm md:text-base text-brand-ink">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
            isOpen ? "bg-brand-gold text-brand-ink" : "bg-brand-light text-brand-muted"
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-sm text-brand-muted leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // open first by default

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-max">

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Header ── */}
          <div className="lg:sticky lg:top-24">
            <span className="section-label">FAQ</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-ink mb-4 leading-tight">
              Answers to Your Questions
            </h2>
            <p className="text-brand-muted leading-relaxed mb-6">
              First time getting a website? Totally normal to have questions. Here are
              the ones I get asked most often.
            </p>
            <p className="text-brand-muted">
              Don't see your question here?{" "}
              <a href="#contact" className="text-brand-gold font-semibold hover:underline">
                Just ask me directly →
              </a>
            </p>
          </div>

          {/* ── Right: FAQ accordion ── */}
          <div className="flex flex-col gap-3">
            {FAQS.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
