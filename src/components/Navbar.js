"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

// ─── NAV LINKS — add or remove sections here ────────────────────────────────
const NAV_LINKS = [
  { label: "About",       href: "#about"      },
  { label: "Services",    href: "#services"   },
  { label: "Work",        href: "#projects"   },
  { label: "Pricing",     href: "#pricing"    },
  { label: "Contact",     href: "#contact"    },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);

  // Add shadow + backdrop once user scrolls past 20px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 px-6 md:px-10 lg:px-16 mx-auto">

        {/* ── Logo / Brand Name — replace "YourName" with your actual name ── */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center">
            <Zap size={16} className="text-brand-ink" fill="currentColor" />
          </span>
          <span className="font-display font-bold text-lg text-brand-ink">
            Your<span className="text-brand-gold">Name</span>
            {/* ↑ Replace "Your" and "Name" with your actual first/last name */}
          </span>
        </a>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Desktop CTA Button ── */}
        <a
          href="#contact"
          className="hidden md:inline-flex btn-primary text-sm py-2.5"
        >
          Get Your Website Built
        </a>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden p-2 text-brand-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-brand-border shadow-lg px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-sm font-medium text-brand-ink py-1 border-b border-brand-border/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="btn-primary text-sm justify-center mt-2"
          >
            Get Your Website Built
          </a>
        </div>
      )}
    </header>
  );
}
