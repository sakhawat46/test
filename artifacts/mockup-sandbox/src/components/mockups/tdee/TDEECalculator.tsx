import { useState } from "react";

const TEAL = "#4EB7C0";
const PINK = "#F0327A";
const DARK = "#38404B";

const ACTIVITY_LEVELS = [
  { label: "Sedentary", sub: "Little or no exercise", multiplier: 1.2 },
  { label: "Lightly Active", sub: "1–3 days/week", multiplier: 1.375 },
  { label: "Moderately Active", sub: "3–5 days/week", multiplier: 1.55 },
  { label: "Very Active", sub: "6–7 days/week", multiplier: 1.725 },
  { label: "Extra Active", sub: "Hard exercise + physical job", multiplier: 1.9 },
];

function calcTDEE(age: number, weightLbs: number, heightFt: number, heightIn: number, activity: number) {
  const weightKg = weightLbs * 0.453592;
  const heightCm = (heightFt * 12 + heightIn) * 2.54;
  // Mifflin-St Jeor for women
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  const tdee = bmr * activity;
  return { bmr: Math.round(bmr), tdee: Math.round(tdee) };
}

export function TDEECalculator() {
  const [age, setAge] = useState("");
  const [weightLbs, setWeightLbs] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [activityIdx, setActivityIdx] = useState<number | null>(null);
  const [result, setResult] = useState<{ bmr: number; tdee: number } | null>(null);

  const isReady =
    age && weightLbs && heightFt && heightIn !== "" && activityIdx !== null;

  const handleCalculate = () => {
    if (!isReady) return;
    const r = calcTDEE(
      Number(age),
      Number(weightLbs),
      Number(heightFt),
      Number(heightIn),
      ACTIVITY_LEVELS[activityIdx!].multiplier
    );
    setResult(r);
  };

  const deficit = result ? result.tdee - 500 : null;
  const protein = result ? Math.round((result.tdee * 0.3) / 4) : null;
  const carbs = result ? Math.round((result.tdee * 0.4) / 4) : null;
  const fat = result ? Math.round((result.tdee * 0.3) / 9) : null;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 10,
    border: "1.5px solid #e5e7eb",
    fontSize: 15,
    color: DARK,
    outline: "none",
    boxSizing: "border-box",
    background: "white",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "#6b7280",
    marginBottom: 5,
    display: "block",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", fontFamily: "sans-serif", maxWidth: 390, margin: "0 auto", paddingBottom: 40 }}>

      {/* Header */}
      <div style={{ background: TEAL, padding: "20px 20px 18px" }}>
        <p style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.7)", margin: "0 0 4px" }}>SculptRx</p>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: 22, fontWeight: 700, color: "white", margin: "0 0 4px", lineHeight: 1.2 }}>
          TDEE Calculator
        </h1>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: 1.4 }}>
          Find your Total Daily Energy Expenditure — the calories your body burns each day.
        </p>
      </div>

      <div style={{ padding: "20px 18px 0" }}>

        {/* Age + Weight row */}
        <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Age</label>
            <input
              type="number"
              placeholder="e.g. 38"
              value={age}
              onChange={e => setAge(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Weight (lbs)</label>
            <input
              type="number"
              placeholder="e.g. 160"
              value={weightLbs}
              onChange={e => setWeightLbs(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Height row */}
        <div style={{ marginBottom: 14 }}>
          <label style={labelStyle}>Height</label>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ flex: 1, position: "relative" }}>
              <input
                type="number"
                placeholder="5"
                value={heightFt}
                onChange={e => setHeightFt(e.target.value)}
                style={{ ...inputStyle, paddingRight: 32 }}
              />
              <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", fontSize: 12, color: "#9ca3af", fontWeight: 600 }}>ft</span>
            </div>
            <div style={{ flex: 1, position: "relative" }}>
              <input
                type="number"
                placeholder="4"
                value={heightIn}
                onChange={e => setHeightIn(e.target.value)}
                style={{ ...inputStyle, paddingRight: 32 }}
              />
              <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", fontSize: 12, color: "#9ca3af", fontWeight: 600 }}>in</span>
            </div>
          </div>
        </div>

        {/* Activity level */}
        <div style={{ marginBottom: 18 }}>
          <label style={labelStyle}>Activity Level</label>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            {ACTIVITY_LEVELS.map((lvl, i) => (
              <button
                key={i}
                onClick={() => setActivityIdx(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 13px",
                  borderRadius: 10,
                  border: activityIdx === i ? `2px solid ${TEAL}` : "1.5px solid #e5e7eb",
                  background: activityIdx === i ? "rgba(78,183,192,0.07)" : "white",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, color: DARK, margin: 0 }}>{lvl.label}</p>
                  <p style={{ fontSize: 10.5, color: "#9ca3af", margin: 0 }}>{lvl.sub}</p>
                </div>
                <div style={{
                  width: 18, height: 18, borderRadius: "50%",
                  border: activityIdx === i ? `2px solid ${TEAL}` : "2px solid #d1d5db",
                  background: activityIdx === i ? TEAL : "white",
                  flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {activityIdx === i && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "white" }} />}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Calculate button */}
        <button
          onClick={handleCalculate}
          disabled={!isReady}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: 999,
            border: "none",
            background: isReady ? PINK : "#e5e7eb",
            color: isReady ? "white" : "#9ca3af",
            fontSize: 15,
            fontWeight: 700,
            cursor: isReady ? "pointer" : "not-allowed",
            marginBottom: 20,
            transition: "all 0.2s",
          }}
        >
          Calculate My TDEE
        </button>

        {/* Results */}
        {result && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Main TDEE number */}
            <div style={{ background: TEAL, borderRadius: 16, padding: "18px 20px", textAlign: "center" }}>
              <p style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,0.75)", margin: "0 0 4px" }}>Your TDEE</p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: 48, fontWeight: 700, color: "white", margin: "0 0 2px", lineHeight: 1 }}>
                {result.tdee.toLocaleString()}
              </p>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", margin: 0 }}>calories/day to maintain weight</p>
            </div>

            {/* BMR + Weight Loss row */}
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ flex: 1, background: "white", borderRadius: 14, padding: "14px 14px", border: "1.5px solid #e5e7eb", textAlign: "center" }}>
                <p style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9ca3af", margin: "0 0 4px" }}>BMR</p>
                <p style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, color: DARK, margin: "0 0 2px" }}>{result.bmr.toLocaleString()}</p>
                <p style={{ fontSize: 10, color: "#9ca3af", margin: 0 }}>at complete rest</p>
              </div>
              <div style={{ flex: 1, background: "white", borderRadius: 14, padding: "14px 14px", border: `1.5px solid ${PINK}22`, textAlign: "center" }}>
                <p style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: PINK, margin: "0 0 4px" }}>Weight Loss</p>
                <p style={{ fontFamily: "Georgia, serif", fontSize: 26, fontWeight: 700, color: DARK, margin: "0 0 2px" }}>{deficit!.toLocaleString()}</p>
                <p style={{ fontSize: 10, color: "#9ca3af", margin: 0 }}>cal/day (−1 lb/week)</p>
              </div>
            </div>

            {/* Macro split */}
            <div style={{ background: "white", borderRadius: 14, padding: "14px 16px", border: "1.5px solid #e5e7eb" }}>
              <p style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#9ca3af", margin: "0 0 10px" }}>Suggested Macros (30/40/30)</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {[
                  { label: "Protein", val: protein, unit: "g", color: TEAL },
                  { label: "Carbs", val: carbs, unit: "g", color: "#6366f1" },
                  { label: "Fat", val: fat, unit: "g", color: PINK },
                ].map((m, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <p style={{ fontSize: 22, fontWeight: 700, color: m.color, margin: "0 0 1px", fontFamily: "Georgia, serif" }}>{m.val}<span style={{ fontSize: 11 }}>{m.unit}</span></p>
                    <p style={{ fontSize: 10, color: "#9ca3af", margin: 0, fontWeight: 600 }}>{m.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA nudge */}
            <div style={{ background: "rgba(240,50,122,0.05)", border: `1.5px solid ${PINK}33`, borderRadius: 14, padding: "13px 16px", display: "flex", alignItems: "center", gap: 12 }}>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: DARK, margin: "0 0 2px" }}>Ready to put this to work?</p>
                <p style={{ fontSize: 11, color: "#6b7280", margin: 0, lineHeight: 1.4 }}>Our physicians build a plan around your exact numbers.</p>
              </div>
              <button style={{ background: PINK, color: "white", borderRadius: 999, padding: "9px 14px", fontSize: 11, fontWeight: 700, border: "none", flexShrink: 0, cursor: "pointer" }}>
                Get Started
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
