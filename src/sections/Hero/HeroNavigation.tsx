import { useEffect, useRef, useState } from "react";
import { localizedHref } from "../../i18n/routing";
import type { HeroCopy, Locale } from "./hero.types";
import styles from "./Hero.module.css";

interface HeroNavigationProps {
  copy: HeroCopy;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  onSkipIntro: () => void;
  onBoundaryNavigate: (target: "projects" | "experience" | "journey" | "technical-stack" | "contact") => void;
}

const locales: Locale[] = ["en", "de", "it"];

export function HeroNavigation({
  copy,
  locale,
  onLocaleChange,
  onSkipIntro,
  onBoundaryNavigate,
}: HeroNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const navigate = (target: "projects" | "experience" | "journey" | "technical-stack" | "contact") => {
    setMenuOpen(false);
    onBoundaryNavigate(target);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation} aria-label={copy.navLabel}>
        <a className={styles.brand} href="#hero" aria-label={copy.homeLabel}>
          AMIR
        </a>

        <div className={styles.desktopLinks}>
          <a href="#projects" onClick={(event) => { event.preventDefault(); navigate("projects"); }}>{copy.work}</a>
          <a href="#experience" onClick={(event) => { event.preventDefault(); navigate("experience"); }}>{copy.experience}</a>
          <a href="#journey" onClick={(event) => { event.preventDefault(); navigate("journey"); }}>{copy.journey}</a>
          <a href="#technical-stack" onClick={(event) => { event.preventDefault(); navigate("technical-stack"); }}>{copy.stack}</a>
          <a href="#contact" onClick={(event) => { event.preventDefault(); navigate("contact"); }}>{copy.contact}</a>
        </div>

        <div className={styles.navUtilities}>
          <div className={styles.languagePicker} role="group" aria-label={copy.languageLabel}>
            {locales.map((item) => (
              <button
                type="button"
                key={item}
                className={item === locale ? styles.languageActive : undefined}
                aria-pressed={item === locale}
                onClick={() => onLocaleChange(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>

          <button className={styles.skipIntro} type="button" onClick={onSkipIntro}>
            {copy.skipIntro}
          </button>

          <a className={styles.quickCv} href={localizedHref("/cv", locale)}>
            {copy.quickCv}
          </a>

          <button
            ref={menuButtonRef}
            className={styles.menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? copy.closeMenu : copy.menu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
              <path d={menuOpen ? "M5 5l14 14M19 5 5 19" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
        </div>

        <div id="mobile-navigation" className={styles.mobilePanel} hidden={!menuOpen}>
          <a href="#projects" onClick={(event) => { event.preventDefault(); navigate("projects"); }}>{copy.work}</a>
          <a href="#experience" onClick={(event) => { event.preventDefault(); navigate("experience"); }}>{copy.experience}</a>
          <a href="#journey" onClick={(event) => { event.preventDefault(); navigate("journey"); }}>{copy.journey}</a>
          <a href="#technical-stack" onClick={(event) => { event.preventDefault(); navigate("technical-stack"); }}>{copy.stack}</a>
          <a href="#contact" onClick={(event) => { event.preventDefault(); navigate("contact"); }}>{copy.contact}</a>
          <button type="button" onClick={() => { setMenuOpen(false); onSkipIntro(); }}>
            {copy.skipIntro}
          </button>
          <div className={styles.mobileLanguages} role="group" aria-label={copy.languageLabel}>
            {locales.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={item === locale}
                onClick={() => { onLocaleChange(item); setMenuOpen(false); }}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
