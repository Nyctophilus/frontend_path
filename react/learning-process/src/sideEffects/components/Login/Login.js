import React, {
  useEffect,
  useReducer,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const formReducer = (prevState, action) => {
  if (action.type === "EMAIL_INPUT") {
    return {
      ...prevState,
      email: {
        value: action.val,
        isvalid: action.val.includes("@"),
      },
    };
  }

  if (action.type === "EMAIL_BLUR") {
    return {
      ...prevState,
      email: {
        value: action.val,
        isvalid: prevState.email.value.includes("@"),
      },
    };
  }

  if (action.type === "PASSWORD_INPUT") {
    return {
      ...prevState,
      password: {
        value: action.val,
        isvalid: action.val.trim().length > 6,
      },
    };
  }

  if (action.type === "PASSWORD_BLUR") {
    return {
      ...prevState,
      password: {
        value: prevState.value,
        isvalid: prevState.password.value.trim().length > 6,
      },
    };
  }

  return new Error("not handled action!");
};

const Login = (props) => {
  const [formState, formDispather] = useReducer(
    formReducer,
    {
      email: { value: "", isvalid: true },
      password: { value: "", isvalid: true },
    }
  );

  //   const [enteredEmail, setEnteredEmail] = useState("");
  //   const [emailIsValid, setEmailIsValid] = useState();
  //   const [enteredPassword, setEnteredPassword] =
  //     useState("");
  //   const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log(`effect running!`);

    return () =>
      console.log(
        `effect cleanup, this runs only when component unmounted   with []`
      );
  }, []);

  // -HL doesnt valide unless condition changes
  const {
    email: { isvalid: emValid },
    password: { isvalid: pwValid },
  } = formState;

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(`checking form validitiy`);
      setFormIsValid(emValid && pwValid);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [emValid, pwValid]);

  const emailChangeHandler = (e) => {
    formDispather({
      type: "EMAIL_INPUT",
      val: e.target.value,
    });
  };

  const passwordChangeHandler = (e) => {
    formDispather({
      type: "PASSWORD_INPUT",
      val: e.target.value,
    });
  };

  const validateEmailHandler = () => {
    formDispather({
      type: "EMAIL_BLUR",
    });
  };

  const validatePasswordHandler = () => {
    formDispather({
      type: "PASSWORD_BLUR",
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(
      formState.email.value,
      formState.password.value
    );
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emValid ? "" : classes.invalid
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            pwValid ? "" : classes.invalid
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.password.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
