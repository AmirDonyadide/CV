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
  heading: string;
  timelineLabel: string;
  pathCurrentLabel: string;
  pathOriginLabel: string;
  currentRole: string;
  roles: ExperienceRole[];
}

export type ExperienceCopyByLocale = Record<Locale, ExperienceCopy>;
