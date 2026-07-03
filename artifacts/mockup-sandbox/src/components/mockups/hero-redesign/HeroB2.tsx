const IMG = "https://7a71d734-e2ae-408e-aaa7-fc20e792f132-00-1hxu6uzj50bje.kirk.replit.dev/hero-woman-nobg.png";

export default function HeroB2() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", height: "100vh", position: "relative", overflow: "hidden", background: "#1a0f2e" }}>

      {/* Warm pink-purple radial background */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 80%, #8B1A4A55 0%, transparent 60%), radial-gradient(ellipse at 20% 20%, #4EB7C020 0%, transparent 50%)", zIndex: 1 }} />

      {/* Woman — centered-right, taller */}
      <img
        src={IMG}
        alt="Woman holding SculptRx vial"
        style={{ position: "absolute", right: -10, bottom: 0, height: "92%", objectFit: "contain", objectPosition: "bottom right", zIndex: 2 }}
      />

      {/* Gradient overlay — stronger left fade */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #1a0f2e 44%, #1a0f2e99 60%, transparent 78%)", zIndex: 3 }} />
      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(to top, #1a0f2e 0%, transparent 100%)", zIndex: 3 }} />

      {/* Nav */}
      <div style={{ position: "relative", zIndex: 4, padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>SculptRx</span>
          <div style={{ fontSize: 8, letterSpacing: "0.15em", color: "#F0327A", fontWeight: 600, textTransform: "uppercase" }}>Women's Health</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5, width: 24 }}>
          {[0,1,2].map(i => <div key={i} style={{ height: 1.5, background: "#ffffff60", borderRadius: 2 }} />)}
        </div>
      </div>

      {/* Copy */}
      <div style={{ position: "relative", zIndex: 4, padding: "28px 24px 0", maxWidth: "65%" }}>

        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 36, fontWeight: 700, color: "#fff", lineHeight: 1.12, margin: "0 0 16px" }}>
          Lose the<br />weight.<br />
          <em style={{ background: "linear-gradient(90deg, #F0327A, #ff7eb8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic" }}>
            Feel like<br />yourself again.
          </em>
        </h1>

        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: "0 0 30px" }}>
          Personalized GLP-1 care. Real physicians. Built for women.
        </p>

        {/* Pink gradient CTA */}
        <button style={{ background: "linear-gradient(135deg, #F0327A, #c0195a)", color: "#fff", border: "none", borderRadius: 50, padding: "15px 32px", fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 24px #F0327A55", display: "block", marginBottom: 6 }}>
          Start Today →
        </button>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", margin: "0 0 28px 2px" }}>Takes 2 min. Really.</p>

        {/* 3 trust pills */}
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {["Physician-led care", "Licensed US pharmacies", "HIPAA-compliant"].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#F0327A25", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg style={{ width: 9, height: 9 }} fill="none" viewBox="0 0 24 24" stroke="#F0327A" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
