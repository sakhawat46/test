const items = [
  { label: "$0 Due Until A Doctor Approves You", color: "#4EB7C0" },
  { label: "U.S. Board-Certified Physicians", color: "#F0327A" },
  { label: "OBGYNs on Your Care Team", color: "#4EB7C0" },
  { label: "Doctor Approval in 24 Hours or Less", color: "#F0327A" },
];

export default function BadgesBorderStrip() {
  return (
    <div className="min-h-screen bg-[#f5eef4] flex items-center justify-center p-3">
      <div className="w-[390px] bg-white rounded-3xl overflow-hidden" style={{ boxShadow: "0 24px 80px rgba(78,183,192,0.16), 0 4px 20px rgba(240,50,122,0.09)" }}>
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #4EB7C0, #F0327A)" }} />

        <div className="flex flex-col items-center pt-6 pb-3">
          <span className="font-serif text-[1.85rem] font-semibold text-[#38404B] select-none leading-none">
            Sculpt<span className="text-[#4EB7C0]">Rx</span>
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.22em] text-[#9ca3af] mt-1.5">Women's Health & Weight Loss</span>
        </div>

        <div className="px-6 pt-2 text-center">
          <h2 className="font-serif text-[1.6rem] font-bold text-[#38404B] leading-[1.12]">Most programs are built for everyone.</h2>
          <h2 className="font-serif text-[1.6rem] font-bold leading-[1.12] mt-1" style={{ color: "#F0327A" }}>SculptRx was built for you.</h2>
        </div>

        <div
          className="px-2 mt-2 grid items-center"
          style={{ gridTemplateColumns: "minmax(160px, 1fr) minmax(180px, 240px)", columnGap: "4px" }}
        >
          {/* Left column: left-border accent strips */}
          <div className="pl-3 flex flex-col gap-2">
            {items.map(({ label, color }) => (
              <div
                key={label}
                className="pl-3 py-2 rounded-r-lg"
                style={{ borderLeft: `3px solid ${color}`, backgroundColor: `${color}0d` }}
              >
                <p className="text-[11.5px] font-semibold text-[#38404B] leading-[1.25]">{label}</p>
              </div>
            ))}
          </div>

          {/* Right column: vials — no overflow-hidden so drop-shadow bleeds naturally */}
          <div className="relative flex items-center justify-end">
            {/* Teal glow bloom centered behind vials, soft-masked at edges */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 80% 75% at 50% 50%, rgba(78,183,192,0.55) 0%, transparent 70%)",
                filter: "blur(24px)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)",
                WebkitMaskComposite: "source-in",
                maskImage: "linear-gradient(to right, transparent 0%, black 30%), linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)",
                maskComposite: "intersect",
              }}
            />
            <img
              src="/__mockup/images/sculpt-vials-nobg.png"
              alt="vials"
              className="relative w-[262px] max-w-none"
              style={{ marginRight: "-30px", transform: "translateY(0px)", filter: "drop-shadow(0 14px 28px rgba(78,183,192,0.26)) drop-shadow(0 5px 12px rgba(0,0,0,0.10))" }}
            />
          </div>
        </div>

        <div className="px-6 pt-4">
          <p className="text-[13px] text-[#6b7280] leading-[1.55] text-center">
            Board Certified Doctor-prescribed GLP-1 weight loss, built for a woman's body. OBGYNs on your care team. A real MD on every case. Your cycle, your health, your goals — finally accounted for.
          </p>
        </div>

        <div className="px-6 pt-4 pb-6">
          <p className="text-[15px] font-bold text-[#38404B] mb-3 leading-snug text-center">We onboard women in small groups. Claim your place in line below.</p>
          <input readOnly placeholder="(555) 555-5555" className="w-full rounded-full border border-gray-200 px-5 py-3 text-sm text-gray-400 mb-3 outline-none" />
          <button className="w-full rounded-full py-3.5 text-sm font-semibold text-white" style={{ background: "#F0327A", boxShadow: "0 4px 18px rgba(240,50,122,0.34)" }}>Text Me When It Opens</button>
          <p className="text-[10px] text-[#9ca3af] leading-relaxed text-center mt-4">By joining, you agree to receive recurring marketing texts from SculptRx. Msg &amp; data rates may apply. Reply STOP to unsubscribe.</p>
        </div>
      </div>
    </div>
  );
}
