"use client";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

const HERO = {
  badge:  "Available for freelance projects",
  line1:  "Affordable Websites",
  line2:  "That Help You Grow",
  sub:    "I build clean, modern, mobile-ready websites for small businesses, local shops, startups, and personal brands — powered by AI, delivered at a price that makes real sense.",
  cta1:   { label: "Get Your Website Built", href: "#contact"  },
  cta2:   { label: "View My Work",           href: "#projects" },
  pills: ["AI-Assisted Development", "Mobile-First", "Fast Delivery", "Affordable"],
};

// ── 3D rotating cube (CSS only) ─────────────────────────────────────────────
function Cube3D({ size = 160, duration = 16, opacity = 0.9, animName = "cube1" }) {
  const h = size / 2;
  const faces = [
    { tx:`translateZ(${h}px)`,                         accent: true  },
    { tx:`rotateY(180deg) translateZ(${h}px)`,         accent: false },
    { tx:`rotateY(90deg) translateZ(${h}px)`,          accent: false },
    { tx:`rotateY(-90deg) translateZ(${h}px)`,         accent: false },
    { tx:`rotateX(90deg) translateZ(${h}px)`,          accent: false },
    { tx:`rotateX(-90deg) translateZ(${h}px)`,         accent: false },
  ];
  return (
    <>
      <style>{`
        @keyframes ${animName} {
          0%   { transform: rotateX(20deg) rotateY(0deg);   }
          100% { transform: rotateX(20deg) rotateY(360deg); }
        }
      `}</style>
      <div style={{
        width:size, height:size,
        transformStyle:"preserve-3d",
        animation:`${animName} ${duration}s linear infinite`,
        opacity, position:"relative",
      }}>
        {faces.map((f, i) => (
          <div key={i} style={{
            position:"absolute", width:size, height:size,
            border:"1px solid rgba(255,255,255,0.10)",
            background: f.accent
              ? "linear-gradient(135deg,rgba(249,115,22,0.12),rgba(255,255,255,0.02))"
              : "linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))",
            transform: f.tx,
          }}/>
        ))}
      </div>
    </>
  );
}

// ── Coin disc ────────────────────────────────────────────────────────────────
function Coin({ size = 120 }) {
  return (
    <>
      <style>{`@keyframes coinFloat{0%,100%{transform:translateY(0) rotate(0deg);}50%{transform:translateY(-18px) rotate(6deg);}}`}</style>
      <div style={{
        width:size, height:size, borderRadius:"50%",
        border:"10px solid rgba(255,255,255,0.10)",
        background:"linear-gradient(135deg,rgba(255,255,255,0.04),rgba(249,115,22,0.07))",
        boxShadow:"inset 0 0 40px rgba(249,115,22,0.08), 0 0 60px rgba(249,115,22,0.10)",
        animation:"coinFloat 4.5s ease-in-out infinite",
        display:"flex", alignItems:"center", justifyContent:"center",
      }}>
        <div style={{
          width:size*0.52, height:size*0.52, borderRadius:"50%",
          border:"5px solid rgba(249,115,22,0.22)",
          background:"rgba(249,115,22,0.05)",
        }}/>
      </div>
    </>
  );
}

// ── Floating particles ───────────────────────────────────────────────────────
const DOTS = [
  {x:"8%", y:"22%", d:3, dur:"4s",   del:"0s"   },
  {x:"82%",y:"14%", d:2, dur:"5s",   del:"0.5s" },
  {x:"62%",y:"74%", d:4, dur:"3.5s", del:"1s"   },
  {x:"22%",y:"68%", d:2, dur:"6s",   del:"1.5s" },
  {x:"91%",y:"52%", d:3, dur:"4.5s", del:"0.8s" },
  {x:"44%",y:"34%", d:2, dur:"5.5s", del:"2s"   },
];

