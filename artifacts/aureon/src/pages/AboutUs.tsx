import React from "react";
import { motion } from "framer-motion";
import { Shield, Stethoscope, Clock, DollarSign, Package, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" },
};

const pillars = [
  {
    icon: Stethoscope,
    title: "Care that actually accounts for being a woman.",
    body: "Our physician network includes board-certified OBGYNs — specialists who understand the hormonal reality of a woman's body, not just a number on a scale. When your weight loss is tangled up with perimenopause, PCOS, or hormonal changes, you're cared for by someone who actually understands why.",
  },
  {
    icon: Shield,
    title: "Real physicians. Real names. Real responses.",
    body: "Every prescription at SculptRx is reviewed by a board-certified U.S. physician — never a nurse practitioner working alone, never an algorithm, never an AI. And when you have a question, a real member of your care team answers. We contractually guarantee a response within 24 hours. Our actual average is under an hour.",
  },
  {
    icon: DollarSign,
    title: "Transparent from the first dollar.",
    body: "The price we show you is the price you pay. No surprise enrollment fees. No charges before a physician approves you. No price that quietly climbs as your dose increases. You'll always know exactly what you're paying and why.",
  },
  {
    icon: Package,
    title: "U.S. physicians. U.S. pharmacies. No shortcuts.",
    body: "Your medication comes from licensed U.S. compounding pharmacies — traceable, verified, and held to real standards. You should never have to wonder what's in the vial you're injecting.",
  },
];

export default function AboutUs() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex flex-col">
            <span className="font-serif text-3xl font-semibold leading-none tracking-tight text-[#38404B]">
              Sculpt<span className="text-primary">Rx</span>
            </span>
            <span className="text-[0.6rem] font-sans uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
              Women's Health & Weight Loss
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <span className="text-sm font-medium text-primary border-b border-primary pb-0.5">About Us</span>
            <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              <a href="/start">Start Your Assessment</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden overflow-hidden bg-background border-b border-border">
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-lg py-2 border-b border-border/50">Home</a>
              <span className="text-left text-lg py-2 border-b border-border/50 text-primary font-medium">About Us</span>
              <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-lg py-2 border-b border-border/50">Contact</a>
              <Button asChild className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="/start">Start Your Assessment</a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-background to-accent/20 overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-secondary/15 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/10 blur-[70px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div {...fadeInUp}>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-4">Our Story</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] text-[#46384b] mb-6">
              Built for women.<br />
              <span className="text-[#F0327A]">By people who were tired of watching women get failed.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">
              Most weight loss companies treat your body like a generic problem to solve. Same protocol, same dose, same indifference — whether you're 28 with PCOS or 49 and navigating menopause. We built SculptRx because that approach was never going to work for women. And deep down, you already knew that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Why — Our Story */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">The Why</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#46384b] mb-8">We started with a frustration.</h2>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ duration: 0.55, delay: 0.1 }} className="space-y-5 text-[17px] text-muted-foreground leading-relaxed">
            <p>
              A woman's body is not a smaller version of a man's. Hormones shift across your cycle, through pregnancy, into perimenopause and beyond — and every one of those shifts changes how your body holds weight, burns energy, and responds to medication. Yet nearly every telehealth weight loss program on the market ignores this completely. They hand you a vial and disappear.
            </p>
            <p>
              We watched women do everything right and still get told they weren't trying hard enough. We watched them get charged surprise fees, left alone with side effects, and ignored when the scale stalled. We saw companies use fake doctors and AI-generated faces to sell to the very women they were failing.
            </p>
            <p className="text-[#46384b] font-semibold text-lg">
              So we built the opposite of all of it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mx-6" />

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white to-accent/10">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInUp} className="mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">What Makes Us Different</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#46384b]">
              Care that actually accounts for being a woman.
            </h2>
          </motion.div>

          <div className="space-y-10">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                  <pillar.icon size={20} className="text-[#F0327A]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#46384b] mb-2">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 md:py-24 px-6 bg-[#46384b] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-secondary/20 blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-[70px]" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/30 mb-6">
              <Heart size={26} className="text-secondary" />
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-secondary font-semibold mb-3">Our Promise</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              You won't go through this alone.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
              The hardest part of any weight loss journey isn't starting — it's the moment things get difficult and there's no one there. The week the side effects hit. The month the scale won't move. That's exactly when most programs go silent. It's exactly when we show up.
            </p>
            <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
              Your care team checks in, adjusts your plan when your body needs it, and stays with you the whole way.
            </p>
            <p className="mt-8 text-white font-semibold text-xl font-serif">
              This isn't a prescription service. It's a relationship built around your health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-accent/20 to-background">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#46384b] mb-4">
              You've tried everything.<br />
              <span className="text-[#F0327A]">This is different.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              If you've felt unseen by every program that promised to help — we built SculptRx for you. Take two minutes to see if it's the right fit. No commitment, no charge until a physician approves you. Just the first step toward feeling like yourself again.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full text-base h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md"
            >
              <a href="/start">Start Today →</a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">Takes 2 min. Really.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-xl font-semibold text-[#38404B]">Sculpt<span className="text-primary">Rx</span></span>
            <span className="text-[0.6rem] font-sans uppercase tracking-[0.2em] text-muted-foreground mt-0.5">Women's Health & Weight Loss</span>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} SculptRx. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
