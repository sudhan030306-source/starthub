"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "About",    href: "/about"    },
  { label: "Services", href: "/services" },
  { label: "Work",     href: "/work"     },
  { label: "Pricing",  href: "/pricing"  },
  { label: "Contact",  href: "/contact"  },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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
      background: scrolled ? "rgba(8,8,15,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
    }}>
      <div className="container-max" style={{
        display:"flex", alignItems:"center", justifyContent:"space-between",
        height:70, padding:"0 24px",
      }}>

        {/* Logo */}
        <Link href="/" style={{ display:"flex", alignItems:"center", textDecoration:"none" }}>
          <div style={{
            background:"#FFFFFF", borderRadius:10,
            padding:"6px 14px",
            display:"flex", alignItems:"center", justifyContent:"center",
            height:54,
            boxShadow:"0 2px 14px rgba(255,255,255,0.08)",
          }}>
            <Image
              src="/logo.png"
              alt="StartlyHub"
              width={150}
              height={44}
              style={{ objectFit:"contain", height:42, width:"auto" }}
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display:"flex", alignItems:"center", gap:36 }} className="hidden md:flex">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} style={{
                fontSize:14, fontWeight:500, textDecoration:"none",
                color: active ? "#F97316" : "rgba(255,255,255,0.6)",
                transition:"color 0.2s",
                position:"relative",
                paddingBottom:2,
                borderBottom: active ? "2px solid #F97316" : "2px solid transparent",
              }}
              onMouseEnter={e => { if (!active) e.currentTarget.style.color="#FFFFFF"; }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.color="rgba(255,255,255,0.6)"; }}>
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link href="/contact" className="btn-primary hidden md:inline-flex"
          style={{ padding:"11px 22px", fontSize:14 }}>
          Let's Work Together
        </Link>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color:"#fff", background:"none", border:"none", cursor:"pointer", padding:8 }}>
          {mobileOpen ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background:"rgba(8,8,15,0.97)",
          borderTop:"1px solid rgba(255,255,255,0.06)",
          padding:"16px 24px 24px",
          display:"flex", flexDirection:"column", gap:4,
        }} className="md:hidden">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} style={{
              fontSize:15, color:"rgba(255,255,255,0.75)", fontWeight:500,
              textDecoration:"none", padding:"12px 0",
              borderBottom:"1px solid rgba(255,255,255,0.05)",
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={close} className="btn-primary"
            style={{ justifyContent:"center", marginTop:16 }}>
            Let's Work Together
          </Link>
        </div>
      )}
    </header>
  );
}
