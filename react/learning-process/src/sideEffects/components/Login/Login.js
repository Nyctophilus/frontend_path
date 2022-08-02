import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

import AuthContext from "../../context/auth-context";

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

const Login = () => {
  const [formState, formDispather] = useReducer(
    formReducer,
    {
      email: { value: "", isvalid: null },
      password: { value: "", isvalid: null },
    }
  );

  const [formIsValid, setFormIsValid] = useState(false);

  const authCtx = useContext(AuthContext);

  const mailRef = useRef();
  const pwRef = useRef();

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

    if (formIsValid) {
      authCtx.loginHandler(
        formState.email.value,
        formState.password.value
      );
    } else if (!emValid) {
      mailRef.current.active();
    } else if (!pwValid) {
      pwRef.current.active();
    }
  };

  if (!authCtx.isLoggedIn)
    return (
      <Card className={classes.login}>
        <form onSubmit={submitHandler}>
          <Input
            ref={mailRef}
            {...{
              type: "email",
              label: "E-Mail",
              val: formState.email.value,
              isValid: emValid,
              changeHandler: emailChangeHandler,
              validateHandler: validateEmailHandler,
            }}
          />
          <Input
            ref={pwRef}
            {...{
              type: "password",
              label: "Password",
              val: formState.password.value,
              isValid: pwValid,
              changeHandler: passwordChangeHandler,
              validateHandler: validatePasswordHandler,
            }}
          />

          <div className={classes.actions}>
            <Button type="submit" className={classes.btn}>
              Login
            </Button>
          </div>
        </form>
      </Card>
    );
};

export default Login;
