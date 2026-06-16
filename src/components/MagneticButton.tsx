import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/**
 * A button that subtly follows the cursor within its bounds ("magnetic" hover)
 * and renders a soft amber glow underneath. Resets with a spring on mouse leave.
 */
export default function MagneticButton({
  href,
  children,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const relX = event.clientX - bounds.left - bounds.width / 2;
    const relY = event.clientY - bounds.top - bounds.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-amber/40 bg-amber px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-ink shadow-glowSm transition-shadow duration-300 hover:shadow-glow ${className}`}
    >
      <span className="absolute inset-0 -z-10 bg-amber-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
      <motion.span
        className="relative z-10 inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        aria-hidden="true"
      >
        →
      </motion.span>
    </motion.a>
  );
}
