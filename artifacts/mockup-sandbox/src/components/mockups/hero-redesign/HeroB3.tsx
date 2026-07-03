const IMG = "https://7a71d734-e2ae-408e-aaa7-fc20e792f132-00-1hxu6uzj50bje.kirk.replit.dev/hero-woman-nobg.png";

export default function HeroB3() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", height: "100vh", position: "relative", overflow: "hidden" }}>

      {/* Rich teal-to-ink gradient background */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(145deg, #1b3a3d 0%, #2a1f30 55%, #46384b 100%)", zIndex: 0 }} />

      {/* Decorative teal arc shape top-right */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", border: "1px solid #4EB7C025", zIndex: 1 }} />
      <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", border: "1px solid #4EB7C015", zIndex: 1 }} />

      {/* Woman */}
      <img
        src={IMG}
        alt="Woman holding SculptRx vial"
        style={{ position: "absolute", right: -20, bottom: 0, height: "88%", objectFit: "contain", objectPosition: "bottom right", zIndex: 2 }}
      />

      {/* Gradient overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #1b3a3d 40%, #2a1f3088 58%, transparent 76%)", zIndex: 3 }} />

      {/* Nav */}
      <div style={{ position: "relative", zIndex: 4, padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>SculptRx</span>
          <div style={{ fontSize: 8, letterSpacing: "0.15em", color: "#4EB7C0", fontWeight: 600, textTransform: "uppercase" }}>Women's Health</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5, width: 24 }}>
          {[0,1,2].map(i => <div key={i} style={{ height: 1.5, background: "#ffffff60", borderRadius: 2 }} />)}
        </div>
      </div>

      {/* Copy */}
      <div style={{ position: "relative", zIndex: 4, padding: "30px 24px 0", maxWidth: "63%" }}>
        {/* Label */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#4EB7C020", borderRadius: 20, padding: "5px 12px", marginBottom: 18 }}>
          <span style={{ fontSize: 9.5, fontWeight: 700, color: "#4EB7C0", letterSpacing: "0.08em", textTransform: "uppercase" }}>GLP-1 · Physician-Led</span>
        </div>

        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 33, fontWeight: 700, color: "#fff", lineHeight: 1.18, margin: "0 0 14px" }}>
          Lose the weight.<br />
          <span style={{ color: "#F0327A", fontStyle: "italic" }}>Feel like yourself</span><br />
          <span style={{ color: "#F0327A", fontStyle: "italic" }}>again.</span>
        </h1>

        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: "0 0 26px" }}>
          A personalized plan built for your body, your goals, and your life.
        </p>

        {/* CTA — teal outline + fill hybrid */}
        <button style={{ background: "transparent", color: "#4EB7C0", border: "2px solid #4EB7C0", borderRadius: 50, padding: "13px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "block", marginBottom: 8 }}>
          Start Today →
        </button>
        <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.3)", margin: "0 0 26px 4px" }}>Takes 2 min. Really.</p>

        {/* Floating trust card */}
        <div style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(8px)", borderRadius: 12, padding: "12px 14px", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", gap: 2, flexShrink: 0 }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} style={{ width: 10, height: 10, fill: "#F0327A" }} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)" }}>
            <strong style={{ color: "rgba(255,255,255,0.85)" }}>Physician-led</strong> · Board-certified MDs · Licensed US pharmacies
          </span>
        </div>
      </div>
    </div>
  );
}
