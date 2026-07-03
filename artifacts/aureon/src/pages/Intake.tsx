import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearch } from "wouter";
import { ChevronLeft, Lock, CheckCircle2, AlertCircle, Loader2, MapPin, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resolveSelection } from "@/lib/plans";

type ViewState = "form" | "loading" | "success";

interface FormErrors {
  shippingName?: string;
  address1?: string;
  city?: string;
  state?: string;
  zip?: string;
  name?: string;
  card?: string;
  expiry?: string;
  cvc?: string;
}

function detectBrand(cardNum: string): "visa" | "mc" | "amex" | "discover" | null {
  const raw = cardNum.replace(/\s/g, "");
  if (/^4/.test(raw)) return "visa";
  if (/^5[1-5]/.test(raw) || /^2[2-7]/.test(raw)) return "mc";
  if (/^3[47]/.test(raw)) return "amex";
  if (/^6(?:011|5)/.test(raw)) return "discover";
  return null;
}

function formatCard(value: string, isAmex: boolean): string {
  const raw = value.replace(/\D/g, "");
  if (isAmex) {
    return raw.replace(/^(\d{4})(\d{0,6})(\d{0,5}).*/, (_, a, b, c) =>
      [a, b, c].filter(Boolean).join(" ")
    );
  }
  return raw.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}

function CardBrandIcon({ brand }: { brand: ReturnType<typeof detectBrand> }) {
  if (!brand) return null;

  const icons: Record<string, JSX.Element> = {
    visa: (
      <svg viewBox="0 0 38 24" className="w-9 h-6" fill="none">
        <rect width="38" height="24" rx="4" fill="#1A1F71" />
        <path d="M15.5 16.5H12.8L14.5 7.5H17.2L15.5 16.5Z" fill="white" />
        <path d="M24.8 7.7C24.2 7.5 23.3 7.3 22.2 7.3C19.5 7.3 17.6 8.7 17.6 10.7C17.6 12.2 19 13.1 20.1 13.6C21.2 14.1 21.6 14.5 21.6 15C21.6 15.8 20.6 16.2 19.7 16.2C18.5 16.2 17.8 16 16.8 15.6L16.4 15.4L16 17.9C16.7 18.2 17.9 18.4 19.2 18.4C22.1 18.4 23.9 17.1 23.9 14.9C23.9 13.7 23.1 12.8 21.5 12.1C20.5 11.6 19.9 11.3 19.9 10.7C19.9 10.2 20.4 9.6 21.6 9.6C22.6 9.6 23.4 9.8 24 10.1L24.3 10.2L24.8 7.7Z" fill="white" />
        <path d="M28.5 7.5H26.4C25.8 7.5 25.3 7.7 25.1 8.3L21.5 16.5H24.4L25 14.9H28.5L28.9 16.5H31.5L28.5 7.5ZM25.8 12.8C26 12.2 26.9 9.8 26.9 9.8C26.9 9.8 27.2 9 27.3 8.6L27.5 9.7C27.5 9.7 28.2 12.5 28.4 12.8H25.8Z" fill="white" />
        <path d="M10.8 7.5L8.1 13.7L7.8 12.4C7.3 10.9 5.9 9.2 4.3 8.3L6.8 16.5H9.8L14.3 7.5H10.8Z" fill="white" />
        <path d="M5.9 7.5H1L1 7.7C4.9 8.7 7.5 11 8.5 13.7L7.4 8.3C7.2 7.7 6.6 7.5 5.9 7.5Z" fill="#F9A51A" />
      </svg>
    ),
    mc: (
      <svg viewBox="0 0 38 24" className="w-9 h-6" fill="none">
        <rect width="38" height="24" rx="4" fill="#252525" />
        <circle cx="15" cy="12" r="6" fill="#EB001B" />
        <circle cx="23" cy="12" r="6" fill="#F79E1B" />
        <path d="M19 7.8C20.4 8.9 21.3 10.3 21.3 12C21.3 13.7 20.4 15.1 19 16.2C17.6 15.1 16.7 13.7 16.7 12C16.7 10.3 17.6 8.9 19 7.8Z" fill="#FF5F00" />
      </svg>
    ),
    amex: (
      <svg viewBox="0 0 38 24" className="w-9 h-6" fill="none">
        <rect width="38" height="24" rx="4" fill="#2E77BC" />
        <text x="4" y="16" fontFamily="Arial" fontSize="9" fontWeight="bold" fill="white">AMEX</text>
      </svg>
    ),
    discover: (
      <svg viewBox="0 0 38 24" className="w-9 h-6" fill="none">
        <rect width="38" height="24" rx="4" fill="#F76F20" />
        <text x="4" y="16" fontFamily="Arial" fontSize="8" fontWeight="bold" fill="white">DISC</text>
        <circle cx="29" cy="12" r="7" fill="#FDBB30" />
      </svg>
    ),
  };

  return icons[brand] ?? null;
}

