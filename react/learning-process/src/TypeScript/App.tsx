import React from "react";
import Todos from "./components/Todos.tsx";
import Todo from "./models/todos.ts";

function App() {
  const todos = [
    new Todo("Gym"),
    new Todo("Learn TypeScript"),
  ];

  return <Todos items={todos} />;
}

export default App;
