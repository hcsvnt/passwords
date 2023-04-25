interface RangeInputProps {
    id: string;
    label: string;
    min: number;
    max: number;
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function RangeInput({ id, label, min, max, value, onChange }: RangeInputProps) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="range" id={id} min={min} max={max} value={value} onChange={onChange} />
            <span>{value}</span>
        </div>
    );
}
