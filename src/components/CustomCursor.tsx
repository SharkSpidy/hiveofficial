import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HOVER_SELECTOR = "a, button, [data-cursor-hover]";

export default function CustomCursor() {
  const [enabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches,
  );
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const springConfig = prefersReducedMotion
    ? { stiffness: 1000, damping: 60, mass: 0.2 }
    : { stiffness: 380, damping: 30, mass: 0.4 };

  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-active");

    const handleMove = (event: MouseEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
      setVisible(true);
    };
    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest(HOVER_SELECTOR)));
    };
    const handleLeaveWindow = () => setVisible(false);
    const handleEnterWindow = () => setVisible(true);
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.documentElement.addEventListener("mouseleave", handleLeaveWindow);
    document.documentElement.addEventListener("mouseenter", handleEnterWindow);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", handleEnterWindow);
    };
  }, [enabled, rawX, rawY]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: pressed ? 0.8 : hovering ? 1.5 : 1,
        rotate: hovering ? 30 : 0,
      }}
      transition={{
        scale: { type: "spring", stiffness: 320, damping: 18 },
        rotate: { duration: 0.4, ease: "easeOut" },
        opacity: { duration: 0.2 },
      }}
    >
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <polygon
          points="17,2 30,9.5 30,24.5 17,32 4,24.5 4,9.5"
          fill={hovering ? "rgba(255,198,51,0.12)" : "none"}
          stroke="#FFC633"
          strokeWidth={hovering ? 2 : 1.4}
        />
        <motion.circle
          cx="17"
          cy="17"
          fill="#FFC633"
          animate={{ r: hovering ? 0 : 2.5 }}
          transition={{ duration: 0.2 }}
        />
      </svg>
    </motion.div>
  );
}