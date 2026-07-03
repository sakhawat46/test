export function Band3() {
  const pills = [
    "Board-Certified MDs",
    "HIPAA Compliant",
    "Licensed US Pharmacies",
  ];

  return (
    <div style={{ minHeight: "100vh", background: "white", display: "flex", flexDirection: "column", fontFamily: "sans-serif", maxWidth: 390, margin: "0 auto" }}>

      {/* Simulated hero bottom */}
      <div style={{ padding: "28px 24px 20px", background: "linear-gradient(to bottom, #fdf6fa, #f0fbfc)" }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, color: "#38404B", lineHeight: 1.2, marginBottom: 10 }}>
          Lose the weight.<br /><span style={{ color: "#F0327A" }}>Feel like yourself again.</span>
        </h1>
        <button style={{ background: "#4EB7C0", color: "white", borderRadius: 999, padding: "11px 26px", fontSize: 14, fontWeight: 600, border: "none" }}>
          See If I Qualify
        </button>
      </div>

      {/* ── BAND V3 — Badge + credential pills ── */}
      <div style={{
        padding: "14px 20px",
        background: "rgba(42,157,143,0.05)",
        borderTop: "1px solid rgba(42,157,143,0.15)",
        borderBottom: "1px solid rgba(42,157,143,0.15)",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}>
        {/* Badge */}
        <a href="https://www.femalehealthinstitute.org" target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 10, border: "1.5px solid #4EB7C0", background: "white", textDecoration: "none", flexShrink: 0, boxShadow: "0 1px 4px rgba(42,157,143,0.08)" }}>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#4EB7C0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: 11 }}>FHI</span>
          </div>
          <div>
            <p style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.13em", color: "#4EB7C0", margin: 0 }}>We Proudly Fund</p>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#38404B", margin: "2px 0 1px", lineHeight: 1.1 }}>The Female Health Institute</p>
            <p style={{ fontSize: 7, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", margin: 0 }}>Independent Women's Research</p>
          </div>
        </a>

        {/* Divider */}
        <div style={{ width: 1, alignSelf: "stretch", background: "rgba(42,157,143,0.2)", flexShrink: 0 }} />

        {/* Credential pills stacked */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
          {pills.map((pill, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: i % 2 === 0 ? "#4EB7C0" : "#F0327A", flexShrink: 0 }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "#38404B" }}>{pill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section below */}
      <div style={{ padding: "22px 24px 16px" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, color: "#38404B", lineHeight: 1.3, margin: 0 }}>
          You've tried everything. <span style={{ color: "#F0327A" }}>This is different.</span>
        </h2>
      </div>

      <div style={{ marginTop: "auto", padding: "14px 24px", textAlign: "center", borderTop: "1px solid #e5e7eb" }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#4EB7C0", margin: 0 }}>V3 — Badge + Credential Pills</p>
        <p style={{ fontSize: 10, color: "#9ca3af", marginTop: 3 }}>FHI badge left · Divider · Trust signals right</p>
      </div>
    </div>
  );
}
