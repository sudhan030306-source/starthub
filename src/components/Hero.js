"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

// ── EDIT HERO COPY HERE ──────────────────────────────────────────────────────
const HERO = {
  badge:    "Available for freelance projects",
  line1:    "Affordable Websites",
  line2:    "That Actually Work",
  line3:    "For Your Business.",
  sub:      "I build clean, modern, and mobile-ready websites for small businesses, local shops, startups, and personal brands — at a price that makes real sense.",
  cta1:     { label: "Get Your Website Built", href: "#contact"  },
  cta2:     { label: "View My Work",            href: "#projects" },
  stats: [
    { value: "10+",   label: "Projects"         },
    { value: "100%",  label: "Satisfaction"      },
    { value: "48hr",  label: "First Draft"       },
  ],
};

// ── 3D Rotating Cube (CSS only) ──────────────────────────────────────────────
function Cube3D({ size = 160, speed = 16, opacity = 0.9 }) {
  const half = size / 2;
  const faces = [
    { cls: "front",  tx: `translateZ(${half}px)` },
    { cls: "back",   tx: `rotateY(180deg) translateZ(${half}px)` },
    { cls: "right",  tx: `rotateY(90deg)  translateZ(${half}px)` },
    { cls: "left",   tx: `rotateY(-90deg) translateZ(${half}px)` },
    { cls: "top",    tx: `rotateX(90deg)  translateZ(${half}px)` },
    { cls: "bottom", tx: `rotateX(-90deg) translateZ(${half}px)` },
  ];
  return (
    <div
      style={{
        width: size, height: size,
        transformStyle: "preserve-3d",
        animation: `rotateCube ${speed}s linear infinite`,
        opacity,
        position: "relative",
      }}
    >
      {faces.map((f) => (
        <div
          key={f.cls}
          style={{
            position: "absolute",
            width: size, height: size,
            border: "1px solid rgba(255,255,255,0.1)",
            background:
              f.cls === "front"
                ? "linear-gradient(135deg,rgba(249,115,22,0.09),rgba(255,255,255,0.02))"
                : "linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))",
            transform: f.tx,
            backdropFilter: "blur(2px)",
          }}
        />
      ))}
      <style>{`
        @keyframes rotateCube {
          0%   { transform: rotateX(20deg) rotateY(0deg); }
          100% { transform: rotateX(20deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}

// ── Coin / Disc shape ────────────────────────────────────────────────────────
function CoinDisc({ size = 130 }) {
  return (
    <div
      style={{
        width: size, height: size,
        borderRadius: "50%",
        border: "10px solid rgba(255,255,255,0.12)",
        background: "linear-gradient(135deg,rgba(255,255,255,0.05),rgba(249,115,22,0.06))",
        boxShadow: "inset 0 0 40px rgba(249,115,22,0.08), 0 0 60px rgba(249,115,22,0.12)",
        animation: "floatCoin 4s ease-in-out infinite",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      {/* Inner ring */}
      <div style={{
        width: size * 0.55, height: size * 0.55,
        borderRadius: "50%",
        border: "6px solid rgba(249,115,22,0.25)",
        background: "rgba(249,115,22,0.06)",
      }} />
      <style>{`
        @keyframes floatCoin {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-16px) rotate(8deg); }
        }
      `}</style>
    </div>
  );
}

// ── Floating particle dots ────────────────────────────────────────────────────
const PARTICLES = [
  { x: "10%",  y: "20%", d: 3, delay: "0s",   dur: "4s"  },
  { x: "80%",  y: "15%", d: 2, delay: "0.5s", dur: "5s"  },
  { x: "60%",  y: "75%", d: 4, delay: "1s",   dur: "3.5s"},
  { x: "25%",  y: "65%", d: 2, delay: "1.5s", dur: "6s"  },
  { x: "90%",  y: "50%", d: 3, delay: "0.8s", dur: "4.5s"},
  { x: "45%",  y: "35%", d: 2, delay: "2s",   dur: "5.5s"},
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center hero-grid overflow-hidden"
      style={{ background: "#08080F" }}
    >
      {/* ── Radial orange glow centre-left ── */}
      <div style={{
        position:"absolute", top:"50%", left:"30%",
        transform:"translate(-50%,-50%)",
        width:600, height:600,
        borderRadius:"50%",
        background:"radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)",
        pointerEvents:"none",
      }} />

      {/* ── Floating particles ── */}
      {PARTICLES.map((p, i) => (
        <div key={i} style={{
          position:"absolute", left:p.x, top:p.y,
          width:p.d, height:p.d, borderRadius:"50%",
          background:"rgba(249,115,22,0.5)",
          animation:`particleFloat ${p.dur} ease-in-out infinite ${p.delay}`,
          pointerEvents:"none",
        }} />
      ))}
      <style>{`
        @keyframes particleFloat {
          0%,100% { transform:translateY(0); opacity:0.5; }
          50%      { transform:translateY(-20px); opacity:1; }
        }
      `}</style>

      {/* ── Main content grid ── */}
      <div className="container-max section-padding w-full">
        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:48, alignItems:"center" }}
          className="lg:grid-cols-2">

          {/* LEFT — Text ── */}
          <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.1s" }}>

            {/* Badge */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"rgba(249,115,22,0.1)", border:"1px solid rgba(249,115,22,0.25)",
              borderRadius:999, padding:"6px 14px", marginBottom:24,
              animation: visible ? "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards" : "none",
              opacity:0,
            }}>
              <span style={{ width:7, height:7, background:"#4ADE80", borderRadius:"50%",
                animation:"pulse 2s ease-in-out infinite" }} />
              <span style={{ fontSize:11, fontWeight:700, fontFamily:"'Sora',sans-serif",
                letterSpacing:"0.08em", color:"#F97316", textTransform:"uppercase" }}>
                {HERO.badge}
              </span>
              <style>{`
                @keyframes fade-up {
                  from { opacity:0; transform:translateY(28px); }
                  to   { opacity:1; transform:translateY(0); }
                }
                @keyframes pulse {
                  0%,100% { box-shadow:0 0 0 0 rgba(74,222,128,0.4); }
                  50%     { box-shadow:0 0 0 5px rgba(74,222,128,0); }
                }
              `}</style>
            </div>

            {/* Headline */}
            <div style={{ marginBottom:24 }}>
              {[HERO.line1, HERO.line2, HERO.line3].map((line, i) => (
                <div key={i} style={{
                  overflow:"hidden",
                  animation: `fade-up 0.7s cubic-bezier(0.16,1,0.3,1) ${0.1 + i*0.1}s forwards`,
                  opacity: 0,
                }}>
                  <h1 style={{
                    fontFamily:"'Sora',sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(36px, 5vw, 58px)",
                    lineHeight: 1.08,
                    marginBottom: 4,
                    color: i === 0 ? undefined : "#FFFFFF",
                    ...(i === 0 ? {
                      background:"linear-gradient(135deg,#F97316 0%,#FBBF24 55%,#F97316 100%)",
                      backgroundSize:"200% auto",
                      WebkitBackgroundClip:"text",
                      WebkitTextFillColor:"transparent",
                      backgroundClip:"text",
                      animation:"shimmer 3s linear infinite",
                    } : {}),
                  }}>
                    {line}
                  </h1>
                </div>
              ))}
            </div>

            {/* Subtext */}
            <p style={{
              color:"rgba(255,255,255,0.55)", fontSize:17, lineHeight:1.75,
              maxWidth:500, marginBottom:36,
              animation:"fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s forwards", opacity:0,
            }}>
              {HERO.sub}
            </p>

            {/* CTAs */}
            <div style={{
              display:"flex", flexWrap:"wrap", gap:12, marginBottom:48,
              animation:"fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.5s forwards", opacity:0,
            }}>
              <a href={HERO.cta1.href} className="btn-primary" style={{ fontSize:15 }}>
                {HERO.cta1.label} <ArrowRight size={16} />
              </a>
              <a href={HERO.cta2.href} className="btn-ghost" style={{ fontSize:15 }}>
                {HERO.cta2.label}
              </a>
            </div>

            {/* Stats row */}
            <div style={{
              display:"flex", gap:32, flexWrap:"wrap",
              animation:"fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.6s forwards", opacity:0,
            }}>
              {HERO.stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily:"'Sora',sans-serif", fontWeight:800,
                    fontSize:26, color:"#F97316" }}>{s.value}</div>
                  <div style={{ fontSize:12, color:"rgba(255,255,255,0.4)",
                    fontWeight:500, marginTop:2 }}>{s.label}</div>
                </div>
              ))}
              <div style={{ width:1, background:"rgba(255,255,255,0.08)", alignSelf:"stretch" }} />
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <span style={{ width:8, height:8, background:"#4ADE80",
                  borderRadius:"50%", display:"inline-block" }} />
                <span style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>
                  Open for projects
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — 3D Scene ── */}
          <div className="hidden lg:flex" style={{
            alignItems:"center", justifyContent:"center",
            position:"relative", height:480,
            animation:"fade-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards", opacity:0,
          }}>
            {/* Perspective wrapper */}
            <div style={{ perspective: 900, position:"relative", width:400, height:400 }}>

              {/* Grid floor lines */}
              <div style={{
                position:"absolute", inset:0,
                backgroundImage:"linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
                backgroundSize:"40px 40px",
                transform:"rotateX(50deg) translateY(60px)",
                opacity:0.6,
                borderRadius:8,
              }} />

              {/* Large cube — back/right */}
              <div style={{
                position:"absolute", top:"5%", right:"5%",
                animation:"rotateBigCube 18s linear infinite",
              }}>
                <Cube3D size={180} />
              </div>
              <style>{`
                @keyframes rotateBigCube {
                  0%   { transform: rotateX(18deg) rotateY(0deg); }
                  100% { transform: rotateX(18deg) rotateY(360deg); }
                }
              `}</style>

              {/* Coin — front/centre */}
              <div style={{ position:"absolute", bottom:"15%", left:"15%" }}>
                <CoinDisc size={130} />
              </div>

              {/* Small cube — top left */}
              <div style={{
                position:"absolute", top:"10%", left:"10%",
                animation:"rotateSmallCube 10s linear infinite reverse",
              }}>
                <Cube3D size={70} speed={10} opacity={0.5} />
              </div>
              <style>{`
                @keyframes rotateSmallCube {
                  0%   { transform: rotateX(25deg) rotateY(0deg); }
                  100% { transform: rotateX(25deg) rotateY(360deg); }
                }
              `}</style>

              {/* Orange glow blob */}
              <div style={{
                position:"absolute", bottom:"20%", right:"20%",
                width:120, height:120, borderRadius:"50%",
                background:"radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)",
                filter:"blur(20px)",
                animation:"glowPulse 3s ease-in-out infinite",
                pointerEvents:"none",
              }} />
              <style>{`
                @keyframes glowPulse {
                  0%,100% { opacity:0.6; transform:scale(1); }
                  50%     { opacity:1;   transform:scale(1.2); }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)",
        display:"flex", flexDirection:"column", alignItems:"center", gap:4,
        color:"rgba(255,255,255,0.3)",
      }}>
        <span style={{ fontSize:11, fontFamily:"'Sora',sans-serif", letterSpacing:"0.1em" }}>
          SCROLL
        </span>
        <ChevronDown size={16} style={{ animation:"bounceDown 1.5s ease-in-out infinite" }} />
        <style>{`
          @keyframes bounceDown {
            0%,100% { transform:translateY(0); }
            50%      { transform:translateY(5px); }
          }
        `}</style>
      </div>
    </section>
  );
}
