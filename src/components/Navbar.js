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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-ink/85 backdrop-blur-xl border-b border-white/[0.07]"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6 md:px-10 lg:px-16">

        {/* ── Logo ── */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="StartlyHub Logo"
              fill
              className="object-contain"
              /* invert makes the dark logo marks appear white on dark bg */
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-sm tracking-widest uppercase text-white">
              Startly<span className="text-gold">Hub</span>
            </span>
            <span className="text-[9px] text-white/30 tracking-[0.2em] uppercase font-display font-medium">
              by Sudhan M
            </span>
          </div>
        </a>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="nav-l">{l.label}</a>
          ))}
        </nav>

        {/* ── CTA ── */}
        <a href="#contact" className="hidden md:inline-flex btn-gold py-2.5 px-5 text-sm">
          Get a Website Built
        </a>

        {/* ── Hamburger ── */}
        <button
          className="md:hidden text-white/60 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.07] px-6 py-5 flex flex-col gap-4 animate-fade-in"
          style={{ background: "#0C0C10" }}>
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              className="text-sm text-white/60 py-1.5 border-b border-white/[0.07] font-display">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-gold justify-center mt-1">
            Get a Website Built
          </a>
        </div>
      )}
    </header>
  );
}
