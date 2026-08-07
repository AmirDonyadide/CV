import type { ExperienceRole } from "./experience.types";
import styles from "./Experience.module.css";

interface ExperiencePathProps {
  roles: ExperienceRole[];
  label: string;
  currentLabel: string;
  originLabel: string;
}

const nodePositions: Record<ExperienceRole["id"], { x: number; y: number }> = {
  safe: { x: 150, y: 84 },
  iip: { x: 150, y: 296 },
  nova: { x: 150, y: 506 },
  fartak: { x: 320, y: 706 },
};

export function ExperiencePath({ roles, label, currentLabel, originLabel }: ExperiencePathProps) {
  return (
    <svg
      className={styles.pathGraphic}
      viewBox="0 0 620 820"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="experience-path-fade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#879197" />
          <stop offset="0.7" stopColor="#566168" />
          <stop offset="1" stopColor="#2d373d" />
        </linearGradient>
      </defs>

      <path
        className={styles.pathGuide}
        d="M150 84V506c0 110 60 200 170 200h242"
      />
      <path
        className={styles.pathProgress}
        data-experience-path
        d="M150 84V506c0 110 60 200 170 200h242"
      />
      <path className={styles.currentBranch} d="M150 84H560" />

      <g className={styles.pathOrigin}>
        <path d="M34 84H124" />
        <text x="34" y="67">{currentLabel}</text>
      </g>

      {roles.map((role, index) => {
        const position = nodePositions[role.id];
        return (
          <g
            key={role.id}
            className={styles.pathNode}
            data-experience-node={role.id}
            data-current={role.current ? "true" : undefined}
            transform={`translate(${position.x} ${position.y})`}
          >
            <circle className={styles.nodeHalo} r="18" />
            <circle className={styles.nodeCore} r="5" />
            <path className={styles.nodeTick} d="M26 0H47" />
            <text className={styles.nodeIndex} x="56" y="-8">{String(index + 1).padStart(2, "0")}</text>
            <text className={styles.nodeLabel} x="56" y="13">{role.pathLabel}</text>
          </g>
        );
      })}

      <g className={styles.pathDestination}>
        <circle cx="562" cy="706" r="4" />
        <path d="M562 684v44" />
        <text x="559" y="755" textAnchor="end">{originLabel}</text>
      </g>
    </svg>
  );
}
