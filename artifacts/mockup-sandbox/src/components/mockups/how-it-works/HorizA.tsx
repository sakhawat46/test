const teal = "#4EB7C0";
const pink = "#F0327A";
const ink = "#46384b";

const QuizIcon = ({ light }: { light?: boolean }) => (
  <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
    <rect x="7" y="4" width="22" height="28" rx="3" stroke={light ? "#fff" : teal} strokeWidth="1.8"/>
    <rect x="13" y="1" width="10" height="5" rx="2" fill={light ? "rgba(255,255,255,0.2)" : teal} stroke={light ? "#fff" : teal} strokeWidth="1.6"/>
    <line x1="11" y1="13" x2="25" y2="13" stroke={light ? "#fff" : teal} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="11" y1="17.5" x2="22" y2="17.5" stroke={light ? "#fff" : teal} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="11" y1="22" x2="19" y2="22" stroke={light ? "#fff" : teal} strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="26" cy="27" r="5.5" fill={light ? "#fff" : teal}/>
    <path d="M23.5 27l1.5 1.5 3-3" stroke={light ? teal : "#fff"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DoctorIcon = ({ light }: { light?: boolean }) => (
  <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="11" r="6" stroke={light ? "#fff" : ink} strokeWidth="1.8"/>
    <path d="M6 30c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke={light ? "#fff" : ink} strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="27" cy="24" r="4.5" fill={light ? "rgba(255,255,255,0.15)" : `${ink}15`} stroke={light ? "#fff" : ink} strokeWidth="1.5"/>
    <line x1="27" y1="21.5" x2="27" y2="26.5" stroke={light ? "#fff" : ink} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="24.5" y1="24" x2="29.5" y2="24" stroke={light ? "#fff" : ink} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const VialIcon = ({ light }: { light?: boolean }) => (
  <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
    <rect x="14" y="3" width="8" height="5" rx="2" fill={light ? "rgba(255,255,255,0.2)" : `${pink}20`} stroke={light ? "#fff" : pink} strokeWidth="1.6"/>
    <path d="M14 8h8v16a6 6 0 01-12 0V8h4" stroke={light ? "#fff" : pink} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M10 20h14" stroke={light ? "rgba(255,255,255,0.5)" : `${pink}60`} strokeWidth="1.4" strokeLinecap="round"/>
    <ellipse cx="18" cy="27" rx="4" ry="2.5" fill={light ? "rgba(255,255,255,0.15)" : `${pink}20`}/>
  </svg>
);

const steps = [
  { Icon: QuizIcon, num: "01", color: teal, title: "Take the Free Quiz", badge: "No payment required", body: "Tell us about your health, your goals, and how you've been feeling. This isn't a checkbox — it's the beginning of a care plan built around you.", footnote: "No pressure. No commitment. Just answers." },
  { Icon: DoctorIcon, num: "02", color: "#8a7fa0", title: "Physician Review", badge: "Licensed clinician · 24–48 hours", body: "A real clinician, not an algorithm, reviews everything you shared and designs a treatment plan around your biology. No office visit needed.", footnote: null },
  { Icon: VialIcon, num: "03", color: pink, title: "Receive Your Medication", badge: "Licensed US pharmacy · Ongoing support", body: "Your medication arrives from a licensed US compounding pharmacy. Dosing is supervised and adjusted over time. Your care team is reachable — you're a patient, not a transaction.", footnote: "Real doctors. Real support. The way it should have been." },
];

export default function HorizA() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: ink, padding: "36px 28px 28px", maxWidth: 780 }}>
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: `${teal}`, marginBottom: 8 }}>A Smarter Path to Lasting Results</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.7rem", fontWeight: 900, color: "#fff", lineHeight: 1.25, margin: "0 0 8px" }}>
          Most providers take 5 minutes and call it care.{" "}
          <span style={{ color: pink }}>We don't.</span>
        </h2>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", margin: 0 }}>Here's what happens when you put your health first.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ borderRadius: 18, background: "rgba(255,255,255,0.06)", border: `1px solid rgba(255,255,255,0.1)`, padding: "22px 20px 18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: `${s.color}22`, border: `1px solid ${s.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <s.Icon light />
              </div>
              <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.08em", color: s.color, background: `${s.color}18`, borderRadius: 8, padding: "3px 9px" }}>{s.num}</span>
            </div>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: "0 0 3px" }}>{s.title}</p>
            <p style={{ fontSize: 9.5, color: s.color, fontWeight: 600, margin: "0 0 12px" }}>{s.badge}</p>
            <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 12 }} />
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, margin: "0 0 6px" }}>{s.body}</p>
            {s.footnote && <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.3)", fontStyle: "italic", margin: 0 }}>{s.footnote}</p>}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 24, textAlign: "center" }}>
        <button style={{ background: teal, color: "#fff", border: "none", borderRadius: 50, padding: "13px 32px", fontSize: 13.5, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 18px rgba(78,183,192,0.4)" }}>Take the Free Quiz →</button>
        <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.3)", marginTop: 8 }}>No payment until your physician approves your plan.</p>
      </div>
    </div>
  );
}
