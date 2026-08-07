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
  problem: string;
  role: string;
  input: string;
  approach: string;
  technologies: string[];
  output: string;
  evidence: string;
  evidenceLinks: ProjectEvidenceLink[];
}

export interface SelectedWorkCopy {
  eyebrow: string;
  heading: string;
  supporting: string;
  workflowVisualizationsLabel: string;
  illustrationLabel: string;
  actualEvidenceLabel: string;
  caseStudyCta: string;
  fields: {
    problem: string;
    role: string;
    input: string;
    approach: string;
    technologies: string;
    output: string;
    evidence: string;
  };
  visualLabels: {
    prompt: string;
    features: string;
    model: string;
    operation: string;
    mapState: string;
    originalMap: string;
    generalizedMap: string;
    sourceData: string;
    spatialDatabase: string;
    api: string;
    dashboard: string;
    terrain: string;
    variables: string;
    susceptibility: string;
  };
  projects: FlagshipProject[];
}
