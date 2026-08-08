import type { Locale } from "./sections/Hero/hero.types";
import { AdditionalWork } from "./sections/AdditionalWork/AdditionalWork";
import { Contact } from "./sections/Contact/Contact";
import { Experience } from "./sections/Experience/Experience";
import { Journey } from "./sections/Journey/Journey";
import { SelectedWork } from "./sections/SelectedWork/SelectedWork";
import { TechnicalStack } from "./sections/TechnicalStack/TechnicalStack";
import { WhatIBuild } from "./sections/WhatIBuild/WhatIBuild";

interface HomePageProps {
  locale: Locale;
}

export default function HomePage({ locale }: HomePageProps) {
  return (
    <>
      <WhatIBuild locale={locale} />
      <SelectedWork locale={locale} />
      <AdditionalWork locale={locale} />
      <Experience locale={locale} />
      <Journey locale={locale} />
      <TechnicalStack locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
