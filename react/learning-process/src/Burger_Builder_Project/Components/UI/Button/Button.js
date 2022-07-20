import React from "react";
import classes from "./Button.module.css";

const Button = ({ btnType, clicked, children }) => (
  <button
    className={[classes.Button, classes[btnType]].join(" ")}
    onClick={clicked}
  >
    {children}
  </button>
);

export default Button;
