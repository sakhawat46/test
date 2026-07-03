const teal = "#4EB7C0";
const pink = "#F0327A";
const purple = "#5b3f7a";
const ink = "#46384b";

const QuizIcon = () => (
  <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
    <rect x="7" y="4" width="22" height="28" rx="3" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8"/>
    <rect x="13" y="1" width="10" height="5" rx="2" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.85)" strokeWidth="1.6"/>
    <line x1="11" y1="13" x2="25" y2="13" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="11" y1="17.5" x2="22" y2="17.5" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="11" y1="22" x2="19" y2="22" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="26" cy="27" r="5.5" fill="rgba(255,255,255,0.9)"/>
    <path d="M23.5 27l1.5 1.5 3-3" stroke={teal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DoctorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="11" r="6" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8"/>
    <path d="M6 30c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="27" cy="24" r="4.5" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5"/>
    <line x1="27" y1="21.5" x2="27" y2="26.5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="24.5" y1="24" x2="29.5" y2="24" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const VialIcon = () => (
  <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
    <rect x="14" y="3" width="8" height="5" rx="2" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6"/>
    <path d="M14 8h8v16a6 6 0 01-12 0V8h4" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M10 20h14" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" strokeLinecap="round"/>
    <ellipse cx="18" cy="27" rx="4" ry="2.5" fill="rgba(255,255,255,0.18)"/>
  </svg>
);

export default function HowBento() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#faf9fc", padding: "32px 24px 28px", maxWidth: 780, boxSizing: "border-box" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 22 }}>
        <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: teal, marginBottom: 8 }}>
          A Smarter Path to Lasting Results
        </p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.65rem", fontWeight: 900, color: ink, lineHeight: 1.25, margin: "0 0 7px" }}>
          Most providers take 5 minutes and call it care.{" "}
          <span style={{ color: pink }}>We don't.</span>
        </h2>
        <p style={{ fontSize: 12.5, color: "#aaa", margin: 0 }}>Here's what happens when you put your health first.</p>
      </div>

      {/* Bento grid */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

        {/* ── Top row — equal height ── */}
        <div style={{ display: "flex", gap: 10, alignItems: "stretch" }}>

          {/* Step 01 — teal */}
          <div style={{
            flex: "0 0 57%",
            borderRadius: 20,
            background: `linear-gradient(140deg, ${teal} 0%, #3aa8b0 100%)`,
            padding: "22px 22px 20px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 50, height: 50, borderRadius: 13, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <QuizIcon />
              </div>
              <span style={{ fontSize: 8.5, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", background: "rgba(255,255,255,0.14)", borderRadius: 8, padding: "3px 9px" }}>No payment required</span>
            </div>
            <p style={{ fontSize: 15.5, fontWeight: 700, color: "#fff", margin: "0 0 2px" }}>Take the Free Quiz</p>
            <p style={{ fontSize: 9.5, color: "rgba(255,255,255,0.55)", fontWeight: 600, margin: "0 0 12px" }}>Step 01</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.18)", marginBottom: 12 }} />
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.65, margin: "0 0 10px", flexGrow: 1 }}>
              Tell us about your health, your goals, and how you've been feeling. This isn't a checkbox — it's the beginning of a care plan built around you.
            </p>
            <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.5)", fontStyle: "italic", margin: 0 }}>
              No pressure. No commitment. Just answers.
            </p>
          </div>

          {/* Step 02 — dark purple */}
          <div style={{
            flex: 1,
            borderRadius: 20,
            background: `linear-gradient(140deg, ${purple} 0%, #3d2857 100%)`,
            padding: "22px 20px 20px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
              <DoctorIcon />
            </div>
            <p style={{ fontSize: 15.5, fontWeight: 700, color: "#fff", margin: "0 0 2px" }}>Doctor Review</p>
            <p style={{ fontSize: 9.5, color: "rgba(255,255,255,0.5)", fontWeight: 600, margin: "0 0 12px" }}>Step 02 · Reviewed within 24 hours</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 12 }} />
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", lineHeight: 1.65, margin: "0 0 10px", flexGrow: 1 }}>
              A real clinician, not an algorithm, reviews everything you shared and designs a treatment plan around your biology. No office visit needed.
            </p>
            <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.4)", fontStyle: "italic", margin: 0 }}>
              A real doctor. A real plan. Built around you.
            </p>
          </div>
        </div>

        {/* ── Bottom row — full width pink ── */}
        <div style={{
          borderRadius: 20,
          background: `linear-gradient(135deg, ${pink} 0%, #c8135a 100%)`,
          padding: "22px 24px 20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: "rgba(255,255,255,0.13)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <VialIcon />
            </div>
            <div>
              <p style={{ fontSize: 15.5, fontWeight: 700, color: "#fff", margin: "0 0 2px" }}>Receive Your Medication</p>
              <p style={{ fontSize: 9.5, color: "rgba(255,255,255,0.55)", fontWeight: 600, margin: 0 }}>Step 03 · Licensed US pharmacy · Ongoing support</p>
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.18)" }} />
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.65, margin: 0 }}>
            Your medication arrives from a licensed US compounding pharmacy — not a warehouse. Dosing is supervised and adjusted over time. Your care team is reachable — you're a patient, not a transaction.
          </p>
          <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.48)", fontStyle: "italic", margin: 0 }}>
            Real doctors. Real support. The way it should have been from the start.
          </p>
        </div>
      </div>

      {/* ── Standalone CTA below cards ── */}
      <div style={{ marginTop: 20, textAlign: "center" }}>
        <button style={{
          background: teal,
          color: "#fff",
          border: "none",
          borderRadius: 50,
          padding: "13px 34px",
          fontSize: 13.5,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 4px 18px rgba(78,183,192,0.35)",
          letterSpacing: "0.01em",
        }}>Take the Free Quiz →</button>
        <p style={{ fontSize: 10.5, color: "#bbb", marginTop: 9, margin: "9px 0 0" }}>
          No payment until your physician approves your plan.
        </p>
      </div>
    </div>
  );
}
