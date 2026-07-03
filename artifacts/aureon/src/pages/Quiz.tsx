import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearch } from "wouter";
import { ChevronLeft, CheckCircle2, AlertCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

type Screen =
  | "q1"
  | "q1b"
  | "q2"
  | "q3"
  | "q4"
  | "q5"
  | "LIKELY_ELIGIBLE"
  | "NEEDS_REVIEW"
  | "NOT_ELIGIBLE"
  | "CA_BLOCKED";

const US_STATES = [
  { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" },
  { code: "AZ", name: "Arizona" }, { code: "AR", name: "Arkansas" },
  { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" },
  { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" },
  { code: "HI", name: "Hawaii" }, { code: "ID", name: "Idaho" },
  { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" }, { code: "KS", name: "Kansas" },
  { code: "KY", name: "Kentucky" }, { code: "LA", name: "Louisiana" },
  { code: "ME", name: "Maine" }, { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" }, { code: "MI", name: "Michigan" },
  { code: "MN", name: "Minnesota" }, { code: "MS", name: "Mississippi" },
  { code: "MO", name: "Missouri" }, { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" }, { code: "NV", name: "Nevada" },
  { code: "NH", name: "New Hampshire" }, { code: "NJ", name: "New Jersey" },
  { code: "NM", name: "New Mexico" }, { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" }, { code: "ND", name: "North Dakota" },
  { code: "OH", name: "Ohio" }, { code: "OK", name: "Oklahoma" },
  { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" }, { code: "SC", name: "South Carolina" },
  { code: "SD", name: "South Dakota" }, { code: "TN", name: "Tennessee" },
  { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" }, { code: "VA", name: "Virginia" },
  { code: "WA", name: "Washington" }, { code: "WV", name: "West Virginia" },
  { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" },
  { code: "DC", name: "District of Columbia" },
];

const NONE = "None of the above";

const Q3_OPTIONS = [
  "Type 2 diabetes or prediabetes",
  "High blood pressure",
  "High cholesterol or sleep apnea",
  "Heart or liver disease",
  NONE,
];

const Q4_OPTIONS = [
  "Personal or family history of medullary thyroid cancer (MTC) or MEN 2 syndrome",
  "Currently pregnant, breastfeeding, or planning pregnancy within 2 months",
  "Known allergy to semaglutide or tirzepatide",
  "Severe gastroparesis (stomach paralysis)",
  NONE,
];

const Q5_OPTIONS = [
  "History of pancreatitis",
  "Currently taking insulin or diabetes medication",
  "Surgery requiring anesthesia within 30 days",
  "Type 1 diabetes",
  NONE,
];

function calcBMI(ft: number, inches: number, lbs: number): number {
  const totalInches = ft * 12 + inches;
  if (totalInches === 0) return 0;
  return (lbs / (totalInches * totalInches)) * 703;
}

function getStepInfo(screen: Screen, q3Skipped: boolean): { current: number; total: number } {
  const total = q3Skipped ? 5 : 6;
  const stepMap: Record<Screen, number> = {
    q1: 1,
    q1b: 2,
    q2: 3,
    q3: 4,
    q4: q3Skipped ? 4 : 5,
    q5: q3Skipped ? 5 : 6,
    LIKELY_ELIGIBLE: total,
    NEEDS_REVIEW: total,
    NOT_ELIGIBLE: total,
    CA_BLOCKED: total,
  };
  return { current: stepMap[screen], total };
}

function StepPills({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex gap-1.5 w-full">
      {Array.from({ length: total }, (_, i) => {
        const idx = i + 1;
        const isDone = idx < current;
        const isActive = idx === current;
        return (
          <motion.div
            key={idx}
            className={[
              "relative flex-1 h-[28px] rounded-full flex items-center justify-center overflow-hidden",
              isDone
                ? "bg-primary"
                : isActive
                ? "bg-[#E79AB8]/30 border-2 border-[#4EB7C0]"
                : "bg-gray-100 border border-gray-200",
            ].join(" ")}
            initial={false}
            animate={
              isDone
                ? { scale: [1, 1.08, 1] }
                : isActive
                ? { scale: 1 }
                : { scale: 1 }
            }
            transition={
              isDone
                ? { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
                : {}
            }
          >
            {isDone ? (
              <motion.svg
                key={`check-${idx}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 380, damping: 22, delay: 0.05 }}
                className="w-3.5 h-3.5 text-white"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2.5 7l3 3 6-6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            ) : isActive ? (
              <motion.div
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            ) : null}
          </motion.div>
        );
      })}
    </div>
  );
}

function CheckboxOption({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  const isNone = label === NONE;
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={[
        "w-full flex items-start gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-150 border-2",
        checked
          ? "border-primary bg-primary/[0.07] text-primary"
          : isNone
          ? "border-border/50 bg-gray-50/60 text-muted-foreground hover:border-border"
          : "border-border bg-white text-foreground hover:border-primary/40 hover:bg-primary/[0.03]",
      ].join(" ")}
    >
      <div
        className={[
          "mt-0.5 w-5 h-5 rounded-[5px] border-2 flex-shrink-0 flex items-center justify-center transition-all duration-150",
          checked ? "bg-primary border-primary" : "border-border bg-white",
        ].join(" ")}
      >
        {checked && (
          <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="text-sm leading-snug">{label}</span>
    </button>
  );
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 28, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -28, opacity: 0 }),
};

const RESULT_SCREENS: Screen[] = ["LIKELY_ELIGIBLE", "NEEDS_REVIEW", "NOT_ELIGIBLE"];

export default function Quiz() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const resultParam = params.get("result") as Screen | null;
  const initialScreen: Screen =
    resultParam && (RESULT_SCREENS as string[]).includes(resultParam) ? resultParam : "q1";

  const [screen, setScreen] = useState<Screen>(initialScreen);
  const [direction, setDirection] = useState(1);
  const [q3Skipped, setQ3Skipped] = useState(false);
  const [error, setError] = useState("");

  const [age, setAge] = useState("");
  const [stateAnswer, setStateAnswer] = useState("");
  const [heightFt, setHeightFt] = useState(5);
  const [heightIn, setHeightIn] = useState(5);
  const [weight, setWeight] = useState("");
  const [q3, setQ3] = useState<string[]>([]);
  const [q4, setQ4] = useState<string[]>([]);
  const [q5, setQ5] = useState<string[]>([]);

  function goTo(next: Screen, dir: number) {
    setDirection(dir);
    setError("");
    setScreen(next);
  }

  function toggleCheckbox(
    current: string[],
    set: (v: string[]) => void,
    label: string,
    checked: boolean
  ) {
    if (label === NONE) {
      set(checked ? [NONE] : []);
    } else {
      if (checked) {
        set([...current.filter((v) => v !== NONE), label]);
      } else {
        set(current.filter((v) => v !== label));
      }
    }
  }

  function handleNext() {
    setError("");

    if (screen === "q1") {
      if (!age || !/^\d+$/.test(age)) {
        setError("Please enter a valid whole number for your age.");
        return;
      }
      const ageNum = parseInt(age, 10);
      goTo(ageNum < 18 ? "NOT_ELIGIBLE" : "q1b", 1);
    } else if (screen === "q1b") {
      if (!stateAnswer) {
        setError("Please select your state.");
        return;
      }
      goTo(stateAnswer === "CA" ? "CA_BLOCKED" : "q2", 1);
    } else if (screen === "q2") {
      const w = parseFloat(weight);
      if (!weight || isNaN(w) || w <= 0) {
        setError("Please enter your weight in lbs.");
        return;
      }
      const bmi = calcBMI(heightFt, heightIn, w);
      if (bmi < 27) {
        goTo("NOT_ELIGIBLE", 1);
      } else if (bmi < 30) {
        setQ3Skipped(false);
        goTo("q3", 1);
      } else {
        setQ3Skipped(true);
        goTo("q4", 1);
      }
    } else if (screen === "q3") {
      if (q3.length === 0) {
        setError("Please select at least one option.");
        return;
      }
      goTo(q3.length === 1 && q3[0] === NONE ? "NOT_ELIGIBLE" : "q4", 1);
    } else if (screen === "q4") {
      if (q4.length === 0) {
        setError("Please select at least one option.");
        return;
      }
      goTo(q4.length === 1 && q4[0] === NONE ? "q5" : "NOT_ELIGIBLE", 1);
    } else if (screen === "q5") {
      if (q5.length === 0) {
        setError("Please select at least one option.");
        return;
      }
      goTo(q5.length === 1 && q5[0] === NONE ? "LIKELY_ELIGIBLE" : "NEEDS_REVIEW", 1);
    }
  }

  function handleBack() {
    const backMap: Partial<Record<Screen, Screen>> = {
      q1b: "q1",
      q2: "q1b",
      q3: "q2",
      q4: q3Skipped ? "q2" : "q3",
      q5: "q4",
    };
    const prev = backMap[screen];
    if (prev) goTo(prev, -1);
  }

  const isQuestionScreen = ["q1", "q1b", "q2", "q3", "q4", "q5"].includes(screen);
  const isResultScreen = ["LIKELY_ELIGIBLE", "NEEDS_REVIEW", "NOT_ELIGIBLE", "CA_BLOCKED"].includes(screen);
  const { current: stepCurrent, total: stepTotal } = getStepInfo(screen, q3Skipped);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] flex flex-col items-center justify-center px-4 py-10">
      <h1 className="sr-only">GLP-1 eligibility quiz for women</h1>
      <div className="w-full max-w-[460px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100 overflow-hidden"
        >
          {/* Card header */}
          <div className="px-6 pt-5 pb-4">
            <div className="flex items-center justify-between mb-4">
              <Link href="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span>Home</span>
              </Link>
              <span className="font-serif text-3xl font-semibold leading-none tracking-tight text-[#38404B]">Sculpt<span className="text-primary">Rx</span></span>
              <div className="w-16 text-right">
                {isQuestionScreen && (
                  <span className="text-[11px] font-medium text-muted-foreground tabular-nums">
                    {stepCurrent} of {stepTotal}
                  </span>
                )}
              </div>
            </div>

            {/* Step pills */}
            {(isQuestionScreen || isResultScreen) && (
              <StepPills current={isResultScreen ? stepTotal + 1 : stepCurrent} total={stepTotal} />
            )}
          </div>

          {/* Content */}
          <div className="px-6 pb-8 flex flex-col" style={{ minHeight: 420 }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={screen}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 flex flex-col"
              >
                {/* Q1 */}
                {screen === "q1" && (
                  <div className="flex flex-col flex-1">
                    <h2 className="font-serif text-[26px] font-bold text-[#38404B] mb-2 leading-tight">
                      How old are you?
                    </h2>
                    <p className="text-sm text-muted-foreground mb-1.5">
                      GLP-1 therapy is available to adults 18 and older.
                    </p>
                    <p
                      className="mb-5"
                      style={{
                        fontFamily: "'Caveat', cursive",
                        fontSize: "17px",
                        fontWeight: 600,
                        color: "#F0327A",
                        transform: "rotate(-2deg)",
                        display: "inline-block",
                        lineHeight: 1.3,
                      }}
                    >
                      No judgment here — just a fresh start ✦
                    </p>
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      max={120}
                      value={age}
                      onChange={(e) => {
                        setAge(e.target.value.replace(/[^0-9]/g, ""));
                        setError("");
                      }}
                      onKeyDown={(e) => e.key === "Enter" && handleNext()}
                      placeholder="Your age"
                      className="w-full text-2xl font-semibold text-center py-3.5 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-gray-50/60 placeholder:text-gray-300 placeholder:font-normal placeholder:text-xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    {error && (
                      <p className="text-sm text-destructive mt-3 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                      </p>
                    )}
                  </div>
                )}

                {/* Q1b — State */}
                {screen === "q1b" && (
                  <div className="flex flex-col flex-1">
                    <h2 className="font-serif text-[26px] font-bold text-[#38404B] mb-2 leading-tight">
                      Where do you live?
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6">
                      SculptRx is currently available in select U.S. states.
                    </p>
                    <select
                      value={stateAnswer}
                      onChange={(e) => { setStateAnswer(e.target.value); setError(""); }}
                      className={[
                        "w-full py-3 px-4 rounded-xl border-2 text-sm transition-colors focus:outline-none bg-white text-foreground cursor-pointer",
                        error ? "border-destructive focus:border-destructive" : "border-border focus:border-primary",
                        !stateAnswer ? "text-gray-400" : "",
                      ].join(" ")}
                    >
                      <option value="" disabled>Select your state</option>
                      {US_STATES.map((s) => (
                        <option key={s.code} value={s.code}>{s.name}</option>
                      ))}
                    </select>
                    {error && (
                      <p className="text-sm text-destructive mt-3 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                      </p>
                    )}
                  </div>
                )}

                {/* Q2 */}
                {screen === "q2" && (
                  <div className="flex flex-col flex-1">
                    <h2 className="font-serif text-[26px] font-bold text-[#38404B] mb-2 leading-tight">
                      What's your height and weight?
                    </h2>
                    <p className="text-sm text-muted-foreground mb-5">
                      We use this to calculate your BMI. This information stays private.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-2 block">
                          Height
                        </label>
                        <div className="flex gap-3">
                          <select
                            value={heightFt}
                            onChange={(e) => setHeightFt(parseInt(e.target.value))}
                            className="flex-1 py-3 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none text-foreground bg-white text-sm cursor-pointer"
                          >
                            {[4, 5, 6, 7].map((ft) => (
                              <option key={ft} value={ft}>
                                {ft} ft
                              </option>
                            ))}
                          </select>
                          <select
                            value={heightIn}
                            onChange={(e) => setHeightIn(parseInt(e.target.value))}
                            className="flex-1 py-3 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none text-foreground bg-white text-sm cursor-pointer"
                          >
                            {Array.from({ length: 12 }, (_, i) => i).map((inch) => (
                              <option key={inch} value={inch}>
                                {inch} in
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-2 block">
                          Weight (lbs)
                        </label>
                        <input
                          type="number"
                          inputMode="decimal"
                          min={0}
                          value={weight}
                          onChange={(e) => {
                            setWeight(e.target.value);
                            setError("");
                          }}
                          onKeyDown={(e) => e.key === "Enter" && handleNext()}
                          placeholder="e.g. 185"
                          className="w-full py-3 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-colors bg-white text-foreground placeholder:text-gray-300 text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </div>
                    </div>
                    {error && (
                      <p className="text-sm text-destructive mt-3 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                      </p>
                    )}
                  </div>
                )}

                {/* Q3 — conditional */}
                {screen === "q3" && (
                  <div className="flex flex-col flex-1">
                    <h2 className="font-serif text-[26px] font-bold text-[#38404B] mb-2 leading-tight">
                      Do you have any of these conditions?
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">Select all that apply.</p>
                    <div className="space-y-2.5">
                      {Q3_OPTIONS.map((opt) => (
                        <CheckboxOption
                          key={opt}
                          label={opt}
                          checked={q3.includes(opt)}
                          onChange={(v) => toggleCheckbox(q3, setQ3, opt, v)}
                        />
                      ))}
                    </div>
                    {error && (
                      <p className="text-sm text-destructive mt-3 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                      </p>
                    )}
                  </div>
                )}

                {/* Q4 */}
                {screen === "q4" && (
                  <div className="flex flex-col flex-1">
                    <h2 className="font-serif text-[26px] font-bold text-[#38404B] mb-2 leading-tight">
                      Do any of these apply to you?
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">Select all that apply.</p>
                    <div className="space-y-2.5">
                      {Q4_OPTIONS.map((opt) => (
                        <CheckboxOption
                          key={opt}
                          label={opt}
                          checked={q4.includes(opt)}
                          onChange={(v) => toggleCheckbox(q4, setQ4, opt, v)}
                        />
                      ))}
                    </div>
                    {error && (
                      <p className="text-sm text-destructive mt-3 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                      </p>
                    )}
                  </div>
                )}

                {/* Q5 */}
                {screen === "q5" && (
                  <div className="flex flex-col flex-1">
                    <h2 className="font-serif text-[26px] font-bold text-[#38404B] mb-2 leading-tight">
                      A few more quick questions.
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">Select all that apply.</p>
                    <div className="space-y-2.5">
                      {Q5_OPTIONS.map((opt) => (
                        <CheckboxOption
                          key={opt}
                          label={opt}
                          checked={q5.includes(opt)}
                          onChange={(v) => toggleCheckbox(q5, setQ5, opt, v)}
                        />
                      ))}
                    </div>
                    {error && (
                      <p className="text-sm text-destructive mt-3 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                      </p>
                    )}
                  </div>
                )}

                {/* Result: Likely Eligible */}
                {screen === "LIKELY_ELIGIBLE" && (
                  <div className="flex flex-col flex-1 items-center text-center pt-4 pb-2">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-[#38404B] mb-3 leading-tight">
                      Great news… you seem like a great fit! ✨
                    </h2>
                    <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
                      You've taken the first step, and it's a big one. Based on what you shared, GLP-1 therapy could be right for you.
                    </p>
                    <Button
                      asChild
                      className="w-full rounded-full h-12 bg-primary hover:bg-primary/90 text-white text-sm font-semibold shadow-md"
                    >
                      <Link href="/select-medication?from=LIKELY_ELIGIBLE">Get Started →</Link>
                    </Button>
                    <Disclaimer />
                  </div>
                )}

                {/* Result: Needs Review */}
                {screen === "NEEDS_REVIEW" && (
                  <div className="flex flex-col flex-1 items-center text-center pt-4 pb-2">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-5 shrink-0">
                      <svg
                        className="w-8 h-8 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                        />
                      </svg>
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-[#38404B] mb-3 leading-tight">
                      You may still qualify — a quick review is needed.
                    </h2>
                    <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
                      Some of your responses require a provider to take a closer look before we
                      proceed. We'll flag your responses so your consultation is focused and
                      efficient.
                    </p>
                    <Button
                      asChild
                      className="w-full rounded-full h-12 bg-primary hover:bg-primary/90 text-white text-sm font-semibold shadow-md"
                    >
                      <Link href="/select-medication?from=NEEDS_REVIEW">Get Started →</Link>
                    </Button>
                    <Disclaimer />
                  </div>
                )}

                {/* Result: Not Eligible */}
                {screen === "NOT_ELIGIBLE" && (
                  <div className="flex flex-col flex-1 items-center text-center pt-4 pb-2">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-5 shrink-0">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-[#38404B] mb-3 leading-tight">
                      GLP-1 may not be the right fit right now.
                    </h2>
                    <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
                      Based on your responses, GLP-1 therapy may not be appropriate at this time.
                      We offer other treatments that may be a great match for your goals.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-full h-12 border-primary text-primary hover:bg-primary hover:text-white text-sm font-semibold transition-colors"
                    >
                      <Link href="/#membership">Explore Other Services →</Link>
                    </Button>
                    <Disclaimer />
                  </div>
                )}

                {/* Result: CA Blocked */}
                {screen === "CA_BLOCKED" && (
                  <div className="flex flex-col flex-1 items-center text-center pt-4 pb-2">
                    <div className="w-16 h-16 rounded-full bg-[#FEF0F5] flex items-center justify-center mb-5 shrink-0">
                      <svg className="w-8 h-8 text-[#F0327A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-[#38404B] mb-3 leading-tight">
                      We're not in California yet.
                    </h2>
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                      SculptRx isn't available in California at this time due to state regulations, but we're working on it.
                    </p>
                    <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
                      Leave your email and we'll notify you the moment we launch in CA.
                    </p>
                    <Button
                      asChild
                      className="w-full rounded-full h-12 bg-primary hover:bg-primary/90 text-white text-sm font-semibold shadow-md"
                    >
                      <Link href="/">Notify Me When Available →</Link>
                    </Button>
                    <button
                      type="button"
                      onClick={() => goTo("q1b", -1)}
                      className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      ← Change my state
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            {isQuestionScreen && (
              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-center">
                <div className="inline-flex gap-3">
                  {screen !== "q1" && (
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      className="rounded-full min-h-0 h-12 px-5 text-sm text-muted-foreground hover:text-foreground shadow-none"
                    >
                      <ChevronLeft className="w-4 h-4 mr-0.5" />
                      Back
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    className="rounded-full min-h-0 h-12 px-7 text-sm bg-primary hover:bg-primary/90 text-white font-semibold shadow-sm w-auto"
                  >
                    {screen === "q5" ? "See My Results" : "Continue"} →
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-2 mt-5">
          <p className="text-center text-xs text-muted-foreground/60">
            Takes 2 minutes · 100% private
          </p>
          <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
            <Lock className="w-3 h-3 text-green-600 shrink-0" />
            <span className="text-[11px] font-medium text-gray-500">256-bit SSL Secured</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Disclaimer() {
  return (
    <p className="text-[11px] text-muted-foreground/60 leading-relaxed mt-6 px-2">
      This quiz does not constitute medical advice. Final eligibility is determined by a licensed
      healthcare provider during your consultation.
    </p>
  );
}
