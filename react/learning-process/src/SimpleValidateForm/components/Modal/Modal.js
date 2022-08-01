import classes from "./Modal.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Backdrop from "./Backdrop/Backdrop";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ errMsg, setError }) => {
  const [open, setOpen] = useState(true);

  const Overlay = () => (
    <>
      <div className={classes.Modal}>
        <h2>invalid input</h2>
        <Card className={classes.cardModal}>
          <p>{errMsg}</p>
          <Button clickEvent={closeModalHandler}>
            okay
          </Button>
        </Card>
      </div>

      <Backdrop clickEvent={closeModalHandler} />
    </>
  );

  const closeModalHandler = () => {
    setError({ isError: false });
    setOpen(false);
  };

  if (open)
    return (
      <>
        {/* -HL PORTALS */}
        {ReactDOM.createPortal(<Overlay />, document.body)}
      </>
    );
};

export default Modal;
