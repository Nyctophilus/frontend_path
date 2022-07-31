import React, { useState } from "react";

import Button from "../../UI/Button/Button";

// import "./CourseInput.css";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ invalid }) => (invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid
      ${({ invalid }) => (invalid ? "red" : "#ccc")};
    background-color: ${({ invalid }) =>
      invalid ? "#ffdee4" : "transparent"};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    const userInput = event.target.value;

    setEnteredValue(userInput);

    if (userInput.trim()) setIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredValue.trim()) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
