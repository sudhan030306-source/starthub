"use client";

import { useState } from "react";
import { Mail, MessageCircle, MapPin, Send, CheckCircle } from "lucide-react";

// ─── CONTACT DETAILS — replace with your real info ──────────────────────────
const CONTACT_INFO = {
  email:     "hello@yourname.dev",        // ← replace with your email
  whatsapp:  "91XXXXXXXXXX",              // ← replace with your WhatsApp number (with country code, no +)
  location:  "India (Remote & Local)",
  responseTime: "Usually within 24 hours",
};

// ─── SERVICE OPTIONS in the form dropdown ───────────────────────────────────
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
  const [form,      setForm]      = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ── Handle form submission ──
  // Replace this with your real form backend (e.g. Formspree, EmailJS, or API route)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission — replace with your actual form logic
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-brand-warm">
      <div className="container-max">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Get In Touch</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-ink mb-4">
            Need a Website at a Minimal Cost?
          </h2>
          <p className="text-brand-muted text-lg">
            Let's talk about your project. Fill in the form below or reach out directly —
            I'll get back to you within 24 hours, no pressure.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── Left: Info cards ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="group bg-white border border-brand-border rounded-2xl p-5 flex items-center gap-4 card-hover"
            >
              <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition">
                <Mail size={20} className="text-brand-gold" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-brand-ink">Email Me</p>
                <p className="text-xs text-brand-muted mt-0.5">{CONTACT_INFO.email}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-brand-border rounded-2xl p-5 flex items-center gap-4 card-hover"
            >
              <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition">
                <MessageCircle size={20} className="text-green-600" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-brand-ink">WhatsApp</p>
                <p className="text-xs text-brand-muted mt-0.5">Chat with me directly</p>
              </div>
            </a>

            {/* Location */}
            <div className="bg-white border border-brand-border rounded-2xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-blue-500" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-brand-ink">Location</p>
                <p className="text-xs text-brand-muted mt-0.5">{CONTACT_INFO.location}</p>
              </div>
            </div>

            {/* Response time note */}
            <div className="bg-brand-ink text-white rounded-2xl p-5">
              <p className="font-display font-semibold text-sm mb-1">⚡ Quick Response</p>
              <p className="text-white/60 text-xs leading-relaxed">
                {CONTACT_INFO.responseTime}. I work with clients across India and
                internationally. All conversations are free with no obligation.
              </p>
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="lg:col-span-3 bg-white border border-brand-border rounded-3xl p-8">

            {submitted ? (
              /* ─ Success state ─ */
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h3 className="font-display font-bold text-xl text-brand-ink mb-2">
                  Message Sent!
                </h3>
                <p className="text-brand-muted text-sm max-w-xs">
                  Thanks for reaching out! I'll get back to you within 24 hours. Looking
                  forward to working with you.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", service: "", message: "" }); }}
                  className="mt-6 text-sm text-brand-gold font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* ─ Form ─ */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-display font-bold text-xl text-brand-ink">
                  Tell me about your project
                </h3>

                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold font-display text-brand-ink mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rahul Gupta"
                      className="w-full border border-brand-border rounded-xl px-4 py-2.5 text-sm text-brand-ink bg-brand-warm outline-none focus:border-brand-gold focus:ring-2 focus:ring-amber-100 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold font-display text-brand-ink mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full border border-brand-border rounded-xl px-4 py-2.5 text-sm text-brand-ink bg-brand-warm outline-none focus:border-brand-gold focus:ring-2 focus:ring-amber-100 transition"
                    />
                  </div>
                </div>

                {/* Service dropdown */}
                <div>
                  <label className="block text-xs font-semibold font-display text-brand-ink mb-1.5">
                    What do you need?
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-brand-border rounded-xl px-4 py-2.5 text-sm text-brand-ink bg-brand-warm outline-none focus:border-brand-gold focus:ring-2 focus:ring-amber-100 transition"
                  >
                    <option value="">Select a service...</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message textarea */}
                <div>
                  <label className="block text-xs font-semibold font-display text-brand-ink mb-1.5">
                    Tell me more *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your business, what kind of website you need, and any specific requirements or questions..."
                    className="w-full border border-brand-border rounded-xl px-4 py-2.5 text-sm text-brand-ink bg-brand-warm outline-none focus:border-brand-gold focus:ring-2 focus:ring-amber-100 transition resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-brand-ink/30 border-t-brand-ink rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </button>

                <p className="text-xs text-brand-muted text-center">
                  No spam. Your details are safe and will only be used to respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
