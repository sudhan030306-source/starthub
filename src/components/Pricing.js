"use client";
import { Check, ArrowRight } from "lucide-react";

// ── Pricing is intentionally kept custom-only.
// Every business is different — so is the price. ──────────────────────────────

const WHAT_INCLUDES = [
  "Mobile-responsive, modern design",
  "Clean code built with latest tech",
  "Fast page loading & SEO basics",
  "Contact / inquiry form setup",
  "Revisions until you're happy",
  "Free handover session post-delivery",
  "Timeline agreed before we start",
  "No hidden fees — ever",
];

const FACTORS = [
  { label: "Number of pages",          desc: "Single page to full multi-page site" },
  { label: "Features & functionality", desc: "Forms, galleries, booking, shop, etc." },
  { label: "Design complexity",        desc: "Simple clean vs elaborate custom UI"  },
  { label: "Timeline",                 desc: "Standard delivery vs rush projects"    },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding" style={{ background:"#08080F" }}>
      <div className="container-max">

        <div style={{ textAlign:"center", maxWidth:640, margin:"0 auto 56px" }}>
          <span className="section-label">Pricing</span>
          <h2 style={{
            fontFamily:"'Sora',sans-serif", fontWeight:800,
            fontSize:"clamp(28px,3.5vw,42px)", color:"#FFFFFF", marginBottom:14, lineHeight:1.2,
          }}>
            Priced Around{" "}
            <span style={{
              background:"linear-gradient(135deg,#F97316,#FBBF24)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            }}>Your Business</span>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:15, lineHeight:1.8 }}>
            Every business has different needs — a one-size pricing table doesn't make sense.
            Instead of guessing, let's have a quick conversation and I'll give you an honest,
            transparent quote with no fluff and no pressure.
          </p>
        </div>

        {/* Main two-column grid */}
        <div style={{
          display:"grid", gridTemplateColumns:"1fr", gap:24,
          maxWidth:900, margin:"0 auto",
        }} className="lg:grid-cols-2">

          {/* LEFT — What's always included */}
          <div style={{
            borderRadius:24, padding:"36px 32px",
            background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)",
          }}>
            <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700,
              fontSize:18, color:"#FFFFFF", marginBottom:6 }}>
              What Every Project Includes
            </h3>
            <p style={{ fontSize:13, color:"rgba(255,255,255,0.4)", marginBottom:24 }}>
              No matter the scope, these come standard with every website I build.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {WHAT_INCLUDES.map((item) => (
                <div key={item} style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{
                    width:20, height:20, borderRadius:"50%", flexShrink:0,
                    background:"rgba(249,115,22,0.15)", border:"1px solid rgba(249,115,22,0.3)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                    <Check size={11} color="#F97316" />
                  </div>
                  <span style={{ fontSize:14, color:"rgba(255,255,255,0.7)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Factors + CTA */}
          <div style={{ display:"flex", flexDirection:"column", gap:20 }}>

            {/* Factors card */}
            <div style={{
              borderRadius:24, padding:"32px 28px",
              background:"rgba(249,115,22,0.06)", border:"1px solid rgba(249,115,22,0.18)",
              flex:1,
            }}>
              <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700,
                fontSize:17, color:"#FFFFFF", marginBottom:6 }}>
                What Shapes the Price?
              </h3>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.4)", marginBottom:20 }}>
                These factors determine the final quote — nothing hidden.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {FACTORS.map((f) => (
                  <div key={f.label} style={{
                    padding:"12px 14px", borderRadius:12,
                    background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)",
                  }}>
                    <p style={{ fontSize:13, fontFamily:"'Sora',sans-serif",
                      fontWeight:600, color:"#FFFFFF", marginBottom:2 }}>{f.label}</p>
                    <p style={{ fontSize:11, color:"rgba(255,255,255,0.38)" }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div style={{
              borderRadius:20, padding:"24px 28px",
              background:"linear-gradient(135deg,rgba(249,115,22,0.18),rgba(249,115,22,0.06))",
              border:"1px solid rgba(249,115,22,0.3)",
              position:"relative", overflow:"hidden",
            }}>
              <div style={{
                position:"absolute", top:-20, right:-20, width:100, height:100,
                borderRadius:"50%",
                background:"radial-gradient(circle, rgba(249,115,22,0.2), transparent 70%)",
                pointerEvents:"none",
              }} />
              <p style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:17,
                color:"#FFFFFF", marginBottom:6 }}>
                Tell me about your project
              </p>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.55)", marginBottom:20 }}>
                I'll respond with a clear, no-obligation quote within 24 hours.
              </p>
              <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                <a href="/contact" className="btn-primary" style={{ fontSize:13, padding:"10px 18px" }}>
                  Get a Quote <ArrowRight size={14}/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Reassurance note */}
        <p style={{ textAlign:"center", fontSize:12, color:"rgba(255,255,255,0.25)",
          marginTop:32, maxWidth:480, marginLeft:"auto", marginRight:"auto" }}>
          First consultation is always free. Pricing is discussed openly and agreed before any work begins.
          No surprise charges, no pressure.
        </p>
      </div>
    </section>
  );
}
