import React from "react";

const ColorCard = (props) => {
    return (
        <div style={props.style}>
            <p>{props.text}</p>
        </div>
    );
};

export default ColorCard;