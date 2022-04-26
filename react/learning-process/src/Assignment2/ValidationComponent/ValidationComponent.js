import React from "react";
import "./ValidationComponent.css";

const ValidationComponent = (props) => (
  <div className="valiComp">
    {props.len < 5 ? (
      <p className="short">Text too short</p>
    ) : (
      <p className="long">Text long enough</p>
    )}
  </div>
);
export default ValidationComponent;
