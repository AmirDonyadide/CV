import type { Locale } from "../../sections/Hero/hero.types";
import type { CaseStudyEvidence } from "../../sections/ProjectCaseStudy/projectCaseStudy.types";
import { BuildingMap } from "./BuildingMap";
import { RasterMapPanel } from "./RasterMapPanel";
import { Se4gDashboardVisual } from "./Se4gDashboardVisual";

export function ProjectEvidenceVisual({ item, locale }: { item: CaseStudyEvidence; locale: Locale }) {
  if (item.visual === "nl2map-input") return <BuildingMap state="input" locale={locale} />;
  if (item.visual === "nl2map-generalized") return <BuildingMap state="generalized" locale={locale} />;
  if (item.visual === "se4g") return <Se4gDashboardVisual locale={locale} detailed />;
  return <RasterMapPanel layer={item.visual} locale={locale} />;
}
