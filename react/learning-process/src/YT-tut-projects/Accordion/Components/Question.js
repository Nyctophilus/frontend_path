import React, { useState } from "react";
import "./Question.css";
import {
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";

const Question = ({ title, info }) => {
  const [accord, setAccord] = useState(false);

  return (
    <section className="accor">
      <div className="head">
        <h4>{title}</h4>
        <button onClick={() => setAccord(!accord)}>
          {accord ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>

      {accord && <p>{info}</p>}
    </section>
  );
};

export default Question;
