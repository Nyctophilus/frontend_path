import classes from "./Auth.module.css";

import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import useAuth from "../hooks/use-auth";

const validateEmail = (val) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);

const validatePassword = (val) =>
  val.trim().toString().length > 6;

const Auth = () => {
  // validation code
  const mailValidation = useAuth(validateEmail);
  const pwValidation = useAuth(validatePassword);

  const dispatch = useDispatch();

  let formIsValid = false;
  if (mailValidation.isValid && pwValidation.isValid)
    formIsValid = true;

  const loginHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    // reseting inputs
    mailValidation.reset();
    pwValidation.reset();

    dispatch(login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div
            className={`${
              mailValidation.hasError
                ? `${classes.control} ${classes.invalid}`
                : classes.control
            }`}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={mailValidation.value}
              onChange={mailValidation.changeHandler}
              onBlur={mailValidation.blurHandler}
            />
            {mailValidation.hasError && (
              <p className={classes["txt-error"]}>
                enter a vaild email format.(example@x.cs)
              </p>
            )}
          </div>
          <div
            className={`${
              pwValidation.hasError
                ? `${classes.control} ${classes.invalid}`
                : classes.control
            }`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={pwValidation.value}
              onChange={pwValidation.changeHandler}
              onBlur={pwValidation.blurHandler}
            />
            {pwValidation.hasError && (
              <p className={classes["txt-error"]}>
                enter a vaild password.(&gt;6 characters)
              </p>
            )}
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
