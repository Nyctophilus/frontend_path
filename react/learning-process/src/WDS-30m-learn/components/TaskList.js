import React from "react";
import { useGlobalContext } from "../context/Context";
import Task from "./Task";

const TaskList = () => {
  const { todos } = useGlobalContext();

  return todos.map((task) => (
    <Task key={task.id} {...task} />
  ));
};

export default TaskList;
