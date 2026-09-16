import { useId } from "react";
import { NodeMask } from "../../geometry/NodeMask";
import { point, segmentPath } from "../../geometry/geometry";
import { experienceNodes, experienceDestination, experiencePath } from "./experience.geometry";
import type { ExperienceRole } from "./experience.types";
import styles from "./Experience.module.css";

interface ExperiencePathProps {
  roles: ExperienceRole[];
  label: string;
  currentLabel: string;
  originLabel: string;
}

export function ExperiencePath({ roles, label, currentLabel, originLabel }: ExperiencePathProps) {
  const maskId = useId();
  const current = experienceNodes.safe.point;
  return (
    <svg
      className={styles.pathGraphic}
      viewBox="0 0 620 820"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <NodeMask id={maskId} nodes={Object.values(experienceNodes)} width={620} height={820} />
        <linearGradient id="experience-path-fade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#879197" />
          <stop offset="0.7" stopColor="#566168" />
          <stop offset="1" stopColor="#2d373d" />
        </linearGradient>
      </defs>

      <g mask={`url(#${maskId})`}>
        <path className={styles.pathGuide} d={experiencePath} />
        <path className={styles.pathProgress} data-experience-path d={experiencePath} />
        <path className={styles.currentBranch} d={segmentPath({ start: current, end: { x: 560, y: current.y } })} />

        <g className={styles.pathOrigin}>
          <path d={segmentPath({ start: { x: 34, y: current.y }, end: current })} />
          <text x="34" y={current.y - 17}>
            {currentLabel}
          </text>
        </g>
      </g>

      {roles.map((role, index) => {
        const { point: position, radius } = experienceNodes[role.id];
        return (
          <g
            key={role.id}
            className={styles.pathNode}
            data-current={role.current ? "true" : undefined}
            transform={`translate(${position.x} ${position.y})`}
          >
            <g data-experience-node={role.id}>
              <circle className={styles.nodeHalo} r={radius} />
              <circle className={styles.nodeCore} r="5" />
              {!role.current && position.y !== experienceDestination.y && (
                <path className={styles.nodeTick} d={`M${radius} 0H47`} />
              )}
              <text className={styles.nodeIndex} x="56" y="-8">
                {String(index + 1).padStart(2, "0")}
              </text>
              <text className={styles.nodeLabel} x="56" y="13">
                {role.pathLabel}
              </text>
            </g>
          </g>
        );
      })}

      <g className={styles.pathDestination} transform={`translate(${point(experienceDestination)})`}>
        <path d="M0 -22v44" />
        <circle r="4" />
        <text x="-3" y="49" textAnchor="end">
          {originLabel}
        </text>
      </g>
    </svg>
  );
}
