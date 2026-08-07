import { useRef } from "react";
import type { Locale } from "../Hero/hero.types";
import { ExperiencePath } from "./ExperiencePath";
import { experienceCopy } from "./experience.copy";
import { useExperienceTimeline } from "./useExperienceTimeline";
import styles from "./Experience.module.css";

interface ExperienceProps {
  locale: Locale;
}

export function Experience({ locale }: ExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const copy = experienceCopy[locale];

  useExperienceTimeline({ sectionRef });

  return (
    <section id="experience" ref={sectionRef} className={styles.section} aria-labelledby="experience-title">
      <header className={styles.sectionHeader} data-experience-header>
        <h2 id="experience-title" tabIndex={-1}>{copy.heading}</h2>
        <p className={styles.supporting}>{copy.supporting}</p>
      </header>

      <div className={styles.timeline} data-experience-timeline>
        <div className={styles.pathColumn}>
          <div className={styles.stickyPath}>
            <ExperiencePath
              roles={copy.roles}
              label={copy.timelineLabel}
              currentLabel={copy.pathCurrentLabel}
              originLabel={copy.pathOriginLabel}
            />
          </div>
        </div>

        <div className={styles.stories}>
          {copy.roles.map((role) => (
            <article
              key={role.id}
              className={styles.story}
              data-experience-story={role.id}
              data-current={role.current ? "true" : undefined}
              aria-current={role.current ? "true" : undefined}
              aria-labelledby={`${role.id}-experience-title`}
            >
              <div className={styles.storyMeta}>
                <time>{role.date}</time>
                {role.current && <span>{copy.currentRole}</span>}
              </div>

              <h3 id={`${role.id}-experience-title`}>{role.role}</h3>
              <p className={styles.organization}>{role.organization}</p>
              {role.location && <p className={styles.location}>{role.location}</p>}

              <div className={styles.storyDetails}>
                <div>
                  <p className={styles.detailLabel}>{copy.responsibilitiesLabel}</p>
                  <ul className={styles.responsibilities}>
                    {role.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className={styles.detailLabel}>{copy.focusLabel}</p>
                  <ul className={styles.focusList}>
                    {role.focus.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
