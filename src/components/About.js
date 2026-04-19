"use client";
import Image from "next/image";
import { Code2, BarChart2, BookOpen, Lightbulb } from "lucide-react";

const SKILLS = [
  { icon: Code2,      label: "Web Development",   desc: "Next.js, React, Tailwind CSS, HTML/CSS" },
  { icon: BarChart2,  label: "Data & Dashboards", desc: "Power BI, Python, SQL, Excel"           },
  { icon: BookOpen,   label: "Business Tools",    desc: "Tally, accounting workflows"            },
  { icon: Lightbulb,  label: "Business Thinking", desc: "Commerce background, practical mindset" },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-ink">
      <div className="container-c mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT: visual card ── */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden max-w-sm"
              style={{
                background: "linear-gradient(135deg,#141420 0%,#1C1C2E 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                aspectRatio: "4/5",
              }}>

              {/* Background grid */}
              <div className="absolute inset-0 geo-grid opacity-40"/>

              {/* Logo + info centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">

                  {/* Logo mark */}
                  <div className="relative w-24 h-24 mx-auto mb-5 flex items-center justify-center rounded-2xl"
                    style={{
                      background: "rgba(245,158,11,0.06)",
                      border: "1px solid rgba(245,158,11,0.18)",
                      boxShadow: "0 0 40px rgba(245,158,11,0.06)",
                    }}>
                    <div className="relative w-14 h-14">
                      <Image
                        src="/logo.png"
                        alt="StartlyHub"
                        fill
                        className="object-contain"
                        style={{ filter: "brightness(0) invert(1)" }}
                      />
                    </div>
                  </div>

                  <p className="font-display font-extrabold text-xl text-white tracking-widest uppercase mb-1">
                    Startly<span className="text-gold">Hub</span>
                  </p>
                  <p className="text-white/40 text-sm mb-1">by Sudhan M</p>
                  <p className="text-white/25 text-xs">
                    Commerce · Tech · Strategy
                  </p>
                </div>
              </div>

              {/* Bottom glass tag */}
              <div className="absolute bottom-5 left-5 right-5 glass rounded-xl px-4 py-3"
                style={{ border:"1px solid rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"
                    style={{ boxShadow:"0 0 6px #4ade80" }}/>
                  <span className="text-xs font-display text-white/60">
                    Open for new projects
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl hidden lg:block"
              style={{
                background: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.2)",
              }}/>
          </div>

          {/* ── RIGHT: text ── */}
          <div>
            <div className="label-tag">About Me</div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-5 leading-tight">
              Commerce Brain.<br/>
              <span className="text-gold-gradient">Tech Skills.</span> Real Results.
            </h2>
            <p className="text-white/50 leading-relaxed mb-4">
              Hi! I'm Sudhan M — founder of <span className="text-gold font-semibold">StartlyHub</span>,
              a freelance web development studio built for small businesses. I come from a commerce
              background, which means I understand how real businesses work — not just how websites look.
              That makes all the difference.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              Whether you're a local shop needing your first website, a startup wanting a sharp landing
              page, or a freelancer wanting to showcase your work — I help you get online without
              breaking the bank. Simple, useful, and built for real business goals.
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-3">
              {SKILLS.map(({ icon: Icon, label, desc }) => (
                <div key={label}
                  className="glass glow-hover rounded-xl p-4"
                  style={{ border:"1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2"
                    style={{ background:"rgba(245,158,11,0.1)" }}>
                    <Icon size={17} style={{ color:"#F59E0B" }}/>
                  </div>
                  <p className="font-display font-semibold text-sm text-white">{label}</p>
                  <p className="text-xs text-white/35 mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
