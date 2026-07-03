import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Stethoscope,
  Sparkles,
  Laptop,
  Scale,
  Zap,
  Activity,
  Heart,
  Moon,
  Cloud,
  Flower2,
  TrendingDown,
  BarChart3,
  Leaf,
  Target,
  CheckCircle2,
  Menu,
  X,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const vialImageWebp = "/vial-hand-pink-clean.webp";
const vialImagePng = "/vial-hand-pink-clean.png";
const desktopVialImageWebp = "/desktop-hero-vial-cropped.webp";
const desktopVialImagePng = "/desktop-hero-vial-cropped.png";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  state: z.string().min(1, "Please select a state"),
  ageRange: z.string().min(1, "Please select an age range"),
  primaryGoal: z.string().min(1, "Please select a primary goal"),
});

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL",
  "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
  "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI",
  "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const AGE_RANGES = ["25-34", "35-44", "45-54", "55-64", "65+"];

const GOALS = [
  "Weight Loss",
  "GLP-1 Therapy",
  "Hormone Replacement Therapy",
  "Perimenopause Support",
  "Menopause Support",
  "Energy & Metabolism",
  "General Women's Health"
];

export default function Home() {
  const [, setLocation] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [ctaBlockedBySection, setCtaBlockedBySection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const membershipEl = document.getElementById("membership");
    const howItWorksEl = document.getElementById("how-it-works");
    let blockedCount = 0;
    let observer: IntersectionObserver | null = null;

    const els = [membershipEl, howItWorksEl].filter(Boolean) as HTMLElement[];
    if (els.length) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            blockedCount += e.isIntersecting ? 1 : -1;
          });
          blockedCount = Math.max(0, blockedCount);
          setCtaBlockedBySection(blockedCount > 0);
        },
        { threshold: 0.05 }
      );
      els.forEach(el => observer!.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer?.disconnect();
    };
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      state: "",
      ageRange: "",
      primaryGoal: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <span className="font-serif text-3xl font-semibold leading-none tracking-tight text-[#38404B]">Sculpt<span className="text-primary">Rx</span></span>
            <span className="text-[0.6rem] font-sans uppercase tracking-[0.2em] text-muted-foreground mt-0.5">Women's Health & Weight Loss</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium hover:text-primary transition-colors">How It Works</button>
            <button onClick={() => scrollToSection('treatments')} className="text-sm font-medium hover:text-primary transition-colors">Treatments</button>
            <button onClick={() => scrollToSection('why-sculptrx')} className="text-sm font-medium hover:text-primary transition-colors">Why SculptRx</button>
            <button onClick={() => scrollToSection('membership')} className="text-sm font-medium hover:text-primary transition-colors">Membership</button>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              <Link href="/start">See If I Qualify</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-background border-b border-border"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                <button onClick={() => scrollToSection('how-it-works')} className="text-left text-lg py-2 border-b border-border/50">How It Works</button>
                <button onClick={() => scrollToSection('treatments')} className="text-left text-lg py-2 border-b border-border/50">Treatments</button>
                <button onClick={() => scrollToSection('why-sculptrx')} className="text-left text-lg py-2 border-b border-border/50">Why SculptRx</button>
                <button onClick={() => scrollToSection('membership')} className="text-left text-lg py-2 border-b border-border/50">Membership</button>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-lg py-2 border-b border-border/50">About Us</Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-lg py-2 border-b border-border/50">Contact</Link>
                <Button asChild className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/start">See If I Qualify</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-0 md:pt-[88px] md:pb-6 px-6 bg-gradient-to-b from-background to-accent/20 overflow-hidden">
        <div className="max-w-[1180px] mx-auto md:flex md:justify-center md:items-center md:gap-8">

          {/* ── Text column ── */}
          <motion.div {...fadeInUp} className="md:max-w-xl">
            <h1 className="font-serif text-[44px] sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-5 md:mb-6 text-[#46384b]">
              Lose the weight.<br />
              <span className="text-[#F0327A]">Feel like yourself again.</span>
            </h1>

            <p className="text-[16px] sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-8 leading-relaxed font-light max-w-[78%] md:max-w-none">
              Get a personalized weight loss plan that fits your body, your goals, and your life.
            </p>

            {/* ── MOBILE: tall, airy single-column vertical flow ── */}
            <div className="md:hidden">

              {/* teal CTA pill + price anchor centered beneath it */}
              <div className="w-fit flex flex-col items-center">
                <Button
                  asChild
                  size="lg"
                  className="relative z-10 w-auto rounded-full text-base h-13 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
                >
                  <a href="/start">See If I Qualify</a>
                </Button>
                <div className="relative z-20 flex flex-col items-center mt-2">
                  <div style={{ fontSize: 13, fontWeight: 400, fontStyle: "normal", color: "#555", lineHeight: 1.4, textAlign: "center" }}>
                    as low as{" "}
                    <span style={{ fontWeight: 700, color: "#4EB7C0" }}>$199/mo</span>
                  </div>
                  <div style={{ transform: "rotate(-3deg)", transformOrigin: "center" }}>
                    <span style={{ fontFamily: "'Caveat', cursive", fontSize: "1.05rem", fontWeight: 500, color: "#F0327A", lineHeight: 1.2, opacity: 0.6 }}>
                      Takes 2 mins. Really.
                    </span>
                  </div>
                </div>
              </div>

              {/* vial band — vial sits lower-right and bleeds off the edge; -mt offsets the note height to keep vial position unchanged */}
              <div className="relative mt-5" style={{ marginTop: "-28px" }}>

                {/* vial-in-hand: normal flow defines the band height, right-aligned, bleeds off the right edge */}
                <div className="flex justify-end -mr-[66px]">
                  <motion.div
                    initial={{ opacity: 0, x: 8, y: -180, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, y: -180, scale: 1 }}
                    transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-0 pointer-events-none"
                    style={{ width: "62%" }}
                  >
                    <div className="absolute inset-0 rounded-full bg-primary/12 blur-[48px] scale-110" />
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-28 h-28 rounded-full bg-secondary/35 blur-[30px]" />
                    <div className="absolute top-[calc(60%+5px)] left-[40%] -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-secondary/40 blur-[28px]" />
                    <picture>
                      <source srcSet={vialImageWebp} type="image/webp" />
                      <img
                        src={vialImagePng}
                        alt="SculptRx GLP-1 vial"
                        fetchPriority="high"
                        className="relative z-10 object-contain select-none drop-shadow-xl"
                        style={{
                          width: '100%',
                          WebkitMaskImage: 'linear-gradient(to bottom, black 77%, transparent 100%)',
                          maskImage: 'linear-gradient(to bottom, black 77%, transparent 100%)',
                        }}
                      />
                    </picture>
                  </motion.div>
                </div>

              </div>

              {/* 5-star + trust lines: stars on top, each credential on its own row */}
              <div className="flex flex-col gap-2 w-full" style={{ marginTop: '-330px' }}>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-[#F0327A]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                {["Physician-led", "Board-certified MDs", "Licensed US pharmacies"].map((label, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-[#F0327A] shrink-0" />
                    <span className="text-xs font-medium leading-tight text-muted-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* ── DESKTOP: normal flow button + note + trust ── */}
            <div className="hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full text-base h-13 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
                >
                  <a href="/start">Start Today →</a>
                </Button>
                <span
                  style={{
                    fontFamily: "'Caveat', cursive",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "#F0327A",
                    transform: "rotate(-3deg)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    lineHeight: 1.2,
                  }}
                >
                  <span style={{ fontFamily: "'Caveat', cursive", fontSize: "1.8rem", lineHeight: 1, marginRight: "1px", display: "inline-block", transform: "rotate(15deg)" }}>*</span>
                  Takes 2 min. Really.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 fill-[#F0327A]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  <strong className="text-foreground">Physician-led</strong> · Board-certified MDs · Licensed US pharmacies
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Desktop image column (hidden on mobile) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, x: 12 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.22, ease: "easeOut" }}
            className="hidden md:flex md:justify-center md:items-center relative md:shrink-0"
          >
            <div
              className="relative overflow-hidden flex items-end justify-center"
              style={{
                width: 380,
                height: 500,
              }}
            >
              <picture>
                <source srcSet={desktopVialImageWebp} type="image/webp" />
                <img
                  src={desktopVialImagePng}
                  alt="SculptRx GLP-1 Wellness — physician formulated for women"
                  fetchPriority="high"
                  className="relative z-10 object-contain select-none"
                  style={{
                    height: 475,
                    width: "auto",
                    objectPosition: "bottom",
                    transform: "translateY(55px)",
                    mixBlendMode: "multiply",
                    filter: "drop-shadow(0 18px 36px rgba(0,0,0,0.14))",
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 90%)',
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 90%)',
                  }}
                />
              </picture>
            </div>
          </motion.div>

        </div>

        {/* FHI Trust Band — inside hero so gradient extends to it */}
        <a
          href="https://www.femalehealthinstitute.org"
          target="_blank"
          rel="noopener noreferrer"
          className="-mx-6 mt-4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 20px",
            background: "#4EB7C0",
            textDecoration: "none",
            gap: 12,
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Left: FHI monogram + name */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "white", fontWeight: 800, fontSize: 13, letterSpacing: "-0.02em" }}>FHI</span>
            </div>
            <div>
              <p style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.75)", margin: 0 }}>We Proudly Fund</p>
              <p style={{ fontSize: 13, fontWeight: 700, color: "white", margin: "2px 0 1px", lineHeight: 1.1 }}>The Female Health Institute</p>
              <p style={{ fontSize: 7.5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.65)", margin: 0 }}>Independent Women's Research</p>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: 1, alignSelf: "stretch", background: "rgba(255,255,255,0.3)", flexShrink: 0 }} />

          {/* Right: quote */}
          <p style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 11, color: "rgba(255,255,255,0.92)", margin: 0, lineHeight: 1.4, textAlign: "center", flex: 1 }}>
            "Because our patients deserve it."
          </p>
        </a>
      </section>

      {/* Problem Section — emotional hook surfaces immediately after hero */}
      <section id="why-sculptrx" className="py-8 md:pt-6 md:pb-20 px-6 bg-accent/10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-0 md:mb-14">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2 md:mb-6">
              You've tried everything. <span className="text-[#F0327A]">This is different.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Stubborn weight that won't budge despite diet and exercise. Hormonal changes that affect how you feel, sleep, and think. SculptRx is built around your biology — not generic advice.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { icon: Scale, label: "Stubborn Weight Gain", note: "Especially around the midsection" },
              { icon: Zap, label: "Fatigue & Low Energy", note: "Despite enough sleep" },
              { icon: Activity, label: "Hormonal Imbalance", note: "Perimenopause or menopause changes" },
              { icon: Heart, label: "Emotional Eating", note: "Driven by stress or hormones" },
            ].map((symptom, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className={`p-6 h-full flex flex-col items-center justify-center gap-3 text-center border-border/50 hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(78,183,192,0.15)] cursor-default ${i % 2 === 0 ? 'bg-gradient-to-br from-card to-secondary/10' : 'bg-gradient-to-br from-card to-accent/10'}`}>
                  <symptom.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  <h4 className="font-medium text-sm">{symptom.label}</h4>
                  <p className="text-xs text-muted-foreground">{symptom.note}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Stat Cards Bento Grid ── */}
      <section id="treatments" className="pt-5 pb-10 md:pt-8 md:pb-16" style={{ background: "linear-gradient(135deg,#fdf2f7 0%,#f0fbfc 55%,#fff5f9 100%)" }}>
        <div className="max-w-2xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-2">Real Women. Real Results.</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#46384b] leading-snug">
              What changes when your body{" "}
              <span className="text-[#F0327A]">finally gets support</span>
            </h2>
          </div>

          {/* Bento grid */}
          <div className="flex flex-col gap-3">
            {/* Top row: ink + pink */}
            <div className="flex gap-3">
              {/* Ink card — 3 in 1 */}
              <div className="flex-1 rounded-[18px] overflow-hidden relative p-4" style={{ background: "#46384b" }}>
                <div className="absolute right-2 top-1 text-[40px] font-black leading-none select-none" style={{ color: "rgba(255,255,255,0.08)" }}>✦</div>
                <p className="text-[8px] font-bold tracking-[0.12em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>Beyond the Scale</p>
                <p className="font-serif text-[1.7rem] font-black leading-none mb-1 text-white">3 in 1</p>
                <p className="font-serif text-[13px] font-bold leading-snug mb-2 text-white">improves energy, blood sugar & quality of life.</p>
                <div className="mb-2" style={{ height: 1, background: "rgba(255,255,255,0.12)" }} />
                <p className="text-[10.5px] leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.72)" }}>Not just the scale. More energy, better sleep, fewer cravings.</p>
                <p className="text-[8.5px] italic" style={{ color: "rgba(255,255,255,0.35)" }}>ICER Systematic Review, 2025</p>
              </div>

              {/* Pink card — 20% */}
              <div className="flex-1 rounded-[18px] overflow-hidden relative p-4" style={{ background: "#F0327A" }}>
                <div className="absolute right-2 top-1 text-[40px] font-black leading-none select-none" style={{ color: "rgba(255,255,255,0.13)" }}>↓</div>
                <p className="text-[8px] font-bold tracking-[0.12em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.65)" }}>Tirzepatide</p>
                <p className="font-serif text-[1.7rem] font-black leading-none mb-1 text-white">20%</p>
                <p className="font-serif text-[13px] font-bold leading-snug mb-2 text-white">body weight lost in clinical trials.</p>
                <div className="mb-2" style={{ height: 1, background: "rgba(255,255,255,0.2)" }} />
                <p className="text-[10.5px] leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.75)" }}>More than any other GLP-1 studied head-to-head.</p>
                <p className="text-[8.5px] italic" style={{ color: "rgba(255,255,255,0.38)" }}>SURMOUNT-5 · NEJM, 2025</p>
              </div>
            </div>

            {/* Hero bottom: teal — 60% */}
            <div className="rounded-[18px] overflow-hidden relative p-5" style={{ background: "#4EB7C0" }}>
              <div className="absolute right-[-10px] top-[-10px] text-[130px] font-black leading-none select-none" style={{ color: "rgba(255,255,255,0.09)" }}>♀</div>
              <p className="text-[9px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>Built for Women</p>
              <p className="font-serif font-black text-white leading-[0.9] mb-1" style={{ fontSize: "3.9rem" }}>60%</p>
              <p className="font-serif text-[17px] font-bold text-white leading-snug mb-2">more weight lost on GLP-1</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[12px] font-bold text-white rounded-full px-2.5 py-0.5" style={{ background: "rgba(255,255,255,0.18)" }}>women</span>
                <span className="text-[13px] font-bold text-white">vs</span>
                <span className="text-[12px] font-bold text-white rounded-full px-2.5 py-0.5" style={{ background: "rgba(255,255,255,0.10)" }}>men</span>
              </div>
              <div className="mb-3" style={{ height: 1, background: "rgba(255,255,255,0.2)" }} />
              <p className="text-[13px] leading-relaxed mb-2.5" style={{ color: "rgba(255,255,255,0.85)" }}>
                Your biology isn't a barrier — it's your advantage. SculptRx is built around exactly that.
              </p>
              <p className="text-[9.5px] italic" style={{ color: "rgba(255,255,255,0.42)" }}>JAMA Internal Medicine, 2026 · 19,906 patients across 6 trials</p>
            </div>
          </div>

          {/* Fine print */}
          <p className="text-[9.5px] text-muted-foreground leading-relaxed mt-5 text-center">
            Based on published clinical trial data. Individual results may vary. These figures reflect study populations and do not represent guaranteed SculptRx patient outcomes.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 border-y border-border/40" style={{ background: "linear-gradient(120deg, #e8f9fa 0%, #fdf2f7 60%, #f5eaf8 100%)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { icon: Shield, title: "Licensed Pharmacies", desc: "GLP-1 and HRT therapies prescribed by licensed providers." },
              { icon: Stethoscope, title: "Licensed Women's Health Providers", desc: "Every care plan reviewed and supervised by board-certified clinicians." },
              { icon: Sparkles, title: "Personalized Treatment Plans", desc: "No cookie-cutter protocols. Care tailored to your body and goals." },
              { icon: Laptop, title: "100% Telehealth", desc: "Complete your assessment and care entirely from home — private and convenient." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Bento Grid */}
      <section id="how-it-works" className="py-10 md:py-16 px-4 md:px-6" style={{ background: "#faf9fc" }}>
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <motion.div {...fadeInUp} className="text-center mb-6">
            <p className="text-[9.5px] font-bold tracking-[0.2em] uppercase text-primary mb-2">A Smarter Path to Lasting Results</p>
            <h2 className="font-serif text-3xl md:text-4xl font-black text-[#46384b] leading-snug mb-2">
              Most providers take 5 minutes and call it care.{" "}
              <span className="text-[#F0327A]">We don't.</span>
            </h2>
            <p className="text-sm text-muted-foreground">Here's what happens when you put your health first.</p>
          </motion.div>

          {/* Bento grid */}
          <div className="flex flex-col gap-3">

            {/* Top row */}
            <div className="flex flex-row gap-3" style={{ alignItems: "stretch" }}>

              {/* Step 01 — teal */}
              <div className="flex flex-col rounded-[20px] p-5 md:p-6" style={{ background: "linear-gradient(140deg,#4EB7C0 0%,#3aa8b0 100%)", flex: "0 0 57%" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-[13px] flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.15)" }}>
                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
                      <rect x="7" y="4" width="22" height="28" rx="3" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8"/>
                      <rect x="13" y="1" width="10" height="5" rx="2" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.85)" strokeWidth="1.6"/>
                      <line x1="11" y1="13" x2="25" y2="13" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="11" y1="17.5" x2="22" y2="17.5" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="11" y1="22" x2="19" y2="22" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="26" cy="27" r="5.5" fill="rgba(255,255,255,0.9)"/>
                      <path d="M23.5 27l1.5 1.5 3-3" stroke="#4EB7C0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[8.5px] font-extrabold tracking-[0.1em] uppercase rounded-lg px-2.5 py-0.5" style={{ color: "rgba(255,255,255,0.75)", background: "rgba(255,255,255,0.14)" }}>No payment required</span>
                </div>
                <p className="text-[15.5px] font-bold text-white mb-0.5">Take the Free Quiz</p>
                <p className="text-[9.5px] font-semibold mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>Step 01</p>
                <div className="mb-3" style={{ height: 1, background: "rgba(255,255,255,0.18)" }} />
                <p className="text-[12px] leading-relaxed mb-3 flex-grow" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Tell us about your health, your goals, and how you've been feeling. This isn't a checkbox — it's the beginning of a care plan built around you.
                </p>
                <p className="text-[10.5px] italic" style={{ color: "rgba(255,255,255,0.5)" }}>No pressure. No commitment. Just answers.</p>
              </div>

              {/* Step 02 — dark purple */}
              <div className="flex flex-col flex-1 rounded-[20px] p-5 md:p-6" style={{ background: "linear-gradient(140deg,#5b3f7a 0%,#3d2857 100%)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="11" r="6" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8"/>
                    <path d="M6 30c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="27" cy="24" r="4.5" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5"/>
                    <line x1="27" y1="21.5" x2="27" y2="26.5" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="24.5" y1="24" x2="29.5" y2="24" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-[15.5px] font-bold text-white mb-0.5">Doctor Review</p>
                <p className="text-[9.5px] font-semibold mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>Step 02 · Reviewed within 24 hours</p>
                <div className="mb-3" style={{ height: 1, background: "rgba(255,255,255,0.1)" }} />
                <p className="text-[12px] leading-relaxed mb-3 flex-grow" style={{ color: "rgba(255,255,255,0.8)" }}>
                  A real clinician, not an algorithm, reviews everything you shared and designs a treatment plan around your biology. No office visit needed.
                </p>
                <p className="text-[10.5px] italic" style={{ color: "rgba(255,255,255,0.4)" }}>A real doctor. A real plan. Built around you.</p>
              </div>
            </div>

            {/* Bottom row — full width pink */}
            <div className="rounded-[20px] p-5 md:p-6 flex flex-col gap-3" style={{ background: "linear-gradient(135deg,#F0327A 0%,#c8135a 100%)" }}>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.13)" }}>
                  <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
                    <rect x="14" y="3" width="8" height="5" rx="2" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6"/>
                    <path d="M14 8h8v16a6 6 0 01-12 0V8h4" stroke="rgba(255,255,255,0.9)" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M10 20h14" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" strokeLinecap="round"/>
                    <ellipse cx="18" cy="27" rx="4" ry="2.5" fill="rgba(255,255,255,0.18)"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[15.5px] font-bold text-white mb-0.5">Receive Your Medication</p>
                  <p className="text-[9.5px] font-semibold" style={{ color: "rgba(255,255,255,0.55)" }}>Step 03 · Licensed US pharmacy · Ongoing support</p>
                </div>
              </div>
              <div style={{ height: 1, background: "rgba(255,255,255,0.18)" }} />
              <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                Your medication arrives from a licensed US compounding pharmacy — not a warehouse. Dosing is supervised and adjusted over time. Your care team is reachable — you're a patient, not a transaction.
              </p>
              <p className="text-[10.5px] italic" style={{ color: "rgba(255,255,255,0.48)" }}>Real doctors. Real support. The way it should have been from the start.</p>
            </div>
          </div>

          {/* Standalone CTA */}
          <div className="text-center mt-6">
            <a
              href="/start"
              className="inline-block bg-primary text-white font-bold rounded-full px-8 py-3 text-sm shadow-lg hover:opacity-90 transition-opacity"
            >
              Take the Free Quiz →
            </a>
            <p className="text-xs text-muted-foreground mt-2">No payment until your physician approves your plan.</p>
          </div>

        </div>
      </section>

      {/* Membership Preview */}
      <section id="membership" className="pt-4 pb-8 md:pt-8 md:pb-14 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              Simple, <span className="text-[#F0327A]">transparent</span> pricing.
              <span
                className="inline-block ml-3 align-middle"
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.55rem)",
                  fontWeight: 600,
                  color: "#4EB7C0",
                  transform: "rotate(-4deg)",
                  display: "inline-block",
                  position: "relative",
                  top: "-2px",
                  lineHeight: 1,
                }}
              >
                No Hidden Fees
                <svg
                  viewBox="0 0 130 10"
                  className="absolute left-0 -bottom-1.5 w-full"
                  style={{ overflow: "visible" }}
                  aria-hidden="true"
                >
                  <path
                    d="M2 6 Q32 2 65 6 Q98 10 128 5"
                    fill="none"
                    stroke="#4EB7C0"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your monthly price includes your medication, clinician review, and ongoing support. No surprise charges. No hidden fees. <span className="text-[#F0327A] font-semibold">Ever.</span>
            </p>
          </motion.div>

          {/* Medication cards */}
          <div className="flex flex-col md:flex-row gap-5 justify-center items-stretch pt-6 max-w-[780px] mx-auto">
            {[
              {
                id: "semaglutide",
                name: "Semaglutide",
                subtitle: "Once-weekly injection",
                tagline: "The original GLP-1",
                description: "Targets the GLP-1 receptor to reduce appetite, slow digestion, and improve blood sugar regulation. The most studied GLP-1 medication for women's weight loss.",
                highlights: ["Single-action GLP-1", "Widely studied", "Doctor-prescribed"],
                color: "#4EB7C0",
                image: "/images/sculpt-semaglutide-nobg.webp",
                badge: "Most Affordable",
                startingPrice: "$199/mo",
              },
              {
                id: "tirzepatide",
                name: "Tirzepatide",
                subtitle: "Once-weekly injection",
                tagline: "Dual-action formula",
                description: "Activates both GLP-1 and GIP receptors for a more powerful metabolic effect. Clinical trials show greater average weight loss compared to semaglutide alone.",
                highlights: ["Dual GLP-1 + GIP", "Greater avg. weight loss", "Doctor-prescribed"],
                color: "#F0327A",
                image: "/images/sculpt-tirzepatide-nobg.webp",
                badge: "Most Popular",
                startingPrice: "$259/mo",
              },
            ].map((med, i) => (
              <motion.div
                key={med.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex-1 min-w-[300px] relative rounded-2xl border-2 bg-white overflow-hidden shadow-sm"
                style={{ borderColor: `${med.color}44` }}
              >
                {/* Corner ribbon */}
                <div className="absolute top-0 left-0 w-[150px] h-[150px] pointer-events-none z-10 overflow-hidden rounded-tl-2xl">
                  <div style={{
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
                  }}>
                    {med.badge}
                  </div>
                </div>

                {/* Product image zone */}
                <div
                  className="relative flex items-end justify-center overflow-hidden"
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
                  {/* Price badge */}
                  <div
                    className="absolute flex flex-col items-center justify-center"
                    style={{
                      right: 16,
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
                    <span className="text-[17px] font-extrabold leading-none" style={{ color: med.color }}>
                      {med.startingPrice.replace("/mo", "")}
                    </span>
                    <span className="text-[8.5px] font-semibold" style={{ color: med.color }}>/mo</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-5 pb-6 pt-3">
                  <span
                    className="inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2"
                    style={{ background: `${med.color}18`, color: med.color }}
                  >
                    {med.tagline}
                  </span>
                  <h3 className="font-serif text-[22px] font-bold text-[#38404B] leading-none mb-0.5">{med.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{med.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{med.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
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
                  <Button
                    className="w-full rounded-full h-11 text-white text-sm font-semibold shadow-md transition-opacity hover:opacity-90"
                    style={{ background: med.color }}
                    onClick={() => setLocation('/quiz')}
                  >
                    See If I Qualify
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground italic">Your physician will confirm eligibility.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 md:py-24 px-6 bg-card">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#F0327A] mb-3">Common Questions</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Everything you need to know.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Answers to the questions women ask most about GLP-1 therapy, HRT, and how SculptRx works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "What is a GLP-1 medication and how does it work?",
                  a: "GLP-1 (glucagon-like peptide-1) receptor agonists are a class of medications originally developed for type 2 diabetes that have demonstrated significant weight loss outcomes in clinical research. They work by mimicking a naturally occurring hormone that regulates appetite, slows gastric emptying, and improves insulin sensitivity. Medications in this class include semaglutide and tirzepatide. They are prescription-only and require evaluation by a licensed clinician to determine eligibility."
                },
                {
                  q: "Is GLP-1 therapy right for me?",
                  a: "That depends on your individual health profile — and it's a determination only a licensed clinician can make. SculptRx begins with a comprehensive assessment and, if appropriate, lab work. Your provider will review your results and discuss whether a GLP-1-based care pathway may be appropriate given your medical history, current health, and goals. Not everyone will qualify."
                },
                {
                  q: "What is HRT and who is it for?",
                  a: "Hormone Replacement Therapy (HRT) refers to the use of prescribed hormones — typically estrogen, progesterone, or a combination — to address hormonal changes associated with perimenopause and menopause. Symptoms like hot flashes, night sweats, sleep disruption, brain fog, mood changes, and reduced libido can all be hormonally driven. HRT is not appropriate for everyone and requires a thorough evaluation including medical history and lab testing before any prescribing decision."
                },
                {
                  q: "Can GLP-1 and HRT be addressed together?",
                  a: "For many women, weight changes and hormonal shifts happen simultaneously — particularly around perimenopause and menopause. Addressing both through coordinated clinical evaluation may offer more complete support than treating either in isolation. SculptRx is designed to evaluate both pathways together, though any treatment plan depends entirely on clinical findings and provider judgment."
                },
                {
                  q: "Do I need to visit a doctor in person?",
                  a: "SculptRx is designed as a telehealth-first experience. In most cases, you can complete your initial assessment, lab requisition, and provider consultation entirely online. Lab testing may require an in-person draw at a local lab facility. Specific requirements may vary by state and clinical circumstance."
                },
                {
                  q: "What labs will I need to complete?",
                  a: "The specific lab panel depends on your assessment results and provider judgment. Common markers evaluated include hormone levels (estradiol, progesterone, testosterone, SHBG), thyroid function, metabolic markers (fasting glucose, insulin, HbA1c), lipid panel, CBC, CMP, and key micronutrients like Vitamin D and B12. Labs shown on this site are examples only — actual panels are determined by clinical protocols."
                },
                {
                  q: "How long until I see results?",
                  a: "This varies significantly by individual, treatment type, adherence, and other health factors. Clinical research on GLP-1 medications generally shows measurable outcomes over weeks to months with consistent use. HRT symptom relief timelines also vary. SculptRx does not guarantee specific outcomes — results depend on eligibility, consistency, and individual physiology. Any care plan will include realistic expectations set by your provider."
                },
                {
                  q: "Will my insurance cover SculptRx or its treatments?",
                  a: "SculptRx is a membership-based platform. Coverage for specific medications (such as GLP-1s) varies widely by insurance plan and diagnosis. Some patients use FSA/HSA funds for eligible expenses. Our team will provide guidance on coverage options during the enrollment process. We are not yet live — this website is a concept presentation."
                },
                {
                  q: "Is SculptRx currently accepting patients?",
                  a: "Not yet. SculptRx is currently in pre-launch and building its founding member list. By joining the early access list, you will be among the first notified when we open enrollment. This website is a concept mockup for educational and partnership purposes only."
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-border/60 rounded-xl px-6 bg-background/60 hover:bg-background transition-colors data-[state=open]:bg-background data-[state=open]:border-primary/30 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="font-semibold text-left text-sm md:text-base py-5 hover:no-underline text-foreground [&[data-state=open]]:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Early Access Form */}
      <section id="get-started" className="py-14 md:py-24 px-6 bg-gradient-to-br from-accent/30 to-secondary/20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Join the founding member list.
            </h2>
            <p className="text-foreground/80">
              Be among the first women to access SculptRx when we open to founding members.
            </p>
          </motion.div>

          <Card className="p-8 md:p-12 text-left bg-white/90 backdrop-blur-sm border-white/50 shadow-xl rounded-2xl">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">You're on the list.</h3>
                <p className="text-muted-foreground">
                  Thanks for your interest. We'll notify you when SculptRx opens to founding members.
                </p>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Jane Doe" className="bg-white" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="jane@example.com" className="bg-white" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 555-5555" className="bg-white" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="Select a state" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {US_STATES.map((state) => (
                                <SelectItem key={state} value={state}>{state}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="ageRange"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age Range</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="Select your age range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {AGE_RANGES.map((range) => (
                                <SelectItem key={range} value={range}>{range}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="primaryGoal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Goal</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="What is your main focus?" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {GOALS.map((goal) => (
                                <SelectItem key={goal} value={goal}>{goal}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-12 text-base mt-4 rounded-full">
                    Request Early Access
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to receive communications from SculptRx.
                  </p>
                </form>
              </Form>
            )}
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171a21] text-[#f8f9fc] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="font-serif text-2xl font-semibold mb-1 block">SculptRx</span>
            <span className="text-[0.6rem] font-sans uppercase tracking-[0.2em] text-white/50 mb-4 block">Women's Health & Weight Loss</span>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Clinician-guided weight loss and hormone health — built for women.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollToSection('how-it-works')} className="text-left text-sm text-white/70 hover:text-white transition-colors w-fit">How It Works</button>
              <button onClick={() => scrollToSection('treatments')} className="text-left text-sm text-white/70 hover:text-white transition-colors w-fit">Treatments</button>
              <button onClick={() => scrollToSection('membership')} className="text-left text-sm text-white/70 hover:text-white transition-colors w-fit">Membership</button>
            </div>
            <div className="flex flex-col gap-3">
              <a href="/terms" className="text-left text-sm text-white/70 hover:text-white transition-colors">Terms</a>
              <a href="/contact" className="text-left text-sm text-white/70 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-colors cursor-pointer">
                <span className="text-xs">IG</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-colors cursor-pointer">
                <span className="text-xs">FB</span>
              </div>
            </div>
            <p className="text-sm text-white/50">
              © 2025 SculptRx. All rights reserved.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10">
          <p className="text-[0.65rem] text-white/40 leading-relaxed text-justify">
            This concept website does not provide medical advice, diagnosis, or treatment. Any future medical services would be provided by licensed medical professionals following appropriate evaluation. GLP-1 and HRT treatments, if offered, would require evaluation by a licensed clinician and are not appropriate for everyone. This website is a concept mockup for educational and partnership presentation purposes only.
          </p>
        </div>
      </footer>

      {/* Floating CTA — appears after scrolling past hero, hides at membership/pricing section */}
      <AnimatePresence>
        {showFloatingCTA && !ctaBlockedBySection && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-3 bg-white/90 backdrop-blur-md border-b border-border/60 shadow-md px-5 py-3"
          >
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-xs font-semibold text-foreground">Ready to start?</span>
              <span className="text-[10px] text-muted-foreground">Clinician-guided · Telehealth</span>
            </div>
            <div className="w-px h-7 bg-border/60 hidden sm:block" />
            <Button
              asChild
              className="rounded-full bg-[#F0327A] hover:bg-[#F0327A]/90 text-white text-sm font-semibold px-5 h-9 shadow-md"
            >
              <a href="/start">See If I Qualify</a>
            </Button>
            <span
              style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#4EB7C0",
                opacity: 0.7,
              }}
            >
              *Takes 2 min. Really.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
