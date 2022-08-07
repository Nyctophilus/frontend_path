import useBasicInput from "../hooks/use-basicInput";

const nameValidation = (val) => val.trim() !== "";

const BasicForm = (props) => {
  const {
    value: enteredFN,
    isValid: fnIsValid,
    hasError: fnHasError,
    valueChangeHandler: fnChangeHandler,
    onBlurHandler: fnBlurHandler,
    reset: fnReset,
  } = useBasicInput(nameValidation);

  const {
    value: enteredLN,
    isValid: lnIsValid,
    hasError: lnHasError,
    valueChangeHandler: lnChangeHandler,
    onBlurHandler: lnBlurHandler,
    reset: lnReset,
  } = useBasicInput(nameValidation);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useBasicInput((val) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      val
    )
  );

  let formIsValid = false;
  if (fnIsValid && lnIsValid && emailIsValid)
    formIsValid = true;

  const formSubmitHanlder = (e) => {
    e.preventDefault();

    if (!formIsValid) return;

    console.log(`Submitted!`);
    console.log(enteredFN, enteredLN, enteredEmail);

    fnReset();
    lnReset();
    emailReset();
  };

  return (
    <form onSubmit={formSubmitHanlder}>
      <div className="control-group">
        <div
          className={
            fnHasError
              ? "form-control invalid"
              : "form-control"
          }
        >
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={enteredFN}
            onChange={fnChangeHandler}
            onBlur={fnBlurHandler}
          />
          {fnHasError && (
            <p className="error-text">
              Please, enter a first name.
            </p>
          )}
        </div>
        <div
          className={
            lnHasError
              ? "form-control invalid"
              : "form-control"
          }
        >
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            onChange={lnChangeHandler}
            onBlur={lnBlurHandler}
            value={enteredLN}
          />
          {lnHasError && (
            <p className="error-text">
              Last Name Must Not Be Empty!
            </p>
          )}
        </div>
      </div>
      <div
        className={
          emailHasError
            ? "form-control invalid"
            : "form-control"
        }
      >
        <label htmlFor="mail">E-Mail Address</label>
        <input
          type="email"
          id="mail"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">
            Email Must Be In The Corrent
            Format.(example@x.zz)
          </p>
        )}
      </div>
      <div className="form-actions">
        <button type="sumbit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
