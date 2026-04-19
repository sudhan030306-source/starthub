"use client";
import { BadgeDollarSign, Paintbrush2, Smartphone, MessageSquare, HandHeart, Wrench } from "lucide-react";

const REASONS = [
  { icon: BadgeDollarSign, title: "Genuinely Affordable",      desc: "Fair pricing designed for small businesses and individuals — not corporates." },
  { icon: Paintbrush2,     title: "Clean, Modern Design",      desc: "No outdated templates. Every site looks contemporary and represents your brand properly." },
  { icon: Smartphone,      title: "100% Mobile Responsive",    desc: "Optimized for phones from day one — because that's where most of your visitors come from." },
  { icon: MessageSquare,   title: "Fast Communication",        desc: "No ghosting, no long waits. You'll always know the status and I reply quickly." },
  { icon: HandHeart,       title: "Beginner-Friendly Process", desc: "You don't need to know anything about websites. I explain everything in plain language." },
  { icon: Wrench,          title: "Business-First Thinking",   desc: "Commerce background means I build for real goals — not just pretty designs with no purpose." },
];

export default function WhyChooseMe() {
  return (
    <section className="section-padding" style={{ background:"#08080F", position:"relative", overflow:"hidden" }}>
      {/* Background glow */}
      <div style={{
        position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)",
        width:600, height:300,
        background:"radial-gradient(ellipse, rgba(249,115,22,0.06), transparent 70%)",
        pointerEvents:"none",
      }} />

      <div className="container-max" style={{ position:"relative" }}>
        <div style={{ textAlign:"center", maxWidth:600, margin:"0 auto 56px" }}>
          <span className="section-label">Why Work With Me</span>
          <h2 style={{ fontFamily:"'Sora',sans-serif", fontWeight:800,
            fontSize:"clamp(28px,3.5vw,42px)", color:"#FFFFFF", marginBottom:14, lineHeight:1.2 }}>
            The Partner Small Businesses Actually Need
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:15, lineHeight:1.75 }}>
            There are thousands of web developers out there. Here's what makes working with me different.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:16 }}>
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-hover" style={{
              padding:"24px 22px", borderRadius:18,
              background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)",
            }}>
              <div style={{
                width:42, height:42, borderRadius:12, marginBottom:14,
                background:"rgba(249,115,22,0.1)",
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                <Icon size={20} color="#F97316" />
              </div>
              <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700,
                fontSize:15, color:"#FFFFFF", marginBottom:6 }}>{title}</h3>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.42)", lineHeight:1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{
          marginTop:48, borderRadius:20,
          background:"linear-gradient(135deg,rgba(249,115,22,0.15),rgba(249,115,22,0.05))",
          border:"1px solid rgba(249,115,22,0.25)",
          padding:"32px 36px",
          display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:20,
        }}>
          <div>
            <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:20,
              color:"#FFFFFF", marginBottom:4 }}>
              Ready to get your website built?
            </h3>
            <p style={{ color:"rgba(255,255,255,0.45)", fontSize:14 }}>
              Let's have a free, no-pressure chat about your project.
            </p>
          </div>
          <a href="#contact" className="btn-primary" style={{ flexShrink:0 }}>
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
