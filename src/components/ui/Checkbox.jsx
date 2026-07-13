import { IconCheck } from "../icons";

export default function Checkbox({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className="tick-box"
      data-checked={checked}
    >
      <IconCheck strokeWidth={3.5} />
    </button>
  );
}
