import './Button.css'

interface ButtonProps<T>{
    id: string;
    text?: string;
    onClick?: (newValue: T) => void;
}

const Button : React.FC<ButtonProps<any>> = ({id, text, onClick}) => {
    return (
        <div className="button-div">
            <button id={id} type="submit" onClick={onClick}>{text}</button>
        </div>
    );
};

export default Button;