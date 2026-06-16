import { motion, type Variants } from "framer-motion";
import { ABOUT_FEATURES } from "../data/content";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

function HexBadge({ index }: { index: string }) {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <svg viewBox="0 0 100 100" className="absolute h-full w-full">
        <polygon
          points="50,4 93,27 93,73 50,96 7,73 7,27"
          fill="rgba(255,198,51,0.07)"
          stroke="#FFC633"
          strokeWidth={3}
        />
      </svg>
      <span className="font-mono text-[10px] font-medium text-amber">
        {index}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
              // mission
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-bone sm:text-5xl">
              WE DON&apos;T JUST LEARN.
              <br />
              WE DO.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            <p className="font-body text-lg leading-relaxed text-mute">
              Traditional education is slow. The world is moving fast. HIVE
              is the bridge between theory and reality. We are a collective
              of ambitious students who believe that the best way to predict
              the future is to build it.
            </p>
            <p className="font-display text-xl font-medium text-bone">
              No prerequisites. No tuition. Just raw energy and passion.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {ABOUT_FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col gap-4 bg-surface p-7 transition-colors duration-300 hover:bg-surfaceHover"
            >
              <HexBadge index={feature.index} />
              <h3 className="font-display text-lg font-semibold text-bone">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-mute">
                {feature.description}
              </p>
              <span className="absolute inset-x-7 bottom-0 h-px scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
