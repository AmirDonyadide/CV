import type { Locale } from "../Hero/hero.types";

export interface QuickCvCopy {
  navigationLabel: string;
  homeLabel: string;
  storyMode: string;
  languageLabel: string;
  downloadCv: string;
  profileLabel: string;
  contact: string;
  currentExperience: string;
  experience: string;
  education: string;
  exchangeStudy: string;
  coreTechnologies: string;
  selectedProjects: string;
  viewProject: string;
  current: string;
  footer: string;
}

export const quickCvCopy: Record<Locale, QuickCvCopy> = {
  en: {
    navigationLabel: "Quick CV navigation",
    homeLabel: "Amirhossein Donyadidegan — home",
    storyMode: "Story mode",
    languageLabel: "Language",
    downloadCv: "Download CV",
    profileLabel: "Quick CV",
    contact: "Contact",
    currentExperience: "Current experience",
    experience: "Experience timeline",
    education: "Education",
    exchangeStudy: "Exchange study",
    coreTechnologies: "Core technologies",
    selectedProjects: "Selected projects",
    viewProject: "Read case study",
    current: "Current",
    footer: "For the complete record, download the German CV.",
  },
  de: {
    navigationLabel: "Navigation des Kurzprofils",
    homeLabel: "Amirhossein Donyadidegan — Startseite",
    storyMode: "Story-Modus",
    languageLabel: "Sprache",
    downloadCv: "Lebenslauf herunterladen",
    profileLabel: "Kurzprofil",
    contact: "Kontakt",
    currentExperience: "Aktuelle Position",
    experience: "Beruflicher Verlauf",
    education: "Ausbildung",
    exchangeStudy: "Austauschstudium",
    coreTechnologies: "Kerntechnologien",
    selectedProjects: "Ausgewählte Projekte",
    viewProject: "Fallstudie lesen",
    current: "Aktuell",
    footer: "Den vollständigen Werdegang finden Sie im deutschen Lebenslauf.",
  },
  it: {
    navigationLabel: "Navigazione del CV rapido",
    homeLabel: "Amirhossein Donyadidegan — home",
    storyMode: "Modalità narrativa",
    languageLabel: "Lingua",
    downloadCv: "Scarica il CV",
    profileLabel: "CV rapido",
    contact: "Contatti",
    currentExperience: "Esperienza attuale",
    experience: "Percorso professionale",
    education: "Formazione",
    exchangeStudy: "Scambi accademici",
    coreTechnologies: "Tecnologie principali",
    selectedProjects: "Progetti selezionati",
    viewProject: "Leggi il caso studio",
    current: "Attuale",
    footer: "Per il profilo completo, scarica il CV in tedesco.",
  },
};
