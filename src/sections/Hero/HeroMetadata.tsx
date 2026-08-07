import type { HeroCopy } from "./hero.types";
import styles from "./Hero.module.css";

export function HeroMetadata({ labels }: { labels: HeroCopy["metadataStates"] }) {
  return (
    <div className={styles.metadata} aria-hidden="true">
      {labels.map(([key, value], index) => (
        <p
          className={index === labels.length - 1 ? styles.metadataFinal : undefined}
          data-state-label={index}
          key={key}
        >
          <span>{key}</span>
          <strong>{value}</strong>
        </p>
      ))}
    </div>
  );
}
