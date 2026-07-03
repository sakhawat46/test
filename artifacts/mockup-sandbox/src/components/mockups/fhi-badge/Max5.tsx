export function Max5() {
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

      {/* ── V5: Two-row pure typography ── */}
      <a
        href="https://www.femalehealthinstitute.org"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 6,
          padding: "13px 20px",
          background: "rgba(42,157,143,0.05)",
          borderTop: "1px solid rgba(42,157,143,0.15)",
          borderBottom: "1px solid rgba(42,157,143,0.15)",
          textDecoration: "none",
        }}
      >
        {/* Row 1: We Proudly Fund + name spanning full width */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* FHI monogram — text-only, no circle */}
            <span style={{ fontSize: 11, fontWeight: 900, color: "#4EB7C0", letterSpacing: "0.05em" }}>FHI</span>
            <span style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#4EB7C0" }}>We Proudly Fund</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#38404B" }}>The Female Health Institute</span>
          </div>
        </div>

        {/* Thin rule */}
        <div style={{ height: 1, background: "rgba(42,157,143,0.15)", width: "100%" }} />

        {/* Row 2: subline left, quote right */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <p style={{ fontSize: 8.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#9ca3af", margin: 0 }}>
            Independent Women's Research
          </p>
          <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 11.5, color: "#6b7280", margin: 0 }}>
            "Because our patients deserve it."
          </p>
        </div>
      </a>

      {/* Section below */}
      <div style={{ padding: "22px 24px 16px" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, color: "#38404B", lineHeight: 1.3, margin: 0 }}>
          You've tried everything. <span style={{ color: "#F0327A" }}>This is different.</span>
        </h2>
      </div>

      <div style={{ marginTop: "auto", padding: "14px 24px", textAlign: "center", borderTop: "1px solid #e5e7eb" }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#4EB7C0", margin: 0 }}>V5 — Two-Row Typography</p>
        <p style={{ fontSize: 10, color: "#9ca3af", marginTop: 3 }}>No card · Full width · Info split across 2 rows</p>
      </div>
    </div>
  );
}
