import React from "react";
import classes from "./Accordion.css";
import questions from "./data";
import Question from "./Components/Question";

const Accordion = () => {
  return (
    <div className="body">
      <main className="accMain">
        <header className="accHeader">
          Questions And Answers About Login
        </header>
        <article className="accordion">
          {questions.map((question) => (
            <Question key={question.id} {...question} />
          ))}
        </article>
      </main>
    </div>
  );
};

export default Accordion;
