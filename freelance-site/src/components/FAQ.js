"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q:"How much does a website cost?",           a:"Since every business is different, pricing is tailored to your specific needs. There are no fixed packages — just an honest quote based on what you actually require. Contact me and I'll get back to you within 24 hours with a clear estimate." },
  { q:"How long will it take to build?",          a:"A basic site typically takes 7–10 days, and a business website around 10–14 days. The timeline depends on content readiness and revision rounds. I'll give you a clear estimate before we start." },
  { q:"Can you redesign my existing website?",    a:"Yes! If you have an outdated or underperforming website, I can redesign it with a modern look, better speed, and improved user experience." },
  { q:"Will the website work on mobile phones?",  a:"Absolutely — every site I build is mobile-first and fully responsive. Phones, tablets, desktops. This is a standard feature, not an extra." },
  { q:"Do I need technical knowledge to manage it?", a:"Not at all. I build easy-to-manage websites and walk you through how to update basic content. I'm available if you need help later too." },
  { q:"What do you need from me to get started?", a:"Just a brief description of your business and what you need, some reference sites you like (optional), and any text or images you want. I'll help you structure the rest." },
  { q:"Do you help with hosting and domain?",     a:"Yes — I guide you to affordable hosting and domain options and help set everything up. Those costs are separate from my development fee, but I'll recommend the best value options." },
  { q:"What if I'm not happy with the design?",   a:"I include revision rounds in every project and share a live preview before final delivery so we can refine things together. Your satisfaction is the goal." },
];

function Item({ q, a, open, onToggle }) {
  return (
    <div className={`rounded-xl overflow-hidden transition-all duration-200 ${
      open
        ? "border border-gold/30 bg-gold/5"
        : "border border-white/[0.07] glass"
    }`}>
      <button className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left" onClick={onToggle}>
        <span className="font-display font-semibold text-sm md:text-base text-white">{q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
          open ? "bg-gold text-ink" : "bg-white/5 text-white/40"
        }`}>
          {open ? <Minus size={13}/> : <Plus size={13}/>}
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-white/45 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section-pad" style={{background:"#090910"}}>
      <div className="container-c mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="label-tag">FAQ</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4 leading-tight">
              Answers to Your Questions
            </h2>
            <p className="text-white/45 leading-relaxed mb-6">
              First time getting a website? Totally normal to have questions. Here are the ones I get asked most.
            </p>
            <p className="text-white/40 text-sm">
              Don't see yours?{" "}
              <a href="#contact" className="text-gold font-semibold hover:text-amber-300 transition">
                Just ask me directly →
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            {FAQS.map((f,i) => (
              <Item key={i} q={f.q} a={f.a} open={open===i} onToggle={() => setOpen(open===i ? null : i)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
