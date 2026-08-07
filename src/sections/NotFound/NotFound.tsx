import { localizedHref } from "../../i18n/routing";
import type { Locale } from "../Hero/hero.types";
import styles from "./NotFound.module.css";

interface NotFoundProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const copy: Record<Locale, {
  code: string;
  heading: string;
  message: string;
  home: string;
  quickCv: string;
  navigation: string;
  language: string;
}> = {
  en: {
    code: "Coordinate not found · 404",
    heading: "This route ends here.",
    message: "The requested page is not part of this portfolio. Return to the main story or open the recruiter-first CV.",
    home: "Return home",
    quickCv: "Open Quick CV",
    navigation: "Page not found navigation",
    language: "Language",
  },
  de: {
    code: "Koordinate nicht gefunden · 404",
    heading: "Diese Route endet hier.",
    message: "Die angeforderte Seite gehört nicht zu diesem Portfolio. Zurück zur Hauptseite oder direkt zum recruiter-orientierten Kurzprofil.",
    home: "Zur Startseite",
    quickCv: "Kurzprofil öffnen",
    navigation: "Navigation der Fehlerseite",
    language: "Sprache",
  },
  it: {
    code: "Coordinata non trovata · 404",
    heading: "Questo percorso termina qui.",
    message: "La pagina richiesta non fa parte di questo portfolio. Torna alla storia principale oppure apri il CV rapido per recruiter.",
    home: "Torna alla home",
    quickCv: "Apri il CV rapido",
    navigation: "Navigazione della pagina non trovata",
    language: "Lingua",
  },
};

const locales: Locale[] = ["en", "de", "it"];

export function NotFound({ locale, onLocaleChange }: NotFoundProps) {
  const content = copy[locale];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.navigation} aria-label={content.navigation}>
          <a className={styles.brand} href={localizedHref("/", locale)} aria-label={content.home}>AMIR</a>
          <div className={styles.languages} role="group" aria-label={content.language}>
            {locales.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={locale === item}
                onClick={() => onLocaleChange(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.coordinate} aria-hidden="true">
          <span />
        </div>
        <p className={styles.eyebrow}>{content.code}</p>
        <h1>{content.heading}</h1>
        <p className={styles.message}>{content.message}</p>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href={localizedHref("/", locale)}>{content.home}</a>
          <a className={styles.secondaryAction} href={localizedHref("/cv", locale)}>{content.quickCv}</a>
        </div>
      </main>
    </div>
  );
}
