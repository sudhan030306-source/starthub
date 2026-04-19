"use client";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const QUICK_LINKS = [
  { label:"About",    href:"#about"    },
  { label:"Services", href:"#services" },
  { label:"My Work",  href:"#projects" },
  { label:"Process",  href:"#process"  },
  { label:"Pricing",  href:"#pricing"  },
  { label:"FAQ",      href:"#faq"      },
  { label:"Contact",  href:"#contact"  },
];

const SERVICE_LINKS = [
  "Business Websites","Portfolio Websites","Landing Pages",
  "E-commerce Sites","Website Redesign","Data Dashboards",
];

// ── Update these with your real social URLs ───────────────────────────────
const SOCIALS = [
  { icon: Github,    href:"https://github.com/yourusername",    label:"GitHub"    },
  { icon: Linkedin,  href:"https://linkedin.com/in/yourusername",label:"LinkedIn"  },
  { icon: Twitter,   href:"https://twitter.com/yourusername",   label:"Twitter"   },
  { icon: Instagram, href:"https://instagram.com/yourusername", label:"Instagram" },
];

export default function Footer() {
  return (
    <footer style={{ background:"#04040A", borderTop:"1px solid rgba(255,255,255,0.06)" }}>

      {/* Top CTA strip */}
      <div style={{ borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
        <div className="container-max" style={{ padding:"40px 24px", display:"flex",
          flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:20 }}>
          <div>
            <h3 style={{ fontFamily:"'Sora',sans-serif",fontWeight:700,
              fontSize:22,color:"#FFFFFF",marginBottom:4 }}>
              Ready to build your website?
            </h3>
            <p style={{ color:"rgba(255,255,255,0.35)",fontSize:13 }}>
              First consultation is free. Let's talk about your project.
            </p>
          </div>
          <div style={{ display:"flex",gap:12,flexWrap:"wrap" }}>
            <a href="#contact" className="btn-primary" style={{ fontSize:14 }}>
              Start a Project <ArrowUpRight size={14}/>
            </a>
            <a href="mailto:stratlyhub@gmail.com" className="btn-ghost" style={{ fontSize:14 }}>
              <Mail size={14}/> Email Me
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-max" style={{ padding:"56px 24px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:40 }}>

          {/* Brand */}
          <div style={{ gridColumn:"span 2" }}>
            <a href="#home" style={{ display:"inline-flex", alignItems:"center",
              textDecoration:"none", marginBottom:16 }}>
              <Image
                src="/logo.png"
                alt="StartlyHub"
                width={130}
                height={52}
                style={{
                  objectFit:"contain",
                  filter:"invert(1) brightness(2)",
                  height:38, width:"auto",
                }}
              />
            </a>
            <p style={{ color:"rgba(255,255,255,0.35)",fontSize:13,lineHeight:1.8,maxWidth:220,marginBottom:20 }}>
              Affordable, clean websites for businesses, freelancers, and personal brands across India.
            </p>
            <div style={{ display:"flex",gap:8 }}>
              {SOCIALS.map(({icon:Icon,href,label})=>(
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ width:32,height:32,borderRadius:8,
                    background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.08)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    color:"rgba(255,255,255,0.45)",textDecoration:"none",
                    transition:"all 0.2s ease",
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.background="rgba(249,115,22,0.2)";e.currentTarget.style.color="#F97316";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.06)";e.currentTarget.style.color="rgba(255,255,255,0.45)";}}>
                  <Icon size={14}/>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontFamily:"'Sora',sans-serif",fontWeight:600,fontSize:12,
              color:"rgba(255,255,255,0.4)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:16 }}>
              Quick Links
            </h4>
            <ul style={{ listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:10 }}>
              {QUICK_LINKS.map(l=>(
                <li key={l.href}>
                  <a href={l.href} style={{ fontSize:13,color:"rgba(255,255,255,0.4)",
                    textDecoration:"none",transition:"color 0.15s" }}
                    onMouseEnter={e=>e.currentTarget.style.color="#F97316"}
                    onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.4)"}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily:"'Sora',sans-serif",fontWeight:600,fontSize:12,
              color:"rgba(255,255,255,0.4)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:16 }}>
              Services
            </h4>
            <ul style={{ listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:10 }}>
              {SERVICE_LINKS.map(s=>(
                <li key={s}>
                  <a href="#services" style={{ fontSize:13,color:"rgba(255,255,255,0.4)",
                    textDecoration:"none",transition:"color 0.15s" }}
                    onMouseEnter={e=>e.currentTarget.style.color="#F97316"}
                    onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.4)"}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily:"'Sora',sans-serif",fontWeight:600,fontSize:12,
              color:"rgba(255,255,255,0.4)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:16 }}>
              Contact
            </h4>
            <div style={{ display:"flex",flexDirection:"column",gap:14 }}>
              <div>
                <p style={{ fontSize:10,color:"rgba(255,255,255,0.25)",letterSpacing:"0.06em",
                  textTransform:"uppercase",marginBottom:3 }}>Email</p>
                <a href="mailto:stratlyhub@gmail.com" style={{ fontSize:12,
                  color:"rgba(255,255,255,0.5)",textDecoration:"none" }}>
                  stratlyhub@gmail.com
                </a>
              </div>
              <div>
                <p style={{ fontSize:10,color:"rgba(255,255,255,0.25)",letterSpacing:"0.06em",
                  textTransform:"uppercase",marginBottom:3 }}>Location</p>
                <p style={{ fontSize:12,color:"rgba(255,255,255,0.5)" }}>India · Remote & Local</p>
              </div>
              <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                <span style={{ width:7,height:7,background:"#4ADE80",borderRadius:"50%",
                  boxShadow:"0 0 8px rgba(74,222,128,0.6)",display:"inline-block" }}/>
                <span style={{ fontSize:12,color:"#4ADE80",fontWeight:500 }}>Open for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop:"1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-max" style={{ padding:"16px 24px",display:"flex",
          flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:8 }}>
          <p style={{ fontSize:11,color:"rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} Sudhan M. All rights reserved.
          </p>
          <p style={{ fontSize:11,color:"rgba(255,255,255,0.15)" }}>
            Built with Next.js · Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
