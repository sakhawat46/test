export function Max4() {
  return (
    <div style={{ minHeight: "100vh", background: "white", display: "flex", flexDirection: "column", fontFamily: "sans-serif", maxWidth: 390, margin: "0 auto" }}>

      {/* Simulated hero */}
      <div style={{ padding: "28px 24px 20px", background: "linear-gradient(to bottom, #fdf6fa, #f0fbfc)" }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, color: "#38404B", lineHeight: 1.2, marginBottom: 10 }}>
          Lose the weight.<br /><span style={{ color: "#F0327A" }}>Feel like yourself again.</span>
        </h1>
        <button style={{ background: "#4EB7C0", color: "white", borderRadius: 999, padding: "11px 26px", fontSize: 14, fontWeight: 600, border: "none" }}>
          See If I Qualify
        </button>
      </div>

      {/* ── V4: Full-bleed teal band ── */}
      <a
        href="https://www.femalehealthinstitute.org"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 20px",
          background: "#4EB7C0",
          textDecoration: "none",
          gap: 12,
        }}
      >
        {/* Left: FHI monogram + name stacked */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "white", fontWeight: 800, fontSize: 13, letterSpacing: "-0.02em" }}>FHI</span>
          </div>
          <div>
            <p style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.75)", margin: 0 }}>We Proudly Fund</p>
            <p style={{ fontSize: 13, fontWeight: 700, color: "white", margin: "2px 0 1px", lineHeight: 1.1 }}>The Female Health Institute</p>
            <p style={{ fontSize: 7.5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.65)", margin: 0 }}>Independent Women's Research</p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: 1, alignSelf: "stretch", background: "rgba(255,255,255,0.3)", flexShrink: 0 }} />

        {/* Right: quote */}
        <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 12.5, color: "rgba(255,255,255,0.92)", margin: 0, lineHeight: 1.4, textAlign: "center", flex: 1 }}>
          "Because our patients deserve it."
        </p>
      </a>

      {/* Section below */}
      <div style={{ padding: "22px 24px 16px" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, color: "#38404B", lineHeight: 1.3, margin: 0 }}>
          You've tried everything. <span style={{ color: "#F0327A" }}>This is different.</span>
        </h2>
      </div>

      <div style={{ marginTop: "auto", padding: "14px 24px", textAlign: "center", borderTop: "1px solid #e5e7eb" }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#4EB7C0", margin: 0 }}>V4 — Full Bleed Teal</p>
        <p style={{ fontSize: 10, color: "#9ca3af", marginTop: 3 }}>White on teal · Full width · Clickable entire band</p>
      </div>
    </div>
  );
}
