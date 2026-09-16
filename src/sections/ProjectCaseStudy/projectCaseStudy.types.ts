import type { EvidenceVisualId } from "../../components/project-visuals/projectVisual.types";
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
  visual: EvidenceVisualId;
  src: string;
  alt: string;
  title: string;
  caption: string;
  featured?: boolean;
}

export interface ProjectCaseStudyCopy {
  slug: ProjectSlug;
  number: string;
  shortTitle: string;
  title: string;
  context: string;
  summary: string;
  problem: string[];
  contribution: string[];
  data: CaseStudyDataItem[];
  method: CaseStudyMethodStep[];
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
  problem: string;
  contribution: string;
  data: string;
  method: string;
  results: string;
  technology: string;
  visualEvidence: string;
  openImage: string;
  projectLinks: string;
  nextProject: string;
  backToWork: string;
}

export type CaseStudiesByLocale = Record<Locale, Record<ProjectSlug, ProjectCaseStudyCopy>>;
