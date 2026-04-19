"use client";
import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send, CheckCircle } from "lucide-react";

const WHATSAPP_NUM = "918807071383";
const EMAIL        = "stratlyhub@gmail.com";

const SERVICES = [
  "Business Website","Portfolio Website","Landing Page",
  "E-commerce Website","Website Redesign","Data Dashboard",
  "Not sure yet — let's talk",
];

export default function Contact() {
  const [form, setForm]           = useState({ name:"", email:"", service:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const onChange = e => setForm({...form, [e.target.name]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    // TODO: replace with Formspree / EmailJS / API route
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad bg-ink">
      <div className="container-c mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-tag mx-auto" style={{width:"fit-content"}}>Get In Touch</div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
            Need a Website at a Minimal Cost?<br/>
            <span className="text-gold-gradient">Let's Talk.</span>
          </h2>
          <p className="text-white/45 text-lg">
            Fill in the form or reach out directly — I'll get back within 24 hours. No pressure.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Info column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href={`mailto:${EMAIL}`} className="glass glow-hover rounded-2xl p-5 flex items-center gap-4" style={{border:"1px solid rgba(255,255,255,0.07)"}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:"rgba(245,158,11,0.1)"}}>
                <Mail size={19} className="text-gold"/>
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-white">Email</p>
                <p className="text-xs text-white/40 mt-0.5">{EMAIL}</p>
              </div>
            </a>

            <a href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent("Hi! I saw your website and I'm interested in getting a website built.")}`}
              target="_blank" rel="noopener noreferrer"
              className="glass glow-hover rounded-2xl p-5 flex items-center gap-4" style={{border:"1px solid rgba(255,255,255,0.07)"}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:"rgba(37,211,102,0.1)"}}>
                <MessageCircle size={19} style={{color:"#25D366"}}/>
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-white">WhatsApp</p>
                <p className="text-xs text-white/40 mt-0.5">Chat with me directly</p>
              </div>
            </a>

            <div className="glass rounded-2xl p-5 flex items-center gap-4" style={{border:"1px solid rgba(255,255,255,0.07)"}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:"rgba(99,102,241,0.1)"}}>
                <MapPin size={19} style={{color:"#818CF8"}}/>
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-white">Location</p>
                <p className="text-xs text-white/40 mt-0.5">India (Remote & Local)</p>
              </div>
            </div>

            <div className="rounded-2xl p-5" style={{background:"#F59E0B"}}>
              <p className="font-display font-bold text-ink text-sm mb-1">⚡ Quick Response</p>
              <p className="text-ink/60 text-xs leading-relaxed">
                Usually within 24 hours. I work with clients across India and internationally.
                All conversations are free with no obligation.
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3 glass rounded-3xl p-8" style={{border:"1px solid rgba(255,255,255,0.07)"}}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{background:"rgba(74,222,128,0.1)"}}>
                  <CheckCircle size={32} style={{color:"#4ade80"}}/>
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">Message Sent!</h3>
                <p className="text-white/45 text-sm max-w-xs">Thanks for reaching out! I'll get back within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({name:"",email:"",service:"",message:""}); }}
                  className="mt-6 text-sm text-gold font-semibold hover:text-amber-300 transition">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <h3 className="font-display font-bold text-xl text-white">Tell me about your project</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {name:"name",  label:"Your Name *",     type:"text",  ph:"Rajan Kumar"},
                    {name:"email", label:"Email Address *", type:"email", ph:"you@email.com"},
                  ].map(f => (
                    <div key={f.name}>
                      <label className="block text-xs font-semibold font-display text-white/50 mb-1.5">{f.label}</label>
                      <input type={f.type} name={f.name} required value={form[f.name]} onChange={onChange}
                        placeholder={f.ph}
                        className="w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none transition"
                        style={{background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", caretColor:"#F59E0B"}}
                        onFocus={e => e.target.style.borderColor="rgba(245,158,11,0.5)"}
                        onBlur={e  => e.target.style.borderColor="rgba(255,255,255,0.1)"}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold font-display text-white/50 mb-1.5">What do you need?</label>
                  <select name="service" value={form.service} onChange={onChange}
                    className="w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none transition"
                    style={{background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)"}}>
                    <option value="" style={{background:"#141418"}}>Select a service...</option>
                    {SERVICES.map(s => <option key={s} value={s} style={{background:"#141418"}}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold font-display text-white/50 mb-1.5">Tell me more *</label>
                  <textarea name="message" required rows={4} value={form.message} onChange={onChange}
                    placeholder="Briefly describe your business, what kind of website you need, and any specific requirements..."
                    className="w-full rounded-xl px-4 py-2.5 text-sm text-white outline-none transition resize-none"
                    style={{background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", caretColor:"#F59E0B"}}
                    onFocus={e => e.target.style.borderColor="rgba(245,158,11,0.5)"}
                    onBlur={e  => e.target.style.borderColor="rgba(255,255,255,0.1)"}
                  />
                </div>

                <button type="submit" disabled={loading} className="btn-gold justify-center py-3.5 disabled:opacity-50">
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-ink/30 border-t-ink rounded-full animate-spin"/>
                      Sending...
                    </>
                  ) : (<>Send Message <Send size={15}/></>)}
                </button>
                <p className="text-xs text-white/25 text-center">No spam. Your details are only used to respond to your inquiry.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
