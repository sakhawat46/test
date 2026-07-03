const teal = "#4EB7C0";
const pink = "#F0327A";
const ink = "#46384b";

const QuizIcon = () => (
  <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
    <rect x="7" y="4" width="22" height="28" rx="3" stroke={teal} strokeWidth="2"/>
    <rect x="13" y="1" width="10" height="5" rx="2" fill={`${teal}22`} stroke={teal} strokeWidth="1.8"/>
    <line x1="11" y1="13" x2="25" y2="13" stroke={teal} strokeWidth="1.6" strokeLinecap="round"/>
    <line x1="11" y1="17.5" x2="22" y2="17.5" stroke={teal} strokeWidth="1.6" strokeLinecap="round"/>
    <line x1="11" y1="22" x2="19" y2="22" stroke={teal} strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="26" cy="27" r="5.5" fill={teal}/>
    <path d="M23.5 27l1.5 1.5 3-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DoctorIcon = () => (
  <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="11" r="6" stroke={ink} strokeWidth="2"/>
    <path d="M6 30c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke={ink} strokeWidth="2" strokeLinecap="round"/>
    <circle cx="27" cy="24" r="4.5" fill={`${ink}12`} stroke={ink} strokeWidth="1.6"/>
    <line x1="27" y1="21.5" x2="27" y2="26.5" stroke={ink} strokeWidth="1.6" strokeLinecap="round"/>
    <line x1="24.5" y1="24" x2="29.5" y2="24" stroke={ink} strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const VialIcon = () => (
  <svg width="26" height="26" viewBox="0 0 36 36" fill="none">
    <rect x="14" y="3" width="8" height="5" rx="2" fill={`${pink}18`} stroke={pink} strokeWidth="1.8"/>
    <path d="M14 8h8v16a6 6 0 01-12 0V8h4" stroke={pink} strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 20h14" stroke={`${pink}55`} strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="18" cy="27" rx="4" ry="2.5" fill={`${pink}18`}/>
  </svg>
);

const steps = [
  { Icon: QuizIcon, num: "Step 01", accent: teal, title: "Take the Free Quiz", badge: "No payment required", body: "Tell us about your health, your goals, and how you've been feeling. This isn't a checkbox — it's the beginning of a care plan built around you.", footnote: "No pressure. No commitment. Just answers." },
  { Icon: DoctorIcon, num: "Step 02", accent: ink, title: "Physician Review", badge: "Licensed clinician · 24–48 hours", body: "A real clinician, not an algorithm, reviews everything you shared and designs a treatment plan around your biology. No office visit needed.", footnote: null },
  { Icon: VialIcon, num: "Step 03", accent: pink, title: "Receive Your Medication", badge: "Licensed US pharmacy · Ongoing support", body: "Your medication arrives from a licensed US compounding pharmacy. Dosing is supervised and adjusted over time. Your care team is reachable — you're a patient, not a transaction.", footnote: "Real doctors. Real support. The way it should have been." },
];

export default function HorizC() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#fff", padding: "36px 28px 28px", maxWidth: 780 }}>
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: teal, marginBottom: 8 }}>A Smarter Path to Lasting Results</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.7rem", fontWeight: 900, color: ink, lineHeight: 1.25, margin: "0 0 8px" }}>
          Most providers take 5 minutes and call it care.{" "}
          <span style={{ color: pink }}>We don't.</span>
        </h2>
        <p style={{ fontSize: 13, color: "#aaa", margin: 0 }}>Here's what happens when you put your health first.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {steps.map((s, i) => (
          <div key={i} style={{ padding: "0 24px 0", borderRight: i < steps.length - 1 ? `1px solid #f0f0f0` : "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 50, height: 50, borderRadius: "50%", border: `1.5px solid ${s.accent}30`, background: `${s.accent}08`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <s.Icon />
              </div>
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: `${s.accent}80` }}>{s.num}</span>
            </div>
            <p style={{ fontSize: 15, fontWeight: 700, color: ink, margin: "0 0 3px" }}>{s.title}</p>
            <p style={{ fontSize: 9.5, color: s.accent, fontWeight: 600, margin: "0 0 12px" }}>{s.badge}</p>
            <p style={{ fontSize: 12.5, color: "#777", lineHeight: 1.65, margin: "0 0 7px" }}>{s.body}</p>
            {s.footnote && <p style={{ fontSize: 10.5, color: "#bbb", fontStyle: "italic", margin: 0 }}>{s.footnote}</p>}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 30, textAlign: "center" }}>
        <button style={{ background: teal, color: "#fff", border: "none", borderRadius: 50, padding: "13px 32px", fontSize: 13.5, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 16px rgba(78,183,192,0.3)" }}>Take the Free Quiz →</button>
        <p style={{ fontSize: 10.5, color: "#ccc", marginTop: 8 }}>No payment until your physician approves your plan.</p>
      </div>
    </div>
  );
}
