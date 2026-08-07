import type { Locale } from "./sections/Hero/hero.types";
import { AdditionalWork } from "./sections/AdditionalWork/AdditionalWork";
import { Contact } from "./sections/Contact/Contact";
import { Experience } from "./sections/Experience/Experience";
import { Journey } from "./sections/Journey/Journey";
import { HeroStory } from "./sections/Hero/HeroStory";
import { SelectedWork } from "./sections/SelectedWork/SelectedWork";
import { TechnicalStack } from "./sections/TechnicalStack/TechnicalStack";
import { WhatIBuild } from "./sections/WhatIBuild/WhatIBuild";

interface HomePageProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export default function HomePage({ locale, onLocaleChange }: HomePageProps) {
  return (
    <main>
      <HeroStory locale={locale} onLocaleChange={onLocaleChange} />
      <WhatIBuild locale={locale} />
      <SelectedWork locale={locale} />
      <AdditionalWork locale={locale} />
      <Experience locale={locale} />
      <Journey locale={locale} />
      <TechnicalStack locale={locale} />
      <Contact locale={locale} />
    </main>
  );
}
