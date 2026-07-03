export default function SplitA() {
  return (
    <div className="min-h-screen bg-[#f5eef4] flex items-center justify-center p-3">
      <div
        className="w-[390px] bg-white rounded-3xl overflow-hidden"
        style={{ boxShadow: "0 24px 80px rgba(78,183,192,0.16), 0 4px 20px rgba(240,50,122,0.09)" }}
      >
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #4EB7C0, #F0327A)" }} />

        {/* Two-column hero */}
        <div className="flex" style={{ minHeight: "360px" }}>
          {/* Left — text */}
          <div className="flex flex-col justify-between p-6 pr-3" style={{ flex: "0 0 52%" }}>
            <div>
              <div className="mb-5">
                <span className="font-serif text-2xl font-semibold text-[#38404B]">
                  Sculpt<span className="text-[#4EB7C0]">Rx</span>
                </span>
                <p className="text-[0.55rem] uppercase tracking-[0.2em] text-[#9ca3af] mt-0.5">
                  Women's Health
                </p>
              </div>
              <h2 className="font-serif text-[1.3rem] font-bold text-[#38404B] leading-tight mb-3">
                Most programs are built for everyone.
                <br />
                <span style={{ color: "#F0327A" }}>SculptRx was built for you.</span>
              </h2>
              <p className="text-[11px] text-[#6b7280] leading-relaxed">
                Board Certified Doctor-prescribed GLP-1 weight loss, built for a woman's body. OBGYNs on your care team.
              </p>
            </div>

            {/* Form */}
            <div className="mt-4">
              <p className="text-[11px] font-bold text-[#38404B] mb-2 leading-snug">
                Join the waitlist and skip the line at launch.
              </p>
              <input
                readOnly
                placeholder="(555) 555-5555"
                className="w-full rounded-full border border-gray-200 px-4 py-2 text-xs text-gray-400 mb-2 outline-none"
              />
              <button
                className="w-full rounded-full py-2.5 text-xs font-semibold text-white"
                style={{ background: "#F0327A", boxShadow: "0 4px 14px rgba(240,50,122,0.32)" }}
              >
                Join Waitlist Now →
              </button>
            </div>
          </div>

          {/* Right — vials, flush edge */}
          <div className="relative flex-1 overflow-hidden" style={{ minHeight: "360px" }}>
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 40% 50%, rgba(78,183,192,0.38) 0%, transparent 65%)," +
                  "radial-gradient(ellipse 60% 55% at 70% 60%, rgba(240,50,122,0.26) 0%, transparent 60%)",
                filter: "blur(18px)",
              }}
            />
            <img
              src="/__mockup/images/sculpt-vials-nobg.png"
              alt="vials"
              className="absolute w-[130%] max-w-none"
              style={{
                bottom: "-5%",
                left: "-15%",
                filter: "drop-shadow(0 12px 28px rgba(78,183,192,0.28)) drop-shadow(0 4px 12px rgba(0,0,0,0.12))",
              }}
            />
            {/* Seal */}
            <div
              className="absolute top-4 right-4 flex flex-col items-center justify-center"
              style={{
                width: "52px", height: "52px", borderRadius: "50%",
                background: "linear-gradient(135deg, #4EB7C0 0%, #3aa3ac 100%)",
                boxShadow: "0 3px 12px rgba(78,183,192,0.40)",
                border: "2px solid rgba(255,255,255,0.6)",
              }}
            >
              <span style={{ fontSize: "7px", fontWeight: 700, color: "white", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.25 }}>Doctor</span>
              <div style={{ width: "22px", height: "1px", background: "rgba(255,255,255,0.4)", margin: "2px 0" }} />
              <span style={{ fontSize: "7px", fontWeight: 700, color: "white", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.25 }}>Prescribed</span>
            </div>
          </div>
        </div>

        {/* Benefit chips */}
        <div className="px-6 pb-6 pt-4 grid grid-cols-2 gap-2">
          {[
            { label: "$0 Due Until Approved", color: "#4EB7C0", bg: "rgba(78,183,192,0.07)" },
            { label: "Board-Certified MDs", color: "#F0327A", bg: "rgba(240,50,122,0.06)" },
            { label: "OBGYNs on Your Team", color: "#4EB7C0", bg: "rgba(78,183,192,0.07)" },
            { label: "Approval in 24 Hours", color: "#F0327A", bg: "rgba(240,50,122,0.06)" },
          ].map(({ label, color, bg }) => (
            <div key={label} className="rounded-xl px-3 py-2 text-center" style={{ background: bg, border: `1px solid ${color}22` }}>
              <span className="text-[10.5px] font-semibold" style={{ color: "#38404B" }}>{label}</span>
            </div>
          ))}
        </div>

        <p className="text-[9px] text-[#9ca3af] leading-relaxed text-center px-6 pb-5">
          By joining, you agree to receive marketing texts from SculptRx. Msg &amp; data rates may apply. Reply STOP to unsubscribe.
        </p>
      </div>
    </div>
  );
}
