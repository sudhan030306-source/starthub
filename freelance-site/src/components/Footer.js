"use client";
import Image from "next/image";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUpRight } from "lucide-react";

const NAV   = [
  {l:"About",    h:"#about"},
  {l:"Services", h:"#services"},
  {l:"Work",     h:"#projects"},
  {l:"Pricing",  h:"#pricing"},
  {l:"FAQ",      h:"#faq"},
  {l:"Contact",  h:"#contact"},
];
const SVCS  = [
  "Business Websites","Portfolio Websites","Landing Pages",
  "E-commerce Sites","Website Redesign","Data Dashboards",
];
const SOCIALS = [
  { icon: Github,    label:"GitHub",    href:"https://github.com/sudhanlal"      },
  { icon: Linkedin,  label:"LinkedIn",  href:"https://linkedin.com/in/sudhanm"   },
  { icon: Twitter,   label:"Twitter",   href:"https://twitter.com/sudhanm"       },
  { icon: Instagram, label:"Instagram", href:"https://instagram.com/sudhanm"     },
];

export default function Footer() {
  return (
    <footer style={{ background: "#07070A" }}>

      {/* ── Top CTA banner ── */}
      <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-10
                        flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-1">
              Ready to build your website?
            </h3>
            <p className="text-white/35 text-sm">First consultation is always free.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-gold">
              Start a Project <ArrowUpRight size={15}/>
            </a>
            <a href="mailto:stratlyhub@gmail.com" className="btn-ghost">
              <Mail size={14}/> Email Me
            </a>
          </div>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-14
                      grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <a href="#home" className="inline-flex items-center gap-3 mb-5">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="StartlyHub"
                fill
                className="object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-sm tracking-widest uppercase text-white">
                Startly<span className="text-gold">Hub</span>
              </span>
              <span className="text-[9px] text-white/25 tracking-[0.2em] uppercase font-display">
                by Sudhan M
              </span>
            </div>
          </a>

          <p className="text-white/30 text-sm leading-relaxed mb-5 max-w-xs">
            Affordable, clean, practical websites for businesses,
            freelancers, and personal brands across India.
          </p>

          <div className="flex gap-2">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30
                           transition-all duration-200 hover:text-gold"
                style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.07)" }}>
                <Icon size={13}/>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display font-semibold text-[10px] text-white/30 mb-4 tracking-widest uppercase">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2.5">
            {NAV.map(({l,h}) => (
              <li key={l}>
                <a href={h} className="text-sm text-white/35 hover:text-gold transition font-display">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-[10px] text-white/30 mb-4 tracking-widest uppercase">
            Services
          </h4>
          <ul className="flex flex-col gap-2.5">
            {SVCS.map(s => (
              <li key={s}>
                <a href="#services"
                  className="text-sm text-white/35 hover:text-gold transition font-display">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-[10px] text-white/30 mb-4 tracking-widest uppercase">
            Contact
          </h4>
          <ul className="flex flex-col gap-4">
            <li>
              <p className="text-[10px] text-white/20 font-display uppercase tracking-widest mb-0.5">Email</p>
              <a href="mailto:stratlyhub@gmail.com"
                className="text-sm text-white/45 hover:text-gold transition break-all">
                stratlyhub@gmail.com
              </a>
            </li>
            <li>
              <p className="text-[10px] text-white/20 font-display uppercase tracking-widest mb-0.5">WhatsApp</p>
              <a href="https://wa.me/918807071383" target="_blank" rel="noopener noreferrer"
                className="text-sm text-white/45 hover:text-gold transition">
                +91 88070 71383
              </a>
            </li>
            <li>
              <p className="text-[10px] text-white/20 font-display uppercase tracking-widest mb-0.5">
                Availability
              </p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"
                  style={{ boxShadow:"0 0 5px #4ade80" }}/>
                <span className="text-sm text-green-400 font-semibold font-display">
                  Open for projects
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t" style={{ borderColor:"rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} StartlyHub · Sudhan M. All rights reserved.
          </p>
          <p className="text-xs text-white/12">
            Built with Next.js · Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
