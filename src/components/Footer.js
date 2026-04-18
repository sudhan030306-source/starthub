"use client";

import { Zap, Github, Linkedin, Twitter, Instagram, Mail, ArrowUpRight } from "lucide-react";

// ─── FOOTER CONTENT — update links and info here ────────────────────────────

// Quick navigation links
const QUICK_LINKS = [
  { label: "About",       href: "#about"     },
  { label: "Services",    href: "#services"  },
  { label: "My Work",     href: "#projects"  },
  { label: "Process",     href: "#process"   },
  { label: "Pricing",     href: "#pricing"   },
  { label: "FAQ",         href: "#faq"       },
  { label: "Contact",     href: "#contact"   },
];

// Services listed in footer
const SERVICE_LINKS = [
  { label: "Business Websites",   href: "#services" },
  { label: "Portfolio Websites",  href: "#services" },
  { label: "Landing Pages",       href: "#services" },
  { label: "E-commerce Sites",    href: "#services" },
  { label: "Website Redesign",    href: "#services" },
  { label: "Data Dashboards",     href: "#services" },
];

// Social media profiles — replace # with your actual URLs
const SOCIALS = [
  { icon: Github,    label: "GitHub",    href: "https://github.com/yourusername"   },
  { icon: Linkedin,  label: "LinkedIn",  href: "https://linkedin.com/in/yourusername" },
  { icon: Twitter,   label: "Twitter",   href: "https://twitter.com/yourusername"  },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/yourusername"},
];

// ─── Contact details — keep in sync with Contact.js ─────────────────────────
const CONTACT = {
  email:    "hello@yourname.dev",  // ← replace
  location: "India (Remote & Local)",
  year:     new Date().getFullYear(),
  name:     "Your Name",           // ← replace with your name
};

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">

      {/* ── Top CTA Banner ── */}
      <div className="border-b border-white/10">
        <div className="container-max px-6 md:px-10 lg:px-16 py-10 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-1">
                Ready to build your website?
              </h3>
              <p className="text-white/50 text-sm">
                Let's get started — first consultation is always free.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-ink font-semibold font-display text-sm px-5 py-2.5 rounded-xl hover:scale-105 transition"
              >
                Start a Project <ArrowUpRight size={15} />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold font-display text-sm px-5 py-2.5 rounded-xl hover:bg-white/20 transition"
              >
                <Mail size={14} /> Email Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Content ── */}
      <div className="container-max px-6 md:px-10 lg:px-16 py-14 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* ── Brand Column ── */}
          <div className="col-span-2 md:col-span-1">
            {/* Logo */}
            <a href="#home" className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-brand-ink" fill="currentColor" />
              </span>
              <span className="font-display font-bold text-lg">
                Your<span className="text-brand-gold">Name</span>
                {/* ↑ Replace with your name */}
              </span>
            </a>

            {/* Tagline */}
            <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              Affordable, clean, and practical websites for businesses, freelancers,
              and personal brands across India.
            </p>

            {/* Social icons */}
            <div className="flex gap-2">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 bg-white/10 hover:bg-brand-gold hover:text-brand-ink rounded-lg flex items-center justify-center text-white/60 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-brand-gold transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4 tracking-wide">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-brand-gold transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info ── */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <p className="text-[10px] font-display uppercase tracking-widest text-white/30 mb-0.5">
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-white/60 hover:text-brand-gold transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <p className="text-[10px] font-display uppercase tracking-widest text-white/30 mb-0.5">
                  Location
                </p>
                <p className="text-sm text-white/60">{CONTACT.location}</p>
              </li>
              <li>
                <p className="text-[10px] font-display uppercase tracking-widest text-white/30 mb-0.5">
                  Availability
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-sm text-green-400 font-medium">Open for projects</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="container-max px-6 md:px-10 lg:px-16 py-5 mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            © {CONTACT.year} {CONTACT.name}. All rights reserved.
            {/* ↑ Your name auto-fills from CONTACT.name above */}
          </p>
          <p className="text-xs text-white/20">
            Built with Next.js · Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
