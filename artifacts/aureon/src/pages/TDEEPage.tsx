import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  const tdee = bmr * activity;
  return { bmr: Math.round(bmr), tdee: Math.round(tdee) };
}

export default function TDEEPage() {
  const [age, setAge] = useState("");
  const [weightLbs, setWeightLbs] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [activityIdx, setActivityIdx] = useState<number | null>(null);
  const [result, setResult] = useState<{ bmr: number; tdee: number } | null>(null);

  const isReady = age && weightLbs && heightFt && heightIn !== "" && activityIdx !== null;

  const handleCalculate = () => {
    if (!isReady) return;
    setResult(calcTDEE(
      Number(age),
      Number(weightLbs),
      Number(heightFt),
      Number(heightIn),
      ACTIVITY_LEVELS[activityIdx!].multiplier
    ));
    setTimeout(() => {
      document.getElementById("tdee-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const deficit = result ? result.tdee - 500 : null;
  const protein = result ? Math.round((result.tdee * 0.3) / 4) : null;
  const carbs   = result ? Math.round((result.tdee * 0.4) / 4) : null;
  const fat     = result ? Math.round((result.tdee * 0.3) / 9) : null;

  const inputCls = "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-[15px] text-foreground bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">

      {/* Minimal nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex flex-col no-underline">
            <span className="font-serif text-2xl font-semibold leading-none tracking-tight text-[#38404B]">
              Sculpt<span className="text-primary">Rx</span>
            </span>
            <span className="text-[0.55rem] font-sans uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
              Women's Health & Weight Loss
            </span>
          </Link>
          <Button asChild size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-5">
            <Link href="/start">See If I Qualify</Link>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-10 px-6 text-center" style={{ background: "linear-gradient(160deg, #f0fbfc 0%, #fdf6fa 60%, #fff 100%)" }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-xl mx-auto"
        >
          <span className="inline-block text-[10px] font-bold tracking-[0.22em] uppercase text-primary mb-4">
            Free Tool · For Women
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#38404B] leading-tight mb-5">
            How many calories does<br />
            <span style={{ color: PINK }}>your body actually need?</span>
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mx-auto mb-3">
            Not a generic number from a chart. <em>Your</em> number — based on your age, your body, and how you actually live.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
            Your Total Daily Energy Expenditure (TDEE) is the foundation of any real weight-loss plan. Understanding it is step one.
          </p>
        </motion.div>
      </section>

      {/* Why this matters — warm copy band */}
      <section className="py-8 px-6 border-y border-border/40 bg-white">
        <div className="max-w-2xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              icon: "🔬",
              title: "Clinically accurate",
              body: "We use the Mifflin-St Jeor equation — the gold standard used by physicians and dietitians for women.",
            },
            {
              icon: "💛",
              title: "Built for your biology",
              body: "Women's metabolism isn't the same as men's. This calculator is calibrated specifically for you.",
            },
            {
              icon: "🗺️",
              title: "A starting point, not a sentence",
              body: "Knowing your TDEE gives you a map. What you do with it — that's where the real work begins.",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <p className="font-semibold text-sm text-foreground">{item.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator card */}
      <section className="py-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-lg mx-auto bg-white rounded-3xl shadow-[0_4px_32px_rgba(0,0,0,0.08)] overflow-hidden"
        >
          {/* Card header */}
          <div className="px-7 py-6" style={{ background: TEAL }}>
            <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-white/70 mb-1">TDEE Calculator</p>
            <p className="font-serif text-xl font-bold text-white leading-tight">Tell us about yourself</p>
            <p className="text-xs text-white/75 mt-1">Takes about 30 seconds. No account needed.</p>
          </div>

          {/* Inputs */}
          <div className="px-7 py-6 flex flex-col gap-5">

            {/* Age + Weight */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Age</label>
                <input type="number" placeholder="e.g. 38" value={age}
                  onChange={e => setAge(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Weight (lbs)</label>
                <input type="number" placeholder="e.g. 160" value={weightLbs}
                  onChange={e => setWeightLbs(e.target.value)} className={inputCls} />
              </div>
            </div>

            {/* Height */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Height</label>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input type="number" placeholder="5" value={heightFt}
                    onChange={e => setHeightFt(e.target.value)} className={inputCls + " pr-8"} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-semibold">ft</span>
                </div>
                <div className="relative">
                  <input type="number" placeholder="4" value={heightIn}
                    onChange={e => setHeightIn(e.target.value)} className={inputCls + " pr-8"} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-semibold">in</span>
                </div>
              </div>
            </div>

            {/* Activity level */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Activity Level</label>
              <div className="flex flex-col gap-2">
                {ACTIVITY_LEVELS.map((lvl, i) => (
                  <button
                    key={i}
                    onClick={() => setActivityIdx(i)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl border transition-all text-left"
                    style={{
                      border: activityIdx === i ? `2px solid ${TEAL}` : "1.5px solid #e5e7eb",
                      background: activityIdx === i ? "rgba(78,183,192,0.06)" : "white",
                    }}
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground">{lvl.label}</p>
                      <p className="text-xs text-muted-foreground">{lvl.sub}</p>
                    </div>
                    <div
                      className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                      style={{ borderColor: activityIdx === i ? TEAL : "#d1d5db", background: activityIdx === i ? TEAL : "white" }}
                    >
                      {activityIdx === i && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleCalculate}
              disabled={!isReady}
              className="w-full py-3.5 rounded-full text-sm font-bold transition-all"
              style={{
                background: isReady ? PINK : "#e5e7eb",
                color: isReady ? "white" : "#9ca3af",
                cursor: isReady ? "pointer" : "not-allowed",
              }}
            >
              Calculate My TDEE →
            </button>
          </div>
        </motion.div>
      </section>

      {/* Results */}
      {result && (
        <section id="tdee-results" className="pb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-lg mx-auto flex flex-col gap-4"
          >
            <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">Your Results</p>

            {/* Main TDEE */}
            <div className="rounded-2xl text-center py-8 px-6" style={{ background: TEAL }}>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 mb-2">Your TDEE</p>
              <p className="font-serif text-6xl font-bold text-white leading-none mb-1">{result.tdee.toLocaleString()}</p>
              <p className="text-sm text-white/80">calories per day to maintain your current weight</p>
            </div>

            {/* BMR + Deficit */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-border/60 py-5 px-4 text-center shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Basal Metabolic Rate</p>
                <p className="font-serif text-3xl font-bold text-foreground">{result.bmr.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground mt-1">calories at complete rest</p>
              </div>
              <div className="rounded-2xl bg-white border py-5 px-4 text-center shadow-sm" style={{ borderColor: `${PINK}30` }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: PINK }}>For Weight Loss</p>
                <p className="font-serif text-3xl font-bold text-foreground">{deficit!.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground mt-1">cal/day · −1 lb/week</p>
              </div>
            </div>

            {/* Macros */}
            <div className="rounded-2xl bg-white border border-border/60 px-6 py-5 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Suggested Daily Macros</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { label: "Protein", val: protein, color: TEAL, pct: "30%" },
                  { label: "Carbs",   val: carbs,   color: "#6366f1", pct: "40%" },
                  { label: "Fat",     val: fat,     color: PINK, pct: "30%" },
                ].map((m, i) => (
                  <div key={i}>
                    <p className="font-serif text-2xl font-bold" style={{ color: m.color }}>{m.val}<span className="text-sm">g</span></p>
                    <p className="text-xs font-semibold text-foreground">{m.label}</p>
                    <p className="text-[10px] text-muted-foreground">{m.pct} of calories</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warm context copy */}
            <div className="rounded-2xl bg-white border border-border/60 px-6 py-5 shadow-sm">
              <p className="text-sm font-semibold text-foreground mb-2">What this means for you</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Eating around <strong className="text-foreground">{deficit!.toLocaleString()} calories a day</strong> creates a moderate deficit that supports steady, sustainable weight loss — without the crash-and-burn of extreme restriction.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                That said, TDEE is a starting point, not a prescription. Hormones, sleep, stress, and metabolic health all affect how your body actually responds. That's exactly where physician-guided care makes a difference.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-2xl px-6 py-6 text-center" style={{ background: "linear-gradient(135deg, rgba(78,183,192,0.08) 0%, rgba(240,50,122,0.06) 100%)", border: "1.5px solid rgba(78,183,192,0.2)" }}>
              <p className="font-serif text-xl font-bold text-foreground mb-2">
                Ready to turn this into a real plan?
              </p>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed max-w-sm mx-auto">
                Our board-certified physicians build a personalized weight-loss protocol around your numbers, your lifestyle, and your goals — not a one-size-fits-all template.
              </p>
              <Button asChild className="rounded-full px-8 h-12 text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                <Link href="/start">See If I Qualify →</Link>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">Takes 2 minutes. No commitment.</p>
            </div>

          </motion.div>
        </section>
      )}

      {/* Footer note */}
      <footer className="py-8 px-6 text-center border-t border-border/40">
        <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
          This calculator uses the Mifflin-St Jeor equation and is intended for informational purposes only. It is not a substitute for personalized medical advice from a licensed healthcare provider.
        </p>
        <Link href="/" className="text-xs text-primary font-medium mt-3 inline-block hover:underline">← Back to SculptRx</Link>
      </footer>

    </div>
  );
}
