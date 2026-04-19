"use client";
import { ArrowRight, Zap } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad" style={{background:"#090910"}}>
      <div className="container-c mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-tag mx-auto" style={{width:"fit-content"}}>Pricing</div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Every business is different — so is every website. Since every project has unique needs,
            pricing is tailored to what you actually require.
          </p>
        </div>

        {/* Main custom pricing card */}
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
            style={{background:"linear-gradient(135deg,#1A1820 0%,#100E18 100%)", border:"1px solid rgba(245,158,11,0.2)"}}>

            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{background:"radial-gradient(ellipse at 50% 0%,rgba(245,158,11,0.06) 0%,transparent 65%)"}} />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                style={{background:"rgba(245,158,11,0.12)", border:"1px solid rgba(245,158,11,0.25)"}}>
                <Zap size={24} className="text-gold" />
              </div>

              <h3 className="font-display font-extrabold text-3xl text-white mb-3">Custom Pricing</h3>

              <p className="text-white/50 leading-relaxed mb-8 max-w-md mx-auto text-base">
                Since every business has different needs, every project has different requirements —
                and pricing that reflects exactly that. No padded packages, no paying for features
                you don't need.
              </p>

              {/* What's always included */}
              <div className="glass rounded-2xl p-6 mb-8 text-left" style={{border:"1px solid rgba(255,255,255,0.07)"}}>
                <p className="font-display font-semibold text-white text-sm mb-4 text-center">What's always included</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Mobile responsive design",
                    "Clean modern UI",
                    "Contact / inquiry form",
                    "Basic SEO setup",
                    "Fast loading pages",
                    "Revision rounds",
                    "WhatsApp chat button",
                    "Post-delivery support",
                  ].map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:"#F59E0B"}} />
                      <span className="text-xs text-white/55 font-display">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-white/35 text-sm mb-6">
                Just tell me what you need. I'll give you an honest quote within 24 hours —<br className="hidden md:block" />
                no pressure, no hidden charges.
              </p>

              <a href="#contact" className="btn-gold text-base px-10 py-4">
                Get Your Custom Quote <ArrowRight size={16}/>
              </a>
            </div>
          </div>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-white/30 text-sm">
          {["No hidden charges", "Free initial consultation", "Pay only for what you need", "Affordable for small businesses"].map(t => (
            <div key={t} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold opacity-60" />
              <span className="font-display text-xs">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
