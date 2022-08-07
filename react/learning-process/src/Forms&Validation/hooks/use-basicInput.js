import { useState } from "react";

const useBasicInput = (validate) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [hasTouched, setHasTouched] = useState(false);

  const valueIsValid = validate(enteredValue);
  const hasError = !valueIsValid && hasTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const onBlurHandler = () => {
    setHasTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setHasTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useBasicInput;
