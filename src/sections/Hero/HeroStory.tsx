import { useLayoutEffect, useRef } from "react";
import { heroCopy } from "./hero.copy";
import type { Locale } from "./hero.types";
import { HeroIdentity } from "./HeroIdentity";
import { HeroMetadata } from "./HeroMetadata";
import { HeroNavigation } from "./HeroNavigation";
import { HeroStage } from "./HeroStage";
import { useHeroTimeline } from "./useHeroTimeline";
import styles from "./Hero.module.css";

interface HeroStoryProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function HeroStory({ locale, onLocaleChange }: HeroStoryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const { navigateTo, skipIntro } = useHeroTimeline({ sectionRef, viewportRef });
  const copy = heroCopy[locale];

  useLayoutEffect(() => {
    document.getElementById("hero-prepaint")?.remove();
  }, []);

  return (
    <>
      <a
        className={styles.skipToContent}
        href="#hero-title"
        onClick={(event) => {
          event.preventDefault();
          skipIntro();
        }}
      >
        {copy.skipToIdentity}
      </a>
      <section
        id="hero"
        ref={sectionRef}
        className={styles.hero}
        data-motion-mode="pending"
        data-coordinate-intro="pending"
        aria-labelledby="hero-title"
      >
        <div ref={viewportRef} className={styles.viewport}>
          <HeroNavigation
            copy={copy}
            locale={locale}
            onLocaleChange={onLocaleChange}
            onSkipIntro={() => skipIntro()}
            onNavigate={navigateTo}
          />
          <HeroStage />
          <HeroIdentity copy={copy} onExploreWork={() => navigateTo("projects")} />
          <HeroMetadata labels={copy.metadataStates} />
        </div>
      </section>
    </>
  );
}
