const ACCENTS = {
  bubble: { bg: "bg-mat-bubble-soft", text: "text-mat-bubble" },
  wrapping: { bg: "bg-mat-wrapping-soft", text: "text-mat-wrapping" },
  kardus: { bg: "bg-mat-kardus-soft", text: "text-mat-kardus" },
  kayu: { bg: "bg-mat-kayu-soft", text: "text-mat-kayu" },
  neutral: { bg: "bg-paper", text: "text-ink-700" },
};

export default function Card({
  children,
  header,
  footer,
  accent = "neutral",
  className = "",
  ...props
}) {
  const tone = ACCENTS[accent] || ACCENTS.neutral;

  return (
    <div className={`ledger-card ${className}`} {...props}>
      {header && (
        <div className={`px-5 py-4 border-b border-line ${tone.bg}`}>
          {typeof header === "string" ? (
            <h3 className={`font-display font-semibold text-sm ${tone.text}`}>{header}</h3>
          ) : (
            header
          )}
        </div>
      )}

      <div className="p-5">{children}</div>

      {footer && <div className="px-5 py-4 border-t border-line bg-paper">{footer}</div>}
    </div>
  );
}
