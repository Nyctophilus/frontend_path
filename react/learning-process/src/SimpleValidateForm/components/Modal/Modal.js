import classes from "./Modal.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Backdrop from "./Backdrop/Backdrop";
import { useState } from "react";

const Modal = ({ errMsg, setError }) => {
  const [open, setOpen] = useState(true);

  const closeModalHandler = () => {
    setError({ isError: false });
    setOpen(false);
  };

  if (open)
    return (
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
};

export default Modal;
