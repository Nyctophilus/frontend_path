import React, { memo } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ children, show, modalClosed }) => {
  console.log(`modal rendering!`);
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: show
            ? "translateY(0)"
            : "translateY(-100vh)",
          opacity: show ? 1 : 0,
        }}
      >
        {children}
      </div>
    </>
  );
};

// function areEqual(prevProps, nextProps) {
//   /*
// 	return true if passing nextProps to render would return
// 	the same result as passing prevProps to render,
// 	otherwise return false
// 	*/
// }

export default memo(Modal);
