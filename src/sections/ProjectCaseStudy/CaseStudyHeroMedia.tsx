import type { ProjectCaseStudyCopy } from "./projectCaseStudy.types";
import { ResponsiveEvidenceImage } from "../../components/ResponsiveEvidenceImage";
import styles from "./ProjectCaseStudy.module.css";

interface CaseStudyHeroMediaProps {
  project: ProjectCaseStudyCopy;
  evidenceLabel: string;
  documentedInterfaceLabel: string;
}

function EvidenceImage({
  item,
  eager = false,
}: {
  item: ProjectCaseStudyCopy["evidence"][number];
  eager?: boolean;
}) {
  return (
    <ResponsiveEvidenceImage
      src={item.src}
      webpSrcSet={item.webpSrcSet}
      sizes={item.sizes}
      alt={item.alt}
      width={item.width}
      height={item.height}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
    />
  );
}

export function CaseStudyHeroMedia({
  project,
  evidenceLabel,
  documentedInterfaceLabel,
}: CaseStudyHeroMediaProps) {
  if (project.slug === "se4g") {
    return (
      <figure className={`${styles.heroMedia} ${styles.heroDashboard}`}>
        <div className={styles.mediaLabel}>
          <span>{documentedInterfaceLabel}</span>
          <span>DD / P.14</span>
        </div>
        <EvidenceImage item={project.evidence[0]} eager />
        <figcaption>{project.evidence[0].caption}</figcaption>
      </figure>
    );
  }

  const first = project.evidence[0];
  const second = project.slug === "landslide"
    ? project.evidence[project.evidence.length - 1]
    : project.evidence[1];

  return (
    <figure className={styles.heroMedia}>
      <div className={styles.mediaLabel}>
        <span>{evidenceLabel}</span>
        <span>{project.slug === "nl2map" ? "PAIR 1069" : "INPUT / OUTPUT"}</span>
      </div>
      <div className={styles.heroPairGrid}>
        <div>
          <span>{first.title}</span>
          <EvidenceImage item={first} eager />
        </div>
        <svg viewBox="0 0 64 20" aria-hidden="true">
          <path d="M2 10h56M50 3l8 7-8 7" />
        </svg>
        <div>
          <span>{second.title}</span>
          <EvidenceImage item={second} />
        </div>
      </div>
      <figcaption>{project.slug === "nl2map" ? project.evidenceIntro : second.caption}</figcaption>
    </figure>
  );
}
