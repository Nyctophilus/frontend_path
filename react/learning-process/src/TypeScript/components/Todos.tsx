import React from "react";
import Todo from "../models/todos";

const Todos: React.FC<{ items: Todo[] }> = (props) => (
  <ul>
    {props.items.map((i: Todo) => (
      <li key={i.id}>{i.text}</li>
    ))}
  </ul>
);

export default Todos;
