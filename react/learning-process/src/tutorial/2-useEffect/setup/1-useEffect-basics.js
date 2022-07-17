import React, { useState, useEffect } from "react";
// by default runs after every re-render
// second parameter  --> [DependencyList]
// FIXME [] ==> means runs on initail render only

const UseEffectBasics = () => {
  const [val, setVal] = useState(0);

  // -HL called after render
  useEffect(() => {
    console.log(`useEffect`);

    if (val > 0) document.title = `new messages(${val})`;
    else document.title = `React App`;
  }, [val]);

  console.log(`render component`);
  return (
    <>
      <h1>useEffect Basics</h1>
      <h2>
        It's for works outside of the componenets such as
        fetching data, singing in, subscribe, eventLisnter,
        DOM
      </h2>
      <h1>{val}</h1>
      <button
        className="btn"
        onClick={() => setVal(val + 1)}
      >
        send msg
      </button>{" "}
      <button className="btn" onClick={() => setVal(0)}>
        seen
      </button>
    </>
  );
};

export default UseEffectBasics;
