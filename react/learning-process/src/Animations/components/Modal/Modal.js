import React from "react";

import classes from "./Modal.module.css";

const modal = ({ show, closed }) => {
  console.log(show);
  return (
    <div
      className={`${classes.Modal} ${
        show === "entering"
          ? classes.open
          : show === "exiting"
          ? classes.close
          : null
      }`}
    >
      <h1>A Modal</h1>
      <button className="Button" onClick={closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
