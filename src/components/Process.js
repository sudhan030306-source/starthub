"use client";

const STEPS = [
  { n:"01", title:"Tell Me Your Needs",      desc:"A simple conversation — call or email. Tell me what you need and I ask a few questions to understand your business and goals.", time:"Day 1"    },
  { n:"02", title:"Plan Your Website",        desc:"I put together a clear plan: pages, design direction, and timeline. You'll know exactly what you're getting before we begin.",             time:"Day 2–3"  },
  { n:"03", title:"Build & Review Together",  desc:"I build and share a live preview for your feedback. We review, revise until you're happy — fully transparent throughout.",                 time:"Day 4–10" },
  { n:"04", title:"Delivery & Support",       desc:"Once approved, your site goes live. I provide a handover session so you know how to manage it. No hidden extras.",                         time:"Day 10–14"},
];

export default function Process() {
  return (
    <section id="process" className="section-padding" style={{ background:"#0D0D1A" }}>
      <div className="container-max">
        <div style={{ textAlign:"center", maxWidth:600, margin:"0 auto 56px" }}>
          <span className="section-label">How I Work</span>
          <h2 style={{ fontFamily:"'Sora',sans-serif", fontWeight:800,
            fontSize:"clamp(28px,3.5vw,42px)", color:"#FFFFFF", marginBottom:14, lineHeight:1.2 }}>
            A Simple, Stress-Free Process
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:15, lineHeight:1.75 }}>
            From first message to final website — here's exactly how we'll work together. No surprises.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:20, position:"relative" }}>
          {STEPS.map((s, i) => (
            <div key={s.n} className="card-hover" style={{
              borderRadius:20, padding:"28px 24px",
              background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)",
              position:"relative",
            }}>
              {/* Step number */}
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
                <div style={{
                  width:40, height:40, borderRadius:12,
                  background:"rgba(249,115,22,0.15)", border:"1px solid rgba(249,115,22,0.25)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontFamily:"'Sora',sans-serif", fontWeight:800, fontSize:13, color:"#F97316",
                }}>
                  {s.n}
                </div>
                <span style={{
                  fontSize:10, fontFamily:"'Sora',sans-serif", fontWeight:600,
                  color:"rgba(255,255,255,0.3)", background:"rgba(255,255,255,0.05)",
                  border:"1px solid rgba(255,255,255,0.08)",
                  padding:"3px 8px", borderRadius:6,
                }}>
                  {s.time}
                </span>
              </div>
              <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700,
                fontSize:15, color:"#FFFFFF", marginBottom:8 }}>{s.title}</h3>
              <p style={{ fontSize:13, color:"rgba(255,255,255,0.42)", lineHeight:1.7 }}>{s.desc}</p>

              {/* Connector arrow (desktop) */}
              {i < STEPS.length - 1 && (
                <div style={{
                  position:"absolute", right:-12, top:"50%", transform:"translateY(-50%)",
                  width:22, height:22, borderRadius:"50%",
                  background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:11, color:"rgba(249,115,22,0.6)", zIndex:1,
                }} className="hidden lg:flex">→</div>
              )}
            </div>
          ))}
        </div>

        <p style={{ textAlign:"center", fontSize:12, color:"rgba(255,255,255,0.25)", marginTop:24 }}>
          ✦ Timeline varies with project complexity. Custom timelines available.
        </p>
      </div>
    </section>
  );
}
