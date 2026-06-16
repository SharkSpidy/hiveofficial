import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "../data/content";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "./SocialIcons";
import type { SocialPlatform } from "../types";

const ICONS: Record<SocialPlatform, typeof InstagramIcon> = {
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
};

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between lg:px-10">
        <a href="/" className="font-display text-lg font-bold tracking-tight text-bone">
          HIVE<span className="text-amber">.</span>
        </a>
        <p className="font-mono text-xs text-mute">© 2026 HIVE Community. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((social) => {
            const Icon = ICONS[social.platform];
            return (
              <motion.a
                key={social.platform}
                href={social.href}
                aria-label={social.label}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mute transition-colors duration-200 hover:border-amber/50 hover:text-amber hover:shadow-glowSm"
              >
                <Icon size={16} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}