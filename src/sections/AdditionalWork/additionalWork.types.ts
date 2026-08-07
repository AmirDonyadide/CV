export type AdditionalProjectId = "landsat" | "layeralterator" | "poliyoga" | "classifier";

export interface AdditionalProject {
  id: AdditionalProjectId;
  number: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  href?: string;
  context?: string;
}

export interface AdditionalWorkCopy {
  eyebrow: string;
  heading: string;
  supporting: string;
  workflowLabel: string;
  openProject: string;
  privateProject: string;
  projectIndexLabel: string;
  technologiesLabel: string;
  previewLabels: Record<AdditionalProjectId, string[]>;
  projects: AdditionalProject[];
}
