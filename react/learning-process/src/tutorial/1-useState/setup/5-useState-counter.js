import React, { useState } from "react";

const UseStateCounter = () => {
  let [value, setValue] = useState(0);

  const Operation = (op) => {
    let newVal;

    if (op === "+") newVal = value + 1;

    if (op === "-") newVal = value - 1;

    if (op === "re") {
      setValue(0);
      return;
    }

    setValue(newVal);
  };

  const complex = () => {
    setTimeout(() => {
      //   setValue(value+1);

      // -HL functional update if u depending on the previous state!
      setValue((prevState) => prevState + 1);
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem auto" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>

        <button
          className="btn"
          onClick={() => Operation("+")}
        >
          Increase
        </button>

        <button
          className="btn"
          onClick={() => Operation("re")}
        >
          Reset
        </button>

        <button
          className="btn"
          onClick={() => Operation("-")}
        >
          Decrease
        </button>
      </section>

      <section style={{ margin: "4rem auto" }}>
        <h2>complex counter</h2>
        <h1>{value}</h1>

        <button className="btn" onClick={complex}>
          Increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
