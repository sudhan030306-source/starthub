"use client";
import { ExternalLink, Layers } from "lucide-react";

const PROJECTS = [
  {
    id: 1, featured: true,
    title: "ClearBillAI",
    category: "AI · Logistics · FinTech",
    summary: "An AI-powered logistics billing audit platform that helps identify invoice discrepancies, overcharges, and contract mismatches faster. Reduces manual billing errors and saves hours of reconciliation work.",
    stack: ["Python","AI/ML","Data Analysis","React","REST API"],
    liveUrl: "https://clear-bill-ai.vercel.app",
    gradFrom: "#1A1028", gradTo: "#0D0819",
    accentColor: "#A78BFA",
  },
  {
    id: 2, featured: false,
    title: "LocalCraft Stores",
    category: "Business Website",
    summary: "A modern, mobile-first business website for a local handicrafts store. Includes product showcase, about page, and a contact form that drives WhatsApp inquiries.",
    stack: ["Next.js","Tailwind CSS","Vercel"],
    liveUrl: null,
    gradFrom: "#1A120A", gradTo: "#0D0907",
    accentColor: "#F97316",
  },
  {
    id: 3, featured: false,
    title: "FreelanceHub Portfolio",
    category: "Portfolio Website",
    summary: "A clean, minimal portfolio website built for a content writer. Showcases writing samples, testimonials, and a contact form optimized for getting more client inquiries.",
    stack: ["React","Tailwind CSS","Netlify"],
    liveUrl: null,
    gradFrom: "#0A1A17", gradTo: "#070D0B",
    accentColor: "#34D399",
  },
  {
    id: 4, featured: false,
    title: "Sales Performance Dashboard",
    category: "Data · Business Intelligence",
    summary: "A Power BI dashboard built for a small retail business to track monthly sales, top-performing products, and regional performance.",
    stack: ["Power BI","Excel","SQL","DAX"],
    liveUrl: null,
    gradFrom: "#0A0D1A", gradTo: "#07080D",
    accentColor: "#60A5FA",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ background:"#0D0D1A" }}>
      <div className="container-max">
        <div style={{ textAlign:"center", maxWidth:600, margin:"0 auto 56px" }}>
          <span className="section-label">Featured Work</span>
          <h2 style={{ fontFamily:"'Sora',sans-serif", fontWeight:800,
            fontSize:"clamp(28px,3.5vw,42px)", color:"#FFFFFF", marginBottom:14, lineHeight:1.2 }}>
            Projects I've Built
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:15, lineHeight:1.75 }}>
            From AI-powered tools to simple business websites — here's a look at what I do.
          </p>
        </div>

        {/* ── Featured project ── */}
        {PROJECTS.filter(p => p.featured).map(p => (
          <div key={p.id} style={{
            borderRadius:24, padding:"40px 36px", marginBottom:24,
            background:`linear-gradient(135deg,${p.gradFrom},${p.gradTo})`,
            border:`1px solid rgba(167,139,250,0.2)`,
            position:"relative", overflow:"hidden",
          }}>
            {/* Glow */}
            <div style={{
              position:"absolute", top:-60, right:-60, width:240, height:240,
              borderRadius:"50%",
              background:`radial-gradient(circle, rgba(167,139,250,0.12), transparent 70%)`,
              pointerEvents:"none",
            }} />

            <div style={{ display:"flex", flexWrap:"wrap", gap:24, justifyContent:"space-between", alignItems:"flex-start", position:"relative" }}>
              <div style={{ flex:1, minWidth:280 }}>
                <div style={{ display:"flex", gap:8, marginBottom:14, flexWrap:"wrap" }}>
                  <span style={{ fontSize:10, fontFamily:"'Sora',sans-serif", fontWeight:700,
                    letterSpacing:"0.08em", textTransform:"uppercase",
                    background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.12)",
                    padding:"4px 10px", borderRadius:999, color:"rgba(255,255,255,0.7)" }}>
                    {p.category}
                  </span>
                  <span style={{ fontSize:10, fontFamily:"'Sora',sans-serif", fontWeight:700,
                    letterSpacing:"0.08em", textTransform:"uppercase",
                    background:"#F97316", padding:"4px 10px", borderRadius:999, color:"white" }}>
                    Featured
                  </span>
                </div>
                <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:800,
                  fontSize:"clamp(28px,3.5vw,44px)", color:"#FFFFFF", marginBottom:12 }}>
                  {p.title}
                </h3>
                <p style={{ color:"rgba(255,255,255,0.55)", fontSize:15, lineHeight:1.75, maxWidth:520, marginBottom:20 }}>
                  {p.summary}
                </p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {p.stack.map(t => (
                    <span key={t} style={{
                      fontSize:12, fontFamily:"'Sora',sans-serif",
                      background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)",
                      padding:"4px 10px", borderRadius:8, color:"rgba(255,255,255,0.7)",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:10, flexShrink:0 }}>
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"
                    style={{ fontSize:14 }}>
                    View Project <ExternalLink size={14}/>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* ── Other projects grid ── */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:20 }}>
          {PROJECTS.filter(p => !p.featured).map(p => (
            <div key={p.id} className="card-hover" style={{
              borderRadius:18, overflow:"hidden",
              background:"rgba(255,255,255,0.02)",
              border:"1px solid rgba(255,255,255,0.07)",
            }}>
              {/* Accent bar */}
              <div style={{ height:3, background:`linear-gradient(90deg,${p.accentColor},transparent)` }} />
              <div style={{ padding:"20px 20px 24px" }}>
                <span style={{ fontSize:10, fontFamily:"'Sora',sans-serif", fontWeight:700,
                  letterSpacing:"0.08em", textTransform:"uppercase", color:"rgba(255,255,255,0.3)" }}>
                  {p.category}
                </span>
                <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:17,
                  color:"#FFFFFF", margin:"6px 0 10px" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize:13, color:"rgba(255,255,255,0.42)", lineHeight:1.7, marginBottom:16 }}>
                  {p.summary}
                </p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:16 }}>
                  {p.stack.map(t => (
                    <span key={t} style={{
                      fontSize:11, fontFamily:"'Sora',sans-serif",
                      background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)",
                      padding:"3px 8px", borderRadius:6, color:"rgba(255,255,255,0.5)",
                    }}>{t}</span>
                  ))}
                </div>
                {p.liveUrl
                  ? <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize:13, color:"#F97316", fontWeight:600,
                        fontFamily:"'Sora',sans-serif", textDecoration:"none" }}>
                      View Project <ExternalLink size={12} style={{display:"inline",verticalAlign:"middle"}}/>
                    </a>
                  : <span style={{ fontSize:12, color:"rgba(255,255,255,0.25)",
                      fontFamily:"'Sora',sans-serif" }}>Work sample — on request</span>
                }
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          marginTop:48, borderRadius:20, padding:"36px 32px", textAlign:"center",
          background:"rgba(249,115,22,0.06)", border:"1px solid rgba(249,115,22,0.15)",
        }}>
          <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:20,
            color:"#FFFFFF", marginBottom:8 }}>
            Want to see more or discuss a project?
          </h3>
          <p style={{ color:"rgba(255,255,255,0.4)", marginBottom:20, fontSize:14 }}>
            I'm happy to share more details or walk you through what I can build for you.
          </p>
          <a href="#contact" className="btn-primary">Start a Conversation</a>
        </div>
      </div>
    </section>
  );
}
