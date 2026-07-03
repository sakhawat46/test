export function Max6() {
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

      {/* ── V6: Split card — quote left, badge right ── */}
      <div style={{
        display: "flex",
        alignItems: "stretch",
        background: "rgba(42,157,143,0.05)",
        borderTop: "1px solid rgba(42,157,143,0.15)",
        borderBottom: "1px solid rgba(42,157,143,0.15)",
      }}>
        {/* Left half — quote, dark bg accent */}
        <div style={{
          flex: 1,
          padding: "16px 18px",
          background: "#38404B",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 4,
        }}>
          <p style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.45)", margin: 0 }}>Our Mission</p>
          <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 14, color: "white", margin: 0, lineHeight: 1.4 }}>
            "Because our patients deserve it."
          </p>
        </div>

        {/* Right half — FHI info, light bg */}
        <a
          href="https://www.femalehealthinstitute.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            flex: 1,
            padding: "16px 16px",
            background: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            textDecoration: "none",
            borderLeft: "1px solid rgba(42,157,143,0.15)",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(42,157,143,0.04)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "white"; }}
        >
          <p style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#4EB7C0", margin: 0 }}>We Proudly Fund</p>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{ width: 30, height: 30, borderRadius: "50%", background: "#4EB7C0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "white", fontWeight: 800, fontSize: 9 }}>FHI</span>
            </div>
            <p style={{ fontSize: 12.5, fontWeight: 700, color: "#38404B", margin: 0, lineHeight: 1.2 }}>The Female Health Institute</p>
          </div>
          <p style={{ fontSize: 7.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", margin: 0 }}>Independent Women's Research</p>
        </a>
      </div>

      {/* Section below */}
      <div style={{ padding: "22px 24px 16px" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, color: "#38404B", lineHeight: 1.3, margin: 0 }}>
          You've tried everything. <span style={{ color: "#F0327A" }}>This is different.</span>
        </h2>
      </div>

      <div style={{ marginTop: "auto", padding: "14px 24px", textAlign: "center", borderTop: "1px solid #e5e7eb" }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#4EB7C0", margin: 0 }}>V6 — Dark/Light Split</p>
        <p style={{ fontSize: 10, color: "#9ca3af", marginTop: 3 }}>Quote on dark left · FHI on light right · Full height</p>
      </div>
    </div>
  );
}
