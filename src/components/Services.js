"use client";
import { Globe, UserSquare, Megaphone, ShoppingCart, RefreshCcw, BarChart2 } from "lucide-react";

const SERVICES = [
  { icon: Globe,        title: "Business Websites",       desc: "A professional online presence for your shop, company, or service. Built clean, fast, and mobile-ready to win customer trust from the first visit.",         featured: true  },
  { icon: UserSquare,   title: "Portfolio Websites",      desc: "Showcase your work and skills with a personal site that stands out. Great for freelancers, consultants, and creative professionals.",                       featured: false },
  { icon: Megaphone,    title: "Landing Pages",           desc: "A focused, conversion-driven page to promote a product or campaign. Turns visitors into leads or customers fast.",                                          featured: false },
  { icon: ShoppingCart, title: "Basic E-commerce Sites",  desc: "Start selling online with a simple, easy-to-manage store — product listings, cart, and payment integration without the complexity.",                       featured: false },
  { icon: RefreshCcw,   title: "Website Redesign",        desc: "Got an outdated website? I'll give it a fresh, modern look that loads faster and better represents your business.",                                        featured: false },
  { icon: BarChart2,    title: "Data Dashboards",         desc: "Power BI dashboards and custom reporting tools that turn your raw data into clear business insights — no tech expertise needed on your side.",              featured: false },
];

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background:"#08080F" }}>
      <div className="container-max">
        <div style={{ textAlign:"center", maxWidth:600, margin:"0 auto 56px" }}>
          <span className="section-label">What I Do</span>
          <h2 style={{ fontFamily:"'Sora',sans-serif", fontWeight:800,
            fontSize:"clamp(28px,3.5vw,42px)", color:"#FFFFFF", marginBottom:14, lineHeight:1.2 }}>
            Services Built for Real Business Needs
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:15, lineHeight:1.75, marginBottom:16 }}>
            Practical, results-focused work at a price that makes sense for small businesses.
          </p>
          {/* AI note */}
          <div style={{
            display:"inline-flex", alignItems:"center", gap:6,
            background:"rgba(249,115,22,0.08)", border:"1px solid rgba(249,115,22,0.2)",
            borderRadius:999, padding:"6px 14px",
          }}>
            <span style={{ fontSize:13 }}>✦</span>
            <span style={{ fontSize:12, fontFamily:"'Sora',sans-serif", fontWeight:600,
              color:"#F97316" }}>All websites are built with AI-assisted development</span>
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:20 }}>
          {SERVICES.map(({ icon: Icon, title, desc, featured }) => (
            <div key={title} className="card-hover" style={{
              position:"relative", borderRadius:20, padding:"28px 24px",
              background: featured
                ? "linear-gradient(135deg,rgba(249,115,22,0.15),rgba(249,115,22,0.05))"
                : "rgba(255,255,255,0.03)",
              border: featured
                ? "1px solid rgba(249,115,22,0.35)"
                : "1px solid rgba(255,255,255,0.07)",
              overflow:"hidden",
            }}>
              {featured && (
                <span style={{
                  position:"absolute", top:16, right:16,
                  background:"#F97316", color:"white",
                  fontSize:10, fontFamily:"'Sora',sans-serif", fontWeight:700,
                  letterSpacing:"0.08em", textTransform:"uppercase",
                  padding:"4px 10px", borderRadius:999,
                }}>Popular</span>
              )}

              {/* Corner glow for featured */}
              {featured && (
                <div style={{
                  position:"absolute", top:0, right:0,
                  width:100, height:100,
                  background:"radial-gradient(circle at top right, rgba(249,115,22,0.2), transparent 70%)",
                  pointerEvents:"none",
                }} />
              )}

              <div style={{
                width:44, height:44, borderRadius:12, marginBottom:16,
                background: featured ? "rgba(249,115,22,0.2)" : "rgba(249,115,22,0.09)",
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                <Icon size={20} color="#F97316" />
              </div>

              <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700,
                fontSize:16, color:"#FFFFFF", marginBottom:8 }}>{title}</h3>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.45)", lineHeight:1.7, marginBottom:16 }}>
                {desc}
              </p>
              <a href="/contact" style={{
                fontSize:13, fontFamily:"'Sora',sans-serif", fontWeight:600,
                color:"#F97316", textDecoration:"none",
              }}>
                Get a quote →
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign:"center", marginTop:48 }}>
          <p style={{ color:"rgba(255,255,255,0.4)", marginBottom:16, fontSize:14 }}>
            Not sure which service fits your needs?
          </p>
          <a href="/contact" className="btn-primary">Tell Me About Your Project</a>
        </div>
      </div>
    </section>
  );
}
