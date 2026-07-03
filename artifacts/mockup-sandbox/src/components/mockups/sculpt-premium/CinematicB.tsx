export default function CinematicB() {
  return (
    <div className="min-h-screen bg-[#f5eef4] flex items-center justify-center p-3">
      <div
        className="w-[390px] bg-white rounded-3xl overflow-hidden"
        style={{ boxShadow: "0 24px 80px rgba(78,183,192,0.16), 0 4px 20px rgba(240,50,122,0.09)" }}
      >
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #4EB7C0, #F0327A)" }} />

        {/* Cinematic image block — full width, tall */}
        <div className="relative" style={{ height: "320px", overflow: "hidden" }}>
          {/* Glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 65% 55% at 33% 58%, rgba(78,183,192,0.50) 0%, transparent 65%)," +
                "radial-gradient(ellipse 55% 50% at 72% 55%, rgba(240,50,122,0.36) 0%, transparent 62%)",
              filter: "blur(24px)",
            }}
          />
          {/* Logo top-center */}
          <div className="absolute top-5 left-0 right-0 flex flex-col items-center z-10">
            <span className="font-serif text-2xl font-semibold text-[#38404B] drop-shadow-sm select-none">
              Sculpt<span className="text-[#4EB7C0]">Rx</span>
            </span>
            <span className="text-[0.55rem] uppercase tracking-[0.2em] text-[#6b7280]">Women's Health</span>
          </div>

          {/* Vials — large, centered */}
          <img
            src="/__mockup/images/sculpt-vials-nobg.png"
            alt="vials"
            className="absolute w-full"
            style={{
              bottom: "30px",
              left: 0,
              filter: "drop-shadow(0 14px 30px rgba(78,183,192,0.30)) drop-shadow(0 5px 14px rgba(240,50,122,0.20)) drop-shadow(0 2px 6px rgba(0,0,0,0.12))",
            }}
          />

          {/* Seal */}
          <div
            className="absolute flex flex-col items-center justify-center z-10"
            style={{
              width: "58px", height: "58px", borderRadius: "50%",
              background: "linear-gradient(135deg, #4EB7C0 0%, #3aa3ac 100%)",
              boxShadow: "0 4px 14px rgba(78,183,192,0.42)",
              border: "2px solid rgba(255,255,255,0.65)",
              bottom: "16px", right: "20px",
            }}
          >
            <span style={{ fontSize: "7.5px", fontWeight: 700, color: "white", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.2 }}>Doctor</span>
            <div style={{ width: "24px", height: "1px", background: "rgba(255,255,255,0.45)", margin: "2px 0" }} />
            <span style={{ fontSize: "7.5px", fontWeight: 700, color: "white", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.2 }}>Prescribed</span>
          </div>

          {/* Frosted overlay — headline on image */}
          <div
            className="absolute bottom-0 left-0 right-0 px-6 py-4 z-10"
            style={{
              background: "linear-gradient(to top, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.75) 60%, transparent 100%)",
              backdropFilter: "blur(2px)",
            }}
          >
            <h2 className="font-serif text-[1.4rem] font-bold text-[#38404B] leading-tight text-center">
              Most programs are built for everyone.
              <br />
              <span style={{ color: "#F0327A" }}>SculptRx was built for you.</span>
            </h2>
          </div>
        </div>

        {/* Below — copy + cards + form */}
        <div className="px-6 pt-4 pb-6">
          <p className="text-[11.5px] text-[#6b7280] leading-relaxed text-center mb-5">
            Board Certified Doctor-prescribed GLP-1 weight loss, built for a woman's body. OBGYNs on your care team. A real MD on every case.
          </p>

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
