import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B", // primary background
        surface: "#121215", // card background
        surfaceHover: "#1A1A1F", // card hover background
        line: "#232328", // hairline borders
        bone: "#F5F4EF", // primary text
        mute: "#8C8C96", // secondary text
        amber: {
          DEFAULT: "#FFC633",
          soft: "#FFD866",
          deep: "#FF8A3D",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "amber-glow":
          "radial-gradient(60% 60% at 50% 40%, rgba(255,198,51,0.18), transparent 70%)",
        "amber-gradient": "linear-gradient(135deg, #FFC633 0%, #FF8A3D 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 198, 51, 0.25)",
        glowSm: "0 0 18px rgba(255, 198, 51, 0.35)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-18px,0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        drift: "drift 9s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
