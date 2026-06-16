/**
 * Shared domain types for the HIVE landing page.
 * Centralised here so every section component consumes the same shapes.
 */

export interface NavLink {
  /** Visible label, e.g. "Teams" */
  label: string;
  /** Route or hash target, e.g. "/teams" or "#about" */
  href: string;
  /** Marks an item as a primary CTA (rendered as a button, not a link) */
  isCta?: boolean;
}

export interface AboutFeature {
  id: string;
  /** Short, punchy title shown on the card face */
  title: string;
  /** One-line supporting copy */
  description: string;
  /** Hex-style index shown as a mono label, e.g. "0x01" */
  index: string;
}

export interface Offering {
  id: string;
  /** Lower-case bracket tag rendered like a terminal flag, e.g. "upskill" */
  tag: string;
  title: string;
  description: string;
}

export type SocialPlatform = "instagram" | "twitter" | "linkedin";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}
