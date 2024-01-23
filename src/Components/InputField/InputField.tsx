import './InputField.css'

interface InputFieldProps<T>{
    id: string;
    name?:string;
    label?: string;
    type: string;
    inputRef?: React.MutableRefObject<HTMLInputElement | null>;
    value?: T;
    placeHolder?: string;
    onChange?: (newValue: T) => void;
}

const InputField : React.FC<InputFieldProps<any>> = ({id, label, type, inputRef, name, value, placeHolder,onChange}) => {
    return (
        <div className="input-div">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} ref={inputRef} name={name} value={value} placeholder={placeHolder} onChange={onChange} />
        </div>
    );
};

export default InputField;