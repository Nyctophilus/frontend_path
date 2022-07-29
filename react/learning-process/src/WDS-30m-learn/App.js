import React, { useState } from "react";
import TaskList from "./components/TaskList";
import { useGlobalContext } from "./context/Context";

const App = () => {
  const { todos, addTask, removeTask, clearCompleted } =
    useGlobalContext();

  const [inp, setInp] = useState("");

  return (
    <>
      <TaskList />
      <input
        type="text"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        style={{ margin: "auto", display: "block" }}
      />
      <button
        className="btn"
        style={{
          display: "inline-block",
          marginRight: "1rem",
          marginLeft: "20%",
        }}
        onClick={() => {
          if (inp) {
            addTask(inp);
            setInp("");
          }
        }}
      >
        Add Task
      </button>
      <button
        style={{
          display: "inline-block",
          marginRight: "1rem",
        }}
        className="btn"
        onClick={() => {
          if (inp) {
            removeTask(inp);
            setInp("");
          }
        }}
      >
        Remove Task
      </button>
      <button
        className="btn"
        onClick={clearCompleted}
        style={{
          display: "inline-block",
          marginRight: "1rem",
        }}
      >
        Clear Completed Tasks
      </button>
      <div
        className="products"
        style={{
          textAlign: "center",
          marginBottom: "10rem",
        }}
      >
        {todos.filter((task) => !task.done).length} left to
        do
      </div>
    </>
  );
};

export default App;
