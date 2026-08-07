import { contactDetails } from "../../data/contact";
import { localizedHref } from "../../i18n/routing";
import { experienceCopy } from "../Experience/experience.copy";
import { heroCopy } from "../Hero/hero.copy";
import type { Locale } from "../Hero/hero.types";
import { journeyCopy } from "../Journey/journey.copy";
import { selectedWorkCopy } from "../SelectedWork/selectedWork.copy";
import { technicalStackCopy } from "../TechnicalStack/technicalStack.copy";
import { quickCvCopy } from "./quickCv.copy";
import styles from "./QuickCV.module.css";

interface QuickCVProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const locales: Locale[] = ["en", "de", "it"];

function Arrow() {
  return (
    <svg className={styles.arrow} aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

export function QuickCV({ locale, onLocaleChange }: QuickCVProps) {
  const ui = quickCvCopy[locale];
  const hero = heroCopy[locale];
  const experience = experienceCopy[locale];
  const journey = journeyCopy[locale];
  const stack = technicalStackCopy[locale];
  const selectedWork = selectedWorkCopy[locale];
  const currentRole = experience.roles[0];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.navigation} aria-label={ui.navigationLabel}>
          <a className={styles.brand} href={localizedHref("/", locale)} aria-label={ui.homeLabel}>AMIR</a>
          <div className={styles.navActions}>
            <a className={styles.storyLink} href={localizedHref("/", locale)}>{ui.storyMode}</a>
            <div className={styles.languagePicker} role="group" aria-label={ui.languageLabel}>
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
            <a className={styles.downloadLink} href={contactDetails.cv.href} download>
              {ui.downloadCv}
              <Arrow />
            </a>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.identity} aria-labelledby="quick-cv-name">
          <p className={styles.eyebrow}>{ui.profileLabel}</p>
          <h1 id="quick-cv-name">Amirhossein<br />Donyadidegan</h1>
          <p className={styles.role}>{hero.role}</p>
          <p className={styles.tagline}>{hero.tagline}</p>

          <address className={styles.contact}>
            <h2>{ui.contact}</h2>
            <a href={contactDetails.email.href}>{contactDetails.email.display}</a>
            <a href={contactDetails.linkedIn.href} target="_blank" rel="noreferrer">
              {contactDetails.linkedIn.display}
            </a>
            <a href={contactDetails.github.href} target="_blank" rel="noreferrer">
              {contactDetails.github.display}
            </a>
            <a href={contactDetails.phone.href}>{contactDetails.phone.display}</a>
          </address>
        </section>

        <section className={styles.experienceColumn} aria-labelledby="quick-cv-experience">
          <h2 className={styles.eyebrow} id="quick-cv-experience">{ui.currentExperience}</h2>
          <article className={styles.currentRole} aria-labelledby="quick-cv-current-role">
            <div className={styles.currentHeading}>
              <span className={styles.currentMarker} aria-hidden="true" />
              <span>{ui.current}</span>
            </div>
            <p className={styles.date}>{currentRole.date}</p>
            <h3 id="quick-cv-current-role">{currentRole.role}</h3>
            <p className={styles.organization}>{currentRole.organization}</p>
            {currentRole.location && <p className={styles.location}>{currentRole.location}</p>}
            <p className={styles.currentSummary}>{currentRole.responsibilities[0]}</p>
            <p className={styles.focus}>{currentRole.focus.join(" · ")}</p>
          </article>

          <ol className={styles.timeline} aria-label={ui.experience}>
            {experience.roles.slice(1).map((role) => (
              <li className={styles.roleEntry} key={role.id}>
                <span className={styles.roleMarker} aria-hidden="true" />
                <p className={styles.date}>{role.date}</p>
                <h3>{role.role}</h3>
                <p className={styles.organization}>{role.organization}</p>
                {role.location && <p className={styles.location}>{role.location}</p>}
              </li>
            ))}
          </ol>
        </section>

        <div className={styles.profileColumn}>
          <section aria-labelledby="quick-cv-education">
            <h2 className={styles.eyebrow} id="quick-cv-education">{ui.education}</h2>
            {[...journey.degrees].reverse().map((degree) => (
              <article className={styles.degree} key={degree.id}>
                <p className={styles.date}>{degree.date}</p>
                <h3>{degree.title}</h3>
                <p className={styles.organization}>{degree.institution}</p>
                <p className={styles.grade}>{degree.grade}</p>
              </article>
            ))}
            <div className={styles.exchanges}>
              <h3>{ui.exchangeStudy}</h3>
              {journey.exchanges.map((exchange) => (
                <p key={exchange.id}>
                  <span>{exchange.city}</span> · {exchange.date}<br />{exchange.institution}
                </p>
              ))}
            </div>
          </section>

          <section className={styles.technologies} aria-labelledby="quick-cv-technologies">
            <h2 className={styles.eyebrow} id="quick-cv-technologies">{ui.coreTechnologies}</h2>
            <dl>
              {stack.groups.map((group) => (
                <div className={styles.technologyGroup} key={group.id}>
                  <dt>{group.title}</dt>
                  <dd>{group.skills.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <section className={styles.projects} aria-labelledby="quick-cv-projects">
          <div>
            <h2 className={styles.eyebrow} id="quick-cv-projects">{ui.selectedProjects}</h2>
          </div>
          <div className={styles.projectList}>
            {selectedWork.projects.map((project) => (
              <a className={styles.projectLink} href={localizedHref(`/projects/${project.slug}`, locale)} key={project.slug}>
                <span className={styles.projectNumber}>{project.number}</span>
                <h3>{project.shortTitle}</h3>
                <span className={styles.projectTitle}>{project.title}</span>
                <span className={styles.projectAction}>{ui.viewProject}<Arrow /></span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>{ui.footer}</span>
        <a href={contactDetails.cv.href} download>{ui.downloadCv}</a>
      </footer>
    </div>
  );
}
