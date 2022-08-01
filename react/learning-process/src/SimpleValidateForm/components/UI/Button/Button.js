import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, type, clickEvent }) => {
  return (
    <button
      className={classes.Button}
      type={type || "button"}
      onClick={clickEvent}
    >
      {children}
    </button>
  );
};

export default Button;
