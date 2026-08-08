import type { ProjectSlug, SelectedWorkCopy } from "./selectedWork.types";
import { ResponsiveEvidenceImage } from "../../components/ResponsiveEvidenceImage";
import styles from "./SelectedWork.module.css";

interface ProjectVisualProps {
  slug: ProjectSlug;
  labels: SelectedWorkCopy["visualLabels"];
  illustrationLabel: string;
  actualEvidenceLabel: string;
  compact?: boolean;
}

const nl2mapAssets = {
  input: {
    fallback: "/assets/projects/evidence/nl2map-input-1069.png",
    webp: "/assets/projects/evidence/nl2map-input-1069-640.webp 640w, /assets/projects/evidence/nl2map-input-1069-800.webp 800w, /assets/projects/evidence/nl2map-input-1069-1000.webp 1000w",
  },
  generalized: {
    fallback: "/assets/projects/evidence/nl2map-generalized-1069.png",
    webp: "/assets/projects/evidence/nl2map-generalized-1069-640.webp 640w, /assets/projects/evidence/nl2map-generalized-1069-800.webp 800w, /assets/projects/evidence/nl2map-generalized-1069-1000.webp 1000w",
  },
};

const landslideAssets = {
  terrain: {
    fallback: "/assets/projects/evidence/landslide-dtm.png",
    webp: "/assets/projects/evidence/landslide-dtm-640.webp 640w, /assets/projects/evidence/landslide-dtm-800.webp 800w, /assets/projects/evidence/landslide-dtm-1000.webp 1000w",
  },
  susceptibility: {
    fallback: "/assets/projects/evidence/landslide-susceptibility.png",
    webp: "/assets/projects/evidence/landslide-susceptibility-640.webp 640w, /assets/projects/evidence/landslide-susceptibility-800.webp 800w, /assets/projects/evidence/landslide-susceptibility-1000.webp 1000w",
  },
};

const se4gDashboardAsset = {
  fallback: "/assets/projects/evidence/se4g-dashboard.webp",
  webp: "/assets/projects/evidence/se4g-dashboard-640.webp 640w, /assets/projects/evidence/se4g-dashboard-800.webp 800w, /assets/projects/evidence/se4g-dashboard.webp 1235w",
};

function FlowArrow() {
  return (
    <svg className={styles.flowArrow} viewBox="0 0 48 16" aria-hidden="true">
      <path d="M1 8h43M38 2l6 6-6 6" />
    </svg>
  );
}

function NetworkGlyph() {
  return (
    <svg className={styles.networkGlyph} viewBox="0 0 112 82" aria-hidden="true">
      <g data-project-line>
        <path d="m9 56 23-34 28 25 18-34 25 45" />
        <path d="m9 56 51-9 43 11M32 22l46-9M32 22l46 51M60 47l18 26M78 13l25 45" />
      </g>
      <g data-project-node>
        <circle cx="9" cy="56" r="3" />
        <circle cx="32" cy="22" r="3" />
        <circle cx="60" cy="47" r="4" />
        <circle cx="78" cy="13" r="3" />
        <circle cx="78" cy="73" r="3" />
        <circle cx="103" cy="58" r="3" />
      </g>
    </svg>
  );
}

function Nl2MapVisual({
  labels,
  illustrationLabel,
  actualEvidenceLabel,
}: Omit<ProjectVisualProps, "slug" | "compact">) {
  return (
    <div className={styles.visual}>
      <div className={styles.visualMeta}>
        <span>{illustrationLabel}</span>
        <span>NL / CARTOGRAPHY</span>
      </div>

      <div className={styles.nlPipeline} data-project-workflow>
        <div className={styles.promptNode} data-project-step>
          <span>{labels.prompt}</span>
          <i />
          <i />
          <i />
        </div>
        <FlowArrow />
        <div className={styles.vectorNode} data-project-step>
          <span>{labels.features}</span>
          <div aria-hidden="true">
            {[34, 72, 48, 88, 57, 41, 78].map((height, index) => (
              <i key={height} style={{ height: `${height}%` }} className={index === 3 ? styles.accentBar : undefined} />
            ))}
          </div>
        </div>
        <FlowArrow />
        <div className={styles.modelNode} data-project-step>
          <span>{labels.model}</span>
          <NetworkGlyph />
        </div>
        <FlowArrow />
        <div className={styles.operationNode} data-project-step>
          <span>{labels.operation}</span>
          <strong>SELECT</strong>
          <small>REMOVE · MERGE · SIMPLIFY</small>
        </div>
      </div>

      <div className={styles.evidenceHeader}>
        <span>{actualEvidenceLabel}</span>
        <span>STUDY PAIR 1069</span>
      </div>
      <div className={styles.mapPair} data-project-evidence>
        <figure>
          <figcaption>{labels.originalMap}</figcaption>
          <ResponsiveEvidenceImage
            src={nl2mapAssets.input.fallback}
            webpSrcSet={nl2mapAssets.input.webp}
            sizes="(max-width: 1099px) 42vw, 20vw"
            deferUntilNear
            alt="Original building map used in NL2MAP thesis study pair 1069"
            width="1000"
            height="912"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className={styles.mapTransition} aria-hidden="true">
          <span>{labels.mapState}</span>
          <FlowArrow />
        </div>
        <figure>
          <figcaption>{labels.generalizedMap}</figcaption>
          <ResponsiveEvidenceImage
            src={nl2mapAssets.generalized.fallback}
            webpSrcSet={nl2mapAssets.generalized.webp}
            sizes="(max-width: 1099px) 42vw, 20vw"
            deferUntilNear
            alt="Generalized building map used in NL2MAP thesis study pair 1069"
            width="1000"
            height="912"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
  );
}

