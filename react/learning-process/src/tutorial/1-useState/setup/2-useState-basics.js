import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Title");

  const clickHandler = () => {
    if (text === "Random Title") setText("Hello World");
    else setText("Random Title");
  };

  return (
    <>
      <h2>{text}</h2>
      <button
        className="btn"
        type="button"
        onClick={clickHandler}
      >
        Change title
      </button>
    </>
  );
};

export default UseStateBasics;
