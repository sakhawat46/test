export default function AsymmetricC() {
  return (
    <div className="min-h-screen bg-[#f5eef4] flex items-center justify-center p-3">
      <div
        className="w-[390px] bg-white rounded-3xl overflow-hidden"
        style={{ boxShadow: "0 24px 80px rgba(78,183,192,0.16), 0 4px 20px rgba(240,50,122,0.09)" }}
      >
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #4EB7C0, #F0327A)" }} />

        {/* Logo */}
        <div className="flex flex-col items-center pt-6 pb-4">
          <span className="font-serif text-2xl font-semibold text-[#38404B] select-none">
            Sculpt<span className="text-[#4EB7C0]">Rx</span>
          </span>
          <span className="text-[0.55rem] uppercase tracking-[0.2em] text-[#9ca3af] mt-0.5">Women's Health & Weight Loss</span>
        </div>

        {/* Asymmetric hero — headline left, image right, overlapping */}
        <div className="relative px-6 pb-2" style={{ minHeight: "280px" }}>
          {/* Headline anchored left, vertically centered */}
          <div className="absolute left-6 top-0 bottom-0 flex flex-col justify-center z-10" style={{ width: "46%" }}>
            <h2 className="font-serif text-[1.35rem] font-bold text-[#38404B] leading-tight">
              Most programs are built for everyone.
              <br />
              <span style={{ color: "#F0327A" }}>SculptRx was built for you.</span>
            </h2>
          </div>

          {/* Vials — right side, overflowing top */}
          <div
            className="absolute right-0 pointer-events-none"
            style={{ width: "58%", top: "-24px", zIndex: 1 }}
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 65% at 45% 55%, rgba(78,183,192,0.44) 0%, transparent 65%)," +
                  "radial-gradient(ellipse 65% 55% at 75% 60%, rgba(240,50,122,0.30) 0%, transparent 60%)",
                filter: "blur(20px)",
              }}
            />
            <img
              src="/__mockup/images/sculpt-vials-nobg.png"
              alt="vials"
              className="relative w-full h-auto"
              style={{
                filter: "drop-shadow(0 16px 32px rgba(78,183,192,0.30)) drop-shadow(0 5px 14px rgba(240,50,122,0.18)) drop-shadow(0 2px 8px rgba(0,0,0,0.12))",
              }}
            />
            {/* Seal */}
            <div
              className="absolute flex flex-col items-center justify-center"
              style={{
                width: "54px", height: "54px", borderRadius: "50%",
                background: "linear-gradient(135deg, #4EB7C0 0%, #3aa3ac 100%)",
                boxShadow: "0 4px 14px rgba(78,183,192,0.42)",
                border: "2px solid rgba(255,255,255,0.65)",
                bottom: "12px", right: "12px",
              }}
            >
              <span style={{ fontSize: "7px", fontWeight: 700, color: "white", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.25 }}>Doctor</span>
              <div style={{ width: "22px", height: "1px", background: "rgba(255,255,255,0.45)", margin: "2px 0" }} />
              <span style={{ fontSize: "7px", fontWeight: 700, color: "white", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.25 }}>Prescribed</span>
            </div>
          </div>
        </div>

        {/* Rule / divider */}
        <div className="mx-6 mb-4" style={{ height: "1px", background: "linear-gradient(to right, rgba(78,183,192,0.3), rgba(240,50,122,0.2))" }} />

        {/* Copy */}
        <div className="px-6 pb-4">
          <p className="text-[11.5px] text-[#6b7280] leading-relaxed mb-4">
            Board Certified Doctor-prescribed GLP-1 weight loss, built for a woman's body. OBGYNs on your care team. A real MD on every case. Your cycle, your goals — finally accounted for.
          </p>

          {/* Compact benefit row */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {[
              { label: "$0 Due Until Approved", bg: "rgba(78,183,192,0.07)", border: "rgba(78,183,192,0.22)" },
              { label: "Board-Certified MDs", bg: "rgba(240,50,122,0.06)", border: "rgba(240,50,122,0.18)" },
              { label: "OBGYNs on Your Team", bg: "rgba(78,183,192,0.07)", border: "rgba(78,183,192,0.22)" },
              { label: "Approval in 24 Hours", bg: "rgba(240,50,122,0.06)", border: "rgba(240,50,122,0.18)" },
            ].map(({ label, bg, border }) => (
              <div key={label} className="rounded-xl px-3 py-2 text-center" style={{ background: bg, border: `1px solid ${border}` }}>
                <span className="text-[10.5px] font-semibold text-[#38404B]">{label}</span>
              </div>
            ))}
          </div>

          <p className="text-sm font-bold text-[#38404B] mb-3">Join the waitlist and skip the line at launch.</p>
          <input readOnly placeholder="(555) 555-5555" className="w-full rounded-full border border-gray-200 px-5 py-2.5 text-xs text-gray-400 mb-3 outline-none" />
          <button
            className="w-full rounded-full py-3 text-sm font-semibold text-white"
            style={{ background: "#F0327A", boxShadow: "0 4px 16px rgba(240,50,122,0.32)" }}
          >
            Join Waitlist Now →
          </button>

          <p className="text-[9px] text-[#9ca3af] leading-relaxed text-center mt-4">
            By joining, you agree to receive marketing texts from SculptRx. Msg &amp; data rates may apply. Reply STOP to unsubscribe.
          </p>
        </div>
      </div>
    </div>
  );
}
