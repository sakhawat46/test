const teal = "#4EB7C0";
const pink = "#F0327A";
const ink = "#46384b";

const steps = [
  {
    num: "01",
    title: "Take the Free Quiz",
    badge: "No payment required",
    body: "Tell us about your health, your goals, and how you've been feeling. This isn't a checkbox — it's the beginning of a care plan built around you.",
    footnote: "No pressure. No commitment. Just answers.",
  },
  {
    num: "02",
    title: "Physician Review",
    badge: "Within 24–48 hours",
    body: "A real clinician, not an algorithm, reviews everything and designs a treatment plan around your biology. No office visit needed.",
    footnote: null,
  },
  {
    num: "03",
    title: "Receive Your Medication",
    badge: "Licensed US pharmacy",
    body: "Your medication arrives from a licensed compounding pharmacy. Dosing is supervised and adjusted over time. Your care team is reachable — you're a patient, not a transaction.",
    footnote: "Real doctors. Real support. The way it should have been.",
  },
];

export default function HowV2() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#fff", padding: "28px 20px 24px", maxWidth: 390 }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <p style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: teal, marginBottom: 7 }}>A Smarter Path to Lasting Results</p>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "1.45rem", fontWeight: 900, color: ink, lineHeight: 1.25, margin: "0 0 8px" }}>
          Most providers take 5 minutes and call it care. <span style={{ color: pink }}>We don't.</span>
        </h2>
        <p style={{ fontSize: 12.5, color: "#888", lineHeight: 1.5, margin: 0 }}>Here's what happens when you put your health first.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {steps.map((s, i) => (
          <div key={i} style={{
            borderRadius: 14, border: `1px solid ${i === 2 ? teal + "40" : "#efefef"}`,
            padding: "14px 16px 12px",
            background: i === 2 ? `${teal}07` : "#fafafa",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{
                fontSize: 8.5, fontWeight: 800, letterSpacing: "0.08em",
                color: "#fff", background: i === 2 ? teal : ink,
                borderRadius: 6, padding: "2px 7px", flexShrink: 0
              }}>{s.num}</span>
              <p style={{ fontSize: 13, fontWeight: 700, color: ink, margin: 0 }}>{s.title}</p>
              <span style={{ marginLeft: "auto", fontSize: 9, color: teal, fontWeight: 600, whiteSpace: "nowrap" }}>{s.badge}</span>
            </div>
            <p style={{ fontSize: 11.5, color: "#666", lineHeight: 1.55, margin: "0 0 4px" }}>{s.body}</p>
            {s.footnote && <p style={{ fontSize: 10, color: "#aaa", fontStyle: "italic", margin: 0 }}>{s.footnote}</p>}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: "center" }}>
        <button style={{
          background: teal, color: "#fff", border: "none", borderRadius: 50,
          padding: "12px 28px", fontSize: 13.5, fontWeight: 700, cursor: "pointer"
        }}>Take the Free Quiz →</button>
        <p style={{ fontSize: 10, color: "#bbb", marginTop: 8 }}>No payment until your physician approves your plan.</p>
      </div>
    </div>
  );
}
