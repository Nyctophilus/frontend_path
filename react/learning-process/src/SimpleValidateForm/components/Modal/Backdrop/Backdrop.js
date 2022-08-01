import classes from "./Backdrop.module.css";

const Backdrop = ({ clickEvent }) => {
  return (
    <div
      className={classes.Backdrop}
      onClick={clickEvent}
    ></div>
  );
};

export default Backdrop;
