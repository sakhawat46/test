const IMG = "https://7a71d734-e2ae-408e-aaa7-fc20e792f132-00-1hxu6uzj50bje.kirk.replit.dev/hero-woman-nobg.png";

export default function HeroC() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column" }}>
      {/* Nav */}
      <div style={{ padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f1f5f9" }}>
        <div>
          <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, color: "#46384b" }}>SculptRx</span>
          <div style={{ fontSize: 8, letterSpacing: "0.15em", color: "#4EB7C0", fontWeight: 600, textTransform: "uppercase" }}>Women's Health</div>
        </div>
        <div style={{ width: 28, display: "flex", flexDirection: "column", gap: 5 }}>
          {[0,1,2].map(i => <div key={i} style={{ height: 1.5, background: "#46384b", borderRadius: 2 }} />)}
        </div>
      </div>

      {/* Editorial hero — headline top, photo+copy below */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top headline bar — full width, tinted */}
        <div style={{ background: "linear-gradient(135deg, #faf7ff 0%, #fff0f6 100%)", padding: "28px 24px 20px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <div style={{ height: 1, width: 28, background: "#F0327A50" }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: "#F0327A", letterSpacing: "0.12em", textTransform: "uppercase" }}>Physician-Led Weight Loss</span>
            <div style={{ height: 1, width: 28, background: "#F0327A50" }} />
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: 30, fontWeight: 700, color: "#46384b", lineHeight: 1.2, margin: 0 }}>
            Lose the weight.<br />
            <em style={{ color: "#F0327A", fontStyle: "italic" }}>Feel like yourself again.</em>
          </h1>
        </div>

        {/* Bottom section: photo left, copy right */}
        <div style={{ flex: 1, display: "flex", alignItems: "stretch", position: "relative" }}>
          {/* Photo — takes left half, bleeds to bottom */}
          <div style={{ width: "48%", position: "relative", overflow: "hidden", background: "linear-gradient(180deg, #faf7ff 0%, #f0f9fa 100%)" }}>
            <img src={IMG} alt="Woman holding SculptRx vial" style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", height: "110%", objectFit: "contain", objectPosition: "bottom center" }} />
          </div>

          {/* Right: copy + CTA */}
          <div style={{ flex: 1, padding: "28px 20px 32px 16px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65, margin: "0 0 24px" }}>
              A personalized GLP-1 plan built for your body, your goals, and your life — overseen by board-certified physicians.
            </p>
            <button style={{ background: "#4EB7C0", color: "#fff", border: "none", borderRadius: 50, padding: "13px 22px", fontSize: 13, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 14px #4EB7C040", marginBottom: 10, textAlign: "center" }}>
              Start Today →
            </button>
            <p style={{ fontSize: 10.5, color: "#94a3b8", textAlign: "center", margin: "0 0 24px" }}>
              Takes 2 min. Really.
            </p>
            {/* Trust pills */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Physician-led care", "Licensed US pharmacies", "HIPAA-compliant"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#4EB7C015", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg style={{ width: 10, height: 10 }} fill="none" viewBox="0 0 24 24" stroke="#4EB7C0" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span style={{ fontSize: 11.5, color: "#64748b", fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
