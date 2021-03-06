import React from "react";
import "./Button.css";
import classNames from "classnames";

const Button = ({ text, buttonStyle, type, onClick, size, value }) => {
    const classes = classNames({
        "c-button": true,
        [`c-button--${size}`]: size == null ? false : true,
        [`c-button--${buttonStyle}`]: buttonStyle == null ? false : true
    });
    return (
        <button
            type={type == null ? "button" : "submit"}
            className={classes}
            onClick={onClick}
            value={value}
        >
            {text}
        </button>
    );
};

export default Button;
