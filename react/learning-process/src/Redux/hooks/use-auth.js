import { useState } from "react";

const useAuth = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState("");

  const isValid = validate(enteredValue);
  const hasError = !isValid && isTouched;

  const changeHandler = (e) => {
    setEnteredValue(e.target.value);
    setIsTouched(true);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
};

export default useAuth;
