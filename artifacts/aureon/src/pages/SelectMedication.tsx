import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useSearch } from "wouter";
import { ChevronLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const medications = [
  {
    id: "semaglutide",
    name: "Semaglutide",
    subtitle: "Once-weekly injection",
    tagline: "The original GLP-1",
    description:
      "Semaglutide works with your body's natural hunger signals — reducing appetite, slowing digestion, and supporting healthier blood sugar levels. One of the most extensively researched GLP-1 medications available, it's a trusted foundation for women beginning their weight loss journey.",
    highlights: ["Single-action GLP-1", "Widely studied", "Doctor-prescribed"],
    color: "#4EB7C0",
    image: "/images/sculpt-semaglutide-nobg.webp",
    badge: "Most Affordable",
    startingPrice: "As low as $199/mo",
  },
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    subtitle: "Once-weekly injection",
    tagline: "Dual-action formula",
    description:
      "Tirzepatide activates both GLP-1 and GIP receptors — two complementary metabolic pathways — for a broader approach to appetite regulation and blood sugar support. Designed for women who want a more comprehensive tool in their weight loss plan.",
    highlights: ["Dual GLP-1 + GIP", "Greater avg. weight loss", "Doctor-prescribed"],
    color: "#F0327A",
    image: "/images/sculpt-tirzepatide-nobg.webp",
    badge: "Most Popular",
    startingPrice: "As low as $259/mo",
  },
];

export default function SelectMedication() {
  const [selected, setSelected] = useState<string | null>(null);
  const [, navigate] = useLocation();
  const search = useSearch();
  const fromResult = new URLSearchParams(search).get("from");
  const backHref = fromResult ? `/quiz?result=${fromResult}` : "/quiz";

  function handleContinue() {
    if (!selected) return;
    const planQuery = fromResult ? `&from=${fromResult}` : "";
    navigate(`/select-plan?medication=${selected}${planQuery}`);
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
          {/* Top bar */}
          <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #4EB7C0, #F0327A)" }} />

          {/* Header */}
          <div className="px-6 pt-5 pb-4 flex items-center justify-between">
            <Link
              href={backHref}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back</span>
            </Link>
            <span className="font-serif text-3xl font-semibold leading-none tracking-tight text-[#38404B]">Sculpt<span className="text-primary">Rx</span></span>
            <div className="w-16" />
          </div>

          {/* Content */}
          <div className="px-6 pb-8">
            <h1 className="font-serif text-[26px] font-bold text-[#38404B] mb-2 leading-tight">
              Choose <span style={{ color: "#F0327A" }}>your</span> medication.
            </h1>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Both are prescribed by U.S.-licensed physicians and tailored to you. Your doctor will review your information and recommend the best fit during your consultation.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              {medications.map((med, i) => {
                const isSelected = selected === med.id;
                return (
                  <motion.button
                    key={med.id}
                    type="button"
                    onClick={() => setSelected(med.id)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                    className={[
                      "w-full text-left rounded-2xl border-2 p-4 transition-all duration-200 relative overflow-hidden",
                      isSelected
                        ? "border-primary bg-primary/[0.04] shadow-sm"
                        : "border-border bg-white hover:border-primary/40 hover:bg-primary/[0.02]",
                    ].join(" ")}
                  >
                    {/* Selection indicator */}
                    <div
                      className={[
                        "absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                        isSelected ? "bg-primary border-primary" : "border-border bg-white",
                      ].join(" ")}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                    </div>

                    {/* Corner ribbon */}
                    {med.badge && (
                      <div className="absolute top-0 left-0 w-[150px] h-[150px] pointer-events-none z-10">
                        <div
                          style={{
                            position: "absolute",
                            top: "40px",
                            left: "-40px",
                            width: "185px",
                            padding: "6px 0",
                            background: med.color,
                            color: "white",
                            fontSize: "9px",
                            fontWeight: 700,
                            textAlign: "center",
                            transform: "rotate(-45deg)",
                            letterSpacing: "0.07em",
                            textTransform: "uppercase",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.18)",
                          }}
                        >
                          {med.badge}
                        </div>
                      </div>
                    )}

                    {/* Product image hero zone */}
                    {med.image && (
                      <div
                        className="relative -mx-4 -mt-4 mb-1 flex items-end justify-center overflow-hidden"
                        style={{
                          height: "220px",
                          background: `radial-gradient(ellipse 80% 70% at 50% 50%, ${med.color}22 0%, transparent 70%)`,
                        }}
                      >
                        <img
                          src={med.image}
                          alt={`${med.name} vial`}
                          className="object-contain"
                          style={{
                            height: "280px",
                            width: "auto",
                            marginBottom: "-50px",
                            filter: `drop-shadow(0 12px 32px ${med.color}44) drop-shadow(0 4px 10px rgba(0,0,0,0.12))`,
                          }}
                        />
                        {/* Ring seal price badge */}
                        <div
                          className="absolute flex flex-col items-center justify-center"
                          style={{
                            right: 14,
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: 72,
                            height: 72,
                            borderRadius: "50%",
                            background: "white",
                            border: `3px solid ${med.color}`,
                            boxShadow: `0 0 0 2px ${med.color}33, 0 4px 18px rgba(0,0,0,0.14)`,
                            lineHeight: 1,
                            gap: 1,
                            zIndex: 10,
                          }}
                        >
                          <span className="text-[8.5px] font-semibold uppercase tracking-wide text-muted-foreground">Low as</span>
                          <span className="text-[19px] font-extrabold leading-none" style={{ color: med.color }}>
                            {med.startingPrice.replace("As low as ", "").replace("/mo", "")}
                          </span>
                          <span className="text-[8.5px] font-semibold" style={{ color: med.color }}>/mo</span>
                        </div>
                      </div>
                    )}

                    {/* Tag */}
                    <span
                      className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2"
                      style={{ background: `${med.color}18`, color: med.color }}
                    >
                      {med.tagline}
                    </span>

                    <div className="mb-0.5 pr-6">
                      <h3 className="font-serif text-[20px] font-bold text-[#38404B] leading-none">
                        {med.name}
                      </h3>
                      <span className="text-xs text-muted-foreground">{med.subtitle}</span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed mt-2 mb-3">
                      {med.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {med.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-[10.5px] font-medium px-2.5 py-1 rounded-full"
                          style={{ background: `${med.color}12`, color: med.color }}
                        >
                          {h}
                        </span>
                      ))}
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

            <p className="mt-4 text-[10.5px] text-muted-foreground text-center leading-relaxed">
              Your doctor will review your selection and confirm or recommend an alternative based on your health profile.
            </p>

            <div className="mt-5 pt-4 border-t border-dashed border-gray-200">
              <p className="text-[10px] text-muted-foreground leading-relaxed text-center">
                <span className="font-semibold text-[#46384b]/60 uppercase tracking-wide text-[9px] block mb-1">FDA Disclosure</span>
                Compounded medication — not FDA-approved or evaluated by the FDA for safety or effectiveness. Prepared by an independent licensed U.S. pharmacy. Not a generic version of any FDA-approved GLP-1 medication.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
