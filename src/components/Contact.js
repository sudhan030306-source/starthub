"use client";
import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send, CheckCircle } from "lucide-react";

// ── CONTACT DETAILS ────────────────────────────────────────────────────────
const CONTACT = {
  email:    "stratlyhub@gmail.com",
  whatsapp: "918807071383",
  location: "India (Remote & Local)",
};

const SERVICE_OPTIONS = [
  "Business Website","Portfolio Website","Landing Page",
  "E-commerce Website","Website Redesign","Data Dashboard",
  "Not sure yet — let's talk",
];

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", service:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // ── Replace this with Formspree / EmailJS / API route ──────────
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding" style={{ background:"#0D0D1A" }}>
      <div className="container-max">
        <div style={{ textAlign:"center", maxWidth:600, margin:"0 auto 56px" }}>
          <span className="section-label">Get In Touch</span>
          <h2 style={{ fontFamily:"'Sora',sans-serif", fontWeight:800,
            fontSize:"clamp(28px,3.5vw,42px)", color:"#FFFFFF", marginBottom:14, lineHeight:1.2 }}>
            Let's Build Something Together
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:15, lineHeight:1.8 }}>
            Fill in the form or reach out directly — I'll get back to you within 24 hours.
            First consultation is always free, no pressure.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr", gap:24, maxWidth:900, margin:"0 auto" }}
          className="lg:grid-cols-5">

          {/* Info cards */}
          <div className="lg:col-span-2" style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {/* Email */}
            <a href={`mailto:${CONTACT.email}`} className="card-hover" style={{
              display:"flex", alignItems:"center", gap:14, padding:"18px 18px",
              background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)",
              borderRadius:16, textDecoration:"none",
            }}>
              <div style={{ width:42,height:42,borderRadius:12,background:"rgba(249,115,22,0.1)",
                display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <Mail size={18} color="#F97316"/>
              </div>
              <div>
                <p style={{ fontFamily:"'Sora',sans-serif",fontWeight:600,fontSize:13,color:"#FFFFFF" }}>Email</p>
                <p style={{ fontSize:12,color:"rgba(255,255,255,0.4)",marginTop:2 }}>{CONTACT.email}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="card-hover" style={{
                display:"flex",alignItems:"center",gap:14,padding:"18px 18px",
                background:"rgba(37,211,102,0.06)",border:"1px solid rgba(37,211,102,0.18)",
                borderRadius:16,textDecoration:"none",
              }}>
              <div style={{ width:42,height:42,borderRadius:12,background:"rgba(37,211,102,0.12)",
                display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <MessageCircle size={18} color="#25D366"/>
              </div>
              <div>
                <p style={{ fontFamily:"'Sora',sans-serif",fontWeight:600,fontSize:13,color:"#FFFFFF" }}>WhatsApp</p>
                <p style={{ fontSize:12,color:"rgba(255,255,255,0.4)",marginTop:2 }}>Chat with me directly</p>
              </div>
            </a>

            {/* Location */}
            <div style={{
              display:"flex",alignItems:"center",gap:14,padding:"18px 18px",
              background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.07)",
              borderRadius:16,
            }}>
              <div style={{ width:42,height:42,borderRadius:12,background:"rgba(96,165,250,0.1)",
                display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <MapPin size={18} color="#60A5FA"/>
              </div>
              <div>
                <p style={{ fontFamily:"'Sora',sans-serif",fontWeight:600,fontSize:13,color:"#FFFFFF" }}>Location</p>
                <p style={{ fontSize:12,color:"rgba(255,255,255,0.4)",marginTop:2 }}>{CONTACT.location}</p>
              </div>
            </div>

            {/* Response time */}
            <div style={{
              padding:"18px 18px",borderRadius:16,
              background:"rgba(249,115,22,0.08)",border:"1px solid rgba(249,115,22,0.2)",
            }}>
              <p style={{ fontFamily:"'Sora',sans-serif",fontWeight:600,fontSize:13,
                color:"#F97316",marginBottom:4 }}>⚡ Quick Response</p>
              <p style={{ fontSize:12,color:"rgba(255,255,255,0.4)",lineHeight:1.7 }}>
                Usually within 24 hours. All conversations are free with no obligation.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3" style={{
            background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.08)",
            borderRadius:24, padding:32,
          }}>
            {submitted ? (
              <div style={{ display:"flex",flexDirection:"column",alignItems:"center",
                justifyContent:"center",textAlign:"center",padding:"48px 0" }}>
                <div style={{ width:64,height:64,borderRadius:"50%",
                  background:"rgba(74,222,128,0.1)",display:"flex",alignItems:"center",
                  justifyContent:"center",marginBottom:16 }}>
                  <CheckCircle size={30} color="#4ADE80"/>
                </div>
                <h3 style={{ fontFamily:"'Sora',sans-serif",fontWeight:700,
                  fontSize:20,color:"#FFFFFF",marginBottom:8 }}>Message Sent!</h3>
                <p style={{ color:"rgba(255,255,255,0.45)",fontSize:14,maxWidth:280 }}>
                  Thanks for reaching out, Sudhan will reply within 24 hours.
                </p>
                <button onClick={()=>{setSubmitted(false);setForm({name:"",email:"",service:"",message:""});}}
                  style={{ marginTop:20,fontSize:13,color:"#F97316",fontWeight:600,
                    background:"none",border:"none",cursor:"pointer" }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:"flex",flexDirection:"column",gap:16 }}>
                <h3 style={{ fontFamily:"'Sora',sans-serif",fontWeight:700,
                  fontSize:18,color:"#FFFFFF",marginBottom:4 }}>
                  Tell me about your project
                </h3>

                <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}
                  className="sm:grid-cols-2 grid-cols-1">
                  <div>
                    <label style={{ display:"block",fontSize:11,fontFamily:"'Sora',sans-serif",
                      fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:6,letterSpacing:"0.05em" }}>
                      YOUR NAME *
                    </label>
                    <input type="text" name="name" required value={form.name}
                      onChange={handleChange} placeholder="Rahul Gupta"
                      className="input-dark" />
                  </div>
                  <div>
                    <label style={{ display:"block",fontSize:11,fontFamily:"'Sora',sans-serif",
                      fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:6,letterSpacing:"0.05em" }}>
                      EMAIL *
                    </label>
                    <input type="email" name="email" required value={form.email}
                      onChange={handleChange} placeholder="you@email.com"
                      className="input-dark" />
                  </div>
                </div>

                <div>
                  <label style={{ display:"block",fontSize:11,fontFamily:"'Sora',sans-serif",
                    fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:6,letterSpacing:"0.05em" }}>
                    WHAT DO YOU NEED?
                  </label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="input-dark" style={{ appearance:"none" }}>
                    <option value="" style={{ background:"#111120" }}>Select a service...</option>
                    {SERVICE_OPTIONS.map(s=>(
                      <option key={s} value={s} style={{ background:"#111120" }}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display:"block",fontSize:11,fontFamily:"'Sora',sans-serif",
                    fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:6,letterSpacing:"0.05em" }}>
                    TELL ME MORE *
                  </label>
                  <textarea name="message" required rows={4} value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your business, what kind of website you need, and any specific requirements or questions..."
                    className="input-dark" style={{ resize:"none" }} />
                </div>

                <button type="submit" disabled={loading} className="btn-primary"
                  style={{ justifyContent:"center",padding:"14px",marginTop:4,
                    opacity:loading?0.7:1,cursor:loading?"not-allowed":"pointer" }}>
                  {loading ? (
                    <><span style={{ width:16,height:16,border:"2px solid rgba(255,255,255,0.3)",
                      borderTopColor:"white",borderRadius:"50%",
                      animation:"spin 0.7s linear infinite",display:"inline-block" }}/>
                    Sending...</>
                  ) : (
                    <>Send Message <Send size={15}/></>
                  )}
                </button>
                <style>{`@keyframes spin{to{transform:rotate(360deg);}}`}</style>

                <p style={{ fontSize:11,color:"rgba(255,255,255,0.25)",textAlign:"center" }}>
                  No spam. Your details are only used to respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
