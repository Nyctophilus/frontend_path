import React from "react";

// -HL use for mostly the need of change html,styling

// sets a div wrapper with a class
const WithClass = (props) => {
  return (
    <div className={props.classes}>{props.children}</div>
  );
};

export default WithClass;
