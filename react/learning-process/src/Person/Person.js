import React from "react";

const Person = (props) => {
  return (
    <div>
      <h3>
        Hello, My name is {props.name} and I'm {props.age}
      </h3>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
