export default function Input({
  label,
  placeholder,
  value,
  onChange,
  suffix,
  type = "text",
  required = false,
  disabled = false,
  ...props
}) {
  return (
    <div className="field">
      {label && (
        <label className="block text-[11px] font-display font-semibold uppercase tracking-[0.08em] text-ink-500 mb-1.5">
          {label}
          {required && <span className="text-danger ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`field-input ${suffix ? "pr-12" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          {...props}
        />

        {suffix && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-ink-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
