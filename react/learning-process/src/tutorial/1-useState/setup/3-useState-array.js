import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeHandler = (id) => {
    const myPs = people.filter((p) => p.id !== id);

    setPeople(myPs);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button
              className="btn"
              onClick={() => removeHandler(id)}
            >
              del
            </button>
          </div>
        );
      })}

      <button className="btn" onClick={() => setPeople([])}>
        Clear all
      </button>
    </>
  );
};

export default UseStateArray;
