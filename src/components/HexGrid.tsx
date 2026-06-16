import { useMemo } from "react";
import { motion } from "framer-motion";

interface HexCell {
  cx: number;
  cy: number;
  points: string;
  lit: boolean;
  delay: number;
}

const HEX_RADIUS = 46;
const VIEW_W = 1280;
const VIEW_H = 760;

function buildHexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 30);
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}

/** Deterministic pointy-top hex grid — same texture every render, no randomness drift. */
function buildGrid(width: number, height: number, r: number): HexCell[] {
  const cells: HexCell[] = [];
  const hStep = Math.sqrt(3) * r;
  const vStep = 1.5 * r;
  const cols = Math.ceil(width / hStep) + 2;
  const rows = Math.ceil(height / vStep) + 2;

  let i = 0;
  for (let row = -1; row < rows; row++) {
    const offsetX = row % 2 !== 0 ? hStep / 2 : 0;
    for (let col = -1; col < cols; col++) {
      const cx = col * hStep + offsetX;
      const cy = row * vStep;
      cells.push({
        cx,
        cy,
        points: buildHexPoints(cx, cy, r * 0.92),
        lit: (row * 7 + col * 13) % 29 === 0,
        delay: (i % 6) * 0.45,
      });
      i++;
    }
  }
  return cells;
}

export default function HexGrid() {
  const cells = useMemo(() => buildGrid(VIEW_W, VIEW_H, HEX_RADIUS), []);

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {cells.map((cell, idx) =>
        cell.lit ? (
          <motion.polygon
            key={idx}
            points={cell.points}
            fill="rgba(255,198,51,0.08)"
            stroke="rgba(255,198,51,0.55)"
            strokeWidth={1.2}
            initial={{ opacity: 0.12 }}
            animate={{ opacity: [0.12, 0.65, 0.12] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: cell.delay,
              ease: "easeInOut",
            }}
          />
        ) : (
          <polygon
            key={idx}
            points={cell.points}
            fill="none"
            stroke="rgba(255,255,255,0.045)"
            strokeWidth={1}
          />
        ),
      )}
    </svg>
  );
}
