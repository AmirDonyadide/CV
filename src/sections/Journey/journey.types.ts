import type { Locale } from "../Hero/hero.types";

export interface JourneyDegree {
  id: "tehran" | "milan";
  city: string;
  date: string;
  title: string;
  institution: string;
  grade: string;
  status?: string;
  thesis: string;
}

export interface JourneyExchange {
  id: "karlsruhe" | "bonn";
  city: string;
  date: string;
  institution: string;
  description: string;
}

export interface JourneyCopy {
  heading: string;
  supporting: string;
  routeLabel: string;
  thesisLabel: string;
  degrees: JourneyDegree[];
  exchanges: JourneyExchange[];
}

export type JourneyCopyByLocale = Record<Locale, JourneyCopy>;
