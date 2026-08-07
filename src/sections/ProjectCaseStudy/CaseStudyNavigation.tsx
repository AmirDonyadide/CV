import { localizedHref } from "../../i18n/routing";
import type { Locale } from "../Hero/hero.types";
import type { CaseStudyUiCopy } from "./projectCaseStudy.types";
import styles from "./ProjectCaseStudy.module.css";

interface CaseStudyNavigationProps {
  copy: CaseStudyUiCopy;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const locales: Locale[] = ["en", "de", "it"];

export function CaseStudyNavigation({ copy, locale, onLocaleChange }: CaseStudyNavigationProps) {
  return (
    <header className={styles.siteHeader}>
      <nav className={styles.navigation} aria-label={copy.navigationLabel}>
        <a className={styles.brand} href={localizedHref("/", locale)} aria-label={copy.homeLabel}>AMIR</a>

        <div className={styles.primaryLinks}>
          <a href={localizedHref("/#projects", locale)}>{copy.allWork}</a>
          <a className={styles.quickCv} href={localizedHref("/cv", locale)}>{copy.quickCv}</a>
        </div>

        <div className={styles.languagePicker} role="group" aria-label={copy.languageLabel}>
          {locales.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={locale === item}
              className={locale === item ? styles.languageActive : undefined}
              onClick={() => onLocaleChange(item)}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
