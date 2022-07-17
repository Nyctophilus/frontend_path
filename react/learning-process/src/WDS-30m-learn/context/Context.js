import React, {
  useState,
  useContext,
  useEffect,
} from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    const newTasks = {
      id: new Date().getMilliseconds() * Math.random(),
      name: task,
      done: false,
    };

    setTodos([...todos, newTasks]);
  };
  const removeTask = (name) => {
    const newTasks = todos.filter((t) => t.name !== name);

    setTodos([...newTasks]);
  };
  const setDone = (id) => {
    const copy = [...todos];

    const wantedTask = todos.find((task) => task.id === id);

    wantedTask.done = !wantedTask.done;

    setTodos(copy);
  };
  const clearCompleted = () => {
    const notCompleted = todos.filter((task) => !task.done);

    setTodos(notCompleted);
  };

  const LOCAL_STORAGE_KEY = "todoApp.todos";

  useEffect(() => {
    if (localStorage.length)
      setTodos(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      );
  }, []);

  useEffect(() => {
    console.log("yooo");
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(todos)
    );
  }, [todos]);

  return (
    <AppContext.Provider
      value={{
        todos,
        addTask,
        removeTask,
        setDone,
        clearCompleted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider, useGlobalContext };
