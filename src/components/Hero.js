"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top  = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden geo-grid"
      style={{ background: "#07070A" }}>

      {/* Cursor glow */}
      <div ref={glowRef} className="cursor-glow hidden lg:block"/>

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background:"radial-gradient(circle,rgba(245,158,11,0.055) 0%,transparent 65%)" }}/>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background:"radial-gradient(circle,rgba(80,100,200,0.055) 0%,transparent 70%)" }}/>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-24 pb-16 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: copy ── */}
          <div>
            {/* Available badge */}
            <div className="label-tag animate-fade-up d1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
                style={{ boxShadow:"0 0 6px #4ade80" }}/>
              Available for projects
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-[66px]
                           leading-[1.05] tracking-tight mb-6 animate-fade-up d2">
              Affordable<br/>
              Websites that<br/>
              <span className="text-gold-gradient">Help You Grow</span>
            </h1>

            <p className="text-white/50 text-lg leading-relaxed max-w-lg mb-10 animate-fade-up d3">
              I build clean, fast, mobile-first websites for small businesses, local shops,
              startups, and personal brands — at a price that actually makes sense.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12 animate-fade-up d4">
              <a href="#contact" className="btn-gold">
                Get Your Website Built <ArrowRight size={16}/>
              </a>
              <a href="#projects" className="btn-ghost">
                View My Work
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 animate-fade-up d5">
              {[
                { v:"10+",  l:"Projects"      },
                { v:"100%", l:"Satisfaction"  },
                { v:"48hr", l:"First Draft"   },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-display font-extrabold text-2xl text-gold">{s.v}</div>
                  <div className="text-xs text-white/35 mt-0.5 font-display">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: 3D geometric scene + logo card ── */}
          <div className="hidden lg:flex items-center justify-center relative h-[520px]">

            {/* Floating brand card */}
            <div className="absolute top-[6%] left-[5%] z-10 glass rounded-2xl px-5 py-4 flex items-center gap-3 animate-float"
              style={{ border:"1px solid rgba(255,255,255,0.1)", animationDelay:"0.3s" }}>
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="StartlyHub" fill className="object-contain"
                  style={{ filter:"brightness(0) invert(1)" }}/>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-white tracking-wider uppercase">
                  Startly<span className="text-gold">Hub</span>
                </p>
                <p className="text-[10px] text-white/30 font-display">by Sudhan M</p>
              </div>
            </div>

            {/* Status pill */}
            <div className="absolute top-[22%] right-[4%] glass rounded-xl px-3 py-2 animate-float"
              style={{ border:"1px solid rgba(74,222,128,0.2)", animationDelay:"1s" }}>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"
                  style={{ boxShadow:"0 0 5px #4ade80" }}/>
                <span className="text-[11px] font-display text-green-400 font-semibold">Open for work</span>
              </div>
            </div>

            {/* Main 3D geometry */}
            <GeometryScene/>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20">
        <span className="text-[10px] font-display tracking-widest uppercase">scroll</span>
        <ChevronDown size={15} className="animate-bounce"/>
      </div>
    </section>
  );
}

