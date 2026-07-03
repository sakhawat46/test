export function PlacementB() {
  const trustItems = [
    { title: "Licensed Pharmacies", desc: "GLP-1 therapies from licensed US pharmacies." },
    { title: "Board-Certified Providers", desc: "Every care plan reviewed by licensed clinicians." },
    { title: "Personalized Plans", desc: "No cookie-cutter protocols. Care tailored to you." },
    { title: "100% Telehealth", desc: "Complete your care entirely from home." },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "sans-serif", maxWidth: 390, margin: "0 auto" }}>

      {/* Section above */}
      <div className="px-6 py-6" style={{ background: "linear-gradient(135deg,#fdf2f7 0%,#f0fbfc 55%,#fff5f9 100%)" }}>
        <p className="text-[9px] font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#4EB7C0" }}>Real Women. Real Results.</p>
        <h2 className="font-serif text-2xl font-bold text-[#46384b] text-center leading-snug">
          What changes when your body{" "}
          <span style={{ color: "#F0327A" }}>finally gets support</span>
        </h2>
      </div>

      {/* ── TRUST STRIP with FHI Badge — Placement B ── */}
      <div
        className="py-8 px-6"
        style={{ background: "linear-gradient(120deg, #e8f9fa 0%, #fdf2f7 60%, #f5eaf8 100%)", borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)" }}
      >
        {/* Trust grid */}
        <div className="grid grid-cols-2 gap-5 mb-7">
          {trustItems.map((item, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(78,183,192,0.12)" }}>
                <div className="w-4 h-4 rounded-full" style={{ background: "#4EB7C0" }} />
              </div>
              <p className="text-xs font-semibold text-[#38404B]">{item.title}</p>
              <p className="text-[10.5px] text-[#6b7280] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-5" style={{ height: 1, background: "rgba(78,183,192,0.2)" }} />

        {/* FHI Badge — full width, centered */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-[9px] font-bold uppercase tracking-widest text-[#9ca3af]">Our Commitment</p>
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-[14px]"
            style={{ border: "1.5px solid #4EB7C0", background: "white", boxShadow: "0 2px 12px rgba(78,183,192,0.10)" }}
          >
            <div
              className="flex items-center justify-center rounded-full flex-shrink-0"
              style={{ width: 42, height: 42, background: "#4EB7C0" }}
            >
              <span className="text-white font-bold text-[13px] tracking-tight">FHI</span>
            </div>
            <div>
              <p className="text-[8px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "#4EB7C0" }}>Proudly Funds</p>
              <p className="text-[13px] font-bold text-[#38404B] leading-none">The Female Health Institute</p>
              <p className="text-[9px] text-[#9ca3af] uppercase tracking-wide mt-1">Independent Women's Research</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section below */}
      <div className="px-6 py-6" style={{ background: "#faf9fc" }}>
        <p className="text-[9px] font-bold tracking-widest uppercase text-center mb-1" style={{ color: "#4EB7C0" }}>A Smarter Path</p>
        <h2 className="font-serif text-xl font-bold text-[#46384b] text-center">
          Most providers take 5 minutes. <span style={{ color: "#F0327A" }}>We don't.</span>
        </h2>
      </div>

      {/* Label */}
      <div className="mt-auto px-6 py-4 text-center" style={{ borderTop: "1px solid #e5e7eb" }}>
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#4EB7C0" }}>Placement B — Inside Trust Strip</p>
        <p className="text-[11px] text-[#9ca3af] mt-1">Natural fit · Surrounded by credentials · Mid-page</p>
      </div>
    </div>
  );
}
