import type { AboutFeature, NavLink, Offering, SocialLink } from "../types";

export const NAV_LINKS: NavLink[] = [
  { label: "Teams", href: "/teams" },
  { label: "Core Team", href: "/core-team" },
  { label: "Gallery", href: "/gallery" },
  { label: "Login", href: "/login", isCta: true },
];

export const ABOUT_FEATURES: AboutFeature[] = [
  {
    id: "real-projects",
    index: "0x01",
    title: "Real Projects",
    description: "Ship things that outlive the semester.",
  },
  {
    id: "community",
    index: "0x02",
    title: "Community",
    description: "A floor full of people building at 2am, same as you.",
  },
  {
    id: "competitions",
    index: "0x03",
    title: "Competitions",
    description: "Hackathons, sprints, and bragging rights on the line.",
  },
  {
    id: "creative-stack",
    index: "0x04",
    title: "Creative Stack",
    description: "Design, code, hardware — pick your weapon.",
  },
];

export const OFFERINGS: Offering[] = [
  {
    id: "upskill",
    tag: "upskill",
    title: "Upskill",
    description: "Choose your path and upskill with our expert mentors.",
  },
  {
    id: "mentorship",
    tag: "mentor",
    title: "Mentorship",
    description:
      "Get guidance from seniors who have been there and done that.",
  },
  {
    id: "launchpad",
    tag: "launch",
    title: "Launchpad",
    description:
      "Turn your side project into a startup. We provide the platform, you provide the innovation.",
  },
  {
    id: "network",
    tag: "network",
    title: "Network",
    description:
      "Connect with like-minded builders. Your next co-founder is probably here.",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "instagram", label: "Instagram", href: "#" },
  { platform: "twitter", label: "Twitter", href: "#" },
  { platform: "linkedin", label: "LinkedIn", href: "#" },
];
