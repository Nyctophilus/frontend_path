import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render

const UseRefBasics = () => {
  const refContainer = useRef(null);

  // -HL target DOM nodes/elements
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(refContainer.current.value);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
        </div>
        <button type="submit">submit</button>
      </form>

      <div ref={divContainer}>Hello world</div>
    </>
  );
};

export default UseRefBasics;
