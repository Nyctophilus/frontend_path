import React from "react";

import classes from "./Modal.module.css";
import { CSSTransition } from "react-transition-group";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = ({ show, closed }) => {
  console.log(show);
  return (
    <CSSTransition
      in={show}
      mountOnEnter
      unmountOnExit
      timeout={animationTiming}
      //   classNames={classes["fade-slide"]}
      classNames={{
        enter: "",
        enterActive: classes.open,
        enterDone: classes.open,
        exit: "",
        exitActive: classes.close,
      }}
    >
      <div className={classes.Modal}>
        <h1>A Modal</h1>
        <button className="Button" onClick={closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
