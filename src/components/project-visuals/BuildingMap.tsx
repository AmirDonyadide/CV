import type { Locale } from "../../sections/Hero/hero.types";
import geometry from "./buildingGeometry.json";
import { projectVisualCopy } from "./projectVisual.copy";
import { TechnicalLabel } from "./VisualPrimitives";
import styles from "./ProjectVisual.module.css";

// Static source geometry is built once. Both states share the same UTM extent.
const buildingPaths = {
  input: geometry.maps.input.map((d) => <path key={d} d={d} />),
  generalized: geometry.maps.generalized.map((d) => <path key={d} d={d} />),
};

export function BuildingMap({ state, locale }: { state: keyof typeof buildingPaths; locale: Locale }) {
  const copy = projectVisualCopy[locale];
  const title = state === "input" ? copy.original : copy.generalized;
  return (
    <div className={styles.mapPanel} data-building-state={state}>
      <div className={styles.panelHeading}><TechnicalLabel>{title}</TechnicalLabel><span>1069</span></div>
      <div className={styles.buildingCanvas}>
        <svg viewBox={`-6 -6 ${geometry.width + 12} ${geometry.height + 12}`} role="img" aria-label={`${title} · ${copy.geometry} · ${geometry.maps[state].length} ${copy.features} · EPSG:25832`}>
          <g className={styles.buildings} data-state={state} fillRule="evenodd">{buildingPaths[state]}</g>
        </svg>
      </div>
      <div className={styles.mapFooter}>
        <div className={styles.scale} style={{ width: `${100 / (geometry.width + 12) * 100}%` }}><i aria-hidden="true" /><span>{copy.scale}</span></div>
        <TechnicalLabel>EPSG:25832</TechnicalLabel>
      </div>
    </div>
  );
}
