import { useState } from "react";
import classes from "./InputForm.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import Modal from "../Modal/Modal";

const InputForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [output, setOutput] = useState([]);
  const [error, setError] = useState({
    isError: false,
    msg: "",
  });

  const inputChangeHandler = (e) => {
    e.preventDefault();

    if (e.target.id === "name") setName(e.target.value);
    if (e.target.id === "age") setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (age < 1 || name.trim() === "") {
      if (name.trim() === "") {
        setError({
          isError: true,
          msg: "please, enter a name! (non-empty values).",
        });

        return;
      }

      if (age < 1) {
        setError({
          isError: true,
          msg: "please, enter a valid age (>0)",
        });
        return;
      }

      return;
    }

    setError({ ...error, isError: false });
    setOutput((prevList) => [
      ...prevList,
      {
        id: new Date().getMilliseconds() * Math.random(),
        value: `${name} (${age} years old)`,
      },
    ]);
    setName("");
    setAge("");
  };

  const removeUserHandler = (id) => {
    const newUsers = output.filter(
      (user) => user.id !== id
    );

    setOutput(newUsers);
  };

  return (
    <>
      <Card>
        <form onSubmit={submitHandler}>
          <label htmlFor="name" className={classes.Label}>
            username
          </label>
          <input
            className={classes.Input}
            type="text"
            id="name"
            placeholder="type your name"
            value={name}
            onChange={inputChangeHandler}
          />
          <label htmlFor="age" className={classes.Label}>
            age (years)
          </label>
          <input
            className={classes.Input}
            type="number"
            id="age"
            placeholder="enter your age"
            value={age}
            onChange={inputChangeHandler}
          />
          <Button type="submit">add user</Button>
        </form>
      </Card>

      <Card>
        {output.map((user) => (
          <input
            key={user.id}
            className={classes.Input}
            type="text"
            value={user.value}
            onChange={(e) => e.preventDefault()}
            onClick={() => removeUserHandler(user.id)}
          />
        ))}
      </Card>

      {error.isError && (
        <Modal errMsg={error.msg} setError={setError} />
      )}
    </>
  );
};

export default InputForm;
