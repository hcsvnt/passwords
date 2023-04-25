interface CheckboxInputProps {
    id: string;
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CheckboxInput({ id, label, checked, onChange }: CheckboxInputProps) {
    return (
        <div>
            <input type="checkbox" id={id} checked={checked} onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}
