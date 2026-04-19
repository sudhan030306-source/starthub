"use client";
import { BadgeDollarSign, Paintbrush2, Smartphone, MessageSquare, HandHeart, Wrench } from "lucide-react";

const REASONS = [
  { icon: BadgeDollarSign, title: "Genuinely Affordable",     desc: "Every business deserves a good website regardless of budget. My pricing is built for real people, not corporations." },
  { icon: Paintbrush2,     title: "Clean, Modern Design",     desc: "No outdated templates. Every site I build looks contemporary and professional."                                       },
  { icon: Smartphone,      title: "Mobile-First Always",      desc: "Most visitors come from phones. Every site is optimised for mobile from day one — not as an afterthought."           },
  { icon: MessageSquare,   title: "Fast Communication",       desc: "No ghosting, no long waits. You'll always know the status of your project and I respond quickly."                    },
  { icon: HandHeart,       title: "Beginner-Friendly Process",desc: "You don't need to know anything about websites. I explain everything in plain language."                            },
  { icon: Wrench,          title: "Business-First Thinking",  desc: "With a commerce background, I build websites that serve real business goals — not just pretty designs."             },
];

export default function WhyChooseMe() {
  return (
    <section className="section-pad" style={{background:"#090910"}}>
      <div className="container-c mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-tag mx-auto" style={{width:"fit-content"}}>Why Work With Me</div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
            The Kind of Partner You Actually Want
          </h2>
          <p className="text-white/45 text-lg">
            Here's what makes working with me different — and better for small businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass glow-hover rounded-2xl p-6" style={{border:"1px solid rgba(255,255,255,0.07)"}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:"rgba(245,158,11,0.08)"}}>
                <Icon size={20} className="text-gold" />
              </div>
              <h3 className="font-display font-semibold text-base text-white mb-2">{title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-5"
          style={{background:"#F59E0B"}}>
          <div>
            <h3 className="font-display font-bold text-ink text-xl mb-1">Ready to get your website built?</h3>
            <p className="text-ink/60 text-sm">Let's chat — no pressure, no jargon, just a friendly conversation.</p>
          </div>
          <a href="#contact" className="btn-ghost flex-shrink-0" style={{color:"#07070A", borderColor:"rgba(0,0,0,0.25)"}}>
            Get a Free Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
