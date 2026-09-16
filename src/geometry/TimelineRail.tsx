import { useId, useLayoutEffect, useState, useRef } from "react";

interface TimelineRailProps {
  selector: string;
  accentSelector: string;
  className: string;
  terminalSelector?: string;
}

// HTML rows have intrinsic heights (translations, wrapping, fonts). Measure those
// anchors once per layout change; keep the entire structural rail in one SVG.
export function TimelineRail({ selector, accentSelector, className, terminalSelector }: TimelineRailProps) {
  const id = useId();
  const railRef = useRef<SVGSVGElement>(null);
  const [layout, setLayout] = useState({
    height: 0,
    width: 29.6,
    unit: 16,
    nodes: [] as { id: string; y: number; accent: boolean; terminal: boolean }[],
  });
  useLayoutEffect(() => {
    const container = railRef.current?.parentElement;
    if (!container) return;
    const rows = [...container.querySelectorAll<HTMLElement>(selector)];
    const measure = () => {
      const unit = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const bounds = container.getBoundingClientRect();
      const nodes = rows.map((row) => ({
        id: row.dataset.journeyEntry ?? row.dataset.experienceStory ?? row.id,
        y: row.getBoundingClientRect().top - bounds.top + 0.55 * unit,
        accent: row.matches(accentSelector),
        terminal: Boolean(terminalSelector && row.matches(terminalSelector)),
      }));
      setLayout({ height: bounds.height, width: railRef.current!.getBoundingClientRect().width, unit, nodes });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    rows.forEach((row) => observer.observe(row));
    measure();
    return () => observer.disconnect();
  }, [selector, accentSelector, terminalSelector]);
  const x = 0.32 * layout.unit;
  const strokeWidth = 1;
  const radius = (0.7 * layout.unit - strokeWidth) / 2;
  return (
    <svg
      ref={railRef}
      className={className}
      viewBox={`0 0 ${layout.width || 1} ${layout.height || 1}`}
      aria-hidden="true"
      focusable="false"
      data-timeline-rail
    >
      <defs>
        <linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1={layout.nodes[0]?.y ?? 0}
          x2="0"
          y2={layout.nodes.at(-1)?.y ?? 1}
        >
          <stop stopColor="var(--accent)" />
          <stop offset="1" stopColor="#48545a" />
        </linearGradient>
      </defs>
      {layout.nodes.length > 0 && (
        <path d={`M${x} ${layout.nodes[0].y}V${layout.nodes.at(-1)!.y}`} fill="none" stroke={`url(#${id})`} />
      )}
      {layout.nodes.map((node) => (
        <g key={node.id} transform={`translate(${x} ${node.y})`} data-rail-node>
          {(node.accent || node.terminal) && <circle r={0.35 * layout.unit + (node.terminal ? 0.3 : 0.35) * layout.unit} fill="var(--accent)" opacity="0.08" />}
          <circle
            r={radius}
            fill={node.accent ? "var(--accent)" : "var(--graphite)"}
            stroke={node.accent || node.terminal ? "var(--accent)" : "#6a767c"}
          />
        </g>
      ))}
    </svg>
  );
}
