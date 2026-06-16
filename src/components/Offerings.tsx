import { useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { OFFERINGS } from "../data/content";
import type { Offering } from "../types";

function TiltCard({ offering }: { offering: Offering }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), springConfig);
  const glowX = useTransform(x, (v) => `${v * 100}%`);
  const glowY = useTransform(y, (v) => `${v * 100}%`);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set((event.clientX - bounds.left) / bounds.width);
    y.set((event.clientY - bounds.top) / bounds.height);
  };

  const resetTilt = () => {
    setHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ scale: 1.02 }}
      className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-8"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ background: `radial-gradient(280px circle at ${glowX} ${glowY}, rgba(255,198,51,0.16), transparent 70%)` }}
      />
      <div className="relative z-10">
        <span className="inline-block rounded-full border border-amber/30 bg-ink/40 px-3 py-1 font-mono text-[11px] lowercase tracking-wide text-amber">
          [ {offering.tag} ]
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-bone">{offering.title}</h3>
        <p className="mt-3 font-body text-sm leading-relaxed text-mute">{offering.description}</p>
      </div>
      <motion.span
        className="relative z-10 mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-bone/70"
        whileHover={{ x: 4, color: "#FFC633" }}
      >
        explore →
      </motion.span>
    </motion.div>
  );
}

export default function Offerings() {
  return (
    <section id="offerings" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// offerings</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-bone sm:text-5xl">
            EVERYTHING YOU NEED<br />TO LEVEL UP.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {OFFERINGS.map((offering) => (
            <motion.div
              key={offering.id}
              variants={{ hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <TiltCard offering={offering} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}