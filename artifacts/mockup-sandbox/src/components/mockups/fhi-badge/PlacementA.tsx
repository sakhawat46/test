export function PlacementA() {
  return (
    <div style={{ minHeight: "100vh", background: "white", display: "flex", flexDirection: "column", fontFamily: "sans-serif", maxWidth: 390, margin: "0 auto" }}>

      {/* Simulated hero bottom */}
      <div style={{ padding: "32px 24px 24px", background: "linear-gradient(to bottom, #fdf6fa, #f0fbfc)" }}>
        <p style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>Women's Health & Weight Loss</p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: "#38404B", lineHeight: 1.2, marginBottom: 12 }}>
          Lose the weight.<br />
          <span style={{ color: "#F0327A" }}>Feel like yourself again.</span>
        </h1>
        <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 20, lineHeight: 1.6 }}>
          Get a personalized weight loss plan that fits your body, your goals, and your life.
        </p>
        <button style={{ background: "#4EB7C0", color: "white", borderRadius: 999, padding: "12px 28px", fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer" }}>
          See If I Qualify
        </button>
        <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 8 }}>as low as <strong style={{ color: "#4EB7C0" }}>$199/mo</strong></p>
      </div>

      {/* ── FHI TRUST BAND ── */}
      <div
        style={{
          padding: "10px 24px",
          background: "rgba(42,157,143,0.05)",
          borderTop: "1px solid rgba(42,157,143,0.15)",
          borderBottom: "1px solid rgba(42,157,143,0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Quote — full width, one line */}
        <p style={{
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          fontSize: 13,
          color: "#6b7280",
          margin: 0,
          textAlign: "center",
          whiteSpace: "nowrap",
        }}>
          "Because our patients deserve it."
        </p>

        {/* Card badge — clickable link */}
        <a
          href="https://www.femalehealthinstitute.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            borderRadius: 12,
            border: "1.5px solid #4EB7C0",
            background: "white",
            textDecoration: "none",
            cursor: "pointer",
            boxShadow: "0 1px 4px rgba(42,157,143,0.08)",
            transition: "box-shadow 0.18s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(42,157,143,0.2)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 4px rgba(42,157,143,0.08)";
          }}
        >
          <div style={{
            width: 40, height: 40, borderRadius: "50%", background: "#4EB7C0",
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <span style={{ color: "white", fontWeight: 700, fontSize: 12, letterSpacing: "-0.02em" }}>FHI</span>
          </div>
          <div>
            <p style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#4EB7C0", margin: 0, lineHeight: 1.2 }}>We Proudly Fund</p>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#38404B", margin: "2px 0 1px", lineHeight: 1.1 }}>The Female Health Institute</p>
            <p style={{ fontSize: 7, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9ca3af", margin: 0 }}>Independent Women's Research</p>
          </div>
        </a>
      </div>

      {/* Section below */}
      <div style={{ padding: "24px 24px 16px", background: "rgba(78,183,192,0.04)", marginTop: 0 }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, color: "#38404B", lineHeight: 1.3, margin: 0 }}>
          You've tried everything. <span style={{ color: "#F0327A" }}>This is different.</span>
        </h2>
        <p style={{ fontSize: 13, color: "#6b7280", marginTop: 8, lineHeight: 1.6 }}>
          Stubborn weight that won't budge despite diet and exercise...
        </p>
      </div>

      {/* Label */}
      <div style={{ marginTop: "auto", padding: "16px 24px", textAlign: "center", borderTop: "1px solid #e5e7eb" }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#4EB7C0", margin: 0 }}>
          Placement A — Mobile View
        </p>
        <p style={{ fontSize: 10, color: "#9ca3af", marginTop: 4 }}>Quote above · Card badge below · Stacked centered</p>
      </div>
    </div>
  );
}
