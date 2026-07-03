import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import {
  Heart,
  ArrowRight,
  Lock,
  CheckCircle,
  Pill,
  Stethoscope,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const PINK = "#F0327A";
const TEAL = "#4EB7C0";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const included = [
  { icon: <Pill size={14} color={TEAL} />, label: "Medication included" },
  { icon: <Stethoscope size={14} color={TEAL} />, label: "Physician care included" },
  { icon: <MessageCircle size={14} color={TEAL} />, label: "Ongoing support included" },
  { icon: <ShieldCheck size={14} color={TEAL} />, label: "Follow-ups included" },
  { icon: <CheckCircle size={14} color={TEAL} />, label: "Transparent pricing, always" },
];

const comparison = [
  { them: "Telehealth fee: $99", us: "Physician care: ✓ included" },
  { them: "Platform fee: $49", us: "Support: ✓ included" },
  { them: "Processing fee: $25", us: "Follow-ups: ✓ included" },
  { them: "Monitoring fee: $19", us: "Transparent pricing: ✓" },
];

const trustPoints = [
  { title: "Real physician oversight", desc: "Every program is designed and monitored by a licensed physician." },
  { title: "Medication shipped to you", desc: "Semaglutide or tirzepatide delivered directly to your door each month." },
  { title: "No cancellation penalties", desc: "Cancel anytime. No contracts, no exit fees." },
];

const nofees = ["No membership fees", "No surprise charges", "No price hikes", "Just honest care"];

export default function LpPrice() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* NAV */}
      <nav className="sticky top-0 z-20 bg-white border-b border-gray-100 flex items-center justify-between px-5 py-4">
        <span className="text-2xl font-bold tracking-tight text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          Sculpt<span style={{ color: TEAL }}>Rx</span>
        </span>
        <Link href="/quiz">
          <button
            className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white"
            style={{ backgroundColor: PINK }}
          >
            Free Quiz <ArrowRight size={12} />
          </button>
        </Link>
      </nav>

      {/* HERO */}
      <motion.div
        className="px-6 pt-9 pb-8 text-center bg-white"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-1 mb-5 text-[11px] font-bold uppercase tracking-wide"
            style={{ backgroundColor: `${PINK}12`, color: PINK }}
          >
            <ShieldCheck size={11} color={PINK} /> One Price. No Surprises.
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-[32px] font-extrabold leading-tight tracking-tight text-gray-900 mb-3"
          style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.5px" }}
        >
          GLP-1 care that's<br />
          <span style={{ color: TEAL }}>honest</span> about what it costs
        </motion.h1>

        <motion.p variants={fadeUp} className="text-sm text-gray-500 leading-relaxed mb-7">
          No hidden fees. No platform charges. No surprises on your bill — ever.
        </motion.p>

        {/* PRICE CARD */}
        <motion.div
          variants={fadeUp}
          className="relative rounded-2xl p-7 mb-4 overflow-hidden"
          style={{ backgroundColor: "#e8f8f9", border: `2px solid ${TEAL}` }}
        >
          <div
            className="absolute top-0 right-0 px-3 py-1 text-[10px] font-bold text-white"
            style={{ backgroundColor: PINK, borderRadius: "0 0 0 12px" }}
          >
            ✦ SculptRx
          </div>

          <p className="text-[11px] font-bold uppercase tracking-wider mb-1" style={{ color: PINK }}>
            One Price. Everything Included.
          </p>
          <div className="flex items-baseline justify-center gap-0.5 mb-1">
            <span
              className="font-black leading-none"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, color: PINK }}
            >
              $199
            </span>
            <span className="text-lg text-gray-500 font-medium">/mo</span>
          </div>
          <p className="text-sm text-gray-500 mb-5">for 6 months</p>

          <motion.div className="flex flex-col gap-2 mb-4" variants={stagger} initial="hidden" animate="show">
            {included.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-2 rounded-lg px-3 py-2"
                style={{ backgroundColor: "rgba(255,255,255,0.65)" }}
              >
                {item.icon}
                <span className="text-[13px] text-gray-700 font-medium">{item.label}</span>
                <CheckCircle size={14} color={TEAL} fill={TEAL} className="ml-auto" />
              </motion.div>
            ))}
          </motion.div>

          <Link href="/quiz">
            <button
              className="w-full rounded-xl py-3.5 text-[15px] font-bold text-white"
              style={{ backgroundColor: PINK, boxShadow: `0 4px 16px ${PINK}55` }}
            >
              See If I Qualify →
            </button>
          </Link>
        </motion.div>

        <p className="text-[11px] text-gray-400 flex items-center justify-center gap-1">
          <Lock size={10} /> No payment required to check eligibility
        </p>
      </motion.div>

      {/* CONTRAST — dark section */}
      <motion.div
        className="px-5 py-7"
        style={{ backgroundColor: "#1a1a1a" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="text-[19px] font-bold text-white text-center mb-5 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          While others charge{" "}
          <span style={{ color: PINK }}>$406/mo</span>,<br />
          we charge <span style={{ color: TEAL }}>$199/mo</span>. Period.
        </motion.h2>

        <motion.div className="flex flex-col gap-1.5" variants={stagger}>
          {comparison.map((row, i) => (
            <motion.div key={i} variants={fadeUp} className="grid grid-cols-2 gap-1.5">
              <div className="rounded-lg px-3 py-2" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                <span className="text-[11px] text-gray-400">{row.them}</span>
              </div>
              <div
                className="rounded-lg px-3 py-2"
                style={{ backgroundColor: `${TEAL}22`, border: `1px solid ${TEAL}44` }}
              >
                <span className="text-[11px] font-medium" style={{ color: TEAL }}>{row.us}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-4 rounded-xl px-4 py-3.5 text-center"
          style={{ backgroundColor: `${PINK}20`, border: `1px solid ${PINK}44` }}
        >
          <p className="text-white text-[13px] leading-relaxed">
            You save <strong style={{ color: PINK }}>$207/mo</strong> — that's{" "}
            <strong style={{ color: PINK }}>$1,242 over 6 months</strong>
          </p>
        </motion.div>
      </motion.div>

      {/* TRUST */}
      <motion.div
        className="px-5 py-7"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="text-xl font-bold text-center text-gray-900 mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Why women choose SculptRx
        </motion.h2>
        {trustPoints.map((item, i) => (
          <motion.div key={i} variants={fadeUp} className="flex gap-3 mb-4 items-start">
            <div
              className="w-2 h-2 rounded-full mt-1.5 shrink-0"
              style={{ backgroundColor: PINK }}
            />
            <div>
              <p className="font-bold text-[13px] text-gray-900 mb-0.5">{item.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* NO HIDDEN FEES STRIP */}
      <motion.div
        className="px-5 py-6"
        style={{ background: `linear-gradient(160deg, ${PINK} 0%, #c41f67 100%)` }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        <div className="grid grid-cols-2 gap-2">
          {nofees.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-center gap-2 rounded-xl px-3 py-2.5"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <Heart size={11} fill="#fff" color="#fff" />
              <span className="text-[11px] text-white font-medium leading-snug">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FINAL CTA */}
      <motion.div
        className="px-5 py-8 text-center"
        style={{ background: "linear-gradient(160deg, #f0fafb 0%, #fff0f5 100%)" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        <motion.h2
          variants={fadeUp}
          className="text-[23px] font-extrabold text-gray-900 mb-2 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready for <span style={{ color: TEAL }}>honest</span>,<br />transparent care?
        </motion.h2>
        <motion.p variants={fadeUp} className="text-sm text-gray-500 leading-relaxed mb-6">
          Take a free 2-minute quiz to see if you qualify.
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link href="/quiz">
            <button
              className="w-full rounded-2xl py-4 text-base font-bold text-white"
              style={{ backgroundColor: PINK, boxShadow: `0 4px 20px ${PINK}55` }}
            >
              Start My Free Quiz →
            </button>
          </Link>
        </motion.div>
        <motion.p variants={fadeUp} className="text-[11px] text-gray-400 mt-3 flex items-center justify-center gap-1">
          <Lock size={10} /> 256-bit SSL · No credit card required
        </motion.p>
      </motion.div>

      {/* FOOTER */}
      <div className="px-5 py-5 text-center" style={{ backgroundColor: "#1a1a1a" }}>
        <p
          className="text-base font-bold text-white mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sculpt<span style={{ color: TEAL }}>Rx</span>
        </p>
        <div className="flex items-center justify-center gap-1.5 mb-1.5">
          <Heart size={10} fill={PINK} color={PINK} />
          <span className="text-[11px] text-gray-500">Physician-prescribed GLP-1 care, built for women.</span>
          <Heart size={10} fill={PINK} color={PINK} />
        </div>
        <p className="text-[10px] text-gray-700">© 2025 SculptRx · Not medical advice · Results vary.</p>
      </div>
    </div>
  );
}
