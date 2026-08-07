import type { Locale } from "../Hero/hero.types";
import type { ProjectSlug } from "../SelectedWork/selectedWork.types";

export interface CaseStudyLink {
  label: string;
  href: string;
  kind: "study" | "repository" | "demo";
}

export interface CaseStudyDataItem {
  label: string;
  detail: string;
}

export interface CaseStudyMethodStep {
  title: string;
  detail: string;
}

export interface CaseStudyEvidence {
  src: string;
  webpSrcSet?: string;
  sizes?: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  caption: string;
  featured?: boolean;
  contain?: boolean;
}

export interface ProjectCaseStudyCopy {
  slug: ProjectSlug;
  number: string;
  shortTitle: string;
  title: string;
  context: string;
  summary: string;
  overview: string[];
  problem: string[];
  contribution: string[];
  data: CaseStudyDataItem[];
  methodIntro: string;
  method: CaseStudyMethodStep[];
  workflow: CaseStudyDataItem[];
  outputs: string[];
  technologies: string[];
  evidenceIntro: string;
  evidence: CaseStudyEvidence[];
  links: CaseStudyLink[];
  nextSlug: ProjectSlug;
  nextTitle: string;
}

export interface CaseStudyUiCopy {
  navigationLabel: string;
  homeLabel: string;
  allWork: string;
  quickCv: string;
  languageLabel: string;
  realEvidence: string;
  documentedInterface: string;
  overview: string;
  problem: string;
  contribution: string;
  data: string;
  method: string;
  workflow: string;
  results: string;
  technology: string;
  visualEvidence: string;
  evidenceSource: string;
  openImage: string;
  projectLinks: string;
  nextProject: string;
  backToWork: string;
  caseStudyLabel: string;
}

export type CaseStudiesByLocale = Record<Locale, Record<ProjectSlug, ProjectCaseStudyCopy>>;
