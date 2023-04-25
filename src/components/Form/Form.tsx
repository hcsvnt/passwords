import React, { useReducer } from 'react';

interface PasswordState {
    passwordLength: number;
    includeNumbers: boolean;
    includeLowercase: boolean;
    includeUppercase: boolean;
}

type PasswordAction =
    | { type: 'setPasswordLength'; payload: number }
    | { type: 'setIncludeNumbers'; payload: boolean }
    | { type: 'setIncludeLowercase'; payload: boolean }
    | { type: 'setIncludeUppercase'; payload: boolean };

function reducer(state: PasswordState, action: PasswordAction): PasswordState {
    switch (action.type) {
        case 'setPasswordLength':
            return { ...state, passwordLength: action.payload };
        case 'setIncludeNumbers':
            return { ...state, includeNumbers: action.payload };
        case 'setIncludeLowercase':
            return { ...state, includeLowercase: action.payload };
        case 'setIncludeUppercase':
            return { ...state, includeUppercase: action.payload };
        default:
            throw new Error();
    }
}

function PasswordForm() {
    const initialState: PasswordState = {
        passwordLength: 8,
        includeNumbers: false,
        includeLowercase: false,
        includeUppercase: false
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // generate password based on user's selections
        // ...
    };

    return (
        <form onSubmit={handleSubmit}>
            <RangeInput
                id="password-length-slider"
                label="Password Length"
                min={8}
                max={64}
                value={state.passwordLength}
                onChange={event =>
                    dispatch({
                        type: 'setPasswordLength',
                        payload: parseInt(event.target.value)
                    })
                }
            />
            <CheckboxInput
                id="include-numbers-checkbox"
                label="Include Numbers"
                checked={state.includeNumbers}
                onChange={event =>
                    dispatch({ type: 'setIncludeNumbers', payload: event.target.checked })
                }
            />
            <CheckboxInput
                id="include-lowercase-checkbox"
                label="Include Lowercase Characters"
                checked={state.includeLowercase}
                onChange={event =>
                    dispatch({ type: 'setIncludeLowercase', payload: event.target.checked })
                }
            />
            <CheckboxInput
                id="include-uppercase-checkbox"
                label="Include Uppercase Characters"
                checked={state.includeUppercase}
                onChange={event =>
                    dispatch({ type: 'setIncludeUppercase', payload: event.target.checked })
                }
            />
            <button type="submit">Generate Password</button>
        </form>
    );
}

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

export default PasswordForm;
