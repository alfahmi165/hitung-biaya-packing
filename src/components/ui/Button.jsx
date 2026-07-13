const SIZES = {
  sm: "px-3 py-2 text-xs",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3.5 text-base",
};

const VARIANTS = {
  tape: "btn-tape focus-visible:ring-tape-400/30",
  stamp: "text-white shadow-sm hover:shadow-md bg-stamp-500 hover:bg-stamp-600 focus-visible:ring-stamp-500/25",
  outline: "btn-outline focus-visible:ring-ink-400/20",
  ghost: "btn-ghost focus-visible:ring-ink-400/20",
};

export default function Button({
  children,
  onClick,
  variant = "tape",
  size = "md",
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  ...props
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`btn ${VARIANTS[variant]} ${SIZES[size]} ${fullWidth ? "w-full" : ""}`}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {icon && !loading && icon}
      {children}
    </button>
  );
}
