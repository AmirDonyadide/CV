import { useRef } from "react";
import type { Locale } from "../Hero/hero.types";
import { WhatIBuildVisual } from "./WhatIBuildVisual";
import { whatIBuildCopy } from "./whatIBuild.copy";
import { useWhatIBuildTimeline } from "./useWhatIBuildTimeline";
import styles from "./WhatIBuild.module.css";

interface WhatIBuildProps {
  locale: Locale;
}

export function WhatIBuild({ locale }: WhatIBuildProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const copy = whatIBuildCopy[locale];
  useWhatIBuildTimeline({ sectionRef });

  return (
    <section id="work" ref={sectionRef} className={styles.section} aria-labelledby="what-i-build-title">
      <div className={styles.stickyFrame}>
        <div className={styles.inner}>
          <header className={styles.header} data-build-header>
            <h2 id="what-i-build-title" tabIndex={-1}>{copy.heading}</h2>
            <p>{copy.supporting}</p>
          </header>

          <div className={styles.pipeline}>
            <WhatIBuildVisual />
            <ol className={styles.capabilityRail}>
              {copy.stages.map((stage) => (
                <li key={stage.name} data-build-rail-item>
                  <span className={styles.railDot} data-build-rail-dot aria-hidden="true" />
                  <h3>{stage.name}</h3>
                  <p>{stage.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className={styles.projectsBoundary} aria-hidden="true" />
    </section>
  );
}
