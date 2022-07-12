import React, { useState } from "react";
import data from "./data";
import "./index.css";

function App() {
  const [parags, setParags] = useState([]);
  const [num, setNum] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();

    const end = ContainNum(num);
    console.log(end);
    const newPagas = data.slice(0, end);

    setParags(newPagas);
  };

  const ContainNum = (n) => {
    if (n < 0) return 0;
    else return n;
  };

  return (
    <div className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={num}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>

      <article className="lorem-text">
        {parags.map((p) => (
          <p
            key={
              new Date().getTime().toString() *
              Math.random()
            }
          >
            {p}
          </p>
        ))}
      </article>
    </div>
  );
}

export default App;
