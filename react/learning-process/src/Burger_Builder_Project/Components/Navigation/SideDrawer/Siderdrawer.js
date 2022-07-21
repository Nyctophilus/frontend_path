import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Siderdrawer = ({ closed, open }) => {
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div
        className={`${classes.SideDrawer} ${
          open ? classes.Open : classes.Close
        }`}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default Siderdrawer;
