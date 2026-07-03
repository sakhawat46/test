import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useSearch } from "wouter";
import { ChevronLeft, Check, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plansByMedication, medicationLabels, planLabels } from "@/lib/plans";

const planDescriptions: (string | ((savings: number) => string))[] = [
  "",
  (savings) => `Save $${savings} vs. monthly.`,
  (savings) => `Save $${savings} vs. monthly.`,
];

export default function SelectPlan() {
  const [, navigate] = useLocation();
  const search = useSearch();
  const params = new URLSearchParams(search);
  const medication = params.get("medication") ?? "semaglutide";
  const fromResult = params.get("from");
  const planParam = params.get("plan");

  const [selected, setSelected] = useState<string | null>(
    planLabels.some((p) => p.id === planParam) ? planParam : null
  );

  const backHref = fromResult
    ? `/select-medication?from=${fromResult}`
    : "/select-medication";

  const prices = plansByMedication[medication] ?? plansByMedication.semaglutide;
  const medInfo = medicationLabels[medication] ?? medicationLabels.semaglutide;

  function handleContinue() {
    if (!selected) return;
    navigate(`/intake?medication=${medication}&plan=${selected}`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-[460px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100 overflow-hidden"
        >
          <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #4EB7C0, #F0327A)" }} />

          <div className="px-6 pt-5 pb-4 flex items-center justify-between border-b border-gray-100">
            <Link href={backHref} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft className="w-4 h-4" />
              Back
            </Link>
            <span className="font-serif text-3xl font-semibold leading-none tracking-tight text-[#38404B]">Sculpt<span className="text-primary">Rx</span></span>
            <div className="w-12" />
          </div>

          <div className="px-6 pt-6 pb-8">
            {/* Medication chip */}
            <div className="flex items-center justify-center gap-1.5 mb-5">
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium border"
                style={{
                  background: `${medInfo.color}0C`,
                  borderColor: `${medInfo.color}30`,
                  color: medInfo.color,
                }}
              >
                <Check className="w-3 h-3" strokeWidth={2.5} />
                {medInfo.name} selected
              </div>
            </div>

            <h1 className="font-serif text-[26px] font-bold text-foreground leading-tight mb-4 text-center">
              Choose <span style={{ color: "#F0327A" }}>your</span> plan.
            </h1>

            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 shadow-sm mb-6 text-center">
              <div className="font-serif italic text-[20px] text-primary mb-1.5 font-medium leading-tight">
                "Almost there."
              </div>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                Your personalized plan is one step away. Our medical team is ready to review.
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-6">
              {planLabels.map((meta, i) => {
                const price = prices[i];
                const isSelected = selected === meta.id;
                const monthlySavings = i > 0 ? (prices[0].pricePerMonth - price.pricePerMonth) * meta.months : 0;
                const rawDesc = planDescriptions[i];
                const descText = typeof rawDesc === "function" ? rawDesc(monthlySavings) : rawDesc;
                const billingLine = i === 0
                  ? "Billed monthly · Cancel anytime"
                  : `Billed $${price.total?.toLocaleString()} today`;

                return (
                  <motion.button
                    key={meta.id}
                    type="button"
                    onClick={() => setSelected(meta.id)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                    className={[
                      "w-full text-left rounded-2xl border-2 p-4 transition-all duration-200 relative",
                      isSelected
                        ? "border-primary bg-primary/[0.03] shadow-sm"
                        : "border-border bg-white hover:border-primary/40 hover:bg-primary/[0.02]",
                    ].join(" ")}
                  >
                    {/* Radio indicator */}
                    <div
                      className={[
                        "absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                        isSelected ? "bg-primary border-primary" : "border-border bg-white",
                      ].join(" ")}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                    </div>

                    <div className="pr-8">
                      {/* Label + badge */}
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[15px] font-bold text-foreground">{meta.label}</span>
                        {meta.badge && (
                          <span
                            className="text-[9.5px] font-bold px-2.5 py-0.5 rounded-full"
                            style={
                              meta.badge === "Most Popular"
                                ? { background: "#F0327A18", color: "#F0327A" }
                                : meta.badge === "Most Flexible"
                                ? { background: "#4EB7C018", color: "#4EB7C0" }
                                : { background: "#16a34a18", color: "#16a34a" }
                            }
                          >
                            {meta.badge === "Most Popular" ? "🔥" : meta.badge === "Most Flexible" ? "🔓" : "💰"} {meta.badge}
                          </span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-1 mb-2">
                        <span
                          className="text-[30px] font-bold leading-none transition-colors duration-200"
                          style={{ color: isSelected ? "#4EB7C0" : "#38404B" }}
                        >
                          ${price.pricePerMonth}
                        </span>
                        <span className="text-[12px] text-muted-foreground font-medium">/mo</span>
                      </div>

                      {/* Billing + savings */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11.5px] text-muted-foreground">{billingLine}</span>
                        {i > 0 && (
                          <span className="text-[11px] font-semibold text-primary">{descText}</span>
                        )}
                      </div>

                      {/* Selected callout */}
                      {isSelected && (
                        <div className="mt-3 bg-primary/[0.07] rounded-xl px-3 py-2.5 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-px" strokeWidth={2.5} />
                          <p className="text-[11px] text-primary leading-relaxed font-medium">
                            {i === 0 && `You'll be charged $${price.pricePerMonth}/mo after physician approval. Cancel anytime — just email us 7 days before your next billing date.`}
                            {i === 1 && "Your personalized medication, compounded for you and delivered to your door each month. Billed as one payment today — only after physician approval."}
                            {i === 2 && "Your personalized medication, compounded for you and delivered to your door each month. Our best per-month rate, billed as one payment today — only after physician approval."}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <Button
              onClick={handleContinue}
              disabled={!selected}
              className="w-full rounded-full h-12 bg-primary hover:bg-primary/90 text-white text-sm font-semibold shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
            >
              Continue →
            </Button>

            <div className="flex items-center justify-center gap-1.5 mt-4">
              <Lock className="w-3 h-3 text-muted-foreground" />
              <p className="text-[10.5px] text-muted-foreground text-center leading-relaxed">
                SSL encrypted · Charged only upon physician approval
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