/* ── 3D Geometric SVG Scene ─────────────────────────────────────────────── */
function GeometryScene() {
  return (
    <div className="relative w-full h-full geo-glow">

      {/* ── Large dark metallic cube ── */}
      <div className="absolute top-[10%] right-[2%] animate-float" style={{ animationDelay:"0s" }}>
        <svg width="230" height="230" viewBox="0 0 230 230" fill="none">
          {/* Top face */}
          <path d="M115 18 L210 64 L115 110 L20 64 Z" fill="url(#cubeTop)"
            stroke="rgba(255,255,255,0.13)" strokeWidth="0.8"/>
          {/* Right face */}
          <path d="M210 64 L210 156 L115 202 L115 110 Z" fill="url(#cubeRight)"
            stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>
          {/* Left face */}
          <path d="M20 64 L115 110 L115 202 L20 156 Z" fill="url(#cubeLeft)"
            stroke="rgba(255,255,255,0.03)" strokeWidth="0.8"/>
          <defs>
            <linearGradient id="cubeTop" x1="20" y1="18" x2="210" y2="110" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3A3A52"/>
              <stop offset="100%" stopColor="#1E1E2E"/>
            </linearGradient>
            <linearGradient id="cubeRight" x1="115" y1="64" x2="210" y2="202" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#252538"/>
              <stop offset="100%" stopColor="#0F0F1A"/>
            </linearGradient>
            <linearGradient id="cubeLeft" x1="20" y1="64" x2="115" y2="202" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1A1A28"/>
              <stop offset="100%" stopColor="#0A0A12"/>
            </linearGradient>
          </defs>
          {/* Edge highlights */}
          <line x1="115" y1="18" x2="210" y2="64" stroke="rgba(255,255,255,0.22)" strokeWidth="1"/>
          <line x1="20"  y1="64" x2="115" y2="18" stroke="rgba(255,255,255,0.14)" strokeWidth="1"/>
          <line x1="115" y1="110" x2="115" y2="202" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8"/>
        </svg>
      </div>

      {/* ── Smaller gold-tinted cube ── */}
      <div className="absolute top-[42%] right-[55%] animate-float" style={{ animationDelay:"1.6s" }}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <path d="M50 10 L90 30 L50 50 L10 30 Z" fill="url(#smCubeTop)"
            stroke="rgba(245,158,11,0.25)" strokeWidth="0.8"/>
          <path d="M90 30 L90 70 L50 90 L50 50 Z" fill="url(#smCubeRight)"
            stroke="rgba(245,158,11,0.12)" strokeWidth="0.8"/>
          <path d="M10 30 L50 50 L50 90 L10 70 Z" fill="url(#smCubeLeft)"
            stroke="rgba(255,255,255,0.04)" strokeWidth="0.8"/>
          <defs>
            <linearGradient id="smCubeTop" x1="10" y1="10" x2="90" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4A3C1A"/>
              <stop offset="100%" stopColor="#2A2210"/>
            </linearGradient>
            <linearGradient id="smCubeRight" x1="50" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2E2412"/>
              <stop offset="100%" stopColor="#14100A"/>
            </linearGradient>
            <linearGradient id="smCubeLeft" x1="10" y1="30" x2="50" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E1A0C"/>
              <stop offset="100%" stopColor="#0C0A06"/>
            </linearGradient>
          </defs>
          <line x1="50" y1="10" x2="90" y2="30" stroke="rgba(245,158,11,0.55)" strokeWidth="1"/>
          <line x1="10" y1="30" x2="50" y2="10" stroke="rgba(245,158,11,0.38)" strokeWidth="1"/>
        </svg>
      </div>

      {/* ── Metallic coin / disc ── */}
      <div className="absolute bottom-[10%] right-[10%] animate-float" style={{ animationDelay:"0.9s" }}>
        <svg width="170" height="84" viewBox="0 0 170 84" fill="none">
          <ellipse cx="85" cy="60" rx="76" ry="22" fill="url(#coinBody)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8"/>
          <ellipse cx="85" cy="36" rx="76" ry="22" fill="url(#coinTop)"  stroke="rgba(255,255,255,0.14)" strokeWidth="0.8"/>
          <ellipse cx="85" cy="36" rx="52" ry="15" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1.2"/>
          <ellipse cx="85" cy="36" rx="30" ry="8.5" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <ellipse cx="85" cy="36" rx="14" ry="4" fill="url(#coinCenter)"/>
          <path d="M9 36 Q9 60 85 82 Q161 60 161 36" fill="url(#coinSide)"/>
          <defs>
            <linearGradient id="coinTop" x1="9" y1="14" x2="161" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%"  stopColor="#3E3E54"/>
              <stop offset="40%" stopColor="#5C5C78"/>
              <stop offset="100%" stopColor="#2A2A3C"/>
            </linearGradient>
            <linearGradient id="coinBody" x1="9" y1="36" x2="161" y2="82" gradientUnits="userSpaceOnUse">
              <stop offset="0%"  stopColor="#1E1E2C"/>
              <stop offset="100%" stopColor="#0C0C14"/>
            </linearGradient>
            <linearGradient id="coinSide" x1="9" y1="36" x2="161" y2="82" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#28283A"/>
              <stop offset="100%" stopColor="#10101A"/>
            </linearGradient>
            <radialGradient id="coinCenter" cx="50%" cy="50%" r="50%">
              <stop offset="0%"  stopColor="rgba(255,255,255,0.35)"/>
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)"/>
            </radialGradient>
          </defs>
          <path d="M28 29 Q85 16 142 29" stroke="rgba(255,255,255,0.22)" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      {/* ── Gold glow orb ── */}
      <div className="absolute top-[35%] right-[22%] w-3 h-3 rounded-full animate-float"
        style={{
          animationDelay:"2.2s",
          background:"#F59E0B",
          boxShadow:"0 0 18px rgba(245,158,11,0.9), 0 0 50px rgba(245,158,11,0.3)",
        }}/>

      {/* ── Dot particles ── */}
      {[
        {t:"18%", r:"68%", d:"0.4s", s:"6px"},
        {t:"78%", r:"25%", d:"1.3s", s:"5px"},
        {t:"88%", r:"75%", d:"0.6s", s:"4px"},
      ].map((p,i) => (
        <div key={i} className="absolute rounded-full bg-white/15 animate-float"
          style={{ top:p.t, right:p.r, animationDelay:p.d, width:p.s, height:p.s }}/>
      ))}

      {/* ── Horizontal glowing line ── */}
      <div className="absolute bottom-[28%] left-[5%] right-[5%] h-px"
        style={{ background:"linear-gradient(90deg,transparent,rgba(245,158,11,0.15),transparent)" }}/>

      {/* ── Floor reflection glow ── */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background:"linear-gradient(to top,rgba(245,158,11,0.025) 0%,transparent 100%)" }}/>
    </div>
  );
}
