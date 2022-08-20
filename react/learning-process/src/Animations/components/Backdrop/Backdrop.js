import React from "react";

import classes from "./Backdrop.module.css";

const backdrop = ({ show }) => (
  <div
    className={`${classes.Backdrop} ${
      show ? classes.open : classes.close
    }`}
  ></div>
);

export default backdrop;
