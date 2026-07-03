const teal = "#4EB7C0";
const pink = "#F0327A";
const ink = "#46384b";

const cards = [
  {
    tag: "BUILT FOR WOMEN",
    bg: teal,
    watermark: "♀",
    stat: "60%",
    statSuffix: " more",
    headline: "Women lose more weight on GLP-1 than men.",
    body: "Your biology isn't a barrier — it's your advantage.",
    cite: "JAMA Internal Medicine, 2026",
  },
  {
    tag: "TIRZEPATIDE RESULTS",
    bg: pink,
    watermark: "↓",
    stat: "20%",
    statSuffix: " lost",
    headline: "Body weight lost in clinical trials.",
    body: "More than any other GLP-1 studied head-to-head.",
    cite: "SURMOUNT-5 Trial · NEJM, 2025",
  },
  {
    tag: "BEYOND THE SCALE",
    bg: ink,
    watermark: "✦",
    stat: "✦",
    statSuffix: "",
    headline: "GLP-1 improves energy, blood sugar & quality of life.",
    body: "More energy, better sleep, and fewer cravings.",
    cite: "ICER Systematic Review, 2025",
  },
];

export default function StatH1() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "linear-gradient(135deg,#fdf2f7 0%,#f0fbfc 55%,#fff5f9 100%)", padding: "32px 0 28px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 22, padding: "0 20px" }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: teal, marginBottom: 8 }}>Real Women. Real Results.</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: ink, lineHeight: 1.2, margin: 0 }}>
          What changes when your body{" "}
          <span style={{ color: pink }}>finally gets support</span>
        </h2>
      </div>

      {/* Horizontal scroll row — peek at next card */}
      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", display: "flex", gap: 12, paddingLeft: 20, paddingRight: 20, paddingBottom: 4 }}>
        {cards.map((c, i) => (
          <div key={i} style={{
            borderRadius: 20, background: c.bg, padding: "20px 18px 18px",
            position: "relative", overflow: "hidden",
            flexShrink: 0, width: 260,
          }}>
            <div style={{ position: "absolute", right: 12, top: 8, fontSize: 60, fontWeight: 900, color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>{c.watermark}</div>
            <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 10 }}>{c.tag}</p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "1.95rem", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 4 }}>
              {c.stat}<span style={{ fontSize: "1rem" }}>{c.statSuffix}</span>
            </p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 14, fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 10 }}>{c.headline}</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.2)", marginBottom: 10 }} />
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.82)", lineHeight: 1.5, marginBottom: 10 }}>{c.body}</p>
            <p style={{ fontSize: 9.5, color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>{c.cite}</p>
          </div>
        ))}
      </div>

      {/* Scroll hint dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 14 }}>
        {cards.map((c, i) => (
          <div key={i} style={{ width: i === 0 ? 18 : 6, height: 6, borderRadius: 3, background: i === 0 ? teal : "#cbd5e1" }} />
        ))}
      </div>

      {/* Fine print */}
      <p style={{ fontSize: 9.5, color: "#94a3b8", lineHeight: 1.6, marginTop: 16, textAlign: "center", padding: "0 20px" }}>
        Based on published clinical trial data. Individual results may vary. These figures do not represent guaranteed SculptRx patient outcomes.
      </p>
    </div>
  );
}