function Se4gVisual({
  labels,
  illustrationLabel,
  actualEvidenceLabel,
}: Omit<ProjectVisualProps, "slug" | "compact">) {
  return (
    <div className={styles.visual}>
      <div className={styles.visualMeta}>
        <span>{illustrationLabel}</span>
        <span>REPOSITORY-VERIFIED ARCHITECTURE</span>
      </div>

      <div className={styles.se4gFlow} data-project-workflow>
        <div className={styles.sourceStack} data-project-step>
          <span>{labels.sourceData}</span>
          <i>MUNICIPAL GEOMETRY</i>
          <i>HAZARD INDICATORS</i>
          <i>EVENT LOCATIONS</i>
        </div>
        <FlowArrow />
        <div className={styles.databaseNode} data-project-step>
          <span>{labels.spatialDatabase}</span>
          <svg viewBox="0 0 100 82" aria-hidden="true">
            <ellipse cx="50" cy="14" rx="36" ry="10" />
            <path d="M14 14v49c0 6 16 11 36 11s36-5 36-11V14M14 38c0 6 16 11 36 11s36-5 36-11" />
          </svg>
          <small>POSTGRESQL · POSTGIS</small>
        </div>
        <FlowArrow />
        <div className={styles.apiNode} data-project-step>
          <span>{labels.api}</span>
          <strong>FLASK</strong>
          <i>GET /cities</i>
          <i>GET /indicators</i>
          <i>GET /events</i>
        </div>
      </div>

      <div className={styles.evidenceHeader}>
        <span>{actualEvidenceLabel}</span>
        <span>{labels.dashboard}</span>
      </div>
      <figure className={styles.se4gEvidence} data-project-evidence>
        <ResponsiveEvidenceImage
          src={se4gDashboardAsset.fallback}
          webpSrcSet={se4gDashboardAsset.webp}
          sizes="(max-width: 1099px) 94vw, 52vw"
          deferUntilNear
          alt="Documented SE4G dashboard interface showing maps, filters, and data visualizations"
          width="1235"
          height="940"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </div>
  );
}

function ForestGlyph() {
  return (
    <svg className={styles.forestGlyph} viewBox="0 0 150 118" aria-hidden="true">
      <g data-project-line>
        <path d="M75 11 33 47M75 11l42 36M33 47 16 92M33 47l31 45M117 47 87 92M117 47l18 45" />
      </g>
      <g data-project-node>
        <circle cx="75" cy="11" r="6" />
        <circle cx="33" cy="47" r="5" />
        <circle cx="117" cy="47" r="5" />
        <circle cx="17" cy="92" r="4" />
        <circle cx="64" cy="92" r="4" />
        <circle cx="87" cy="92" r="4" />
        <circle cx="135" cy="92" r="4" />
      </g>
    </svg>
  );
}

function LandslideVisual({
  labels,
  illustrationLabel,
  actualEvidenceLabel,
}: Omit<ProjectVisualProps, "slug" | "compact">) {
  return (
    <div className={styles.visual}>
      <div className={styles.visualMeta}>
        <span>{illustrationLabel} + {actualEvidenceLabel}</span>
        <span>BERGAMO STUDY AREA</span>
      </div>

      <div className={styles.landslideFlow} data-project-workflow>
        <figure className={styles.terrainEvidence} data-project-step>
          <figcaption>{labels.terrain} · DTM</figcaption>
          <ResponsiveEvidenceImage
            src={landslideAssets.terrain.fallback}
            webpSrcSet={landslideAssets.terrain.webp}
            sizes="(max-width: 1099px) 38vw, 16vw"
            deferUntilNear
            alt="Digital terrain model input from the landslide susceptibility project"
            width="1000"
            height="1000"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <FlowArrow />
        <div className={styles.variableStack} data-project-step>
          <span>{labels.variables}</span>
          <i>NDVI</i>
          <i>DUSAF</i>
          <i>SLOPE</i>
          <i>ASPECT</i>
          <i>BUFFERS</i>
          <i>INVENTORY</i>
        </div>
        <FlowArrow />
        <div className={styles.forestNode} data-project-step>
          <span>{labels.model}</span>
          <ForestGlyph />
          <small>RANDOM FOREST · QGIS</small>
        </div>
        <FlowArrow />
        <figure className={styles.susceptibilityEvidence} data-project-step>
          <figcaption>{labels.susceptibility}</figcaption>
          <ResponsiveEvidenceImage
            src={landslideAssets.susceptibility.fallback}
            webpSrcSet={landslideAssets.susceptibility.webp}
            sizes="(max-width: 1099px) 38vw, 16vw"
            deferUntilNear
            alt="Landslide susceptibility raster produced by the project"
            width="1000"
            height="1000"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </div>
  );
}

export function ProjectVisual({ slug, compact = false, ...copy }: ProjectVisualProps) {
  return (
    <div
      className={`${styles.visualHost} ${compact ? styles.compactVisual : ""}`}
      aria-hidden={compact || undefined}
    >
      {slug === "nl2map" && <Nl2MapVisual {...copy} />}
      {slug === "se4g" && <Se4gVisual {...copy} />}
      {slug === "landslide" && <LandslideVisual {...copy} />}
    </div>
  );
}