export default function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 60); return () => clearTimeout(t); }, []);

  return (
    <section id="home" style={{
      position:"relative", minHeight:"100vh",
      display:"flex", flexDirection:"column", justifyContent:"center",
      background:"#08080F", overflow:"hidden",
    }}>
      {/* Grid overlay */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"linear-gradient(rgba(249,115,22,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.04) 1px,transparent 1px)",
        backgroundSize:"56px 56px",
      }}/>

      {/* Orange glow */}
      <div style={{
        position:"absolute", top:"50%", left:"28%",
        transform:"translate(-50%,-50%)",
        width:640, height:640, borderRadius:"50%",
        background:"radial-gradient(circle,rgba(249,115,22,0.09) 0%,transparent 70%)",
        pointerEvents:"none",
      }}/>

      {/* Particles */}
      <style>{`@keyframes pFloat{0%,100%{transform:translateY(0);opacity:0.5;}50%{transform:translateY(-22px);opacity:1;}}`}</style>
      {DOTS.map((p,i)=>(
        <div key={i} style={{
          position:"absolute", left:p.x, top:p.y,
          width:p.d, height:p.d, borderRadius:"50%",
          background:"rgba(249,115,22,0.55)",
          animation:`pFloat ${p.dur} ease-in-out infinite ${p.del}`,
          pointerEvents:"none",
        }}/>
      ))}

      {/* ── Content ── */}
      <div style={{ maxWidth:1152, margin:"0 auto", padding:"96px 24px", width:"100%" }}>
        <style>{`
          @keyframes fadeUp{from{opacity:0;transform:translateY(30px);}to{opacity:1;transform:translateY(0);}}
          @keyframes shimmer{0%{background-position:-200% center;}100%{background-position:200% center;}}
          @keyframes pulseGreen{0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,0.4);}50%{box-shadow:0 0 0 6px rgba(74,222,128,0);}}
        `}</style>

        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:48, alignItems:"center" }}
          className="lg:grid-cols-2">

          {/* LEFT */}
          <div style={{ opacity:vis?1:0, transition:"opacity 0.1s" }}>

            {/* Available badge */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"rgba(249,115,22,0.10)", border:"1px solid rgba(249,115,22,0.25)",
              borderRadius:999, padding:"7px 16px", marginBottom:28,
              animation:"fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0s forwards", opacity:0,
            }}>
              <span style={{ width:7, height:7, background:"#4ADE80", borderRadius:"50%",
                animation:"pulseGreen 2s ease-in-out infinite" }}/>
              <span style={{ fontSize:11, fontWeight:700, fontFamily:"'Sora',sans-serif",
                letterSpacing:"0.09em", color:"#F97316", textTransform:"uppercase" }}>
                {HERO.badge}
              </span>
            </div>

            {/* Headline */}
            {[HERO.line1, HERO.line2].map((line, i) => (
              <div key={i} style={{
                animation:`fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1+i*0.1}s forwards`, opacity:0,
              }}>
                <h1 style={{
                  fontFamily:"'Sora',sans-serif", fontWeight:800,
                  fontSize:"clamp(40px,5.5vw,68px)", lineHeight:1.06, marginBottom:6,
                  ...(i===0 ? {
                    background:"linear-gradient(135deg,#F97316 0%,#FBBF24 55%,#F97316 100%)",
                    backgroundSize:"200% auto",
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                    backgroundClip:"text", animation:"shimmer 3s linear infinite",
                  } : { color:"#FFFFFF" }),
                }}>
                  {line}
                </h1>
              </div>
            ))}

            {/* Sub */}
            <p style={{
              color:"rgba(255,255,255,0.52)", fontSize:17, lineHeight:1.8,
              maxWidth:500, margin:"20px 0 32px",
              animation:"fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s forwards", opacity:0,
            }}>
              {HERO.sub}
            </p>

            {/* AI badge pill */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:6,
              background:"rgba(249,115,22,0.08)", border:"1px solid rgba(249,115,22,0.2)",
              borderRadius:999, padding:"6px 14px", marginBottom:32,
              animation:"fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s forwards", opacity:0,
            }}>
              <Sparkles size={13} color="#F97316"/>
              <span style={{ fontSize:12, fontFamily:"'Sora',sans-serif", fontWeight:600,
                color:"#F97316" }}>
                Built with AI-Assisted Development
              </span>
            </div>

            {/* CTAs */}
            <div style={{
              display:"flex", flexWrap:"wrap", gap:12,
              animation:"fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s forwards", opacity:0,
            }}>
              <a href={HERO.cta1.href} className="btn-primary" style={{ fontSize:15 }}>
                {HERO.cta1.label} <ArrowRight size={16}/>
              </a>
              <a href={HERO.cta2.href} className="btn-ghost" style={{ fontSize:15 }}>
                {HERO.cta2.label}
              </a>
            </div>

            {/* Open for projects note */}
            <div style={{
              marginTop:32, display:"flex", alignItems:"center", gap:8,
              animation:"fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s forwards", opacity:0,
            }}>
              <span style={{ width:8, height:8, background:"#4ADE80",
                borderRadius:"50%", display:"inline-block" }}/>
              <span style={{ fontSize:13, color:"rgba(255,255,255,0.38)", fontWeight:500 }}>
                Open for projects · Replies within 24 hours
              </span>
            </div>
          </div>

          {/* RIGHT — 3D scene */}
          <div className="hidden lg:flex" style={{
            alignItems:"center", justifyContent:"center",
            position:"relative", height:480,
            animation:"fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s forwards", opacity:0,
          }}>
            <div style={{ perspective:900, position:"relative", width:400, height:400 }}>

              {/* Grid floor */}
              <div style={{
                position:"absolute", inset:0,
                backgroundImage:"linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
                backgroundSize:"40px 40px",
                transform:"rotateX(50deg) translateY(60px)",
                opacity:0.5, borderRadius:8,
              }}/>

              {/* Big cube */}
              <div style={{ position:"absolute", top:"4%", right:"4%" }}>
                <Cube3D size={185} duration={18} animName="bigCube"/>
              </div>

              {/* Coin */}
              <div style={{ position:"absolute", bottom:"14%", left:"12%" }}>
                <Coin size={128}/>
              </div>

              {/* Small cube */}
              <div style={{ position:"absolute", top:"8%", left:"8%",
                animation:"smallCubeAnim 11s linear infinite reverse" }}>
                <Cube3D size={68} duration={11} opacity={0.45} animName="smallCube"/>
              </div>
              <style>{`@keyframes smallCubeAnim{0%{transform:rotateX(25deg) rotateY(0deg);}100%{transform:rotateX(25deg) rotateY(360deg);}}`}</style>

              {/* Glow blob */}
              <div style={{
                position:"absolute", bottom:"18%", right:"18%",
                width:110, height:110, borderRadius:"50%",
                background:"radial-gradient(circle,rgba(249,115,22,0.28) 0%,transparent 70%)",
                filter:"blur(18px)",
                animation:"glowPulse 3s ease-in-out infinite",
                pointerEvents:"none",
              }}/>
              <style>{`@keyframes glowPulse{0%,100%{opacity:0.55;transform:scale(1);}50%{opacity:1;transform:scale(1.25);}}`}</style>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position:"absolute", bottom:28, left:"50%", transform:"translateX(-50%)",
        display:"flex", flexDirection:"column", alignItems:"center", gap:4,
        color:"rgba(255,255,255,0.25)",
      }}>
        <style>{`@keyframes bd{0%,100%{transform:translateY(0);}50%{transform:translateY(6px);}}`}</style>
        <span style={{ fontSize:10, fontFamily:"'Sora',sans-serif", letterSpacing:"0.12em" }}>SCROLL</span>
        <ChevronDown size={15} style={{ animation:"bd 1.6s ease-in-out infinite" }}/>
      </div>
    </section>
  );
}
