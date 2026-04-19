"use client";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name:"Priya Sharma", role:"Owner, Priya's Boutique", initials:"PS",
    grad:"linear-gradient(135deg,#BE185D,#9D174D)",
    review:"I was nervous about getting a website — I had no idea where to start. Sudhan explained everything patiently and built exactly what I needed. My customers can now find my boutique online, and I've already gotten new inquiries through the contact form. Totally worth it!"
  },
  {
    name:"Rajan Mehta", role:"Freelance Consultant", initials:"RM",
    grad:"linear-gradient(135deg,#1D4ED8,#1E3A8A)",
    review:"I needed a clean portfolio site quickly. Sudhan delivered a professional, modern website within 10 days and was available on WhatsApp throughout. The pricing was very fair and the final result was better than expected. Highly recommended for anyone on a budget."
  },
  {
    name:"Ankit Desai", role:"Co-founder, LocalBite Tiffin Services", initials:"AD",
    grad:"linear-gradient(135deg,#047857,#065F46)",
    review:"We needed a simple website for our tiffin delivery service. What Sudhan built is clean, loads fast, and works great on phones. He understood our business needs and gave us exactly what we needed without overcomplicating things. Great value for money."
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-ink">
      <div className="container-c mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-tag mx-auto" style={{width:"fit-content"}}>What Clients Say</div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">Real People, Real Results</h2>
          <p className="text-white/45 text-lg">Don't just take my word for it.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="glass glow-hover rounded-2xl p-6 flex flex-col" style={{border:"1px solid rgba(255,255,255,0.07)"}}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({length:5}).map((_,i) => (
                  <Star key={i} size={13} className="text-gold" fill="#F59E0B" />
                ))}
              </div>
              <Quote size={20} className="text-gold/30 mb-3" fill="rgba(245,158,11,0.2)" />
              <p className="text-sm text-white/50 leading-relaxed flex-1 mb-5">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold font-display"
                  style={{background:t.grad}}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-white/35">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-white/20 mt-6">* Representative testimonials. References available on request.</p>
      </div>
    </section>
  );
}
