import type { CSSProperties, ReactNode } from "react";
import styles from "./ProjectVisual.module.css";

export function TechnicalLabel({ children }: { children: ReactNode }) {
  return <span className={styles.technicalLabel}>{children}</span>;
}

export function ProjectVisualFrame({ title, meta, children, className = "" }: {
  title: string; meta?: string; children: ReactNode; className?: string;
}) {
  return (
    <div className={`${styles.frame} ${className}`} data-native-visual>
      <div className={styles.frameHeader}>
        <TechnicalLabel>{title}</TechnicalLabel>
        {meta && <TechnicalLabel>{meta}</TechnicalLabel>}
      </div>
      {children}
    </div>
  );
}

export function PipelineArrow() {
  return <svg className={styles.arrow} viewBox="0 0 32 16" aria-hidden="true"><path d="M1 8h27M22 2l6 6-6 6" /></svg>;
}

export function WorkflowNode({ index, label, detail }: { index: string; label: string; detail?: string }) {
  return <div className={styles.workflowNode}><TechnicalLabel>{index}</TechnicalLabel><span>{label}</span>{detail && <small>{detail}</small>}</div>;
}

export function DataLegend({ label, range, colors, classes, boundaryLabel }: {
  label: string; range?: readonly [string, string]; colors?: readonly string[];
  classes?: readonly { label: string; color: string }[]; boundaryLabel?: string;
}) {
  return (
    <div className={styles.legend} role="group" aria-label={label}>
      {range && colors && <div className={styles.rangeLegend}>
        <div className={styles.colorScale} style={{ background: `linear-gradient(to right, ${colors.join(",")})` }} aria-hidden="true" />
        <div><span>{range[0]}</span><span>{range[1]}</span></div>
      </div>}
      {classes && <ul className={styles.classLegend}>{classes.map(item => <li key={item.label}><i style={{ "--swatch": item.color } as CSSProperties} aria-hidden="true" />{item.label}</li>)}</ul>}
      {boundaryLabel && <span className={styles.boundaryKey}><i aria-hidden="true" />{boundaryLabel}</span>}
    </div>
  );
}
