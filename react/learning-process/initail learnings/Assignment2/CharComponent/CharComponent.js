import React from "react";

export default function CharComponent(props) {
  const boxStyling = {
    display: "inline-block",
    padding: "1rem",
    textAlign: "center",
    margin: ".6rem 1rem",
    border: "1px solid black",
  };

  return (
    <div style={boxStyling} onClick={props.click}>
      {props.value}
    </div>
  );
}
