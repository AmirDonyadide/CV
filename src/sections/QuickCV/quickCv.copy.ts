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
    storyMode: "Portfolio",
    languageLabel: "Language",
    downloadCv: "Download CV",
    profileLabel: "Quick CV",
    contact: "Contact",
    currentExperience: "Experience",
    experience: "Experience timeline",
    education: "Education",
    exchangeStudy: "Exchange study",
    coreTechnologies: "Stack",
    selectedProjects: "Selected projects",
    viewProject: "View project",
    current: "Current",
    footer: "Full CV · PDF in German",
  },
  de: {
    navigationLabel: "Navigation des Kurzprofils",
    homeLabel: "Amirhossein Donyadidegan — Startseite",
    storyMode: "Portfolio",
    languageLabel: "Sprache",
    downloadCv: "Lebenslauf herunterladen",
    profileLabel: "Kurzprofil",
    contact: "Kontakt",
    currentExperience: "Erfahrung",
    experience: "Beruflicher Verlauf",
    education: "Ausbildung",
    exchangeStudy: "Austauschstudium",
    coreTechnologies: "Stack",
    selectedProjects: "Ausgewählte Projekte",
    viewProject: "Projekt ansehen",
    current: "Aktuell",
    footer: "Vollständiger Lebenslauf · PDF auf Deutsch",
  },
  it: {
    navigationLabel: "Navigazione del CV rapido",
    homeLabel: "Amirhossein Donyadidegan — home",
    storyMode: "Portfolio",
    languageLabel: "Lingua",
    downloadCv: "Scarica il CV",
    profileLabel: "CV rapido",
    contact: "Contatti",
    currentExperience: "Esperienza",
    experience: "Percorso professionale",
    education: "Formazione",
    exchangeStudy: "Scambi accademici",
    coreTechnologies: "Stack",
    selectedProjects: "Progetti selezionati",
    viewProject: "Vedi progetto",
    current: "Attuale",
    footer: "CV completo · PDF in tedesco",
  },
};
