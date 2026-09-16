export interface TechnicalGroup {
  id: string;
  number: string;
  title: string;
  evidence: string;
  skills: string[];
}

export interface TechnicalStackCopy {
  heading: string;
  groupLabel: string;
  evidenceLabel: string;
  groups: TechnicalGroup[];
}
