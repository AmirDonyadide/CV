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
    question: "Projects · Research · Opportunities",
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
    question: "Projekte · Forschung · Zusammenarbeit",
    heading: "Sprechen wir.",
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
    question: "Progetti · Ricerca · Opportunità",
    heading: "Parliamo.",
    email: "Email",
    linkedIn: "LinkedIn",
    github: "GitHub",
    downloadCv: "Scarica il CV",
    downloadDetail: "PDF · Tedesco",
    navigationLabel: "Link di contatto",
    footer: "Ingegnere di dati geospaziali e software",
  },
};
