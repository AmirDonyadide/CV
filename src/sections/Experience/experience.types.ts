import type { Locale } from "../Hero/hero.types";

export interface ExperienceRole {
  id: "safe" | "iip" | "nova" | "fartak";
  date: string;
  role: string;
  organization: string;
  location?: string;
  responsibilities: string[];
  focus: string[];
  current?: boolean;
  pathLabel: string;
}

export interface ExperienceCopy {
  eyebrow: string;
  heading: string;
  supporting: string;
  timelineLabel: string;
  pathCurrentLabel: string;
  pathOriginLabel: string;
  currentRole: string;
  responsibilitiesLabel: string;
  focusLabel: string;
  roles: ExperienceRole[];
}

export type ExperienceCopyByLocale = Record<Locale, ExperienceCopy>;
