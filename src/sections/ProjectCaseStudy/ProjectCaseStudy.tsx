import { useRef } from "react";
import { localizedHref } from "../../i18n/routing";
import { ResponsiveEvidenceImage } from "../../components/ResponsiveEvidenceImage";
import type { Locale } from "../Hero/hero.types";
import type { ProjectSlug } from "../SelectedWork/selectedWork.types";
import { CaseStudyHeroMedia } from "./CaseStudyHeroMedia";
import { CaseStudyNavigation } from "./CaseStudyNavigation";
import { caseStudyUiCopy, projectCaseStudies } from "./projectCaseStudy.copy";
import type { ProjectCaseStudyCopy } from "./projectCaseStudy.types";
import { useCaseStudyMotion } from "./useCaseStudyMotion";
import styles from "./ProjectCaseStudy.module.css";

interface ProjectCaseStudyProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  slug: ProjectSlug;
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

function TextSection({
  id,
  number,
  title,
  paragraphs,
}: {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <section id={id} className={styles.textSection} data-case-reveal aria-labelledby={`${id}-title`}>
      <div className={styles.sectionHeading}>
        <span>{number}</span>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      <div className={styles.prose}>
        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}

function Workflow({ project }: { project: ProjectCaseStudyCopy }) {
  return (
    <ol className={styles.workflowList}>
      {project.workflow.map((stage, index) => (
        <li key={stage.label}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{stage.label}</strong>
          <small>{stage.detail}</small>
          {index < project.workflow.length - 1 && (
            <svg viewBox="0 0 36 12" aria-hidden="true"><path d="M1 6h31M27 2l5 4-5 4" /></svg>
          )}
        </li>
      ))}
    </ol>
  );
}

export function ProjectCaseStudy({ locale, onLocaleChange, slug }: ProjectCaseStudyProps) {
  const articleRef = useRef<HTMLElement>(null);
  const project = projectCaseStudies[locale][slug];
  const ui = caseStudyUiCopy[locale];

  useCaseStudyMotion({ articleRef });

  return (
    <div className={styles.pageShell}>
      <CaseStudyNavigation copy={ui} locale={locale} onLocaleChange={onLocaleChange} />

      <main ref={articleRef} className={styles.article} itemScope itemType="https://schema.org/CreativeWork">
        <div className={styles.progress} aria-hidden="true"><i /></div>

        <header className={styles.caseHero}>
          <div className={styles.heroCopy} data-case-reveal>
            <p className={styles.caseMeta}>
              <span>{project.number}</span>
              <span>{ui.caseStudyLabel}</span>
            </p>
            <h1 itemProp="name">{project.title}</h1>
            <p className={styles.context}>{project.context}</p>
            <p className={styles.summary} itemProp="abstract">{project.summary}</p>
            <div className={styles.heroLinks}>
              {project.links.map((link, index) => (
                <a
                  key={link.href}
                  className={index === 0 ? styles.primaryAction : styles.textAction}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{link.label}</span>
                  <ExternalArrow />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.heroMediaWrap} data-case-reveal>
            <CaseStudyHeroMedia
              project={project}
              evidenceLabel={ui.realEvidence}
              documentedInterfaceLabel={ui.documentedInterface}
            />
          </div>
        </header>

        <div className={styles.caseBody}>
          <div className={styles.overviewGrid}>
            <TextSection id="overview" number="01" title={ui.overview} paragraphs={project.overview} />
            <TextSection id="problem" number="02" title={ui.problem} paragraphs={project.problem} />
            <TextSection id="contribution" number="03" title={ui.contribution} paragraphs={project.contribution} />
          </div>

          <section className={styles.dataMethodSection} data-case-reveal aria-labelledby="data-title">
            <div className={styles.dataColumn}>
              <div className={styles.sectionHeading}>
                <span>04</span>
                <h2 id="data-title">{ui.data}</h2>
              </div>
              <dl className={styles.dataList}>
                {project.data.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className={styles.methodColumn} aria-labelledby="method-title">
              <div className={styles.sectionHeading}>
                <span>05</span>
                <h2 id="method-title">{ui.method}</h2>
              </div>
              <p className={styles.methodIntro}>{project.methodIntro}</p>
              <ol className={styles.methodList}>
                {project.method.map((step, index) => (
                  <li key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className={styles.workflowSection} data-case-reveal aria-labelledby="workflow-title">
            <div className={styles.sectionHeading}>
              <span>06</span>
              <h2 id="workflow-title">{ui.workflow}</h2>
            </div>
            <Workflow project={project} />
          </section>

          <section className={styles.outputSection} data-case-reveal>
            <div className={styles.outputColumn} aria-labelledby="output-title">
              <div className={styles.sectionHeading}>
                <span>07</span>
                <h2 id="output-title">{ui.results}</h2>
              </div>
              <ul className={styles.outputList}>
                {project.outputs.map((output) => <li key={output}>{output}</li>)}
              </ul>
            </div>
            <div className={styles.techColumn} aria-labelledby="technology-title">
              <div className={styles.sectionHeading}>
                <span>08</span>
                <h2 id="technology-title">{ui.technology}</h2>
              </div>
              <ul className={styles.technologyList}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
          </section>

          <section className={styles.evidenceSection} data-case-reveal aria-labelledby="evidence-title">
            <div className={styles.evidenceHeading}>
              <div className={styles.sectionHeading}>
                <span>09</span>
                <h2 id="evidence-title">{ui.visualEvidence}</h2>
              </div>
              <p>{project.evidenceIntro}</p>
            </div>

            <div className={`${styles.evidenceGrid} ${styles[`evidenceGrid_${project.slug}`]}`}>
              {project.evidence.map((item) => (
                <figure
                  key={item.src}
                  className={`${styles.evidenceItem} ${item.featured ? styles.evidenceFeatured : ""} ${item.contain ? styles.evidenceContain : ""}`}
                >
                  <a href={item.src} target="_blank" rel="noreferrer" aria-label={`${ui.openImage}: ${item.title}`}>
                    <ResponsiveEvidenceImage
                      src={item.src}
                      webpSrcSet={item.webpSrcSet}
                      sizes={item.sizes}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                  <figcaption>
                    <span>{ui.evidenceSource}</span>
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className={styles.linksSection} data-case-reveal aria-labelledby="project-links-title">
            <div>
              <h2 id="project-links-title">{ui.projectLinks}</h2>
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  <span>{link.label}</span>
                  <ExternalArrow />
                </a>
              ))}
            </div>
            <a className={styles.nextProject} href={localizedHref(`/projects/${project.nextSlug}`, locale)}>
              <span>{ui.nextProject}</span>
              <strong>{project.nextTitle}</strong>
              <InternalArrow />
            </a>
          </section>
        </div>

        <footer className={styles.caseFooter}>
          <a href={localizedHref("/#projects", locale)}>{ui.backToWork}</a>
          <span>Amirhossein Donyadidegan</span>
        </footer>
      </main>
    </div>
  );
}
