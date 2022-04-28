import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";
import Radium from "radium";

const Cockpit = (props) => {
  // it's a react hook not lifecycle hook, so u can add it into functional comp
  // use Effect combine all these hooks into it

  useEffect(
    // FIXME!!! by default takes func that runs at every render cycle
    () => {
      console.log(`[Cockpit.js] useEffect here`);

      // can use for HTTP request
      const timer = setTimeout(() => {
        alert("saved data to cloud!");
      }, 1000);

      // cleanup work in useEffect
      return () => {
        clearTimeout(timer);
        console.log(
          `[Cockpit.js] clean-up work can be done here, after the last render`
        );
      };
    },
    // [] to run initally only
    [props.people] // only excutes when this data changes
  );

  // can use multiple useEffects
  // useEffect()

  const btnStyling = {
    backgroundColor: "limegreen",
    border: "1px solid #ccc",
    padding: "7px 8px",
    font: "inherit",
    cursor: "pointer",
    color: "white",
    borderRadius: "10px",
    // Allowed by Radium
    ":hover": {
      backgroundColor: "red",
      color: "black",
    },
  };

  if (props.show) {
    // -HL dynamic styling
    btnStyling.backgroundColor = "crimson";
    btnStyling[":hover"] = {
      backgroundColor: "salmon",
    };
  }

  // -HL change class conditionallly
  const dynClass = [];
  if (props.people.length <= 2) {
    dynClass.push(classes.red);

    if (props.people.length <= 1)
      dynClass.push(classes.bold);
  }

  return (
    <div>
      <h1 className={dynClass.join(" ")}>
        Hellllllllo REACT!!!
      </h1>
      <h3>{props.title}</h3>
      <button style={btnStyling} onClick={props.toggler}>
        Toggle Names
      </button>
    </div>
  );
};

export default Radium(Cockpit);
