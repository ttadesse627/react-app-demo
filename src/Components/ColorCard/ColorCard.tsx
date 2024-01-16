import React from "react";

interface ColorCardPropTypes{
    text: string;
    style?: React.CSSProperties;
}
const ColorCard : React.FC<ColorCardPropTypes> = ({text, style}) => {
    return (
        <div style={style}>
            <p>{text}</p>
        </div>
    );
};

export default ColorCard;