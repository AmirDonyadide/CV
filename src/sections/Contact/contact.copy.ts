import type { Locale } from "../Hero/hero.types";

export interface ContactCopy {
  eyebrow: string;
  question: string;
  heading: string;
  email: string;
  linkedIn: string;
  github: string;
  downloadCv: string;
  downloadDetail: string;
  navigationLabel: string;
  footer: string;
}

export const contactCopy: Record<Locale, ContactCopy> = {
  en: {
    eyebrow: "08 / Contact",
    question: "Have a project, research problem, or opportunity?",
    heading: "Let’s talk.",
    email: "Email",
    linkedIn: "LinkedIn",
    github: "GitHub",
    downloadCv: "Download CV",
    downloadDetail: "PDF · German",
    navigationLabel: "Contact links",
    footer: "Geospatial Data & Software Engineer",
  },
  de: {
    eyebrow: "08 / Kontakt",
    question: "Ein Projekt, eine Forschungsfrage oder eine Gelegenheit?",
    heading: "Lassen Sie uns sprechen.",
    email: "E-Mail",
    linkedIn: "LinkedIn",
    github: "GitHub",
    downloadCv: "Lebenslauf herunterladen",
    downloadDetail: "PDF · Deutsch",
    navigationLabel: "Kontaktlinks",
    footer: "Ingenieur für Geodaten und Software",
  },
  it: {
    eyebrow: "08 / Contatti",
    question: "Un progetto, un problema di ricerca o un’opportunità?",
    heading: "Parliamone.",
    email: "Email",
    linkedIn: "LinkedIn",
    github: "GitHub",
    downloadCv: "Scarica il CV",
    downloadDetail: "PDF · Tedesco",
    navigationLabel: "Link di contatto",
    footer: "Ingegnere di dati geospaziali e software",
  },
};
