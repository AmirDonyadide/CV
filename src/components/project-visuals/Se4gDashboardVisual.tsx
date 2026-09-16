import type { Locale } from "../../sections/Hero/hero.types";
import { ResponsiveEvidenceImage } from "../ResponsiveEvidenceImage";
import { projectVisualCopy } from "./projectVisual.copy";
import { PipelineArrow, ProjectVisualFrame, TechnicalLabel, WorkflowNode } from "./VisualPrimitives";
import styles from "./ProjectVisual.module.css";

// Transcribed from the table in se4g-dashboard.webp (DD.pdf, p.14).
// Percentages are derived from these counts, not from the rounded pie labels.
export const se4gIndicators = [
  { level: "low", code: "ed_idr_p1", value: 778 },
  { level: "medium", code: "ed_idr_p2", value: 36 },
  { level: "high", code: "ed_idr_p3", value: 36 },
] as const;
const total = se4gIndicators.reduce((sum, row) => sum + row.value, 0);

function IndicatorChart({ locale }: { locale: Locale }) {
  const copy = projectVisualCopy[locale];
  let offset = 0;
  return (
    <div className={styles.chartPanel}>
      <TechnicalLabel>{copy.floodRisk}</TechnicalLabel>
      <div className={styles.chartBody}>
        <div className={styles.donut}>
          <svg viewBox="0 0 120 120" aria-hidden="true">
            {se4gIndicators.map(row => {
              const length = row.value / total * 100;
              const start = offset;
              offset += length;
              return <circle key={row.code} className={styles[row.level]} cx="60" cy="60" r="45" pathLength="100" fill="none" strokeWidth="10" strokeDasharray={`${length} ${100-length}`} strokeDashoffset={-start} transform="rotate(-90 60 60)" />;
            })}
          </svg>
          <div><strong>{total}</strong><span>{copy.total}</span></div>
        </div>
        <table className={styles.indicators}>
          <caption className={styles.srOnly}>{copy.floodRisk} · Bormio</caption>
          <thead><tr><th scope="col">{copy.risk}</th><th scope="col">{copy.count}</th><th scope="col">%</th></tr></thead>
          <tbody>{se4gIndicators.map(row => <tr key={row.code}>
            <th scope="row"><i className={styles[row.level]} aria-hidden="true" />{copy[row.level]}<small>{row.code}</small></th>
            <td>{row.value}</td><td>{(row.value / total * 100).toFixed(2)}</td>
          </tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

export function Se4gDashboardVisual({ locale, workflow = false, detailed = false, eager = false }: {
  locale: Locale; workflow?: boolean; detailed?: boolean; eager?: boolean;
}) {
  const copy = projectVisualCopy[locale];
  return (
    <ProjectVisualFrame title="SE4G / BORMIO" meta={copy.reconstruction}>
      {workflow && <div className={styles.pipeline}>
        <WorkflowNode index="01" label={copy.records} /><PipelineArrow />
        <WorkflowNode index="02" label={copy.database} /><PipelineArrow />
        <WorkflowNode index="03" label={copy.application} />
      </div>}
      <dl className={styles.selectionSummary}>
        <div><dt>{copy.city}</dt><dd>Bormio</dd></div>
        <div><dt>{copy.parameter}</dt><dd>{copy.building}</dd></div>
      </dl>
      <div className={`${styles.dashboardBody} ${workflow ? styles.dashboardBodyPreview : ""}`}>
        <div className={styles.satellitePanel}>
          <div className={styles.panelHeading}><TechnicalLabel>{copy.satellite}</TechnicalLabel></div>
          <ResponsiveEvidenceImage src="/assets/projects/evidence/native/se4g-map.webp"
            webpSrcSet="/assets/projects/evidence/native/se4g-map-640.webp 640w, /assets/projects/evidence/native/se4g-map.webp 804w"
            sizes="(max-width: 799px) 92vw, 50vw" width={804} height={340}
            alt={`${copy.satellite}: Bormio / Stelvio. ${copy.sourceMap}.`}
            loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} decoding="async" />
          <div className={styles.attribution}>© OpenStreetMap contributors · CARTO · Google Earth</div>
        </div>
        <IndicatorChart locale={locale} />
      </div>
      {detailed && <table className={styles.eventTable}>
        <caption className={styles.srOnly}>{copy.sport} / {copy.venue} · Bormio</caption>
        <thead><tr><th scope="col">{copy.sport}</th><th scope="col">{copy.venue}</th></tr></thead>
        <tbody><tr><td>{copy.skiing}</td><td>Stelvio</td></tr><tr><td>{copy.skiMountaineering}</td><td>{copy.undefinedVenue}</td></tr></tbody>
      </table>}
      <div className={styles.frameFooter}><span>{copy.source}</span></div>
    </ProjectVisualFrame>
  );
}
