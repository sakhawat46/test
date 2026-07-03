import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Mail, AlertTriangle, CheckCircle2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

type FormState = "idle" | "submitting" | "success";

interface ContactForm {
  name: string;
  email: string;
  topic: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
}

const TOPICS = [
  "Billing question",
  "Subscription / plan change",
  "Technical issue",
  "General question",
  "Other",
];

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.topic) e.topic = "Please select a topic.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Please enter a message (at least 10 characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setFormState("submitting");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          topic: form.topic,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setFormState("success");
    } catch {
      setFormState("idle");
      setErrors({ message: "Something went wrong — please try emailing us directly at hello@joinSculptRx.com." });
    }
  }

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

          <div className="hidden md:flex items-center gap-6">
            <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </a>
            <span className="text-sm font-medium text-primary border-b border-primary pb-0.5">Contact</span>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              <a href="/start">Start Your Assessment</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
            <a
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left text-lg py-2 border-b border-border/50"
            >
              Home
            </a>
            <a
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-left text-lg py-2 border-b border-border/50"
            >
              About Us
            </a>
            <span className="text-left text-lg py-2 border-b border-border/50 text-primary font-medium">Contact</span>
            <Button asChild className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="/start" onClick={() => setIsMobileMenuOpen(false)}>Start Your Assessment</a>
            </Button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 bg-gradient-to-b from-background to-accent/10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <a
              href="/"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to Home
            </a>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#38404B] leading-tight mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We're here to help with billing, account questions, and anything
              else on your mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Medical Caveat Banner */}
      <section className="px-6 pb-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="rounded-2xl bg-amber-50 border border-amber-200 px-5 py-4 flex gap-3"
          >
            <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800 mb-1">
                Medical questions? Please use your patient portal.
              </p>
              <p className="text-sm text-amber-700 leading-relaxed">
                For questions about your health, medication, dosing, or anything
                related to your treatment — please message your care team
                directly through your <span className="font-medium">patient portal</span>. Our support team
                cannot provide medical guidance or access your clinical records.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Email + Form */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto space-y-10">

          {/* Direct email callout */}
          <motion.div
            {...fadeInUp}
            className="rounded-2xl bg-primary/5 border border-primary/15 px-6 py-5 flex items-center gap-4"
          >
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-0.5">
                For billing & customer service questions, email us directly at
              </p>
              <a
                href="mailto:hello@joinSculptRx.com"
                className="font-semibold text-primary hover:underline text-base"
              >
                hello@joinSculptRx.com
              </a>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground">or fill out the form below</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Contact Form */}
          <motion.div {...fadeInUp}>
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl bg-white border border-border shadow-sm px-8 py-12 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-[#38404B] mb-2">
                  Message sent!
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  We'll get back to you within 1–2 business days at the email
                  you provided.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setForm({ name: "", email: "", topic: "", message: "" });
                  }}
                  className="mt-6 text-sm text-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl bg-white border border-border shadow-sm px-6 sm:px-8 py-8 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, name: e.target.value }));
                      setErrors((er) => ({ ...er, name: undefined }));
                    }}
                    placeholder="Jane Smith"
                    className={`w-full py-3 px-4 rounded-xl border-2 transition-colors focus:outline-none text-sm bg-gray-50/60 placeholder:text-gray-300 ${
                      errors.name
                        ? "border-destructive focus:border-destructive"
                        : "border-border focus:border-primary"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1.5">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, email: e.target.value }));
                      setErrors((er) => ({ ...er, email: undefined }));
                    }}
                    placeholder="jane@example.com"
                    className={`w-full py-3 px-4 rounded-xl border-2 transition-colors focus:outline-none text-sm bg-gray-50/60 placeholder:text-gray-300 ${
                      errors.email
                        ? "border-destructive focus:border-destructive"
                        : "border-border focus:border-primary"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1.5">{errors.email}</p>
                  )}
                </div>

                {/* Topic */}
                <div>
                  <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                    Topic
                  </label>
                  <select
                    value={form.topic}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, topic: e.target.value }));
                      setErrors((er) => ({ ...er, topic: undefined }));
                    }}
                    className={`w-full py-3 px-4 rounded-xl border-2 transition-colors focus:outline-none text-sm bg-gray-50/60 cursor-pointer ${
                      errors.topic
                        ? "border-destructive focus:border-destructive"
                        : "border-border focus:border-primary"
                    } ${!form.topic ? "text-gray-400" : "text-foreground"}`}
                  >
                    <option value="" disabled>
                      Select a topic…
                    </option>
                    {TOPICS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.topic && (
                    <p className="text-xs text-destructive mt-1.5">{errors.topic}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => {
                      setForm((f) => ({ ...f, message: e.target.value }));
                      setErrors((er) => ({ ...er, message: undefined }));
                    }}
                    placeholder="How can we help you?"
                    className={`w-full py-3 px-4 rounded-xl border-2 transition-colors focus:outline-none text-sm bg-gray-50/60 placeholder:text-gray-300 resize-none ${
                      errors.message
                        ? "border-destructive focus:border-destructive"
                        : "border-border focus:border-primary"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1.5">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-white font-semibold text-sm shadow-md"
                >
                  {formState === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </Button>

                <p className="text-[11px] text-center text-muted-foreground/70 leading-relaxed">
                  We typically respond within 1–2 business days. For urgent billing
                  issues, email us directly at{" "}
                  <a href="mailto:hello@joinSculptRx.com" className="text-primary hover:underline">
                    hello@joinSculptRx.com
                  </a>
                  .
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171a21] text-[#f8f9fc] py-10 px-6 text-center">
        <p className="text-sm text-white/50">
          © 2025 SculptRx. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