function validateExpiry(val: string): boolean {
  const [mm, yy] = val.split("/").map((s) => parseInt(s, 10));
  if (!mm || !yy || mm < 1 || mm > 12) return false;
  const now = new Date();
  const expYear = 2000 + yy;
  const expMonth = mm;
  return (
    expYear > now.getFullYear() ||
    (expYear === now.getFullYear() && expMonth >= now.getMonth() + 1)
  );
}

export default function Intake() {
  const [view, setView] = useState<ViewState>("form");

  const search = useSearch();
  const params = new URLSearchParams(search);
  const selection = resolveSelection(params.get("medication"), params.get("plan"));
  const { medication, plan, price } = selection;
  const isMonthly = plan.months === 1;
  const chargeAmount = isMonthly ? price.pricePerMonth : (price.total ?? price.pricePerMonth);
  const chargeLabel = `$${chargeAmount.toLocaleString()}`;

  const [shippingName, setShippingName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [stateVal, setStateVal] = useState("");
  const [zip, setZip] = useState("");

  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cvcMasked, setCvcMasked] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const cvcRef = useRef<HTMLInputElement>(null);
  const brand = detectBrand(card);
  const isAmex = brand === "amex";
  const maxCardLen = isAmex ? 17 : 19; // with spaces

  function handleCardChange(raw: string) {
    const digits = raw.replace(/\D/g, "").slice(0, isAmex ? 15 : 16);
    setCard(formatCard(digits, isAmex));
    setErrors((e) => ({ ...e, card: undefined }));
  }

  function handleExpiryChange(raw: string) {
    const digits = raw.replace(/\D/g, "").slice(0, 4);
    let formatted = digits;
    if (digits.length >= 2) {
      formatted = digits.slice(0, 2) + "/" + digits.slice(2);
    }
    setExpiry(formatted);
    setErrors((e) => ({ ...e, expiry: undefined }));
  }

  function handleCvcChange(raw: string) {
    const digits = raw.replace(/\D/g, "").slice(0, isAmex ? 4 : 3);
    setCvc(digits);
    setErrors((e) => ({ ...e, cvc: undefined }));
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!shippingName.trim() || shippingName.trim().split(" ").length < 2) {
      newErrors.shippingName = "Please enter your full name.";
    }
    if (!address1.trim()) {
      newErrors.address1 = "Please enter your street address.";
    }
    if (!city.trim()) {
      newErrors.city = "Please enter your city.";
    }
    if (!stateVal.trim() || stateVal.trim().length < 2) {
      newErrors.state = "Please enter your state.";
    }
    if (!/^\d{5}(-\d{4})?$/.test(zip.trim())) {
      newErrors.zip = "Please enter a valid ZIP code.";
    }
    if (!name.trim() || name.trim().split(" ").length < 2) {
      newErrors.name = "Please enter your full name.";
    }
    const rawCard = card.replace(/\s/g, "");
    if (rawCard.length < (isAmex ? 15 : 16)) {
      newErrors.card = "Please enter a valid card number.";
    }
    if (!validateExpiry(expiry)) {
      newErrors.expiry = "Please enter a valid expiry date.";
    }
    const minCvc = isAmex ? 4 : 3;
    if (cvc.length < minCvc) {
      newErrors.cvc = "Please enter your security code.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;
    setView("loading");
    setTimeout(() => setView("success"), 1600);
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
          {/* Header */}
          <div className="px-6 pt-5 pb-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <Link href={`/select-plan?medication=${selection.medicationId}&plan=${plan.id}`} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                <span>Back</span>
              </Link>
              <span className="font-serif text-3xl font-semibold leading-none tracking-tight text-[#38404B]">Sculpt<span className="text-primary">Rx</span></span>
              <div className="w-12" />
            </div>
          </div>

          {/* Body */}
          <AnimatePresence mode="wait">
            {view === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                className="px-6 py-6"
              >
                <h1 className="sr-only">Complete your intake and pre-authorization</h1>

                {/* Journey milestone tracker */}
                <div className="mb-6 px-1">
                  <div className="relative flex items-center justify-between mb-3">
                    <div className="absolute left-0 top-[10px] w-full h-[2px] bg-gray-100 z-0" />
                    <div className="absolute left-0 top-[10px] w-[75%] h-[2px] bg-primary z-0" />
                    {[
                      { label: "Quiz", done: true },
                      { label: "Medication", done: true },
                      { label: "Plan", done: true },
                      { label: "Checkout", done: false },
                    ].map((step) => (
                      <div key={step.label} className="relative z-10 flex flex-col items-center gap-1 w-14">
                        {step.done ? (
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-white border-[2.5px] border-primary flex items-center justify-center shadow-[0_0_0_3px_rgba(78,183,192,0.12)]">
                            <motion.div
                              className="w-2 h-2 rounded-full bg-primary"
                              animate={{ scale: [1, 1.35, 1] }}
                              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                            />
                          </div>
                        )}
                        <span className={[
                          "text-[9.5px] whitespace-nowrap absolute top-full mt-1",
                          step.done ? "font-medium text-primary" : "font-bold text-foreground",
                        ].join(" ")}>
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="font-serif italic text-[13px] text-muted-foreground text-center mt-7">
                    "Your future self will thank you for this moment."
                  </p>
                </div>

                {/* Plan summary */}
                <div className="bg-gradient-to-br from-primary/[0.06] to-secondary/[0.06] rounded-2xl overflow-hidden mb-6 border border-primary/10">
                  <div className="px-4 pt-4 flex items-start justify-between gap-3">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#F0327A] bg-[#F0327A]/10 px-2.5 py-1 rounded-full mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F0327A] inline-block" />
                        Pre-authorization only
                      </span>
                      <p className="font-serif text-[17px] font-bold text-[#38404B] leading-tight">
                        SculptRx {medication.name} Program
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">{plan.label}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-2xl text-[#38404B]">${price.pricePerMonth}</p>
                      <p className="text-[11px] text-muted-foreground">/month</p>
                    </div>
                  </div>

                  {/* $0 Due Today callout */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-4 my-3 rounded-xl bg-white border border-[#F0327A]/20 shadow-sm shadow-[#F0327A]/10 px-4 py-3 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.45, type: "spring", stiffness: 320, damping: 18 }}
                        className="text-xl leading-none"
                      >
                        🎉
                      </motion.span>
                      <div>
                        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest leading-none mb-0.5">
                          Due Now
                        </p>
                        <motion.p
                          initial={{ opacity: 0, x: -6 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            rotate: [0, -5, 5, -4, 4, -2, 2, 0],
                          }}
                          transition={{
                            opacity: { delay: 0.35, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                            x: { delay: 0.35, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                            rotate: {
                              delay: 0.9,
                              duration: 0.55,
                              repeat: Infinity,
                              repeatDelay: 2.8,
                              ease: "easeInOut",
                            },
                          }}
                          className="font-serif text-[28px] font-bold leading-none"
                          style={{
                            background: "linear-gradient(90deg, #F0327A 0%, #4EB7C0 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          $0
                        </motion.p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[15px] font-semibold text-foreground leading-none mb-1">
                        {chargeLabel}
                      </p>
                      <p className="text-[11px] text-muted-foreground leading-none">
                        billed after approval
                      </p>
                    </div>
                  </motion.div>

                  {/* What's included — 2×2 icon grid */}
                  <div className="px-4 pb-1">
                    <p className="text-[9.5px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">What's included</p>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {[
                        { icon: "🩺", label: "Board Certified", sub: "MD Consult" },
                        { icon: "📦", label: "Free Expedited", sub: "Shipping" },
                        { icon: "💬", label: "Care Team", sub: "Unlimited messaging" },
                        { icon: "⏱️", label: "24-Hour", sub: "Response guarantee" },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="bg-white/70 border border-primary/10 rounded-xl p-3 flex flex-col gap-1.5"
                        >
                          <span className="text-[20px] leading-none">{item.icon}</span>
                          <div>
                            <p className="text-[11.5px] font-bold text-[#38404B] leading-tight">{item.label}</p>
                            <p className="text-[10.5px] text-muted-foreground leading-tight mt-0.5">{item.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-4 pb-4">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      <span className="font-medium text-foreground">Your card won't be charged yet.</span>{" "}
                      Your physician reviews your information first — you're only charged once your personalized plan is approved and ready to go!
                    </p>
                  </div>
                </div>

                {/* Shipping details */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
                      Shipping Details
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        autoComplete="shipping name"
                        value={shippingName}
                        onChange={(e) => { setShippingName(e.target.value); setErrors((err) => ({ ...err, shippingName: undefined })); }}
                        placeholder="Jane Smith"
                        className={["w-full py-3 px-4 rounded-xl border-2 text-sm transition-colors focus:outline-none", errors.shippingName ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"].join(" ")}
                      />
                      {errors.shippingName && <FieldError msg={errors.shippingName} />}
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                        Street Address
                      </label>
                      <input
                        type="text"
                        autoComplete="shipping address-line1"
                        value={address1}
                        onChange={(e) => { setAddress1(e.target.value); setErrors((err) => ({ ...err, address1: undefined })); }}
                        placeholder="123 Main St"
                        className={["w-full py-3 px-4 rounded-xl border-2 text-sm transition-colors focus:outline-none", errors.address1 ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"].join(" ")}
                      />
                      {errors.address1 && <FieldError msg={errors.address1} />}
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                        Apt / Suite <span className="normal-case font-normal tracking-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="shipping address-line2"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                        placeholder="Apt 4B"
                        className="w-full py-3 px-4 rounded-xl border-2 border-border focus:border-primary text-sm transition-colors focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 min-w-0">
                        <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                          City
                        </label>
                        <input
                          type="text"
                          autoComplete="shipping address-level2"
                          value={city}
                          onChange={(e) => { setCity(e.target.value); setErrors((err) => ({ ...err, city: undefined })); }}
                          placeholder="New York"
                          className={["w-full py-3 px-4 rounded-xl border-2 text-sm transition-colors focus:outline-none", errors.city ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"].join(" ")}
                        />
                        {errors.city && <FieldError msg={errors.city} />}
                      </div>
                      <div className="w-20 shrink-0">
                        <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                          State
                        </label>
                        <input
                          type="text"
                          autoComplete="shipping address-level1"
                          value={stateVal}
                          onChange={(e) => { setStateVal(e.target.value.toUpperCase().slice(0, 2)); setErrors((err) => ({ ...err, state: undefined })); }}
                          placeholder="NY"
                          className={["w-full py-3 px-4 rounded-xl border-2 text-sm transition-colors focus:outline-none uppercase font-mono", errors.state ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"].join(" ")}
                        />
                        {errors.state && <FieldError msg={errors.state} />}
                      </div>
                      <div className="w-28 shrink-0">
                        <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                          ZIP
                        </label>
                        <input
                          type="text"
                          inputMode="numeric"
                          autoComplete="shipping postal-code"
                          value={zip}
                          onChange={(e) => { setZip(e.target.value.replace(/\D/g, "").slice(0, 5)); setErrors((err) => ({ ...err, zip: undefined })); }}
                          placeholder="10001"
                          className={["w-full py-3 px-4 rounded-xl border-2 text-sm transition-colors focus:outline-none font-mono", errors.zip ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"].join(" ")}
                        />
                        {errors.zip && <FieldError msg={errors.zip} />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px flex-1 bg-border" />
                  <div className="flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
                      Payment Details
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Card form */}
                <div className="space-y-4">
                  {/* Cardholder name */}
                  <div>
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      autoComplete="cc-name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrors((err) => ({ ...err, name: undefined }));
                      }}
                      placeholder="Jane Smith"
                      className={[
                        "w-full py-3 px-4 rounded-xl border-2 text-sm transition-colors focus:outline-none",
                        errors.name
                          ? "border-destructive focus:border-destructive"
                          : "border-border focus:border-primary",
                      ].join(" ")}
                    />
                    {errors.name && <FieldError msg={errors.name} />}
                  </div>

                  {/* Card number */}
                  <div>
                    <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        inputMode="numeric"
                        autoComplete="cc-number"
                        value={card}
                        maxLength={maxCardLen}
                        onChange={(e) => handleCardChange(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        className={[
                          "w-full py-3 pl-4 pr-12 rounded-xl border-2 text-sm transition-colors focus:outline-none font-mono tracking-wider",
                          errors.card
                            ? "border-destructive focus:border-destructive"
                            : "border-border focus:border-primary",
                        ].join(" ")}
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {brand ? (
                          <CardBrandIcon brand={brand} />
                        ) : (
                          <div className="w-9 h-6 rounded bg-gray-100 border border-gray-200" />
                        )}
                      </div>
                    </div>
                    {errors.card && <FieldError msg={errors.card} />}
                  </div>

                  {/* Expiry + CVC */}
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                        Expiry
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        autoComplete="cc-exp"
                        value={expiry}
                        maxLength={5}
                        onChange={(e) => handleExpiryChange(e.target.value)}
                        placeholder="MM/YY"
                        className={[
                          "w-full py-3 px-4 rounded-xl border-2 text-sm transition-colors focus:outline-none font-mono",
                          errors.expiry
                            ? "border-destructive focus:border-destructive"
                            : "border-border focus:border-primary",
                        ].join(" ")}
                      />
                      {errors.expiry && <FieldError msg={errors.expiry} />}
                    </div>
                    <div className="flex-1">
                      <label className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5 block">
                        {isAmex ? "4-Digit CVC" : "CVC"}
                      </label>
                      <input
                        ref={cvcRef}
                        type={cvcMasked ? "password" : "text"}
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        value={cvc}
                        maxLength={isAmex ? 4 : 3}
                        onChange={(e) => handleCvcChange(e.target.value)}
                        onBlur={() => cvc.length > 0 && setCvcMasked(true)}
                        onFocus={() => setCvcMasked(false)}
                        placeholder={isAmex ? "0000" : "000"}
                        className={[
                          "w-full py-3 px-4 rounded-xl border-2 text-sm transition-colors focus:outline-none font-mono",
                          errors.cvc
                            ? "border-destructive focus:border-destructive"
                            : "border-border focus:border-primary",
                        ].join(" ")}
                      />
                      {errors.cvc && <FieldError msg={errors.cvc} />}
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-6 space-y-3">
                  <Button
                    onClick={handleSubmit}
                    className="w-full rounded-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold shadow-md text-sm"
                  >
                    Secure My Spot →
                  </Button>

                  {/* Trust line */}
                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground/70">
                    <Lock className="w-3 h-3 shrink-0" />
                    <span>256-bit SSL · Pre-authorization only · Cancel anytime</span>
                  </div>
                </div>
              </motion.div>
            )}

            {view === "loading" && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center justify-center py-20 px-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Loader2 className="w-8 h-8 text-primary animate-spin" />
                </div>
                <p className="font-serif text-lg font-semibold text-[#38404B]">
                  Securing your spot…
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Verifying your card securely
                </p>
              </motion.div>
            )}

            {view === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center px-6 py-8"
              >
                {/* Animated checkmark */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 20 }}
                  className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-5"
                >
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </motion.div>

                <h2 className="font-serif text-2xl font-bold text-[#38404B] mb-2 leading-tight">
                  You're on your way!
                </h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Your spot has been reserved. No charge has been made to your card.
                </p>

                {/* Next steps */}
                <div className="w-full bg-gray-50 rounded-2xl p-4 mb-6 text-left space-y-3">
                  {[
                    {
                      step: "1",
                      title: "Physician review",
                      desc: "A licensed physician will review your profile within 24–48 hours.",
                    },
                    {
                      step: "2",
                      title: "Personalized plan",
                      desc: "If approved, you'll receive your custom GLP-1 protocol.",
                    },
                    {
                      step: "3",
                      title: "Card charged only then",
                      desc: `Your ${chargeLabel} is only captured once you accept your plan.`,
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-[11px] font-bold shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#38404B]">{item.title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground mb-6">
                  A confirmation email is on its way to your inbox.
                </p>

                <Link
                  href="/"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  ← Back to Home
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <p className="text-center text-xs text-muted-foreground/60 mt-5">
          Pre-Authorization Only. Your card will be automatically charged only upon physician approval.
        </p>
      </div>
    </div>
  );
}

function FieldError({ msg }: { msg: string }) {
  return (
    <p className="text-xs text-destructive mt-1.5 flex items-center gap-1">
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      {msg}
    </p>
  );
}
