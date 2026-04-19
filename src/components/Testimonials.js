"use client";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name:"Priya Sharma", role:"Owner, Priya's Boutique", initials:"PS",
    gradFrom:"#7C3AED", gradTo:"#DB2777", stars:5,
    review:"I was nervous about getting a website made — I had no idea where to start. Sudhan explained everything patiently and built exactly what I needed. My customers can now find my boutique online and I've already gotten new inquiries through the contact form. Totally worth it!",
  },
  {
    name:"Rajan Mehta", role:"Freelance Consultant", initials:"RM",
    gradFrom:"#1D4ED8", gradTo:"#7C3AED", stars:5,
    review:"I needed a clean portfolio site quickly. Sudhan delivered a professional, modern website within 10 days and was available on WhatsApp throughout. The pricing was very fair and the final result was better than expected. Highly recommended for anyone on a budget.",
  },
  {
    name:"Ankit Desai", role:"Co-founder, LocalBite Tiffin Services", initials:"AD",
    gradFrom:"#059669", gradTo:"#0D9488", stars:5,
    review:"We needed a simple website for our tiffin delivery service. The site he built us is clean, loads fast, and works great on phones. Sudhan understood our business needs and gave us exactly what we needed without overcomplicating things. Great value.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ background:"#0D0D1A" }}>
      <div className="container-max">
        <div style={{ textAlign:"center", maxWidth:600, margin:"0 auto 56px" }}>
          <span className="section-label">What Clients Say</span>
          <h2 style={{ fontFamily:"'Sora',sans-serif", fontWeight:800,
            fontSize:"clamp(28px,3.5vw,42px)", color:"#FFFFFF", marginBottom:14, lineHeight:1.2 }}>
            Real People, Real Results
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:15, lineHeight:1.75 }}>
            Don't just take my word for it — here's what some of my clients have shared.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:20 }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card-hover" style={{
              borderRadius:20, padding:"28px 24px", display:"flex", flexDirection:"column",
              background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)",
            }}>
              {/* Stars */}
              <div style={{ display:"flex", gap:3, marginBottom:14 }}>
                {Array.from({length:t.stars}).map((_,i)=>(
                  <Star key={i} size={13} color="#F97316" fill="#F97316"/>
                ))}
              </div>

              {/* Quote icon */}
              <div style={{ marginBottom:12 }}>
                <Quote size={22} color="rgba(249,115,22,0.3)" fill="rgba(249,115,22,0.15)"/>
              </div>

              <p style={{ fontSize:14, color:"rgba(255,255,255,0.55)", lineHeight:1.8, flex:1, marginBottom:20 }}>
                "{t.review}"
              </p>

              {/* Avatar + name */}
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <div style={{
                  width:40, height:40, borderRadius:"50%", flexShrink:0,
                  background:`linear-gradient(135deg,${t.gradFrom},${t.gradTo})`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontFamily:"'Sora',sans-serif", fontWeight:700, fontSize:13, color:"white",
                }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontFamily:"'Sora',sans-serif", fontWeight:600,
                    fontSize:13, color:"#FFFFFF" }}>{t.name}</p>
                  <p style={{ fontSize:11, color:"rgba(255,255,255,0.35)", marginTop:1 }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign:"center", fontSize:11, color:"rgba(255,255,255,0.2)", marginTop:24 }}>
          * Representative testimonials. More references available on request.
        </p>
      </div>
    </section>
  );
}
