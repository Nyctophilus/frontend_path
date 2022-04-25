import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <div className="Person">
      <h3 onClick={props.click}>
        My name is {props.name} and I'm {props.age}
      </h3>
      <p>{props.children}</p>
      <input onChange={props.change} type="text" />
    </div>
  );
};

export default Person;
