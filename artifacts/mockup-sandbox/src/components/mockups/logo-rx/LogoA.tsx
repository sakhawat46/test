import React from "react";

/** Classic prescription Rx — x sits lower-right, touching R's descending leg */
const Rx = ({ size = 48 }: { size?: number }) => (
  <span style={{ display: "inline-block", lineHeight: 1 }}>
    <span style={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 700,
      fontSize: size,
      color: "#4EB7C0",
      letterSpacing: 0,
      lineHeight: 1,
    }}>
      R
    </span>
    <span style={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontWeight: 400,
      fontSize: size * 0.60,
      color: "#4EB7C0",
      display: "inline-block",
      verticalAlign: size * -0.22 + "px",
      marginLeft: size * -0.05 + "px",
      lineHeight: 1,
    }}>
      x
    </span>
  </span>
);

const Logo = ({ size = 36 }: { size?: number }) => (
  <span style={{
    fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 600,
    fontSize: size,
    color: "#38404B",
    letterSpacing: "-0.02em",
    display: "inline-flex",
    alignItems: "baseline",
    lineHeight: 1,
  }}>
    Sculpt<Rx size={size} />
  </span>
);

export default function LogoA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] flex flex-col items-center justify-center gap-10 p-8">

      {/* Isolated Rx mark — large */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 px-12 py-10 flex flex-col items-center gap-6 w-full max-w-sm">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Rx mark</p>
        <Rx size={96} />
        <div className="h-px bg-gray-100 w-full" />
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Full wordmark</p>
        <Logo size={42} />
      </div>

      {/* Nav bar context */}
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 w-full max-w-sm overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-[#4EB7C0] to-[#F0327A]" />
        <div className="px-5 py-4 flex items-center justify-between">
          <span className="text-sm text-gray-400">← Back</span>
          <Logo size={22} />
          <div className="w-10" />
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 text-center">
        <p className="text-[12px] font-semibold text-[#38404B]">A — Classic</p>
        <p className="text-[11px] text-gray-400 mt-0.5">x at 60% · pushed down · natural leg connection</p>
      </div>
    </div>
  );
}
