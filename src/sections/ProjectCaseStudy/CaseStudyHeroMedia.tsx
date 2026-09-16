import type { Locale } from "../Hero/hero.types";
import type { ProjectCaseStudyCopy } from "./projectCaseStudy.types";
import { Nl2MapVisual } from "../../components/project-visuals/Nl2MapVisual";
import { Se4gDashboardVisual } from "../../components/project-visuals/Se4gDashboardVisual";
import { LandslideProjectVisual } from "../../components/project-visuals/LandslideProjectVisual";

export function CaseStudyHeroMedia({ project, locale }: { project: ProjectCaseStudyCopy; locale: Locale }) {
  if (project.slug === "se4g") return <Se4gDashboardVisual locale={locale} eager />;
  if (project.slug === "nl2map") return <Nl2MapVisual locale={locale} />;
  return <LandslideProjectVisual locale={locale} eager />;
}
