import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <div className="Person">
      <h3 onClick={props.click}>
        My name is {props.name} and I'm {props.age}
      </h3>
      <p onClick={props.delete}>{props.children}</p>
      <input
        onChange={props.change}
        type="text"
        value={props.name}
      />
    </div>
  );
};

export default Person;
