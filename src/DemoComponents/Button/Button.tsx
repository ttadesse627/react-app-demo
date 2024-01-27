import './Button.css'

interface ButtonProps<T>{
    id: string;
    text: string;
    type?: "button" | "submit" | "reset";
    onClick?: (newValue: T) => void;
}

const Button : React.FC<ButtonProps<any>> = ({id, text, type, onClick}) => {
    return (
        <div className="button-div">
            <button id={id} type={type} onClick={onClick}>{text}</button>
        </div>
    );
};

export default Button;