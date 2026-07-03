import { motion } from "framer-motion";
import { useLocation, Link } from "wouter";
import { ChevronLeft, ArrowRight, Clock, BadgeCheck } from "lucide-react";

const cards = [
  {
    id: "glp1",
    title: "Weight Loss",
    subtitle: "GLP-1 Therapy",
    description:
      "Semaglutide & tirzepatide injections prescribed by licensed clinicians to help you lose weight and keep it off.",
    tags: ["Semaglutide", "Tirzepatide", "Physician-guided"],
    image: "/images/glp1-vials.webp",
    cta: "Get Started",
    href: "/quiz",
    available: true,
    accent: "#4EB7C0",
    bg: "from-[#EEF9FA] to-[#F5FCFC]",
    badgeBg: "bg-primary/10 text-primary",
  },
  {
    id: "hrt",
    title: "Hormone Optimization",
    subtitle: "HRT",
    description:
      "Bioidentical hormone replacement therapy to restore balance, energy, and vitality — tailored for women.",
    tags: ["Progesterone", "Estradiol", "Estriol"],
    image: "/images/hrt-creams.webp",
    cta: "Coming Soon",
    href: null,
    available: false,
    accent: "#E79AB8",
    bg: "from-[#FDF0F5] to-[#FEF6F9]",
    badgeBg: "bg-secondary/20 text-secondary-foreground",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Start() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] flex flex-col">
      {/* Minimal nav */}
      <header className="w-full px-6 pt-6 pb-2 flex items-center justify-between max-w-2xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Home</span>
        </Link>
        <span className="font-serif font-bold text-[#38404B] text-[22px] tracking-tight leading-none">
          Sculpt<span className="text-primary">Rx</span>
        </span>
        <div className="w-16" />
      </header>

      {/* Hero copy */}
      <motion.div
        className="text-center px-6 pt-8 pb-2 max-w-lg mx-auto"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
          Choose Your Path
        </p>
        <h1 className="font-serif text-[2rem] sm:text-[2.4rem] font-bold text-[#38404B] leading-tight mb-3">
          What are you here to
          <br />
          <span className="text-[#F0327A]">transform?</span>
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Select your treatment focus and we'll match you with the right clinician-designed program.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="flex-1 flex flex-col gap-4 px-5 pt-6 pb-12 max-w-2xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {cards.map((card) => {
          const isAvailable = card.available;

          return (
            <motion.div key={card.id} variants={cardVariants} className="w-full">
              {isAvailable ? (
                <button
                  onClick={() => setLocation(card.href!)}
                  className={[
                    "group relative w-full rounded-3xl overflow-hidden border-2 border-transparent",
                    "bg-gradient-to-br",
                    card.bg,
                    "shadow-md hover:shadow-xl",
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-1 hover:border-primary/30",
                    "text-left",
                  ].join(" ")}
                >
                  <CardInner card={card} />
                </button>
              ) : (
                <div
                  className={[
                    "relative w-full rounded-3xl overflow-hidden border-2 border-dashed border-secondary/40",
                    "bg-gradient-to-br",
                    card.bg,
                    "opacity-80 cursor-not-allowed",
                    "text-left",
                  ].join(" ")}
                >
                  {/* Coming Soon ribbon */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-secondary/30 rounded-full px-3 py-1 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                    <span className="text-[11px] font-semibold text-secondary tracking-wide uppercase">
                      Coming Soon
                    </span>
                  </div>
                  <CardInner card={card} muted />
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Footer note */}
      <motion.p
        className="text-center text-[11px] text-muted-foreground pb-8 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        All programs require physician review. Results may vary.
      </motion.p>
    </div>
  );
}

function CardInner({
  card,
  muted = false,
}: {
  card: (typeof cards)[number];
  muted?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-0">
      {/* Image panel */}
      <div className="relative w-full sm:w-[270px] shrink-0 flex items-end justify-center pt-6 sm:pt-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 blur-[48px]"
          style={{
            background: `radial-gradient(circle at 60% 60%, ${card.accent}55, transparent 70%)`,
          }}
        />
        <img
          src={card.image}
          alt={card.title}
          className={[
            "relative z-10 w-[220px] sm:w-[250px] object-contain drop-shadow-xl",
            "transition-transform duration-500 ease-out",
            !muted && "group-hover:scale-[1.04]",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{ maxHeight: 250 }}
        />
      </div>

      {/* Text panel */}
      <div className="flex flex-col justify-center px-6 py-7 flex-1">
        {card.id === "glp1" && (
          <div className="flex items-center gap-1.5 bg-[#F0327A]/10 border border-[#F0327A]/25 rounded-full px-2.5 py-1 w-fit mb-3">
            <BadgeCheck className="w-3.5 h-3.5 text-[#F0327A] shrink-0" />
            <span className="text-[10px] font-semibold text-[#F0327A] whitespace-nowrap leading-none">
              Doctor Approved in 24 Hours
            </span>
          </div>
        )}
        <div className="flex items-center gap-2 mb-1">
          <span
            className={[
              "text-[10px] font-bold uppercase tracking-[0.18em] rounded-full px-2.5 py-0.5",
              card.badgeBg,
            ].join(" ")}
          >
            {card.subtitle}
          </span>
        </div>

        <h2 className="font-serif text-[1.55rem] font-bold text-[#38404B] leading-tight mb-2">
          {card.title}
        </h2>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {card.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium bg-white/70 border border-border/50 rounded-full px-2.5 py-0.5 text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex items-center gap-2">
          {card.available ? (
            <span className="inline-flex items-center gap-2 bg-[#F0327A] hover:bg-[#F0327A]/90 text-white text-sm font-semibold rounded-full px-5 py-2 transition-colors duration-200 shadow-sm">
              {card.cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          ) : (
            <span className="text-sm font-medium text-muted-foreground">
              {card.cta}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
