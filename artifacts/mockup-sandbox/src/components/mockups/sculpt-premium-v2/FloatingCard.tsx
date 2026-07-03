export default function FloatingCard() {
  return (
    <div className="min-h-screen bg-[#f5eef4] flex items-center justify-center p-3">
      <div
        className="w-[390px] bg-white rounded-3xl overflow-hidden"
        style={{ boxShadow: "0 24px 80px rgba(78,183,192,0.16), 0 4px 20px rgba(240,50,122,0.09)" }}
      >
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #4EB7C0, #F0327A)" }} />

        {/* Logo */}
        <div className="flex flex-col items-center pt-6 pb-3">
          <span className="font-serif text-2xl font-semibold text-[#38404B] select-none">
            Sculpt<span className="text-[#4EB7C0]">Rx</span>
          </span>
          <span className="text-[0.55rem] uppercase tracking-[0.2em] text-[#9ca3af] mt-0.5">Women's Health & Weight Loss</span>
        </div>

        {/* Whole image on a tinted band, with floating headline card overlapping its bottom */}
        <div className="relative pb-2" style={{ marginBottom: "10px" }}>
          <div
            className="relative mx-4 rounded-2xl overflow-hidden"
            style={{ background: "linear-gradient(150deg, #eafafa 0%, #fdeef5 100%)", paddingTop: "10px" }}
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 52% at 35% 52%, rgba(78,183,192,0.32) 0%, transparent 65%)," +
                  "radial-gradient(ellipse 52% 46% at 70% 55%, rgba(240,50,122,0.24) 0%, transparent 62%)",
                filter: "blur(20px)",
              }}
            />
            <img
              src="/__mockup/images/sculpt-vials-nobg.png"
              alt="vials"
              className="relative w-full h-auto block"
              style={{ filter: "drop-shadow(0 12px 24px rgba(78,183,192,0.26)) drop-shadow(0 4px 10px rgba(0,0,0,0.10))" }}
            />
            {/* Seal top-right */}
            <div
              className="absolute flex flex-col items-center justify-center"
              style={{
                width: "52px", height: "52px", borderRadius: "50%",
                background: "linear-gradient(135deg, #4EB7C0 0%, #3aa3ac 100%)",
                boxShadow: "0 4px 14px rgba(78,183,192,0.42)", border: "2px solid rgba(255,255,255,0.65)",
                top: "14px", right: "14px",
              }}
            >
              <span style={{ fontSize: "7px", fontWeight: 700, color: "white", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.25 }}>Doctor</span>
              <div style={{ width: "22px", height: "1px", background: "rgba(255,255,255,0.45)", margin: "2px 0" }} />
              <span style={{ fontSize: "7px", fontWeight: 700, color: "white", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.25 }}>Prescribed</span>
            </div>
          </div>

          {/* Floating headline card overlapping image bottom edge */}
          <div
            className="relative mx-6 -mt-8 bg-white rounded-2xl px-5 py-4 text-center"
            style={{ boxShadow: "0 12px 30px rgba(56,64,75,0.12), 0 2px 8px rgba(0,0,0,0.06)", zIndex: 5 }}
          >
            <h2 className="font-serif text-[1.4rem] font-bold text-[#38404B] leading-tight">
              Most programs are built for everyone.
              <br />
              <span style={{ color: "#F0327A" }}>SculptRx was built for you.</span>
            </h2>
          </div>
        </div>

        <div className="px-7 pt-2 text-center">
          <p className="text-[11.5px] text-[#6b7280] leading-relaxed">
            Board Certified Doctor-prescribed GLP-1 weight loss, built for a woman's body. OBGYNs on your care team. A real MD on every case.
          </p>
        </div>

        <div className="px-6 pt-4 pb-2 grid grid-cols-2 gap-2">
          {["$0 Due Until Approved", "Board-Certified MDs", "OBGYNs on Your Team", "Approval in 24 Hours"].map((label, i) => (
            <div key={label} className="rounded-xl px-3 py-2 text-center" style={{ background: i % 2 ? "rgba(240,50,122,0.06)" : "rgba(78,183,192,0.07)", border: `1px solid ${i % 2 ? "rgba(240,50,122,0.18)" : "rgba(78,183,192,0.22)"}` }}>
              <span className="text-[10.5px] font-semibold text-[#38404B]">{label}</span>
            </div>
          ))}
        </div>

        <div className="px-6 pt-4 pb-6">
          <p className="text-sm font-bold text-[#38404B] mb-3">Join the waitlist and skip the line at launch.</p>
          <input readOnly placeholder="(555) 555-5555" className="w-full rounded-full border border-gray-200 px-5 py-2.5 text-xs text-gray-400 mb-3 outline-none" />
          <button className="w-full rounded-full py-3 text-sm font-semibold text-white" style={{ background: "#F0327A", boxShadow: "0 4px 16px rgba(240,50,122,0.32)" }}>Join Waitlist Now →</button>
          <p className="text-[9px] text-[#9ca3af] leading-relaxed text-center mt-4">By joining, you agree to receive marketing texts from SculptRx. Msg &amp; data rates may apply. Reply STOP to unsubscribe.</p>
        </div>
      </div>
    </div>
  );
}
