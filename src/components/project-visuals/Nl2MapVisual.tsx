import type { Locale } from "../../sections/Hero/hero.types";
import { BuildingMap } from "./BuildingMap";
import { projectVisualCopy } from "./projectVisual.copy";
import { PipelineArrow, ProjectVisualFrame, WorkflowNode } from "./VisualPrimitives";
import styles from "./ProjectVisual.module.css";

export function Nl2MapVisual({ locale, workflow = false }: { locale: Locale; workflow?: boolean }) {
  const copy = projectVisualCopy[locale];
  return (
    <ProjectVisualFrame title={copy.pair} meta={copy.geometry}>
      {workflow && <div className={styles.pipeline}>
        <WorkflowNode index="01" label={copy.prompt} /><PipelineArrow />
        <WorkflowNode index="02" label={copy.representation} /><PipelineArrow />
        <WorkflowNode index="03" label={copy.classifier} /><PipelineArrow />
        <WorkflowNode index="04" label={copy.operation} />
      </div>}
      <div className={styles.mapPair} role="group" aria-label={copy.mapPair}>
        <BuildingMap state="input" locale={locale} />
        <PipelineArrow />
        <BuildingMap state="generalized" locale={locale} />
      </div>
      <div className={styles.frameFooter}><span>{copy.extent}</span><span>441 {copy.features} / 441 {copy.features}</span></div>
    </ProjectVisualFrame>
  );
}
