"use client";
import { ExternalLink, Globe, BarChart2, FileSearch } from "lucide-react";

// ── REAL PROJECTS ONLY ────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    icon: Globe,
    tag: "Web Development",
    title: "Websites Built",
    summary:
      "Clean, fast, mobile-first websites for businesses, freelancers, and personal brands. Built with modern tools and AI-assisted development to deliver results faster and smarter.",
    details: [
      "Business & service websites",
      "Personal portfolio sites",
      "Landing pages & lead generation",
      "Mobile-first, fully responsive",
      "SEO basics included",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel", "AI-Assisted"],
    accentColor: "#F97316",
    gradFrom: "rgba(249,115,22,0.12)",
    gradTo:   "rgba(249,115,22,0.03)",
    borderColor: "rgba(249,115,22,0.25)",
    cta: { label: "Get Your Website Built", href: "/contact" },
    featured: true,
  },
  {
    id: 2,
    icon: BarChart2,
    tag: "Data & BI",
    title: "Dashboards Created",
    summary:
      "Business intelligence dashboards built in Power BI and Python that turn raw data into clear, actionable insights — helping small businesses track performance without complexity.",
    details: [
      "Power BI dashboard design",
      "Sales & revenue tracking",
      "Custom KPI reporting",
      "Excel & SQL data pipelines",
      "Business-friendly visuals",
    ],
    stack: ["Power BI", "Python", "SQL", "Excel", "DAX"],
    accentColor: "#60A5FA",
    gradFrom: "rgba(96,165,250,0.10)",
    gradTo:   "rgba(96,165,250,0.02)",
    borderColor: "rgba(96,165,250,0.20)",
    cta: { label: "Discuss a Dashboard", href: "/contact" },
    featured: false,
  },
  {
    id: 3,
    icon: FileSearch,
    tag: "AI · Logistics · FinTech",
    title: "ClearBillAI — Logistics Overcharge Detection",
    summary:
      "An AI-powered logistics billing audit platform that identifies invoice discrepancies, overcharges, and contract mismatches faster than manual review — saving businesses time and money.",
    details: [
      "AI-driven invoice analysis",
      "Overcharge & discrepancy detection",
      "Contract vs. billed rate comparison",
      "Automated audit reports",
      "Faster reconciliation workflow",
    ],
    stack: ["Python", "AI / ML", "Data Analysis", "React", "REST API"],
    accentColor: "#A78BFA",
    gradFrom: "rgba(167,139,250,0.10)",
    gradTo:   "rgba(167,139,250,0.02)",
    borderColor: "rgba(167,139,250,0.22)",
    cta: { label: "View Live Project", href: "https://clear-bill-ai.vercel.app", external: true },
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding" style={{ background:"#0D0D1A" }}>
      <div className="container-max">

        {/* Header */}
        <div style={{ textAlign:"center", maxWidth:600, margin:"0 auto 56px" }}>
          <span className="section-label">What I've Built</span>
          <h2 style={{
            fontFamily:"'Sora',sans-serif", fontWeight:800,
            fontSize:"clamp(28px,3.5vw,42px)", color:"#FFFFFF",
            marginBottom:14, lineHeight:1.2,
          }}>
            Real Work. Real Results.
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:15, lineHeight:1.8 }}>
            Here's exactly what I build — websites, data dashboards, and AI-powered
            tools that solve real business problems.
          </p>
        </div>

        {/* Project cards */}
        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
          {PROJECTS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.id} className="card-hover" style={{
                borderRadius:24, padding:"36px 32px",
                background:`linear-gradient(135deg,${p.gradFrom},${p.gradTo})`,
                border:`1px solid ${p.borderColor}`,
                position:"relative", overflow:"hidden",
              }}>
                {/* Corner glow */}
                <div style={{
                  position:"absolute", top:-40, right:-40,
                  width:180, height:180, borderRadius:"50%",
                  background:`radial-gradient(circle,${p.gradFrom.replace("0.1","0.2").replace("0.12","0.25")},transparent 70%)`,
                  pointerEvents:"none",
                }}/>

                <div style={{
                  display:"grid", gridTemplateColumns:"1fr",
                  gap:32, position:"relative",
                }} className="lg:grid-cols-3">

                  {/* LEFT — Icon + title + summary */}
                  <div className="lg:col-span-2">
                    {/* Tag */}
                    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
                      <div style={{
                        width:40, height:40, borderRadius:11,
                        background:`rgba(255,255,255,0.06)`,
                        border:`1px solid ${p.borderColor}`,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        flexShrink:0,
                      }}>
                        <Icon size={18} color={p.accentColor}/>
                      </div>
                      <span style={{
                        fontSize:11, fontFamily:"'Sora',sans-serif", fontWeight:700,
                        letterSpacing:"0.08em", textTransform:"uppercase",
                        color:p.accentColor, opacity:0.85,
                      }}>
                        {p.tag}
                      </span>
                    </div>

                    <h3 style={{
                      fontFamily:"'Sora',sans-serif", fontWeight:800,
                      fontSize:"clamp(20px,2.5vw,28px)", color:"#FFFFFF",
                      marginBottom:12, lineHeight:1.2,
                    }}>
                      {p.title}
                    </h3>

                    <p style={{
                      color:"rgba(255,255,255,0.52)", fontSize:15,
                      lineHeight:1.8, marginBottom:20,
                    }}>
                      {p.summary}
                    </p>

                    {/* Tech stack */}
                    <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                      {p.stack.map(t => (
                        <span key={t} style={{
                          fontSize:12, fontFamily:"'Sora',sans-serif",
                          background:"rgba(255,255,255,0.06)",
                          border:"1px solid rgba(255,255,255,0.10)",
                          padding:"4px 10px", borderRadius:8,
                          color:"rgba(255,255,255,0.65)",
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT — Details + CTA */}
                  <div style={{ display:"flex", flexDirection:"column", justifyContent:"space-between", gap:20 }}>
                    {/* Details list */}
                    <ul style={{ listStyle:"none", padding:0, margin:0,
                      display:"flex", flexDirection:"column", gap:8 }}>
                      {p.details.map(d => (
                        <li key={d} style={{ display:"flex", alignItems:"flex-start", gap:8 }}>
                          <span style={{
                            width:16, height:16, borderRadius:"50%", flexShrink:0, marginTop:1,
                            background:`${p.accentColor}18`,
                            border:`1px solid ${p.accentColor}44`,
                            display:"flex", alignItems:"center", justifyContent:"center",
                            fontSize:8, color:p.accentColor, fontWeight:700,
                          }}>✓</span>
                          <span style={{ fontSize:13, color:"rgba(255,255,255,0.6)", lineHeight:1.6 }}>
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    {p.cta.external ? (
                      <a href={p.cta.href} target="_blank" rel="noopener noreferrer"
                        className="btn-primary" style={{ fontSize:14, justifyContent:"center" }}>
                        {p.cta.label} <ExternalLink size={14}/>
                      </a>
                    ) : (
                      <a href={p.cta.href} className="btn-primary"
                        style={{ fontSize:14, justifyContent:"center" }}>
                        {p.cta.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom nudge */}
        <div style={{
          marginTop:40, borderRadius:18, padding:"28px 32px", textAlign:"center",
          background:"rgba(249,115,22,0.05)", border:"1px solid rgba(249,115,22,0.12)",
        }}>
          <p style={{ fontFamily:"'Sora',sans-serif", fontWeight:700,
            fontSize:18, color:"#FFFFFF", marginBottom:8 }}>
            Have a project in mind?
          </p>
          <p style={{ color:"rgba(255,255,255,0.4)", fontSize:14, marginBottom:20 }}>
            Let's talk about what you need — free consultation, no pressure.
          </p>
          <a href="/contact" className="btn-primary">Start a Conversation</a>
        </div>
      </div>
    </section>
  );
}
