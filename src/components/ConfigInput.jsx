import Input from "./ui/Input";

export default function ConfigInput({ label, value, suffix, onChange }) {
    return (
        <Input
            label={label}
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            suffix={suffix}
        />
    );
}
