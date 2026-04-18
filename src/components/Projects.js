"use client";

import { ExternalLink, Github, Layers } from "lucide-react";

// ─── PROJECTS — edit or add projects here ────────────────────────────────────
// Each project can have:
//   title, category, summary, stack (array), liveUrl, caseStudyUrl, color (tailwind bg)
const PROJECTS = [
  {
    id: 1,
    title:    "ClearBillAI",
    category: "AI · Logistics · FinTech",
    summary:
      "An AI-powered logistics billing audit platform that helps identify invoice discrepancies, overcharges, and contract mismatches faster. Reduces manual billing errors and saves hours of reconciliation work.",
    stack: ["Python", "AI/ML", "Data Analysis", "React", "REST API"],
    // ↓ Replace with your real live URL once deployed
    liveUrl:      "https://clearbillai.vercel.app",
    caseStudyUrl: null,  // or add a URL to a case study page
    color: "from-slate-800 to-slate-900",
    featured: true,
  },
  {
    id: 2,
    title:    "LocalCraft Stores",
    category: "Business Website",
    summary:
      "A modern, mobile-first business website for a local handicrafts store. Includes product showcase, about page, and a contact form that drives WhatsApp inquiries.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    liveUrl:      null,  // replace with real URL
    caseStudyUrl: null,
    color: "from-amber-700 to-amber-900",
    featured: false,
  },
  {
    id: 3,
    title:    "FreelanceHub — Personal Portfolio",
    category: "Portfolio Website",
    summary:
      "A clean, minimal portfolio website built for a content writer. Showcases writing samples, testimonials, and a contact form — all optimized for getting more client inquiries.",
    stack: ["React", "Tailwind CSS", "Netlify"],
    liveUrl:      null,
    caseStudyUrl: null,
    color: "from-teal-700 to-teal-900",
    featured: false,
  },
  {
    id: 4,
    title:    "Sales Performance Dashboard",
    category: "Data · Business Intelligence",
    summary:
      "A Power BI dashboard built for a small retail business to track monthly sales, top-performing products, and regional performance — helping the owner make data-backed decisions.",
    stack: ["Power BI", "Excel", "SQL", "DAX"],
    liveUrl:      null,
    caseStudyUrl: null,
    color: "from-indigo-700 to-indigo-900",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Featured Work</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-ink mb-4">
            Projects I've Built
          </h2>
          <p className="text-brand-muted text-lg">
            From AI-powered tools to simple business websites — here's a look at what I do.
          </p>
        </div>

        {/* ── Featured Project (ClearBillAI) ── */}
        {PROJECTS.filter((p) => p.featured).map((project) => (
          <div
            key={project.id}
            className={`rounded-3xl bg-gradient-to-br ${project.color} p-8 md:p-10 mb-8 text-white overflow-hidden relative`}
          >
            {/* Decorative circle */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold font-display tracking-widest uppercase bg-white/10 border border-white/20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-bold font-display tracking-widest uppercase bg-brand-gold text-brand-ink px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-3xl md:text-4xl mb-3">
                  {project.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed max-w-xl mb-6">
                  {project.summary}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 border border-white/20 px-2.5 py-1 rounded-lg font-display"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-2 flex-shrink-0">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-gold text-brand-ink font-semibold font-display text-sm px-5 py-2.5 rounded-xl hover:scale-105 transition"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                )}
                {project.caseStudyUrl && (
                  <a
                    href={project.caseStudyUrl}
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold font-display text-sm px-5 py-2.5 rounded-xl hover:bg-white/20 transition"
                  >
                    Case Study <Layers size={14} />
                  </a>
                )}
                {!project.liveUrl && !project.caseStudyUrl && (
                  <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/60 font-semibold font-display text-sm px-5 py-2.5 rounded-xl cursor-default">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* ── Other Projects Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.filter((p) => !p.featured).map((project) => (
            <div
              key={project.id}
              className="card-hover bg-brand-warm border border-brand-border rounded-2xl overflow-hidden"
            >
              {/* Color header strip */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-5">
                <span className="text-[10px] font-bold font-display tracking-widest uppercase text-brand-muted">
                  {project.category}
                </span>
                <h3 className="font-display font-bold text-lg text-brand-ink mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-display font-medium bg-white border border-brand-border text-brand-muted px-2 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project link */}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold font-display text-brand-gold hover:underline"
                  >
                    View Project <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="text-sm font-semibold font-display text-brand-muted/60">
                    Work Sample — Available on Request
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 bg-brand-light rounded-2xl p-8">
          <p className="font-display font-bold text-xl text-brand-ink mb-2">
            Want to see more of my work?
          </p>
          <p className="text-brand-muted mb-5">
            I'd love to share more details or discuss what I can build for you.
          </p>
          <a href="#contact" className="btn-primary">
            Let's Talk About Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
