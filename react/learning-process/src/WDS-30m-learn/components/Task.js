import React from "react";
import { useGlobalContext } from "../context/Context";

const Task = ({ id, name, done }) => {
  const { setDone } = useGlobalContext();

  return (
    <div className="item" style={{ textAlign: "center" }}>
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={() => {
            setDone(id);
          }}
        />
        {name}
      </label>
    </div>
  );
};

export default Task;
