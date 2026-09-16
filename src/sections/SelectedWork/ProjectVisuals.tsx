import type { Locale } from "../Hero/hero.types";
import type { ProjectSlug } from "./selectedWork.types";
import { Nl2MapVisual } from "../../components/project-visuals/Nl2MapVisual";
import { Se4gDashboardVisual } from "../../components/project-visuals/Se4gDashboardVisual";
import { LandslideProjectVisual } from "../../components/project-visuals/LandslideProjectVisual";
import styles from "./SelectedWork.module.css";

export function ProjectVisual({ slug, locale, compact = false }: { slug: ProjectSlug; locale: Locale; compact?: boolean }) {
  return (
    <div className={`${styles.visualHost} ${compact ? styles.compactVisual : ""}`}>
      {slug === "nl2map" && <Nl2MapVisual locale={locale} workflow />}
      {slug === "se4g" && <Se4gDashboardVisual locale={locale} workflow />}
      {slug === "landslide" && <LandslideProjectVisual locale={locale} />}
    </div>
  );
}
