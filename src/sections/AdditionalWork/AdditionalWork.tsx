import { useEffect, useState } from "react";
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
  expanded: boolean;
  onActivate: () => void;
  onToggleWorkflow: () => void;
  openLabel: string;
  privateLabel: string;
  project: AdditionalProject;
  technologiesLabel: string;
  workflowLabel: string;
  workflowSteps: string[];
}

function ProjectRow({
  active,
  expanded,
  onActivate,
  onToggleWorkflow,
  openLabel,
  privateLabel,
  project,
  technologiesLabel,
  workflowLabel,
  workflowSteps,
}: ProjectRowProps) {
  const workflowPanelId = `additional-workflow-${project.id}`;

  return (
    <li
      className={styles.projectItem}
      data-active={active ? "true" : undefined}
      data-expanded={expanded ? "true" : undefined}
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
            onClick={onToggleWorkflow}
            onMouseEnter={onActivate}
            onFocus={onActivate}
            aria-controls={workflowPanelId}
            aria-expanded={expanded}
            aria-label={`${privateLabel}: ${project.title}`}
          >
            <span>{privateLabel}</span>
            <Arrow />
          </button>
        )}
      </article>

      {project.id === "poliyoga" ? (
        <div
          id={workflowPanelId}
          className={styles.inlineWorkflow}
          hidden={!expanded}
        >
          <AdditionalWorkVisual
            id={project.id}
            title={project.title}
            label={workflowLabel}
            steps={workflowSteps}
          />
        </div>
      ) : null}
    </li>
  );
}

export function AdditionalWork({ locale }: AdditionalWorkProps) {
  const copy = additionalWorkCopy[locale];
  const [activeId, setActiveId] = useState<AdditionalProjectId>(copy.projects[0].id);
  const [workflowOpen, setWorkflowOpen] = useState(false);
  const activeProject = copy.projects.find((project) => project.id === activeId) ?? copy.projects[0];

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1100px)");
    const closeInlineWorkflow = (event: MediaQueryListEvent) => {
      if (event.matches) setWorkflowOpen(false);
    };

    desktopQuery.addEventListener("change", closeInlineWorkflow);
    return () => desktopQuery.removeEventListener("change", closeInlineWorkflow);
  }, []);

  const togglePoliYogaWorkflow = () => {
    setActiveId("poliyoga");
    if (window.matchMedia("(max-width: 1099px)").matches) {
      setWorkflowOpen((current) => !current);
    }
  };

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
              expanded={project.id === "poliyoga" && workflowOpen}
              onActivate={() => setActiveId(project.id)}
              onToggleWorkflow={togglePoliYogaWorkflow}
              openLabel={copy.openProject}
              privateLabel={copy.privateProject}
              technologiesLabel={copy.technologiesLabel}
              workflowLabel={copy.workflowLabel}
              workflowSteps={copy.previewLabels[project.id]}
            />
          ))}
        </ol>

        <div className={styles.previewRail} aria-live="polite">
          <div className={styles.previewSticky}>
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
      </div>
    </section>
  );
}
