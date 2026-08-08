export type Locale = "en" | "de" | "it";

export type HeroNavigationTarget =
  | "hero"
  | "projects"
  | "experience"
  | "journey"
  | "technical-stack"
  | "contact";

export interface HeroCopy {
  homeLabel: string;
  languageLabel: string;
  navLabel: string;
  skipToIdentity: string;
  work: string;
  experience: string;
  journey: string;
  stack: string;
  contact: string;
  quickCv: string;
  skipIntro: string;
  menu: string;
  closeMenu: string;
  role: string;
  tagline: string;
  exploreWork: string;
  downloadCv: string;
  metadataStates: Array<[state: string, label: string]>;
}
