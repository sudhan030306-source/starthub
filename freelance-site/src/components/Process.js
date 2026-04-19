"use client";

const STEPS = [
  { n:"01", title:"Tell Me Your Needs",    desc:"A simple call, WhatsApp, or email. You share what you need and I ask a few questions to understand your business and goals.",        day:"Day 1"   },
  { n:"02", title:"Plan Together",         desc:"I put together a clear plan — pages, design direction, timeline. You'll know exactly what you're getting before we begin.",           day:"Day 2–3" },
  { n:"03", title:"Build & Review",        desc:"I build and share a live preview. We review together, make changes until you're happy. Transparent throughout.",                      day:"Day 4–10"},
  { n:"04", title:"Delivery & Support",    desc:"Once approved, the website goes live. I hand over everything and provide basic support so you know how to manage your site.",         day:"Day 10–14"},
];

export default function Process() {
  return (
    <section className="section-pad bg-ink">
      <div className="container-c mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="label-tag mx-auto" style={{width:"fit-content"}}>How I Work</div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-4">
            A Simple, Stress-Free Process
          </h2>
          <p className="text-white/45 text-lg">
            From first message to live website — here's exactly what to expect. No surprises.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s, i) => (
            <div key={s.n} className="glass glow-hover rounded-2xl p-6" style={{border:"1px solid rgba(255,255,255,0.07)"}}>
              <div className="flex items-center justify-between mb-5">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm"
                  style={{background:"#F59E0B", color:"#07070A"}}>{s.n}</span>
                <span className="text-[10px] font-display font-semibold text-white/30 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                  {s.day}
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-white mb-2">{s.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/25 mt-6">
          ✦ Timeline varies by project complexity. Custom timelines available on request.
        </p>
      </div>
    </section>
  );
}
