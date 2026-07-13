import Card from "./ui/Card";

export default function SettingCard({ accent, swatch, title, description, children }) {
  return (
    <Card
      accent={accent}
      header={
        <div className="flex items-center gap-3">
          <span className={`w-2.5 h-2.5 rounded-full ${swatch}`} />
          <div>
            <h3 className="font-display font-semibold text-sm text-ink-900">{title}</h3>
            {description && <p className="text-[11px] text-ink-500 mt-0.5">{description}</p>}
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-2 gap-3.5">{children}</div>
    </Card>
  );
}
