const teal = "#4EB7C0";
const pink = "#F0327A";
const ink = "#46384b";

const cards = [
  {
    tag: "BUILT FOR WOMEN",
    accent: teal,
    stat: "60%",
    subStat: "more weight lost",
    headline: "Women lose more weight on GLP-1 than men.",
    body: "Your biology isn't a barrier — it's your advantage.",
    cite: "JAMA Internal Medicine, 2026 · 19,906 patients",
  },
  {
    tag: "TIRZEPATIDE RESULTS",
    accent: pink,
    stat: "20%",
    subStat: "body weight lost",
    headline: "Up to 20% of body weight lost in clinical trials.",
    body: "More than any other GLP-1 studied head-to-head.",
    cite: "SURMOUNT-5 Trial · NEJM, 2025",
  },
  {
    tag: "BEYOND THE SCALE",
    accent: ink,
    stat: "✦ 3×",
    subStat: "quality of life",
    headline: "GLP-1 improves energy, blood sugar & quality of life.",
    body: "More energy, better sleep, and fewer cravings.",
    cite: "ICER Systematic Review · Phase 3 Trials, 2025",
  },
];

export default function StatV3() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "linear-gradient(160deg,#fdf4f8 0%,#f0fafb 100%)", padding: "40px 20px 32px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: teal, marginBottom: 10 }}>Real Women. Real Results.</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, color: ink, lineHeight: 1.2, margin: 0 }}>
          What changes when your body{" "}
          <span style={{ color: pink }}>finally gets support</span>
        </h2>
      </div>

      {/* Cards — horizontal split */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {cards.map((c, i) => (
          <div key={i} style={{ borderRadius: 18, overflow: "hidden", display: "flex", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            {/* Left colored stat panel */}
            <div style={{ background: c.accent, width: 110, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px 10px", gap: 4 }}>
              <span style={{ fontFamily: "Georgia, serif", fontSize: "2rem", fontWeight: 900, color: "#fff", lineHeight: 1, textAlign: "center" }}>{c.stat}</span>
              <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.75)", fontWeight: 600, textAlign: "center", textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.subStat}</span>
            </div>
            {/* Right text panel */}
            <div style={{ background: "#fff", flex: 1, padding: "16px 16px 14px" }}>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: c.accent, marginBottom: 6 }}>{c.tag}</p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 14, fontWeight: 700, color: ink, lineHeight: 1.3, marginBottom: 8 }}>{c.headline}</p>
              <p style={{ fontSize: 12, color: "#64748b", lineHeight: 1.5, marginBottom: 8 }}>{c.body}</p>
              <p style={{ fontSize: 9.5, color: "#94a3b8", fontStyle: "italic" }}>{c.cite}</p>
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
