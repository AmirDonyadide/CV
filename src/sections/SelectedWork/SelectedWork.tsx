import { useRef } from "react";
import { localizedHref } from "../../i18n/routing";
import type { Locale } from "../Hero/hero.types";
import { ProjectVisual } from "./ProjectVisuals";
import { selectedWorkCopy } from "./selectedWork.copy";
import { useSelectedWorkTimeline } from "./useSelectedWorkTimeline";
import styles from "./SelectedWork.module.css";

interface SelectedWorkProps {
  locale: Locale;
}

function ExternalArrow() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3 15 15 3M7 3h8v8" />
    </svg>
  );
}

function InternalArrow() {
  return (
    <svg viewBox="0 0 24 18" aria-hidden="true">
      <path d="M1 9h19M14 3l6 6-6 6" />
    </svg>
  );
}

export function SelectedWork({ locale }: SelectedWorkProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const copy = selectedWorkCopy[locale];

  useSelectedWorkTimeline({ sectionRef });

  return (
    <section id="projects" ref={sectionRef} className={styles.section} aria-labelledby="selected-work-title">
      <header className={styles.sectionHeader}>
        <h2 id="selected-work-title" tabIndex={-1}>{copy.heading}</h2>
        <p className={styles.supporting}>{copy.supporting}</p>
      </header>

      <div className={styles.projectSequence} data-project-sequence>
        <div className={styles.visualColumn} role="group" aria-label={copy.workflowVisualizationsLabel}>
          <div className={styles.stickyStage}>
            <ol className={styles.projectIndex} aria-label={copy.heading}>
              {copy.projects.map((project) => (
                <li key={project.slug} data-project-index>
                  <span>{project.number}</span>
                  <strong>{project.shortTitle}</strong>
                </li>
              ))}
            </ol>

            <div className={styles.visualStack}>
              {copy.projects.map((project) => (
                <div key={project.slug} className={styles.visualScene} data-project-scene={project.slug}>
                  <ProjectVisual
                    slug={project.slug}
                    labels={copy.visualLabels}
                    illustrationLabel={copy.illustrationLabel}
                    actualEvidenceLabel={copy.actualEvidenceLabel}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.stories}>
          {copy.projects.map((project) => (
            <article
              key={project.slug}
              className={styles.projectStory}
              data-project-story={project.slug}
              aria-labelledby={`${project.slug}-title`}
            >
              <div className={styles.mobileVisual} data-project-mobile-visual>
                <ProjectVisual
                  slug={project.slug}
                  labels={copy.visualLabels}
                  illustrationLabel={copy.illustrationLabel}
                  actualEvidenceLabel={copy.actualEvidenceLabel}
                  compact
                />
              </div>

              <div className={styles.storyHeading}>
                <span className={styles.projectNumber}>{project.number}</span>
                <div>
                  <p>{project.shortTitle}</p>
                  <h3 id={`${project.slug}-title`}>{project.title}</h3>
                  <span className={styles.projectContext}>{project.context}</span>
                </div>
              </div>

              <dl className={styles.projectFacts}>
                <div>
                  <dt>{copy.fields.problem}</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>{copy.fields.role}</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>{copy.fields.input}</dt>
                  <dd>{project.input}</dd>
                </div>
                <div>
                  <dt>{copy.fields.approach}</dt>
                  <dd>{project.approach}</dd>
                </div>
                <div>
                  <dt>{copy.fields.technologies}</dt>
                  <dd>
                    <ul className={styles.technologyList}>
                      {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt>{copy.fields.output}</dt>
                  <dd>{project.output}</dd>
                </div>
                <div className={styles.evidenceFact}>
                  <dt>{copy.fields.evidence}</dt>
                  <dd>{project.evidence}</dd>
                </div>
              </dl>

              <div className={styles.evidenceLinks}>
                <a className={styles.primaryLink} href={localizedHref(`/projects/${project.slug}`, locale)}>
                  <span>{copy.caseStudyCta}</span>
                  <InternalArrow />
                </a>
                {project.evidenceLinks.map((link) => (
                  <a
                    key={link.href}
                    className={styles.secondaryLink}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{link.label}</span>
                    <ExternalArrow />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
