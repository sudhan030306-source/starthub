"use client";
import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";

// ── CONTACT DETAILS ──────────────────────────────────────────────────────────
const CONTACT = {
  email:    "stratlyhub@gmail.com",
  emailUrl: "https://mail.google.com/mail/?view=cm&to=stratlyhub@gmail.com",
  location: "India (Remote & Local)",
};

const SERVICE_OPTIONS = [
  "Business Website",
  "Portfolio Website",
  "Landing Page",
  "E-commerce Website",
  "Website Redesign",
  "Data Dashboard",
  "Not sure yet — let's talk",
];

export default function Contact() {
  const [form,      setForm]      = useState({ name:"", email:"", service:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // ── Formspree endpoint — sends form data to stratlyhub@gmail.com ─────────
      const res = await fetch("https://formspree.io/f/xqewlwgz", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          service: form.service || "Not specified",
          message: form.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data?.errors?.[0]?.message || "Something went wrong. Please email us directly.");
      }
    } catch {
      setError("Network error. Please email us directly at stratlyhub@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ background:"#0D0D1A" }}>
      <div className="container-max">

        {/* Header */}
        <div style={{ textAlign:"center", maxWidth:600, margin:"0 auto 56px" }}>
          <span className="section-label">Get In Touch</span>
          <h2 style={{
            fontFamily:"'Sora',sans-serif", fontWeight:800,
            fontSize:"clamp(28px,3.5vw,42px)", color:"#FFFFFF",
            marginBottom:14, lineHeight:1.2,
          }}>
            Let's Build Something Together
          </h2>
          <p style={{ color:"rgba(255,255,255,0.45)", fontSize:15, lineHeight:1.8 }}>
            Fill in the form below or email directly — I'll reply within 24 hours.
            First consultation is always free, no pressure.
          </p>
        </div>

        <div style={{
          display:"grid", gridTemplateColumns:"1fr", gap:24,
          maxWidth:900, margin:"0 auto",
        }} className="lg:grid-cols-5">

          {/* ── LEFT: Info cards ── */}
          <div className="lg:col-span-2" style={{ display:"flex", flexDirection:"column", gap:14 }}>

            {/* Email card — primary CTA */}
            <a href={CONTACT.emailUrl} target="_blank" rel="noopener noreferrer"
              className="card-hover" style={{
                display:"flex", alignItems:"center", gap:14, padding:"20px 18px",
                background:"rgba(249,115,22,0.08)", border:"1px solid rgba(249,115,22,0.25)",
                borderRadius:16, textDecoration:"none",
              }}>
              <div style={{
                width:46, height:46, borderRadius:13,
                background:"rgba(249,115,22,0.15)",
                display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
              }}>
                <Mail size={20} color="#F97316"/>
              </div>
              <div>
                <p style={{ fontFamily:"'Sora',sans-serif", fontWeight:700,
                  fontSize:14, color:"#FFFFFF", marginBottom:3 }}>
                  Email Me Directly
                </p>
                <p style={{ fontSize:12, color:"rgba(255,255,255,0.5)" }}>
                  {CONTACT.email}
                </p>
                <p style={{ fontSize:11, color:"#F97316", marginTop:3, fontWeight:600 }}>
                  Opens Gmail →
                </p>
              </div>
            </a>

            {/* Location */}
            <div style={{
              display:"flex", alignItems:"center", gap:14, padding:"18px 18px",
              background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.07)",
              borderRadius:16,
            }}>
              <div style={{
                width:46, height:46, borderRadius:13,
                background:"rgba(96,165,250,0.1)",
                display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
              }}>
                <MapPin size={20} color="#60A5FA"/>
              </div>
              <div>
                <p style={{ fontFamily:"'Sora',sans-serif", fontWeight:600,
                  fontSize:13, color:"#FFFFFF", marginBottom:3 }}>Location</p>
                <p style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>
                  {CONTACT.location}
                </p>
              </div>
            </div>

            {/* Response time */}
            <div style={{
              display:"flex", alignItems:"center", gap:14, padding:"18px 18px",
              background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.07)",
              borderRadius:16,
            }}>
              <div style={{
                width:46, height:46, borderRadius:13,
                background:"rgba(74,222,128,0.08)",
                display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
              }}>
                <Clock size={20} color="#4ADE80"/>
              </div>
              <div>
                <p style={{ fontFamily:"'Sora',sans-serif", fontWeight:600,
                  fontSize:13, color:"#FFFFFF", marginBottom:3 }}>Response Time</p>
                <p style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>
                  Usually within 24 hours
                </p>
              </div>
            </div>

            {/* What to expect note */}
            <div style={{
              padding:"18px", borderRadius:16,
              background:"rgba(249,115,22,0.05)", border:"1px solid rgba(249,115,22,0.15)",
            }}>
              <p style={{ fontFamily:"'Sora',sans-serif", fontWeight:600,
                fontSize:13, color:"#F97316", marginBottom:8 }}>
                What happens next?
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                {[
                  "I read your message carefully",
                  "Reply with questions or a quote",
                  "We discuss and plan together",
                  "Build your website — simple!",
                ].map((step, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <span style={{
                      width:18, height:18, borderRadius:"50%", flexShrink:0,
                      background:"rgba(249,115,22,0.15)", border:"1px solid rgba(249,115,22,0.3)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:9, color:"#F97316", fontWeight:700,
                    }}>{i+1}</span>
                    <span style={{ fontSize:12, color:"rgba(255,255,255,0.5)" }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Contact Form ── */}
          <div className="lg:col-span-3" style={{
            background:"rgba(255,255,255,0.02)",
            border:"1px solid rgba(255,255,255,0.08)",
            borderRadius:24, padding:32,
          }}>
            {submitted ? (
              /* ── Success state ── */
              <div style={{
                display:"flex", flexDirection:"column", alignItems:"center",
                justifyContent:"center", textAlign:"center", padding:"48px 0",
              }}>
                <div style={{
                  width:68, height:68, borderRadius:"50%",
                  background:"rgba(74,222,128,0.1)", border:"1px solid rgba(74,222,128,0.2)",
                  display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20,
                }}>
                  <CheckCircle size={32} color="#4ADE80"/>
                </div>
                <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700,
                  fontSize:22, color:"#FFFFFF", marginBottom:10 }}>
                  Message Sent! 🎉
                </h3>
                <p style={{ color:"rgba(255,255,255,0.5)", fontSize:14,
                  maxWidth:300, lineHeight:1.7, marginBottom:8 }}>
                  Your message has been delivered to{" "}
                  <span style={{ color:"#F97316", fontWeight:600 }}>stratlyhub@gmail.com</span>
                </p>
                <p style={{ color:"rgba(255,255,255,0.35)", fontSize:13 }}>
                  I'll reply within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:"", email:"", service:"", message:"" }); }}
                  style={{ marginTop:24, fontSize:13, color:"#F97316", fontWeight:600,
                    background:"none", border:"none", cursor:"pointer" }}>
                  Send another message
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:18 }}>
                <div>
                  <h3 style={{ fontFamily:"'Sora',sans-serif", fontWeight:700,
                    fontSize:18, color:"#FFFFFF", marginBottom:4 }}>
                    Tell me about your project
                  </h3>
                  <p style={{ fontSize:13, color:"rgba(255,255,255,0.35)" }}>
                    Your message goes straight to my inbox at stratlyhub@gmail.com
                  </p>
                </div>

                {/* Name + Email */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}
                  className="sm:grid-cols-2 grid-cols-1">
                  <div>
                    <label style={{ display:"block", fontSize:11,
                      fontFamily:"'Sora',sans-serif", fontWeight:600,
                      color:"rgba(255,255,255,0.4)", marginBottom:6, letterSpacing:"0.06em" }}>
                      YOUR NAME *
                    </label>
                    <input type="text" name="name" required value={form.name}
                      onChange={handleChange} placeholder="Rahul Gupta"
                      className="input-dark"/>
                  </div>
                  <div>
                    <label style={{ display:"block", fontSize:11,
                      fontFamily:"'Sora',sans-serif", fontWeight:600,
                      color:"rgba(255,255,255,0.4)", marginBottom:6, letterSpacing:"0.06em" }}>
                      YOUR EMAIL *
                    </label>
                    <input type="email" name="email" required value={form.email}
                      onChange={handleChange} placeholder="you@email.com"
                      className="input-dark"/>
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label style={{ display:"block", fontSize:11,
                    fontFamily:"'Sora',sans-serif", fontWeight:600,
                    color:"rgba(255,255,255,0.4)", marginBottom:6, letterSpacing:"0.06em" }}>
                    WHAT DO YOU NEED?
                  </label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="input-dark" style={{ appearance:"none" }}>
                    <option value="" style={{ background:"#111120" }}>Select a service...</option>
                    {SERVICE_OPTIONS.map(s => (
                      <option key={s} value={s} style={{ background:"#111120" }}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display:"block", fontSize:11,
                    fontFamily:"'Sora',sans-serif", fontWeight:600,
                    color:"rgba(255,255,255,0.4)", marginBottom:6, letterSpacing:"0.06em" }}>
                    TELL ME MORE *
                  </label>
                  <textarea name="message" required rows={4} value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your business, what kind of website you need, and any specific requirements..."
                    className="input-dark" style={{ resize:"none" }}/>
                </div>

                {/* Error */}
                {error && (
                  <div style={{
                    padding:"12px 16px", borderRadius:10,
                    background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.25)",
                    fontSize:13, color:"#FCA5A5", lineHeight:1.6,
                  }}>
                    ⚠ {error}
                  </div>
                )}

                {/* Submit */}
                <button type="submit" disabled={loading} className="btn-primary"
                  style={{ justifyContent:"center", padding:"15px",
                    opacity:loading ? 0.7 : 1, cursor:loading ? "not-allowed" : "pointer" }}>
                  {loading ? (
                    <>
                      <span style={{
                        width:16, height:16, border:"2px solid rgba(255,255,255,0.3)",
                        borderTopColor:"white", borderRadius:"50%",
                        animation:"spin 0.7s linear infinite", display:"inline-block",
                      }}/>
                      Sending to stratlyhub@gmail.com...
                    </>
                  ) : (
                    <>Send Message <Send size={15}/></>
                  )}
                </button>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

                <p style={{ fontSize:11, color:"rgba(255,255,255,0.2)", textAlign:"center" }}>
                  No spam. Your details are only used to respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
