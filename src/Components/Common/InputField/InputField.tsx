import "../../../styles/input-field-style.css";

interface InputFieldProps<T> {
  id: string;
  name?: string;
  label?: string;
  type: string;
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
  value?: T;
  placeHolder?: string;
  required?: boolean;
  onChange?: (newValue: T) => void;
}

const InputField: React.FC<InputFieldProps<any>> = ({
  id,
  label,
  type,
  inputRef,
  name,
  value,
  placeHolder,
  required,
  onChange,
}) => {
  return (
    <div className="input-div">
      <label htmlFor={id} className="input-div-item">
        {label}
      </label>
      <input
        className="input-div-item"
        id={id}
        type={type}
        ref={inputRef}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
