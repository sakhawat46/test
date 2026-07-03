export function PlacementC() {
  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "sans-serif", maxWidth: 390, margin: "0 auto" }}>

      {/* Simulated FAQ bottom */}
      <div className="px-6 pt-8 pb-4" style={{ background: "#faf9fc" }}>
        <h2 className="font-serif text-2xl font-bold text-[#38404B] text-center mb-4">Frequently Asked Questions</h2>
        {["Is this covered by insurance?", "How is this different from other programs?", "What if my doctor doesn't approve me?"].map((q, i) => (
          <div key={i} className="py-3" style={{ borderBottom: "1px solid #e5e7eb" }}>
            <p className="text-sm font-semibold text-[#38404B]">{q}</p>
          </div>
        ))}
      </div>

      {/* ── FHI BADGE + CTA — Placement C ── */}
      <div
        className="px-6 py-8 flex flex-col items-center gap-5 text-center"
        style={{ background: "linear-gradient(160deg, #f0fbfc 0%, #fdf6fa 100%)" }}
      >
        {/* Headline */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#38404B] leading-snug mb-1">
            Ready to feel like yourself again?
          </h2>
          <p className="text-sm text-[#6b7280]">Physician-led. Women-first. No payment until approved.</p>
        </div>

        {/* CTA Button */}
        <button className="rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg" style={{ background: "#F0327A", boxShadow: "0 4px 20px rgba(240,50,122,0.35)" }}>
          See If I Qualify →
        </button>

        {/* Divider */}
        <div className="w-full flex items-center gap-3">
          <div className="flex-1" style={{ height: 1, background: "rgba(78,183,192,0.2)" }} />
          <p className="text-[9px] font-bold uppercase tracking-widest text-[#9ca3af]">Our Mission</p>
          <div className="flex-1" style={{ height: 1, background: "rgba(78,183,192,0.2)" }} />
        </div>

        {/* FHI Badge */}
        <div
          className="flex items-center gap-3 px-5 py-3 rounded-[14px] w-full max-w-[300px]"
          style={{ border: "1.5px solid #4EB7C0", background: "white", boxShadow: "0 2px 16px rgba(78,183,192,0.12)" }}
        >
          <div
            className="flex items-center justify-center rounded-full flex-shrink-0"
            style={{ width: 42, height: 42, background: "#4EB7C0" }}
          >
            <span className="text-white font-bold text-[13px] tracking-tight">FHI</span>
          </div>
          <div className="text-left">
            <p className="text-[8px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "#4EB7C0" }}>Proudly Funds</p>
            <p className="text-[12px] font-bold text-[#38404B] leading-none">The Female Health Institute</p>
            <p className="text-[9px] text-[#9ca3af] uppercase tracking-wide mt-1">Independent Women's Research</p>
          </div>
        </div>

        <p className="text-[10px] text-[#9ca3af] leading-relaxed max-w-[280px]">
          A portion of every SculptRx membership supports independent women's health research.
        </p>
      </div>

      {/* Simulated footer */}
      <div className="px-6 py-6 text-center" style={{ background: "#38404B" }}>
        <p className="text-sm font-serif font-bold text-white mb-1">Sculpt<span style={{ color: "#4EB7C0" }}>Rx</span></p>
        <p className="text-[10px] text-[#9ca3af]">© 2025 SculptRx · Privacy · Terms</p>
      </div>

      {/* Label */}
      <div className="px-6 py-4 text-center" style={{ background: "white", borderTop: "1px solid #e5e7eb" }}>
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#4EB7C0" }}>Placement C — Above Footer</p>
        <p className="text-[11px] text-[#9ca3af] mt-1">Mission-driven · Paired with final CTA · Bottom of page</p>
      </div>
    </div>
  );
}
