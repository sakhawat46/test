const teal = "#4EB7C0";
const pink = "#F0327A";
const ink = "#46384b";

export default function StatH2() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "linear-gradient(135deg,#fdf2f7 0%,#f0fbfc 55%,#fff5f9 100%)", padding: "32px 16px 28px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: teal, marginBottom: 8 }}>Real Women. Real Results.</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: ink, lineHeight: 1.2, margin: 0 }}>
          What changes when your body{" "}
          <span style={{ color: pink }}>finally gets support</span>
        </h2>
      </div>

      {/* Bento grid: 2 smaller top + 1 hero bottom */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

        {/* Top row: ink + pink (smaller) */}
        <div style={{ display: "flex", gap: 10 }}>
          {/* Card — ink */}
          <div style={{ flex: 1, borderRadius: 18, background: ink, padding: "16px 14px 14px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: 8, top: 6, fontSize: 40, color: "rgba(255,255,255,0.10)", fontWeight: 900 }}>✦</div>
            <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 7 }}>Beyond the Scale</p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "1.7rem", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 3 }}>3 in 1</p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: 7 }}>improves energy, blood sugar & quality of life.</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.12)", marginBottom: 7 }} />
            <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.72)", lineHeight: 1.5, marginBottom: 6 }}>Not just the scale. More energy, better sleep, fewer cravings.</p>
            <p style={{ fontSize: 8.5, color: "rgba(255,255,255,0.35)", fontStyle: "italic" }}>ICER Systematic Review, 2025</p>
          </div>

          {/* Card — pink */}
          <div style={{ flex: 1, borderRadius: 18, background: pink, padding: "16px 14px 14px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: 8, top: 6, fontSize: 40, color: "rgba(255,255,255,0.13)", fontWeight: 900 }}>↓</div>
            <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: 7 }}>Tirzepatide</p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "1.7rem", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 3 }}>20%</p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: 7 }}>body weight lost in clinical trials.</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.2)", marginBottom: 7 }} />
            <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, marginBottom: 6 }}>More than any other GLP-1 studied.</p>
            <p style={{ fontSize: 8.5, color: "rgba(255,255,255,0.38)", fontStyle: "italic" }}>SURMOUNT-5 · NEJM, 2025</p>
          </div>
        </div>

        {/* Hero bottom: teal — 60% stat dominates */}
        <div style={{ borderRadius: 18, background: teal, padding: "22px 22px 18px", position: "relative", overflow: "hidden" }}>
          {/* Large watermark */}
          <div style={{ position: "absolute", right: -10, top: -10, fontSize: 130, fontWeight: 900, color: "rgba(255,255,255,0.09)", lineHeight: 1, userSelect: "none" }}>♀</div>

          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 10 }}>Built for Women</p>

          {/* Massive 60% stat */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 0, marginBottom: 4, lineHeight: 1 }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "3.9rem", fontWeight: 900, color: "#fff", lineHeight: 0.9 }}>60%</span>
          </div>
          <p style={{ fontFamily: "Georgia, serif", fontSize: 17, fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: 4 }}>
            more weight lost on GLP-1
          </p>
          {/* Emphasis subline */}
          <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ background: "rgba(255,255,255,0.18)", borderRadius: 50, padding: "2px 10px", fontSize: 12 }}>women</span>
            vs
            <span style={{ background: "rgba(255,255,255,0.10)", borderRadius: 50, padding: "2px 10px", fontSize: 12 }}>men</span>
          </p>
          <div style={{ height: 1, background: "rgba(255,255,255,0.2)", marginBottom: 12 }} />
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: 10 }}>
            Your biology isn't a barrier — it's your advantage. SculptRx is built around exactly that.
          </p>
          <p style={{ fontSize: 9.5, color: "rgba(255,255,255,0.42)", fontStyle: "italic" }}>JAMA Internal Medicine, 2026 · 19,906 patients across 6 trials</p>
        </div>
      </div>

      {/* Fine print */}
      <p style={{ fontSize: 9.5, color: "#94a3b8", lineHeight: 1.6, marginTop: 16, textAlign: "center" }}>
        Based on published clinical trial data. Individual results may vary. These figures do not represent guaranteed SculptRx patient outcomes.
      </p>
    </div>
  );
}
