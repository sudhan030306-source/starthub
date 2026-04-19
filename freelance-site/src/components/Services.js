"use client";
import { Globe, UserSquare, Megaphone, ShoppingCart, RefreshCcw, BarChart2 } from "lucide-react";

const SERVICES = [
  { icon: Globe,       title: "Business Websites",   desc: "A professional online presence for your shop, company, or service. Clean, modern, and fully mobile-friendly — built to win trust from the first visit.", hot: true  },
  { icon: UserSquare,  title: "Portfolio Websites",  desc: "Showcase your work, skills, and services with a personal portfolio that stands out for freelancers and creative professionals.",                         hot: false },
  { icon: Megaphone,   title: "Landing Pages",       desc: "A focused, conversion-driven page to promote a product, campaign, or offer. Built to turn visitors into leads fast.",                                   hot: false },
  { icon: ShoppingCart,title: "Basic E-commerce",    desc: "Start selling online with a simple, easy-to-manage store. Product listings, cart, and payment integration — without the complexity.",                  hot: false },
  { icon: RefreshCcw,  title: "Website Redesign",    desc: "Got an outdated website? I'll give it a fresh modern look that loads faster, looks great on all devices, and represents you better.",                   hot: false },
  { icon: BarChart2,   title: "Data Dashboards",     desc: "Power BI dashboards, Python scripts, and custom reporting tools to help track your numbers and make smarter business decisions.",                       hot: false },
];

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{background:"#090910"}}>
      <div className="container-c mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-tag mx-auto" style={{width:"fit-content"}}>What I Do</div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
            Services Built for Real Business Needs
          </h2>
          <p className="text-white/45 text-lg">
            No bloated packages. No unnecessary fluff. Just practical, results-focused work at a price
            that makes sense for small businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map(({ icon: Icon, title, desc, hot }) => (
            <div key={title} className={`relative rounded-2xl p-6 glow-hover ${
              hot
                ? "bg-gold text-ink"
                : "glass"
            }`}
            style={hot ? {} : {border:"1px solid rgba(255,255,255,0.07)"}}>
              {hot && (
                <span className="absolute top-4 right-4 text-[10px] font-bold font-display uppercase tracking-wider bg-ink/15 px-2.5 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                hot ? "bg-ink/10" : "bg-white/5"
              }`}>
                <Icon size={20} className={hot ? "text-ink" : "text-gold"} />
              </div>
              <h3 className={`font-display font-bold text-base mb-2 ${hot ? "text-ink" : "text-white"}`}>{title}</h3>
              <p className={`text-sm leading-relaxed ${hot ? "text-ink/65" : "text-white/45"}`}>{desc}</p>
              <a href="#contact" className={`inline-block mt-4 text-sm font-semibold font-display ${
                hot ? "text-ink/70 hover:text-ink" : "text-gold hover:text-amber-300"
              } transition`}>
                Get a quote →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-white/35 text-sm mb-4">Not sure what you need?</p>
          <a href="#contact" className="btn-gold">Tell me about your project</a>
        </div>
      </div>
    </section>
  );
}
