import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);

  const dispatch = useDispatch();

  const incrementHandler = (m = 1) => {
    dispatch({ type: "increment", amount: m });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <div className={classes.value}>{counter}</div>
      )}

      <div>
        <button onClick={() => incrementHandler()}>
          +
        </button>
        <button onClick={() => incrementHandler(5)}>
          + by 5
        </button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
