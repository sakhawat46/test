export default function BadgeRibbon() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-[340px] flex flex-col items-center gap-2">
        <p className="text-[11px] font-sans uppercase tracking-[0.18em] text-[#9ca3af] mb-1">
          Concept C — Tag / Corner · Top-right
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
          {/* Badge — top-right elegant tag */}
          <div
            className="absolute top-4 right-0 flex items-center gap-2 pl-3 pr-4 py-2"
            style={{
              background: "linear-gradient(to right, #F0327A, #c8285f)",
              borderRadius: "20px 0 0 20px",
              boxShadow: "0 3px 12px rgba(240,50,122,0.38), 0 1px 4px rgba(0,0,0,0.10)",
            }}
          >
            <span style={{ fontSize: "11px" }}>♀</span>
            <span className="text-white font-semibold whitespace-nowrap" style={{ fontSize: "11px", letterSpacing: "0.04em" }}>
              Women's Health
            </span>
          </div>
        </div>

        <p className="text-[10px] text-[#9ca3af] text-center mt-1">
          Pink gradient tag · flush to right edge · top-right
        </p>
      </div>
    </div>
  );
}
