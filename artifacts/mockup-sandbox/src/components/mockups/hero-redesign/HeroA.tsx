const IMG = "https://7a71d734-e2ae-408e-aaa7-fc20e792f132-00-1hxu6uzj50bje.kirk.replit.dev/hero-woman-nobg.png";

export default function HeroA() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh", background: "linear-gradient(135deg, #faf7ff 0%, #fff0f6 100%)", display: "flex", flexDirection: "column" }}>
      {/* Nav */}
      <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, color: "#46384b" }}>SculptRx</span>
          <div style={{ fontSize: 8, letterSpacing: "0.15em", color: "#4EB7C0", fontWeight: 600, textTransform: "uppercase" }}>Women's Health</div>
        </div>
        <div style={{ width: 28, height: 28, display: "flex", flexDirection: "column", gap: 5, justifyContent: "center" }}>
          {[0,1,2].map(i => <div key={i} style={{ height: 1.5, background: "#46384b", borderRadius: 2 }} />)}
        </div>
      </div>

      {/* Hero: side by side */}
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", overflow: "hidden", position: "relative" }}>
        {/* Left copy */}
        <div style={{ flex: 1, padding: "32px 24px 40px", zIndex: 2, position: "relative" }}>
          <div style={{ display: "inline-block", background: "#F0327A18", borderRadius: 20, padding: "4px 12px", marginBottom: 14 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: "#F0327A", letterSpacing: "0.05em" }}>GLP-1 · PHYSICIAN-LED</span>
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: "#46384b", lineHeight: 1.2, margin: "0 0 12px" }}>
            Lose the weight.<br />
            <span style={{ color: "#F0327A" }}>Feel like yourself</span><br />
            again.
          </h1>
          <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.55, margin: "0 0 24px", maxWidth: 200 }}>
            A personalized plan that fits your body, your goals, and your life.
          </p>
          <button style={{ background: "#4EB7C0", color: "#fff", border: "none", borderRadius: 50, padding: "13px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer", marginBottom: 16, boxShadow: "0 4px 16px #4EB7C030" }}>
            Start Today →
          </button>
          {/* Trust */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", gap: 2 }}>
              {[...Array(5)].map((_, i) => (
                <svg key={i} style={{ width: 12, height: 12, fill: "#F0327A" }} viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span style={{ fontSize: 10.5, color: "#94a3b8", fontWeight: 500 }}>
              <strong style={{ color: "#46384b" }}>Physician-led</strong> · Board-certified MDs<br />Licensed US pharmacies
            </span>
          </div>
        </div>

        {/* Right: woman photo */}
        <div style={{ width: "52%", height: "100%", position: "relative", flexShrink: 0 }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, #4EB7C020 0%, transparent 70%)" }} />
          <img src={IMG} alt="Woman holding SculptRx vial" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
        </div>
      </div>
    </div>
  );
}
