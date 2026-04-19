"use client";
import { Code2, BarChart2, BookOpen, Lightbulb, ArrowRight } from "lucide-react";

const SKILLS = [
  { icon: Code2,      label: "Web Development",      desc: "Next.js, React, Tailwind, HTML/CSS" },
  { icon: BarChart2,  label: "Data & Dashboards",     desc: "Power BI, Python, SQL, Excel"       },
  { icon: BookOpen,   label: "Business Tools",        desc: "Tally, ERP basics, Finance workflows"},
  { icon: Lightbulb,  label: "Business Thinking",     desc: "Commerce background, practical mindset"},
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background:"#0D0D1A" }}>
      <div className="container-max">

        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:64, alignItems:"center" }}
          className="lg:grid-cols-2">

          {/* LEFT — Visual panel */}
          <div style={{ position:"relative" }}>

            {/* Main card */}
            <div style={{
              background:"rgba(255,255,255,0.03)",
              border:"1px solid rgba(255,255,255,0.08)",
              borderRadius:24, padding:"40px 36px", position:"relative", overflow:"hidden",
            }}>
              {/* Orange corner accent */}
              <div style={{
                position:"absolute", top:0, right:0,
                width:120, height:120,
                background:"radial-gradient(circle at top right, rgba(249,115,22,0.15), transparent 70%)",
                pointerEvents:"none",
              }} />

              {/* Initials avatar */}
              <div style={{
                width:72, height:72, borderRadius:18, marginBottom:20,
                background:"linear-gradient(135deg,#F97316,#EA580C)",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:26, color:"white",
                boxShadow:"0 8px 28px rgba(249,115,22,0.4)",
              }}>
                SM
              </div>

              <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:20,
                color:"#FFFFFF", marginBottom:6 }}>
                Sudhan M
              </h3>
              <p style={{ color:"rgba(255,255,255,0.45)", fontSize:13, marginBottom:24 }}>
                Freelance Web Developer · Commerce Graduate
              </p>

              <div style={{ height:1, background:"rgba(255,255,255,0.07)", marginBottom:20 }} />

              {/* AI development note */}
              <div style={{
                padding:"10px 14px", borderRadius:10,
                background:"rgba(249,115,22,0.07)", border:"1px solid rgba(249,115,22,0.18)",
                display:"flex", alignItems:"center", gap:8, marginBottom:12,
              }}>
                <span style={{ fontSize:14 }}>✦</span>
                <span style={{ fontSize:12, color:"rgba(255,255,255,0.55)" }}>
                  Websites built with AI-assisted development
                </span>
              </div>

              {/* Currently working */}
              <div style={{
                marginTop:24, padding:"10px 14px", borderRadius:10,
                background:"rgba(74,222,128,0.07)", border:"1px solid rgba(74,222,128,0.15)",
                display:"flex", alignItems:"center", gap:8,
              }}>
                <span style={{ width:7, height:7, background:"#4ADE80",
                  borderRadius:"50%", flexShrink:0,
                  boxShadow:"0 0 8px rgba(74,222,128,0.6)" }} />
                <span style={{ fontSize:12, color:"rgba(255,255,255,0.55)" }}>
                  Currently open for new projects
                </span>
              </div>
            </div>

            {/* Decorative floating squares */}
            <div style={{
              position:"absolute", top:-16, right:-16, width:48, height:48,
              border:"1px solid rgba(249,115,22,0.25)", borderRadius:8,
              animation:"floatSquare 4s ease-in-out infinite",
            }} />
            <div style={{
              position:"absolute", bottom:-12, left:-12, width:32, height:32,
              background:"rgba(249,115,22,0.12)", borderRadius:6,
              animation:"floatSquare 5s ease-in-out infinite reverse",
            }} />
            <style>{`
              @keyframes floatSquare {
                0%,100% { transform:translateY(0) rotate(0deg); }
                50%      { transform:translateY(-10px) rotate(5deg); }
              }
            `}</style>
          </div>

          {/* RIGHT — Text */}
          <div>
            <span className="section-label">About Me</span>
            <h2 style={{
              fontFamily:"'Sora',sans-serif", fontWeight:800,
              fontSize:"clamp(28px,3.5vw,42px)", lineHeight:1.15,
              color:"#FFFFFF", marginBottom:20,
            }}>
              Commerce Brain.<br/>
              <span style={{
                background:"linear-gradient(135deg,#F97316,#FBBF24)",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
              }}>Tech Skills.</span> Real Results.
            </h2>

            <p style={{ color:"rgba(255,255,255,0.55)", lineHeight:1.8, marginBottom:16, fontSize:15 }}>
              Hi, I'm Sudhan M — a freelance web developer and business tech specialist based in India.
              I come from a commerce background, which means I understand how real businesses work,
              not just how websites look.
            </p>
            <p style={{ color:"rgba(255,255,255,0.55)", lineHeight:1.8, marginBottom:32, fontSize:15 }}>
              Whether you're a local shop needing your first website, a startup wanting a clean landing page,
              or a freelancer looking to showcase your work — I can help you get online without breaking the bank.
            </p>

            {/* Skills grid */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:32 }}>
              {SKILLS.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="card-hover" style={{
                  background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)",
                  borderRadius:14, padding:"16px",
                }}>
                  <div style={{
                    width:36, height:36, background:"rgba(249,115,22,0.1)",
                    borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center",
                    marginBottom:10,
                  }}>
                    <Icon size={17} color="#F97316" />
                  </div>
                  <p style={{ fontFamily:"'Sora',sans-serif", fontWeight:600,
                    fontSize:13, color:"#FFFFFF", marginBottom:3 }}>{label}</p>
                  <p style={{ fontSize:11, color:"rgba(255,255,255,0.35)" }}>{desc}</p>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary" style={{ fontSize:14 }}>
              Let's Build Something <ArrowRight size={15}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
