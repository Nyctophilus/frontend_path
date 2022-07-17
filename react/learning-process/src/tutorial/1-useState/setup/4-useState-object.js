import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Muhammed",
    age: 26,
    msg: "Thunder Hammer!",
  });

  const changeMsg = () => {
    setPerson({ ...person, msg: "Is the Thunder God!!" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.msg}</h3>

      <button className="btn" onClick={changeMsg}>
        Thunder!
      </button>
    </>
  );
};

export default UseStateObject;
