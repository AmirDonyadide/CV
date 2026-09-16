export type ProjectSlug = "nl2map" | "se4g" | "landslide";

export interface ProjectEvidenceLink {
  label: string;
  href: string;
}

export interface FlagshipProject {
  slug: ProjectSlug;
  number: string;
  shortTitle: string;
  title: string;
  context: string;
  summary: string;
  role: string;
  technologies: string[];
  output: string;
  evidenceLinks: ProjectEvidenceLink[];
}

export interface SelectedWorkCopy {
  heading: string;
  workflowVisualizationsLabel: string;
  caseStudyCta: string;
  fields: {
    role: string;
    technologies: string;
    output: string;
  };
  projects: FlagshipProject[];
}
