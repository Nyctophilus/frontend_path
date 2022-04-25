import React from "react";

const UserInput = (props) => {
  const inpStyling = {
    backgroundColor: "limegreen",
    color: "white",
    borderRadius: "10px",
    border: "1px solid crimson",
    textAlign: "center",
  };

  return (
    <input
      type="text"
      placeholder="User Input"
      onChange={props.hnd}
      value={props.val}
      style={inpStyling}
    />
  );
};
export default UserInput;
