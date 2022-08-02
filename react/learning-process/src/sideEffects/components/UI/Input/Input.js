import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import classes from "./Input.module.css";

const Input = (
  {
    type,
    label,
    val,
    isValid,
    changeHandler,
    validateHandler,
  },
  ref
) => {
  const inpRef = useRef();

  const active = () => inpRef.current.focus();

  useImperativeHandle(ref, () => {
    return { active };
  });

  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={type}>{label}</label>
      <input
        type={type}
        id={type}
        value={val}
        onChange={changeHandler}
        onBlur={validateHandler}
        ref={inpRef}
      />
    </div>
  );
};

export default forwardRef(Input);
