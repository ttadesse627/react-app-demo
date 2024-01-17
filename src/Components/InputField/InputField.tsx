import './InputField.css'

interface InputFieldProps<T>{
    id: string;
    name?:string;
    label?: string;
    type: string;
    value: T;
    placeHolder?: string;
    onChange?: (newValue: T) => void;
}

const InputField : React.FC<InputFieldProps<any>> = ({id, label, type, name, value, placeHolder,onChange}) => {
    return (
        <div className="input-div">
            <label htmlFor={id}>{label}</label>
            <input id={id != null? id : 'inputId'} type={type} name={name} value={value} placeholder={placeHolder} onChange={onChange} />
        </div>
    );
};

export default InputField;