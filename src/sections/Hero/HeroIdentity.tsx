import type { HeroCopy } from "./hero.types";
import { ArrowIcon } from "./ArrowIcon";
import styles from "./Hero.module.css";

interface HeroIdentityProps {
  copy: HeroCopy;
  onExploreWork: () => void;
}

export function HeroIdentity({ copy, onExploreWork }: HeroIdentityProps) {
  return (
    <div className={styles.identity} data-hero-identity>
      <h1 id="hero-title" tabIndex={-1}>
        <span>Amir</span>
        <span>Donyadide</span>
      </h1>
      <p className={styles.role}>{copy.role}</p>
      <p className={styles.tagline}>{copy.tagline}</p>
      <div className={styles.actions} data-hero-actions>
        <a
          className={styles.primaryAction}
          href="#projects"
          onClick={(event) => {
            event.preventDefault();
            onExploreWork();
          }}
        >
          <span>{copy.exploreWork}</span>
          <ArrowIcon />
        </a>
        <a className={styles.secondaryAction} href="/assets/amirhossein-donyadidegan-cv.pdf" download>
          <span>{copy.downloadCv}</span>
          <ArrowIcon direction="down" />
        </a>
      </div>
    </div>
  );
}
