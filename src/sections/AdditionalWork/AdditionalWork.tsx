import { useState } from "react";
import type { Locale } from "../Hero/hero.types";
import { additionalWorkCopy } from "./additionalWork.copy";
import type { AdditionalProject, AdditionalProjectId } from "./additionalWork.types";
import { AdditionalWorkVisual } from "./AdditionalWorkVisual";
import styles from "./AdditionalWork.module.css";

interface AdditionalWorkProps {
  locale: Locale;
}

function Arrow() {
  return (
    <svg viewBox="0 0 22 18" aria-hidden="true">
      <path d="M1 9h17M13 3l6 6-6 6" />
    </svg>
  );
}

interface ProjectRowProps {
  active: boolean;
  onActivate: () => void;
  openLabel: string;
  privateLabel: string;
  project: AdditionalProject;
  technologiesLabel: string;
}

function ProjectRow({ active, onActivate, openLabel, privateLabel, project, technologiesLabel }: ProjectRowProps) {
  return (
    <li
      className={styles.projectItem}
      data-active={active ? "true" : undefined}
    >
      <article className={styles.projectRow}>
        <span className={styles.number}>{project.number}</span>
        <div className={styles.rowTitle}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className={styles.rowMeta}>
          <span>{project.type}</span>
          <ul aria-label={technologiesLabel}>
            {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
        {project.href ? (
          <a
            className={styles.rowAction}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`${openLabel}: ${project.title}`}
            onMouseEnter={onActivate}
            onFocus={onActivate}
          >
            <span>{openLabel}</span>
            <Arrow />
          </a>
        ) : (
          <button
            className={styles.rowAction}
            type="button"
            onClick={onActivate}
            onMouseEnter={onActivate}
            onFocus={onActivate}
            aria-pressed={active}
            aria-label={`${privateLabel}: ${project.title}`}
          >
            <span>{privateLabel}</span>
            <Arrow />
          </button>
        )}
      </article>
    </li>
  );
}

export function AdditionalWork({ locale }: AdditionalWorkProps) {
  const copy = additionalWorkCopy[locale];
  const [activeId, setActiveId] = useState<AdditionalProjectId>(copy.projects[0].id);
  const activeProject = copy.projects.find((project) => project.id === activeId) ?? copy.projects[0];

  return (
    <section id="additional-work" className={styles.section} aria-labelledby="additional-work-title">
      <header className={styles.sectionHeader}>
        <p className={styles.eyebrow}>{copy.eyebrow}</p>
        <h2 id="additional-work-title" tabIndex={-1}>{copy.heading}</h2>
        <p className={styles.supporting}>{copy.supporting}</p>
      </header>

      <div className={styles.content}>
        <ol className={styles.projectList} aria-label={copy.projectIndexLabel}>
          {copy.projects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              active={activeProject.id === project.id}
              onActivate={() => setActiveId(project.id)}
              openLabel={copy.openProject}
              privateLabel={copy.privateProject}
              technologiesLabel={copy.technologiesLabel}
            />
          ))}
        </ol>

        <div className={styles.previewRail} aria-live="polite">
          <div className={styles.previewHeader}>
            <span>{activeProject.type}</span>
            <strong>{activeProject.title}</strong>
            <small>{activeProject.context}</small>
          </div>
          <AdditionalWorkVisual
            key={activeProject.id}
            id={activeProject.id}
            title={activeProject.title}
            label={copy.workflowLabel}
            steps={copy.previewLabels[activeProject.id]}
          />
        </div>
      </div>
    </section>
  );
}
