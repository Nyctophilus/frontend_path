import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const {
    isLoading,
    error,
    sendRequest: postTasks,
  } = useHttp();

  const enterTaskHandler = async (taskText) => {
    const postTasksHelper = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = {
        id: generatedId,
        text: taskText,
      };

      props.onAddTask(createdTask);
    };

    postTasks(
      {
        url: "https://react-http-d480f-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        options: {
          method: "POST",
          body: { text: taskText },
          headers: {
            "Content-Type": "application/json",
          },
        },
      },
      postTasksHelper
    );
  };

  return (
    <Section>
      <TaskForm
        onEnterTask={enterTaskHandler}
        loading={isLoading}
      />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
