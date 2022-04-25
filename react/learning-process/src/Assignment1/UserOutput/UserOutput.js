import React from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>From {props.userName}:</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Pariatur...
      </p>
    </div>
  );
};

export default UserOutput;
