import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameInputTouched, setNameInputTouched] =
    useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailInputTouched, setEmailInputTouched] =
    useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameIsInvalid =
    !enteredNameIsValid && nameInputTouched;

  const enteredEmailIsValid =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      enteredEmail
    );
  const emailIsInvalid =
    !enteredEmailIsValid && emailInputTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid)
    formIsValid = true;

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
    setNameInputTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) return;

    setEnteredName("");
    setNameInputTouched(false);
    setEnteredEmail("");
    setEmailInputTouched(false);
  };

  const nameinputBlurHandler = () => {
    setNameInputTouched(true);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setEmailInputTouched(true);
  };
  const emailInputBlurHandler = () => {
    setEmailInputTouched(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${
          nameIsInvalid
            ? "form-control invalid"
            : "form-control"
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameinputBlurHandler}
        />
        {nameIsInvalid && (
          <p className="error-text">
            Name Must Not Be Empty.
          </p>
        )}
      </div>
      <div
        className={`${
          emailIsInvalid
            ? "form-control invalid"
            : "form-control"
        }`}
      >
        <label htmlFor="mail">Your E-mail</label>
        <input
          type="email"
          id="mail"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailIsInvalid && (
          <p className="error-text">
            Email Must Be Valid In Correct
            Format.(example@x.zz)
          </p>
        )}
      </div>

      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
