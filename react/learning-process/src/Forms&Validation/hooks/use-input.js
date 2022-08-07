import { useReducer } from "react";

const initailInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT_CHANGE")
    return {
      value: action.val,
      isTouched: state.isTouched,
    };

  if (action.type === "INPUT_BLUR")
    return { ...state, isTouched: true };

  if (action.type === "RESET") return initailInputState;

  return initailInputState;
};

const useInput = (validate) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initailInputState
  );

  const valueIsValid = validate(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT_CHANGE", val: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "INPUT_BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
