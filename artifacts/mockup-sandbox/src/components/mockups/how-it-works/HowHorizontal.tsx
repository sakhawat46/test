const teal = "#4EB7C0";
const pink = "#F0327A";
const ink = "#46384b";

const QuizIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="4" width="22" height="28" rx="3" stroke={teal} strokeWidth="1.8" fill="none"/>
    <rect x="13" y="1" width="10" height="5" rx="2" fill={teal} opacity="0.18" stroke={teal} strokeWidth="1.6"/>
    <line x1="11" y1="13" x2="25" y2="13" stroke={teal} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="11" y1="17.5" x2="22" y2="17.5" stroke={teal} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="11" y1="22" x2="19" y2="22" stroke={teal} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="26" cy="27" r="5.5" fill={teal}/>
    <path d="M23.5 27l1.5 1.5 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DoctorIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="11" r="6" stroke={teal} strokeWidth="1.8" fill="none"/>
    <path d="M6 30c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke={teal} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <circle cx="27" cy="24" r="4.5" fill={teal} opacity="0.12" stroke={teal} strokeWidth="1.5"/>
    <line x1="27" y1="21.5" x2="27" y2="26.5" stroke={teal} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="24.5" y1="24" x2="29.5" y2="24" stroke={teal} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const VialIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="3" width="8" height="5" rx="2" fill={teal} opacity="0.18" stroke={teal} strokeWidth="1.6"/>
    <path d="M14 8h8v16a6 6 0 01-12 0V8h4" stroke={teal} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path d="M10 20h14" stroke={teal} strokeWidth="1.4" strokeLinecap="round"/>
    <ellipse cx="18" cy="27" rx="4" ry="2.5" fill={teal} opacity="0.18"/>
    <circle cx="28" cy="9" r="4" fill={pink} opacity="0.15" stroke={pink} strokeWidth="1.4"/>
    <path d="M26.5 9h3M28 7.5v3" stroke={pink} strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

const steps = [
  {
    Icon: QuizIcon,
    num: "01",
    title: "Take the Free Quiz",
    badge: "No payment required",
    body: "Tell us about your health, your goals, and how you've been feeling. This isn't a checkbox — it's the beginning of a care plan built around you.",
    footnote: "No pressure. No commitment. Just answers.",
    accent: teal,
    bg: `${teal}09`,
    border: `${teal}25`,
  },
  {
    Icon: DoctorIcon,
    num: "02",
    title: "Physician Review",
    badge: "Licensed clinician · 24–48 hours",
    body: "A real clinician, not an algorithm, reviews everything you shared and designs a treatment plan around your biology. No office visit needed.",
    footnote: null,
    accent: ink,
    bg: `${ink}07`,
    border: `${ink}18`,
  },
  {
    Icon: VialIcon,
    num: "03",
    title: "Receive Your Medication",
    badge: "Licensed US pharmacy · Ongoing support",
    body: "Your medication arrives from a licensed US compounding pharmacy. Dosing is supervised and adjusted over time. Your care team is reachable — you're a patient, not a transaction.",
    footnote: "Real doctors. Real support. The way it should have been.",
    accent: pink,
    bg: `${pink}08`,
    border: `${pink}20`,
  },
];

export default function HowHorizontal() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#fff", padding: "36px 28px 28px", maxWidth: 780 }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: teal, marginBottom: 8 }}>
          A Smarter Path to Lasting Results
        </p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.7rem", fontWeight: 900, color: ink, lineHeight: 1.25, margin: "0 0 10px" }}>
          Most providers take 5 minutes and call it care.{" "}
          <span style={{ color: pink }}>We don't.</span>
        </h2>
        <p style={{ fontSize: 13.5, color: "#888", margin: 0 }}>Here's what happens when you put your health first.</p>
      </div>

      {/* Connector line behind columns */}
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", top: 52, left: "16.5%", right: "16.5%", height: 1,
          background: `linear-gradient(to right, ${teal}40, ${ink}28, ${pink}40)`,
          zIndex: 0
        }} />

        {/* 3-column grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, position: "relative", zIndex: 1 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              borderRadius: 18, border: `1px solid ${s.border}`,
              background: s.bg,
              padding: "22px 20px 18px",
              display: "flex", flexDirection: "column",
            }}>
              {/* Icon + number row */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                }}>
                  <s.Icon />
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 800, letterSpacing: "0.06em",
                  color: "#fff", background: s.accent,
                  borderRadius: 8, padding: "3px 9px"
                }}>{s.num}</span>
              </div>

              <p style={{ fontSize: 14.5, fontWeight: 700, color: ink, margin: "0 0 4px" }}>{s.title}</p>
              <p style={{ fontSize: 9.5, color: s.accent, fontWeight: 600, margin: "0 0 10px", letterSpacing: "0.02em" }}>{s.badge}</p>
              <div style={{ height: 1, background: `${s.accent}20`, marginBottom: 10 }} />
              <p style={{ fontSize: 12, color: "#666", lineHeight: 1.6, margin: "0 0 6px", flexGrow: 1 }}>{s.body}</p>
              {s.footnote && (
                <p style={{ fontSize: 10.5, color: "#aaa", fontStyle: "italic", margin: 0 }}>{s.footnote}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: 26, textAlign: "center" }}>
        <button style={{
          background: teal, color: "#fff", border: "none", borderRadius: 50,
          padding: "13px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer", letterSpacing: "0.01em",
          boxShadow: "0 4px 16px rgba(78,183,192,0.35)"
        }}>Take the Free Quiz →</button>
        <p style={{ fontSize: 10.5, color: "#bbb", marginTop: 9 }}>No payment until your physician approves your plan.</p>
      </div>
    </div>
  );
}
