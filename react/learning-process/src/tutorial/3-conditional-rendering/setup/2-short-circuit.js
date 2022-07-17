import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("s");
  const [isError, setIsError] = useState(false);

  const errorHandler = () => {
    setIsError(!isError);
  };

  return (
    <>
      <h1>{text || "Muhammed"}</h1>

      <button className="btn" onClick={errorHandler}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}

      {/* {text && <h1>toggle hide with && op</h1>}
      {!text && <h1>toggle hide with && op</h1>} */}

      {isError ? (
        <h2>tarnary Error...</h2>
      ) : (
        <h1>{text}</h1>
      )}
    </>
  );
};

export default ShortCircuit;
