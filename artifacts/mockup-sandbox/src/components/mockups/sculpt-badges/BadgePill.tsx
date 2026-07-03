export default function BadgePill() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-[340px] flex flex-col items-center gap-2">
        <p className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#9ca3af] mb-1">
          Concept A — Pill Label · Bottom-left
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
          {/* Badge — bottom-left pill */}
          <div
            className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: "0 2px 12px rgba(78,183,192,0.22), 0 1px 4px rgba(0,0,0,0.08)",
              border: "1px solid rgba(78,183,192,0.3)",
            }}
          >
            <span style={{ color: "#4EB7C0", fontSize: "13px" }}>✦</span>
            <span className="text-[11px] font-semibold text-[#38404B] tracking-wide whitespace-nowrap">
              Women's Health
            </span>
          </div>
        </div>

        <p className="text-[10px] text-[#9ca3af] text-center mt-1">
          Frosted glass pill · teal accent dot · bottom-left corner
        </p>
      </div>
    </div>
  );
}
