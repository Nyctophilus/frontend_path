import React from "react";
import "./Accordion.css";
import questions from "./data";
import Question from "./Components/Question";

const Accordion = () => {
  return (
    <main>
      <header>Questions And Answers About Login</header>
      <article className="accordion">
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </article>
    </main>
  );
};

export default Accordion;
