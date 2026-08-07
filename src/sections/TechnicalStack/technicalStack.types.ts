export interface TechnicalGroup {
  id: string;
  number: string;
  title: string;
  evidence: string;
  skills: string[];
}

export interface TechnicalStackCopy {
  eyebrow: string;
  heading: string;
  supporting: string;
  groupLabel: string;
  evidenceLabel: string;
  footer: string;
  flow: string[];
  groups: TechnicalGroup[];
}
