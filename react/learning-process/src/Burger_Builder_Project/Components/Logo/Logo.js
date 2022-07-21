import React from "react";
import burgerLogo from "../../assets/images/28.1 burger-logo.png";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="logo" />
    </div>
  );
};

export default Logo;
