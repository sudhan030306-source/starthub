"use client";
import { ExternalLink, Layers } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title:    "ClearBillAI",
    category: "AI · Logistics · FinTech",
    summary:  "An AI-powered logistics billing audit platform that identifies invoice discrepancies, overcharges, and contract mismatches faster than manual review. Reduces billing errors and saves hours of reconciliation work.",
    stack:    ["Python", "AI / ML", "Data Analysis", "React", "REST API"],
    liveUrl:  "https://clear-bill-ai.vercel.app",
    featured: true,
    gradient: "linear-gradient(135deg, #1A1A28 0%, #0E0E1A 100%)",
    accentColor: "#F59E0B",
  },
  {
    id: 2,
    title:    "LocalCraft Stores",
    category: "Business Website",
    summary:  "Mobile-first business website for a local handicrafts store — product showcase, about page, and WhatsApp-driven contact form.",
    stack:    ["Next.js", "Tailwind CSS", "Vercel"],
    liveUrl:  null,
    featured: false,
    accentColor: "#6366F1",
  },
  {
    id: 3,
    title:    "FreelanceHub Portfolio",
    category: "Portfolio Website",
    summary:  "Clean, minimal portfolio for a content writer — writing samples, testimonials, and an inquiry form optimised for leads.",
    stack:    ["React", "Tailwind CSS", "Netlify"],
    liveUrl:  null,
    featured: false,
    accentColor: "#14B8A6",
  },
  {
    id: 4,
    title:    "Sales Performance Dashboard",
    category: "Data · Business Intelligence",
    summary:  "Power BI dashboard for a small retail business to track monthly sales, top products, and regional performance in real time.",
    stack:    ["Power BI", "Excel", "SQL", "DAX"],
    liveUrl:  null,
    featured: false,
    accentColor: "#8B5CF6",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-ink">
      <div className="container-c mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-tag mx-auto" style={{width:"fit-content"}}>Featured Work</div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
            Projects I've Built
          </h2>
          <p className="text-white/45 text-lg">
            From AI-powered platforms to simple business websites — here's a look at what I do.
          </p>
        </div>

        {/* Featured */}
        {PROJECTS.filter(p => p.featured).map(p => (
          <div key={p.id} className="rounded-3xl mb-8 p-8 md:p-10 relative overflow-hidden"
            style={{background:p.gradient, border:"1px solid rgba(245,158,11,0.15)"}}>
            {/* Glow blob */}
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
              style={{background:"radial-gradient(circle,rgba(245,158,11,0.07) 0%,transparent 70%)"}} />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 relative z-10">
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-[10px] font-bold font-display tracking-widest uppercase text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                  <span className="text-[10px] font-bold font-display tracking-widest uppercase text-ink bg-gold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-3">{p.title}</h3>
                <p className="text-white/55 text-base leading-relaxed max-w-xl mb-6">{p.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map(t => (
                    <span key={t} className="text-xs bg-white/8 border border-white/10 text-white/60 px-2.5 py-1 rounded-lg font-display">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
                    View Project <ExternalLink size={14}/>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.filter(p => !p.featured).map(p => (
            <div key={p.id} className="glass glow-hover rounded-2xl overflow-hidden"
              style={{border:"1px solid rgba(255,255,255,0.07)"}}>
              {/* Color bar */}
              <div className="h-1" style={{background:p.accentColor, opacity:0.7}} />
              <div className="p-5">
                <span className="text-[10px] font-bold font-display tracking-widest uppercase text-white/35">{p.category}</span>
                <h3 className="font-display font-bold text-lg text-white mt-1 mb-2">{p.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed mb-4">{p.summary}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map(t => (
                    <span key={t} className="text-[10px] font-display font-medium bg-white/5 border border-white/10 text-white/40 px-2 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                {p.liveUrl
                  ? <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold font-display text-gold hover:text-amber-300 transition inline-flex items-center gap-1">
                      View Project <ExternalLink size={12}/>
                    </a>
                  : <span className="text-sm font-display text-white/25">Sample · Available on request</span>
                }
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 glass rounded-2xl p-8" style={{border:"1px solid rgba(255,255,255,0.07)"}}>
          <p className="font-display font-bold text-xl text-white mb-2">Want to see more?</p>
          <p className="text-white/40 mb-5">I'd love to share more details or discuss what I can build for you.</p>
          <a href="#contact" className="btn-gold">Let's Talk About Your Project</a>
        </div>
      </div>
    </section>
  );
}
