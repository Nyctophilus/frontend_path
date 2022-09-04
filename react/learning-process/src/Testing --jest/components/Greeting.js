import React, { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [txtChange, setTxtChange] = useState(false);

  const textChangeHandler = () => setTxtChange(true);

  return (
    <div>
      <h2>Hello World!</h2>
      {!txtChange && <Output>It's good to see you</Output>}
      {txtChange && <Output>Changed!</Output>}

      <button onClick={textChangeHandler}>
        Change Text
      </button>
    </div>
  );
};

export default Greeting;
