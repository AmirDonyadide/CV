import type { Locale } from "../Hero/hero.types";
import { technicalStackCopy } from "./technicalStack.copy";
import styles from "./TechnicalStack.module.css";

interface TechnicalStackProps {
  locale: Locale;
}

export function TechnicalStack({ locale }: TechnicalStackProps) {
  const copy = technicalStackCopy[locale];

  return (
    <section id="technical-stack" className={styles.section} aria-labelledby="technical-stack-title">
      <header className={styles.sectionHeader}>
        <h2 id="technical-stack-title" tabIndex={-1}>{copy.heading}</h2>
        <p className={styles.supporting}>{copy.supporting}</p>
      </header>

      <div className={styles.stack} role="group" aria-label={copy.groupLabel}>
        <div className={styles.throughline} aria-hidden="true">
          {copy.groups.map((group) => <span key={group.id} />)}
        </div>

        {copy.groups.map((group) => (
          <article
            key={group.id}
            className={styles.group}
            data-group={group.id}
            aria-labelledby={`${group.id}-stack-title`}
          >
            <header>
              <span>{group.number}</span>
              <h3 id={`${group.id}-stack-title`}>{group.title}</h3>
            </header>

            <ul className={styles.skillList}>
              {group.skills.map((skill, index) => (
                <li key={skill} data-emphasis={index === 0 ? "true" : undefined}>{skill}</li>
              ))}
            </ul>

            <p className={styles.evidence}>
              <span>{copy.evidenceLabel}</span>
              {group.evidence}
            </p>
          </article>
        ))}
      </div>

      <footer className={styles.sectionFooter}>
        <p>{copy.footer}</p>
        <ol aria-label={copy.flow.join(" to ")}>
          {copy.flow.map((item) => <li key={item}>{item}</li>)}
        </ol>
      </footer>
    </section>
  );
}
