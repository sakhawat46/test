const IMG = "https://7a71d734-e2ae-408e-aaa7-fc20e792f132-00-1hxu6uzj50bje.kirk.replit.dev/hero-woman-nobg.png";

export default function HeroB() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", minHeight: "100vh", position: "relative", overflow: "hidden", background: "#46384b" }}>
      {/* Full-bleed woman photo */}
      <img
        src={IMG}
        alt="Woman holding SculptRx vial"
        style={{ position: "absolute", right: -20, bottom: 0, height: "92%", objectFit: "contain", objectPosition: "bottom right", zIndex: 1 }}
      />

      {/* Left gradient overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #46384b 38%, #46384b88 60%, transparent 80%)", zIndex: 2 }} />

      {/* Nav */}
      <div style={{ position: "relative", zIndex: 3, padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>SculptRx</span>
          <div style={{ fontSize: 8, letterSpacing: "0.15em", color: "#4EB7C0", fontWeight: 600, textTransform: "uppercase" }}>Women's Health</div>
        </div>
        <div style={{ width: 28, display: "flex", flexDirection: "column", gap: 5 }}>
          {[0,1,2].map(i => <div key={i} style={{ height: 1.5, background: "#fff", borderRadius: 2 }} />)}
        </div>
      </div>

      {/* Copy — left aligned, overlaid */}
      <div style={{ position: "relative", zIndex: 3, padding: "40px 24px 0", maxWidth: "65%" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#ffffff18", borderRadius: 20, padding: "5px 12px", marginBottom: 18 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4EB7C0" }} />
          <span style={{ fontSize: 10, fontWeight: 600, color: "#4EB7C0", letterSpacing: "0.06em" }}>PHYSICIAN-LED · GLP-1</span>
        </div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 32, fontWeight: 700, color: "#fff", lineHeight: 1.18, margin: "0 0 16px" }}>
          Lose the weight.<br />
          <span style={{ color: "#F0327A" }}>Feel like yourself</span><br />
          again.
        </h1>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: "0 0 28px" }}>
          A personalized plan built for your body, your goals, and your life.
        </p>
        <button style={{ background: "#F0327A", color: "#fff", border: "none", borderRadius: 50, padding: "14px 30px", fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 20px #F0327A50", marginBottom: 28 }}>
          Start Today →
        </button>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ display: "flex", gap: 2 }}>
            {[...Array(5)].map((_, i) => (
              <svg key={i} style={{ width: 12, height: 12, fill: "#F0327A" }} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
            <strong style={{ color: "rgba(255,255,255,0.85)" }}>Physician-led</strong> · Board-certified MDs · Licensed US pharmacies
          </span>
        </div>
      </div>
    </div>
  );
}
