"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Services", href: "#services" },
  { label: "Work",     href: "#projects" },
  { label: "Pricing",  href: "#pricing"  },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <header style={{
      position:"fixed", top:0, left:0, right:0, zIndex:50,
      transition:"all 0.3s ease",
      background: scrolled ? "rgba(8,8,15,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
    }}>
      <div className="container-max" style={{
        display:"flex", alignItems:"center", justifyContent:"space-between",
        height:64, padding:"0 24px",
      }}>
        {/* Logo — StartlyHub */}
        <a href="#home" style={{ display:"flex", alignItems:"center", textDecoration:"none" }}>
          {/* White pill background keeps the original dark logo perfectly visible on dark navbar */}
          <div style={{
            background:"#FFFFFF",
            borderRadius:10,
            padding:"5px 12px",
            display:"flex", alignItems:"center", justifyContent:"center",
            height:42,
            boxShadow:"0 2px 12px rgba(255,255,255,0.08)",
          }}>
            <Image
              src="/logo.png"
              alt="StartlyHub"
              width={110}
              height={32}
              style={{ objectFit:"contain", height:30, width:"auto" }}
              priority
            />
          </div>
        </a>

        {/* Desktop nav */}
        <nav style={{ display:"flex", alignItems:"center", gap:32 }} className="hidden md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a href="#contact" className="btn-primary hidden md:inline-flex"
          style={{ padding:"10px 20px", fontSize:14 }}>
          Let's Work Together
        </a>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color:"#fff", background:"none", border:"none", cursor:"pointer", padding:8 }}>
          {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background:"rgba(8,8,15,0.97)", borderTop:"1px solid rgba(255,255,255,0.06)",
          padding:"16px 24px", display:"flex", flexDirection:"column", gap:16,
        }} className="md:hidden">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}
              style={{ fontSize:15, color:"rgba(255,255,255,0.75)", fontWeight:500, textDecoration:"none" }}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={close} className="btn-primary"
            style={{ justifyContent:"center", marginTop:8 }}>
            Let's Work Together
          </a>
        </div>
      )}
    </header>
  );
}
