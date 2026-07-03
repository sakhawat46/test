export default function BadgeSeal() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-[340px] flex flex-col items-center gap-2">
        <p className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#9ca3af] mb-1">
          Concept B — Circular Seal · Bottom-right
        </p>

        {/* Image container */}
        <div className="relative w-full">
          {/* Glow */}
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              inset: "10px 0 0 0",
              background:
                "radial-gradient(ellipse 65% 55% at 33% 58%, rgba(78,183,192,0.42) 0%, transparent 65%)," +
                "radial-gradient(ellipse 55% 50% at 72% 55%, rgba(240,50,122,0.28) 0%, transparent 62%)",
              filter: "blur(20px)",
            }}
          />
          <img
            src="/__mockup/images/sculpt-vials-nobg.png"
            alt="SculptRx vials"
            className="relative w-full h-auto"
            style={{
              display: "block",
              filter:
                "drop-shadow(0 16px 32px rgba(78,183,192,0.28))" +
                " drop-shadow(0 6px 16px rgba(240,50,122,0.18))" +
                " drop-shadow(0 3px 8px rgba(0,0,0,0.12))",
            }}
          />
          {/* Badge — bottom-right circular seal */}
          <div
            className="absolute bottom-3 right-3 flex flex-col items-center justify-center"
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #4EB7C0 0%, #3aa3ac 100%)",
              boxShadow: "0 4px 16px rgba(78,183,192,0.40), 0 1px 4px rgba(0,0,0,0.12)",
              border: "2px solid rgba(255,255,255,0.6)",
            }}
          >
            <span style={{ fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: "0.06em", textAlign: "center", lineHeight: 1.2, textTransform: "uppercase" }}>
              Women's
            </span>
            <div style={{ width: "28px", height: "1px", background: "rgba(255,255,255,0.5)", margin: "2px 0" }} />
            <span style={{ fontSize: "9px", fontWeight: 700, color: "white", letterSpacing: "0.06em", textAlign: "center", lineHeight: 1.2, textTransform: "uppercase" }}>
              Health
            </span>
          </div>
        </div>

        <p className="text-[10px] text-[#9ca3af] text-center mt-1">
          Teal gradient circle seal · bottom-right corner
        </p>
      </div>
    </div>
  );
}
