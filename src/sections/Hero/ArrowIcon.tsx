interface ArrowIconProps {
  direction?: "right" | "down";
}

export function ArrowIcon({ direction = "right" }: ArrowIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={direction === "down" ? "icon iconDown" : "icon"}
      viewBox="0 0 24 24"
      focusable="false"
    >
      <path d="M4 12h15M14 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
