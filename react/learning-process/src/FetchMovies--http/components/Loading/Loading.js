import classes from "./Loading.module.css";

const Loading = () => (
  <div className={classes["lds-ripple"]}>
    <div></div>
    <div></div>
  </div>
);

export default Loading;
