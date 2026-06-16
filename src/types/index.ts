export interface NavLink {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface AboutFeature {
  id: string;
  title: string;
  description: string;
  index: string; // hex-style label, e.g. "0x01"
}

export interface Offering {
  id: string;
  tag: string; // terminal-style flag, e.g. "upskill"
  title: string;
  description: string;
}

export type SocialPlatform = "instagram" | "twitter" | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}