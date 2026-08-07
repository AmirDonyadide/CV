import { useRef } from "react";
import type { Locale } from "../Hero/hero.types";
import { JourneyRoute } from "./JourneyRoute";
import { journeyCopy } from "./journey.copy";
import { useJourneyTimeline } from "./useJourneyTimeline";
import styles from "./Journey.module.css";

interface JourneyProps {
  locale: Locale;
}

export function Journey({ locale }: JourneyProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const copy = journeyCopy[locale];
  const [tehran, milan] = copy.degrees;
  const [karlsruhe, bonn] = copy.exchanges;

  useJourneyTimeline({ sectionRef });

  return (
    <section id="journey" ref={sectionRef} className={styles.section} aria-labelledby="journey-title">
      <header className={styles.sectionHeader}>
        <h2 id="journey-title" tabIndex={-1}>{copy.heading}</h2>
        <p className={styles.supporting}>{copy.supporting}</p>
      </header>

      <div className={styles.routeStage} data-journey-stage>
        <JourneyRoute label={copy.routeLabel} />

        {[tehran, milan].map((degree) => (
          <article
            key={degree.id}
            className={`${styles.entry} ${styles.degreeEntry}`}
            data-journey-entry={degree.id}
            data-location={degree.id}
            aria-labelledby={`${degree.id}-journey-title`}
          >
            <p className={styles.city}>{degree.city}</p>
            <time>{degree.date}</time>
            <h3 id={`${degree.id}-journey-title`}>{degree.title}</h3>
            <p className={styles.institution}>{degree.institution}</p>
            <p className={styles.degreeFacts}>
              {degree.status && <span>{degree.status}</span>}
              <span>{degree.grade}</span>
            </p>
            <p className={styles.thesis}>
              <span>{copy.thesisLabel}</span>
              <strong>{degree.thesis}</strong>
            </p>
          </article>
        ))}

        {[karlsruhe, bonn].map((exchange) => (
          <article
            key={exchange.id}
            className={`${styles.entry} ${styles.exchangeEntry}`}
            data-journey-entry={exchange.id}
            data-location={exchange.id}
            aria-labelledby={`${exchange.id}-journey-title`}
          >
            <p className={styles.city}>{exchange.city}</p>
            <time>{exchange.date}</time>
            <h3 id={`${exchange.id}-journey-title`}>{exchange.institution}</h3>
            <p className={styles.description}>{exchange.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
