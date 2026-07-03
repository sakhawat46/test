function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-[#F0327A]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const testimonials = [
  { name: "Lauren M.", age: "42", quote: "Down 18 lbs and sleeping better than I have in years.", img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80&fit=crop&crop=face", stars: 5 },
  { name: "Priya K.", age: "37", quote: "My brain fog lifted within the first month. I feel like myself again.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&fit=crop&crop=face", stars: 5 },
  { name: "Danielle R.", age: "49", quote: "Finally a program that addresses the hormonal side too.", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80&fit=crop&crop=face", stars: 5 },
  { name: "Cassie T.", age: "44", quote: "I've tried everything. This is the first thing that actually worked.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&fit=crop&crop=face", stars: 5 },
  { name: "Monica S.", age: "51", quote: "Hot flashes gone, energy back, and 22 lbs lighter.", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80&fit=crop&crop=face", stars: 5 },
  { name: "Jess H.", age: "38", quote: "The telehealth visits made it so easy — no excuses not to show up.", img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80&fit=crop&crop=face", stars: 5 },
  { name: "Rachel B.", age: "46", quote: "My doctor finally listened. SculptRx actually looked at my labs.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80&fit=crop&crop=face", stars: 5 },
  { name: "Tanya W.", age: "53", quote: "Three months in and my husband keeps asking what's different.", img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80&fit=crop&crop=face", stars: 5 },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-72 rounded-2xl p-5 flex flex-col gap-3 mx-3 bg-white shadow-sm border border-pink-50">
      <div className="flex items-center gap-3">
        <img src={t.img} alt={t.name}
          className="w-11 h-11 rounded-full object-cover object-top ring-2 ring-[#4EB7C0]/30" />
        <div>
          <p className="font-semibold text-sm text-[#38404B]">{t.name}</p>
          <p className="text-xs text-gray-400">Age {t.age}</p>
        </div>
        <div className="ml-auto"><StarRow count={t.stars} /></div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed italic">"{t.quote}"</p>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof testimonials; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-1">
      <div className="flex" style={{ animation: `${reverse ? "marqueeRev" : "marquee"} 40s linear infinite`, width: "max-content" }}>
        {doubled.map((t, i) => <TestimonialCard key={i} t={t} />)}
      </div>
    </div>
  );
}

export function LayeredSection() {
  return (
    <div className="font-sans w-full">
      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes marqueeRev { from { transform: translateX(-50%) } to { transform: translateX(0) } }
      `}</style>

      {/* ── BENTO GRID ── */}
      <div className="w-full px-6 py-16" style={{ background: "linear-gradient(135deg,#fdf2f7 0%,#f0fbfc 55%,#fff5f9 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#4EB7C0] mb-3">Real Women. Real Results.</p>
          <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10 text-[#38404B]" style={{ fontFamily: "'Georgia', serif" }}>
            What changes when your body <span className="text-[#F0327A]">finally gets support</span>
          </h2>

          {/* Explicit CSS Grid — no col-span ambiguity */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridTemplateRows: "260px 260px",
            gap: "14px",
          }}>

            {/* Tall photo — spans both rows, col 1 */}
            <div style={{ gridColumn: "1", gridRow: "1 / 3" }}
              className="rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop"
                alt="Woman smiling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#38404B]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-semibold text-sm">Sarah, 44</p>
                <p className="text-white/80 text-xs mt-1 italic">"Down 28 lbs and off my blood pressure meds."</p>
              </div>
            </div>

            {/* Teal stat — row 1, col 2 */}
            <div style={{ gridColumn: "2", gridRow: "1", background: "#4EB7C0" }}
              className="rounded-3xl flex flex-col items-center justify-center gap-2 px-6">
              <p className="text-5xl font-bold text-white leading-none">−22 lbs</p>
              <p className="text-white/80 text-sm text-center">avg. weight loss in 3 months</p>
            </div>

            {/* Wide photo top — row 1, cols 3–4 */}
            <div style={{ gridColumn: "3 / 5", gridRow: "1" }}
              className="rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=700&q=80&fit=crop"
                alt="Active woman" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right,rgba(231,154,184,0.7) 0%,transparent 55%)" }} />
              <div className="absolute left-6 top-1/2 -translate-y-1/2">
                <p className="text-white text-sm font-semibold tracking-wide uppercase opacity-90 drop-shadow">GLP-1 + HRT</p>
                <p className="text-white text-2xl font-semibold mt-1 leading-tight drop-shadow">Working<br/>together.</p>
              </div>
            </div>

            {/* Pink stat — row 2, col 2 */}
            <div style={{ gridColumn: "2", gridRow: "2", background: "#F0327A" }}
              className="rounded-3xl flex flex-col items-center justify-center gap-2 px-6">
              <p className="text-5xl font-bold text-white leading-none">87%</p>
              <p className="text-white/90 text-sm text-center">felt results within 8 weeks</p>
            </div>

            {/* Quote card — row 2, col 3 */}
            <div style={{ gridColumn: "3", gridRow: "2", background: "#fff0f6" }}
              className="rounded-3xl flex flex-col justify-center gap-3 px-6 py-5">
              <StarRow count={5} />
              <p className="text-[#38404B] text-sm italic leading-relaxed">
                "I finally have a care team that looks at the whole picture — not just the scale."
              </p>
              <p className="text-xs text-gray-400 font-medium">— Monica S., age 51</p>
            </div>

            {/* Photo bottom-right — row 2, col 4 */}
            <div style={{ gridColumn: "4", gridRow: "2" }}
              className="rounded-3xl overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80&fit=crop"
                alt="Telehealth" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(78,183,192,0.75) 0%, transparent 50%)" }} />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white/80 text-xs font-semibold uppercase tracking-wide">100% Telehealth</p>
                <p className="text-white text-base font-semibold mt-1 leading-tight">Care that fits your life.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── MARQUEE STRIP ── */}
      <div className="w-full py-12 overflow-hidden" style={{ background: "linear-gradient(180deg,#fdf2f7 0%,#ffffff 100%)" }}>
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#E79AB8] mb-8">Voices from our community</p>
        <div className="flex flex-col gap-4">
          <MarqueeRow items={testimonials} />
          <MarqueeRow items={[...testimonials].reverse()} reverse />
        </div>
      </div>
    </div>
  );
}
