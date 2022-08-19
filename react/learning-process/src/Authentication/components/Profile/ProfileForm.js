import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPasswordRef = useRef();

  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  const submitHanlder = (e) => {
    e.preventDefault();

    const enteredNewPassword = newPasswordRef.current.value;

    //add validation

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_API_KEY_FIREBASE}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
      }
    ).then((res) => {
      // assume always suceeds!
      console.log(
        `password changed! redirect to profile page or present some success msg`
      );

      navigate("/Authentication");
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHanlder}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={newPasswordRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
