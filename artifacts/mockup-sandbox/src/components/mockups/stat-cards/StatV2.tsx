const teal = "#4EB7C0";
const pink = "#F0327A";
const ink = "#46384b";

const cards = [
  {
    tag: "BUILT FOR WOMEN",
    accent: teal,
    stat: "60%",
    statLabel: "more",
    headline: "Women lose more weight on GLP-1 than men.",
    body: "Your biology isn't a barrier — it's your advantage. SculptRx is built around exactly that.",
    cite: "JAMA Internal Medicine, 2026 · 19,906 patients across 6 trials",
  },
  {
    tag: "TIRZEPATIDE RESULTS",
    accent: pink,
    stat: "20%",
    statLabel: "body weight",
    headline: "Lost in clinical trials — more than any other GLP-1.",
    body: "SculptRx providers help you choose the right medication for your body.",
    cite: "SURMOUNT-5 Trial · New England Journal of Medicine, 2025",
  },
  {
    tag: "BEYOND THE SCALE",
    accent: ink,
    stat: "✦",
    statLabel: "",
    headline: "GLP-1 improves energy, blood sugar & quality of life.",
    body: "Women report feeling more like themselves — more energy, better sleep, fewer cravings.",
    cite: "ICER Systematic Review · Multiple Phase 3 Trials, 2025",
  },
];

export default function StatV2() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#fff", padding: "40px 20px 32px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: teal, marginBottom: 10 }}>Real Women. Real Results.</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, color: ink, lineHeight: 1.2, margin: 0 }}>
          What changes when your body{" "}
          <span style={{ color: pink }}>finally gets support</span>
        </h2>
      </div>

      {/* Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {cards.map((c, i) => (
          <div key={i} style={{ borderRadius: 16, border: `1px solid ${c.accent}22`, background: "#fafafa", overflow: "hidden" }}>
            {/* Colored top bar */}
            <div style={{ background: c.accent, height: 4 }} />
            <div style={{ padding: "18px 18px 16px" }}>
              <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: c.accent, marginBottom: 10 }}>{c.tag}</p>
              {/* Big stat */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                <span style={{ fontFamily: "Georgia, serif", fontSize: "2.8rem", fontWeight: 900, color: c.accent, lineHeight: 1 }}>{c.stat}</span>
                {c.statLabel && <span style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: c.accent }}>{c.statLabel}</span>}
              </div>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 15, fontWeight: 700, color: ink, lineHeight: 1.3, marginBottom: 10 }}>{c.headline}</p>
              <div style={{ height: 1, background: "#e2e8f0", marginBottom: 10 }} />
              <p style={{ fontSize: 12.5, color: "#64748b", lineHeight: 1.6, marginBottom: 10 }}>{c.body}</p>
              <p style={{ fontSize: 10, color: "#94a3b8", fontStyle: "italic" }}>{c.cite}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fine print */}
      <p style={{ fontSize: 10, color: "#94a3b8", lineHeight: 1.6, marginTop: 20, textAlign: "center" }}>
        Based on published clinical trial data. Individual results may vary. These figures reflect study populations and do not represent guaranteed SculptRx patient outcomes.
      </p>
    </div>
  );
}
