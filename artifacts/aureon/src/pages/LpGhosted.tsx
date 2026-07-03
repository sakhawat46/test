import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import {
  Heart,
  Stethoscope,
  MessageCircle,
  Shield,
  CheckCircle,
  XCircle,
  ArrowRight,
  Lock,
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

export default function LpGhosted() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* NAV */}
      <nav className="sticky top-0 z-20 bg-white border-b border-gray-100 flex items-center justify-between px-5 py-4">
        <span
          className="text-2xl font-bold tracking-tight text-gray-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sculpt<span style={{ color: TEAL }}>Rx</span>
        </span>
        <Link href="/quiz">
          <button
            className="flex items-center gap-1 rounded-full text-white text-sm font-semibold px-4 py-2"
            style={{ backgroundColor: PINK }}
          >
            Free Quiz <ArrowRight size={13} />
          </button>
        </Link>
      </nav>

      {/* HERO */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="px-6 pt-5 pb-8 text-center"
        style={{ background: "linear-gradient(145deg, #fff0f5 0%, #e8f8f9 60%, #fde8f1 100%)" }}
      >
        <motion.div variants={fadeUp}>
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-semibold mb-3"
            style={{ backgroundColor: "#fff", borderColor: PINK, color: PINK }}
          >
            <Heart size={12} fill={PINK} color={PINK} /> Designed for Women
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-[33px] font-extrabold leading-[1.15] tracking-tight text-gray-900 mb-0"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Done being{" "}
          <span style={{ color: PINK }}>ghosted</span>{" "}
          by your GLP-1 provider?
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="w-12 h-[3px] rounded-full mx-auto my-3.5"
          style={{ backgroundColor: PINK }}
        />

        <motion.p variants={fadeUp} className="text-base text-gray-500 leading-relaxed mb-7 max-w-xs mx-auto">
          SculptRx was built for women who deserve real support — not silence.
        </motion.p>

        <motion.div variants={fadeUp}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span
              className="text-lg font-bold"
              style={{ fontFamily: "'Caveat', cursive", color: PINK, transform: "rotate(-2deg)", display: "inline-block" }}
            >
              takes 2 min, we promise
            </span>
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
              <path d="M7 2 L7 14" stroke={PINK} strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M2 10 L7 16 L12 10" stroke={PINK} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <Link href="/quiz">
            <button
              className="w-full rounded-2xl text-white text-base font-bold py-4 px-8 tracking-wide"
              style={{ backgroundColor: PINK, boxShadow: `0 4px 20px ${PINK}55` }}
            >
              Take the Free Quiz →
            </button>
          </Link>
          <p className="flex items-center justify-center gap-1 text-xs text-gray-400 mt-2.5">
            <Lock size={11} /> No payment required · 2-minute quiz
          </p>
          <p className="flex items-center justify-center gap-1 text-xs text-gray-400 mt-1">
            <Shield size={11} /> 256-bit SSL encrypted · Your info is safe
          </p>
        </motion.div>
      </motion.div>

      {/* EMPATHY STRIP */}
      <div className="bg-gray-900 px-6 py-7 text-center">
        <p
          className="text-[19px] font-semibold text-white leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          "I sent three messages.{" "}
          <br />
          <span style={{ color: PINK }}>Nobody ever wrote back.</span>"
        </p>
        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
          If this sounds familiar, you're not alone — and you deserve so much better.
        </p>
      </div>

      {/* COMPARISON */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-5 pt-9 pb-7"
      >
        <motion.h2
          variants={fadeUp}
          className="text-[22px] font-bold text-center text-gray-900 leading-snug mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          What <span style={{ color: TEAL }}>actually</span> changes with us
        </motion.h2>
        <motion.p variants={fadeUp} className="text-center text-xs text-gray-400 mb-5">
          Other providers vs. SculptRx
        </motion.p>

        {[
          { bad: "Weeks of silence after signup", good: "Reply within 24 hours, always" },
          { bad: "Copy-paste treatment plans", good: "Program tailored to your body" },
          { bad: "Disappears after prescribing", good: "Ongoing support every step of the way" },
          { bad: "Generic weight-loss advice", good: "GLP-1 care designed for women" },
        ].map((row, i) => (
          <motion.div key={i} variants={fadeUp} className="grid grid-cols-2 gap-2 mb-2">
            <div className="bg-red-50 rounded-xl p-3 flex items-start gap-1.5">
              <XCircle size={15} color="#e0356a" className="mt-0.5 shrink-0" />
              <span className="text-xs text-gray-500 leading-snug">{row.bad}</span>
            </div>
            <div
              className="rounded-xl p-3 flex items-start gap-1.5 border"
              style={{ backgroundColor: "#f0fafb", borderColor: `${TEAL}44` }}
            >
              <CheckCircle size={15} color={TEAL} className="mt-0.5 shrink-0" />
              <span className="text-xs font-medium text-gray-800 leading-snug">{row.good}</span>
            </div>
          </motion.div>
        ))}

        <div className="grid grid-cols-2 gap-2 mt-2">
          <p className="text-center text-[11px] font-semibold uppercase tracking-wide text-gray-300">Others</p>
          <p className="text-center text-[11px] font-semibold uppercase tracking-wide" style={{ color: TEAL }}>SculptRx</p>
        </div>
      </motion.div>

      {/* TRUST PILLARS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-5 py-9"
        style={{ background: `linear-gradient(160deg, ${PINK} 0%, #c41f67 100%)` }}
      >
        <motion.h2
          variants={fadeUp}
          className="text-[22px] font-bold text-white text-center leading-snug mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          We'd never ghost you.<br />Here's our promise.
        </motion.h2>

        {[
          {
            icon: <Stethoscope size={22} color="#fff" />,
            title: "Real Medical Team",
            desc: "Board-certified physicians and nurse practitioners — not bots or auto-replies.",
          },
          {
            icon: <MessageCircle size={22} color="#fff" />,
            title: "Replies Within 24 Hrs",
            desc: "Every message gets a real human response within one business day.",
          },
          {
            icon: <Heart size={22} color="#fff" />,
            title: "Ongoing Support",
            desc: "Your care team stays with you through every milestone and adjustment.",
          },
        ].map((p, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex gap-3.5 rounded-2xl p-4 mb-2.5"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              {p.icon}
            </div>
            <div>
              <p className="text-white font-bold text-sm mb-1">{p.title}</p>
              <p className="text-white/80 text-[12.5px] leading-snug">{p.desc}</p>
            </div>
          </motion.div>
        ))}

        <div className="flex items-center justify-center gap-1.5 mt-3">
          <Heart size={11} fill="rgba(255,255,255,0.6)" color="rgba(255,255,255,0.6)" />
          <span className="text-xs text-white/60">GLP-1 Care Designed for Women</span>
          <Heart size={11} fill="rgba(255,255,255,0.6)" color="rgba(255,255,255,0.6)" />
        </div>
      </motion.div>

      {/* HOW IT WORKS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="px-5 py-9"
      >
        <motion.h2
          variants={fadeUp}
          className="text-[22px] font-bold text-center text-gray-900 mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Getting started is simple
        </motion.h2>

        {[
          { num: "1", title: "Take a free 2-min quiz", desc: "Tell us about your health history and goals. No commitment." },
          { num: "2", title: "Get your personalized plan", desc: "A physician reviews your profile and designs your program." },
          { num: "3", title: "Start with full support", desc: "Your care team is with you from day one — and every day after." },
        ].map((step, i) => (
          <motion.div key={i} variants={fadeUp} className="flex gap-4 mb-5 items-start">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-base shrink-0"
              style={{ backgroundColor: TEAL }}
            >
              {step.num}
            </div>
            <div>
              <p className="font-bold text-sm text-gray-900 mb-0.5">{step.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* FINAL CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="px-6 py-10 text-center border-t-2"
        style={{ background: "linear-gradient(145deg, #f0fafb 0%, #fff0f5 100%)", borderColor: `${TEAL}33` }}
      >
        <h2
          className="text-[26px] font-extrabold text-gray-900 leading-tight mb-2.5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to feel <span style={{ color: PINK }}>supported</span>?
        </h2>
        <p className="text-[15px] text-gray-500 mb-6 leading-relaxed">
          Join thousands of women who chose a provider that actually shows up.
        </p>
        <Link href="/quiz">
          <button
            className="w-full rounded-2xl text-white text-lg font-bold py-4 px-8 tracking-wide"
            style={{ backgroundColor: PINK, boxShadow: `0 6px 24px ${PINK}55` }}
          >
            Start Your Free Quiz →
          </button>
        </Link>
        <p className="flex items-center justify-center gap-1 text-xs text-gray-400 mt-3">
          <Shield size={11} /> 256-bit SSL · No credit card required · Cancel anytime
        </p>
      </motion.div>

      {/* FOOTER */}
      <div className="bg-gray-900 px-6 py-5 text-center">
        <p
          className="text-[17px] font-bold text-white mb-1.5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Sculpt<span style={{ color: TEAL }}>Rx</span>
        </p>
        <div className="flex items-center justify-center gap-1.5 mb-2.5">
          <Heart size={11} fill={PINK} color={PINK} />
          <span className="text-xs text-gray-400">GLP-1 Care Designed for Women</span>
          <Heart size={11} fill={PINK} color={PINK} />
        </div>
        <p className="text-[11px] text-gray-600 leading-relaxed">
          © 2025 SculptRx · For educational purposes · Not medical advice · Results vary.
        </p>
      </div>

    </div>
  );
}
