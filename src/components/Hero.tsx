import { motion, type Variants } from "framer-motion";
import HexGrid from "./HexGrid";
import MagneticButton from "./MagneticButton";

const HEADLINE_WORDS = ["BUILD.", "BREAK.", "REPEAT."];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.3 } },
};

const wordVariants: Variants = {
  hidden: { y: "100%", opacity: 0, skewY: 6 },
  visible: { y: "0%", opacity: 1, skewY: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-28">
      <div className="pointer-events-none absolute inset-0">
        <HexGrid />
        <div className="absolute inset-0 bg-amber-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-amber"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulseGlow" />
          a student community for builders &amp; hackers
        </motion.p>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-[15vw] font-bold leading-[0.95] tracking-tight text-bone sm:text-[10vw] lg:text-[7.2vw]"
        >
          {HEADLINE_WORDS.map((word) => (
            <span key={word} className="block overflow-hidden">
              <motion.span variants={wordVariants} className="inline-block">{word}</motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
          className="mt-8 max-w-xl font-body text-base text-mute sm:text-lg"
        >
          The ultimate student community for builders, hackers, and creators. Stop learning in isolation. Start shipping together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.25, ease: "easeOut" }}
          className="mt-10"
        >
          <MagneticButton href="#about">Learn More</MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-mute"
        >
          scroll
          <span className="h-8 w-px bg-gradient-to-b from-mute to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}