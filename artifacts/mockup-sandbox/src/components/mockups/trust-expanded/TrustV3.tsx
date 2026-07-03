const pink = "#F0327A";
const teal = "#4EB7C0";
const ink = "#46384b";
const VIAL = "https://7a71d734-e2ae-408e-aaa7-fc20e792f132-00-1hxu6uzj50bje.kirk.replit.dev/vial-hand-pink-clean.png";

const Star = () => (
  <svg style={{ width: 18, height: 18, fill: pink }} viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const badges = [
  { label: "Physician-led", icon: "🩺" },
  { label: "Board-certified MDs", icon: "✦" },
  { label: "Licensed US pharmacies", icon: "💊" },
];

export default function TrustV3() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", height: "100vh", background: "linear-gradient(135deg, #faf7ff 0%, #fff0f6 100%)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Nav */}
      <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0 }}>
        <div>
          <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, color: ink }}>SculptRx</span>
          <div style={{ fontSize: 8, letterSpacing: "0.15em", color: teal, fontWeight: 600, textTransform: "uppercase" }}>Women's Health & Weight Loss</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5, width: 24 }}>
          {[0,1,2].map(i => <div key={i} style={{ height: 1.5, background: ink, borderRadius: 2 }} />)}
        </div>
      </div>

      {/* Hero body */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "8px 20px 0", position: "relative", overflow: "hidden" }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 30, fontWeight: 700, color: ink, lineHeight: 1.18, margin: "0 0 10px", maxWidth: "55%" }}>
          Lose the weight. <span style={{ color: pink }}>Feel like yourself again.</span>
        </h1>
        <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5, margin: "0 0 18px", maxWidth: "52%" }}>
          Get a personalized weight loss plan that fits your body, your goals, and your life.
        </p>
        <div style={{ maxWidth: "52%" }}>
          <button style={{ background: teal, color: "#fff", border: "none", borderRadius: 50, padding: "13px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: `0 4px 14px ${teal}40`, display: "block", marginBottom: 7 }}>
            Take The Free Quiz
          </button>
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: 15, color: "#94a3b8", margin: 0 }}>✦ Takes 2 min. Really.</p>
        </div>

        <img src={VIAL} alt="Vial" style={{ position: "absolute", right: -51, bottom: 180, width: "58%", objectFit: "contain", WebkitMaskImage: "linear-gradient(to bottom, black 77%, transparent 100%)", maskImage: "linear-gradient(to bottom, black 77%, transparent 100%)" }} />

        {/* TRUST — V3: stacked rows with teal circle icon + label */}
        <div style={{ position: "absolute", bottom: 24, left: 20, right: 20, display: "flex", flexDirection: "column", gap: 9 }}>
          <div style={{ display: "flex", gap: 3 }}>
            {[...Array(5)].map((_, i) => <Star key={i} />)}
          </div>
          {badges.map((b, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: i === 0 ? `${pink}18` : `${teal}15`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, fontSize: 13
              }}>
                {b.icon}
              </div>
              <span style={{ fontSize: 13, fontWeight: i === 0 ? 700 : 500, color: i === 0 ? ink : "#64748b" }}>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
