const teal = "#4EB7C0";
const pink = "#F0327A";
const ink = "#46384b";

const cards = [
  {
    tag: "BUILT FOR WOMEN",
    bg: teal,
    watermark: "♀",
    headline: <>Women lose <span style={{ fontSize: "2.6rem", fontWeight: 900 }}>60% more</span> weight on GLP-1 than men.</>,
    body: "Your biology isn't a barrier — it's your advantage. SculptRx is built around exactly that.",
    cite: "JAMA Internal Medicine, 2026 · 19,906 patients across 6 trials",
  },
  {
    tag: "TIRZEPATIDE RESULTS",
    bg: pink,
    watermark: "↓",
    headline: <>Up to <span style={{ fontSize: "2.6rem", fontWeight: 900 }}>20%</span> of body weight lost in clinical trials.</>,
    body: "More than any other GLP-1 medication studied head-to-head. SculptRx providers help you choose the right medication for your body.",
    cite: "SURMOUNT-5 Trial · New England Journal of Medicine, 2025",
  },
  {
    tag: "BEYOND THE SCALE",
    bg: ink,
    watermark: "✦",
    headline: <>GLP-1 improves <span style={{ fontSize: "2.4rem", fontWeight: 900 }}>energy,</span> blood sugar & quality of life.</>,
    body: "Not just the number on the scale. Women report feeling more like themselves — with more energy, better sleep, and fewer cravings.",
    cite: "ICER Systematic Review · Multiple Phase 3 Trials, 2025",
  },
];

export default function StatV1() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "linear-gradient(135deg,#fdf2f7 0%,#f0fbfc 55%,#fff5f9 100%)", padding: "40px 20px 32px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: teal, marginBottom: 10 }}>Real Women. Real Results.</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, color: ink, lineHeight: 1.2, margin: 0 }}>
          What changes when your body{" "}
          <span style={{ color: pink }}>finally gets support</span>
        </h2>
      </div>

      {/* Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {cards.map((c, i) => (
          <div key={i} style={{ borderRadius: 20, background: c.bg, padding: "24px 22px 20px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: 18, top: 10, fontSize: 72, fontWeight: 900, color: "rgba(255,255,255,0.12)", lineHeight: 1, userSelect: "none" }}>{c.watermark}</div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>{c.tag}</p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: 12 }}>{c.headline}</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.2)", marginBottom: 12 }} />
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: 14 }}>{c.body}</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.15)", marginBottom: 10 }} />
            <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>{c.cite}</p>
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
