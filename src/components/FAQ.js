"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q:"How much does a website cost?",
    a:"Every business is different, so is the pricing. I give you a custom quote based on what you actually need — pages, features, and timeline. First consultation is free, no pressure." },
  { q:"How long will it take to build my website?",
    a:"A simple website typically takes 7–10 days, and a full business site around 10–14 days. The timeline depends on how quickly we finalise content and design. I'll give you a clear estimate before starting." },
  { q:"Can you redesign my existing website?",
    a:"Yes! If your current website looks outdated or isn't working well, I can redesign it with a modern, clean look and better user experience. I'll review your existing site and suggest practical improvements." },
  { q:"Will the website work well on mobile phones?",
    a:"Absolutely. Every website I build is mobile-first and fully responsive — it will look and function great on phones, tablets, and desktops. This is standard, not an extra." },
  { q:"Do I need technical knowledge to manage my site?",
    a:"Not at all. I build easy-to-manage websites and walk you through how to update basic content like text and images. If you need regular updates, I can help with that too." },
  { q:"What do you need from me to get started?",
    a:"Just a brief description of what you need, your business name, reference sites you like (optional), and any text or images for the site. I'll help organize and structure everything else." },
  { q:"Do you provide hosting and domain registration?",
    a:"I guide you to the most affordable hosting and domain options and help you set everything up. Hosting and domain costs are separate — but I'll recommend the best cost-effective choices." },
  { q:"What if I'm not happy with the design?",
    a:"Revisions are included in every project. I share a live preview before final delivery so you can give feedback and we make changes together. Your satisfaction is what matters." },
];

function FAQItem({ q, a, open, toggle }) {
  return (
    <div style={{
      borderRadius: 14, overflow: "hidden",
      border: open ? "1px solid rgba(249,115,22,0.3)" : "1px solid rgba(255,255,255,0.07)",
      background: open ? "rgba(249,115,22,0.06)" : "rgba(255,255,255,0.02)",
      transition: "border-color 0.2s ease, background 0.2s ease",
    }}>
      <button onClick={toggle} style={{
        width:"100%", display:"flex", alignItems:"center",
        justifyContent:"space-between", gap:16,
        padding:"20px 24px", textAlign:"left",
        background:"none", border:"none", cursor:"pointer",
      }}>
        <span style={{
          fontFamily:"'Sora',sans-serif", fontWeight:600,
          fontSize:15, color:"#FFFFFF", lineHeight:1.4,
        }}>{q}</span>
        <span style={{
          flexShrink:0, width:30, height:30, borderRadius:8,
          background: open ? "#F97316" : "rgba(255,255,255,0.07)",
          display:"flex", alignItems:"center", justifyContent:"center",
          transition:"background 0.2s ease",
        }}>
          {open
            ? <Minus size={14} color="#fff"/>
            : <Plus  size={14} color="rgba(255,255,255,0.5)"/>}
        </span>
      </button>
      {open && (
        <div style={{ padding:"0 24px 20px" }}>
          <p style={{ fontSize:14, color:"rgba(255,255,255,0.52)", lineHeight:1.85 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="section-padding" style={{ background:"#08080F" }}>
      <div className="container-max">

        {/* ── Header — stacked, no sticky column ── */}
        <div style={{ textAlign:"center", maxWidth:620, margin:"0 auto 52px" }}>
          <span className="section-label">FAQ</span>
          <h2 style={{
            fontFamily:"'Sora',sans-serif", fontWeight:800,
            fontSize:"clamp(28px,3.5vw,42px)",
            color:"#FFFFFF", lineHeight:1.2, marginBottom:14,
          }}>
            Answers to Your Questions
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:15, lineHeight:1.8 }}>
            First time getting a website built? Totally normal to have questions.
            Here are the ones I get asked most often.
          </p>
        </div>

        {/* ── Accordion — single full-width column ── */}
        <div style={{
          maxWidth:780, margin:"0 auto",
          display:"flex", flexDirection:"column", gap:10,
        }}>
          {FAQS.map((item, i) => (
            <FAQItem
              key={i} q={item.q} a={item.a}
              open={open === i}
              toggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        {/* ── Footer note ── */}
        <div style={{ textAlign:"center", marginTop:36 }}>
          <p style={{ fontSize:14, color:"rgba(255,255,255,0.35)" }}>
            Don't see your question?{" "}
            <a href="/contact" style={{
              color:"#F97316", fontWeight:600, textDecoration:"none",
            }}>
              Ask me directly →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
