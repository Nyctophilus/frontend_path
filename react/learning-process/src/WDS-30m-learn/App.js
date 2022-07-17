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
      />
      <button
        className="btn"
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
      <button className="btn" onClick={clearCompleted}>
        Clear Completed Tasks
      </button>
      <div className="products">
        {todos.filter((task) => !task.done).length} left to
        do
      </div>
    </>
  );
};

export default App;
