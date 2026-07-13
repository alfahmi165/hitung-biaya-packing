const VARIANTS = {
  default: "bg-paper text-ink-700",
  stamp: "bg-stamp-50 text-stamp-600",
  tape: "bg-tape-50 text-tape-700",
  bubble: "bg-mat-bubble-soft text-mat-bubble",
  wrapping: "bg-mat-wrapping-soft text-mat-wrapping",
  kardus: "bg-mat-kardus-soft text-mat-kardus",
  kayu: "bg-mat-kayu-soft text-mat-kayu",
};

const SIZES = {
  sm: "px-2 py-1 text-[11px]",
  md: "px-2.5 py-1.5 text-xs",
};

export default function Badge({ children, variant = "default", size = "sm", className = "", ...props }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-semibold rounded-full ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
