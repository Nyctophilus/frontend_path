import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModal: false,
  ModalContent: "",
};

const Index = () => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(
    reducer,
    defaultState
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const newItem = {
      id: new Date().getMilliseconds(),
      name: input,
    };

    if (input)
      dispatch({ type: "ADD_ITEM", payload: newItem });
    else dispatch({ type: "NO_VALUE" });

    setInput("");
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModal && (
        <Modal
          ModalContent={state.ModalContent}
          closeModal={closeModal}
        />
      )}
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button type="submit">add</button>
      </form>

      {state.people.map((person) => (
        <div className="item" key={person.id}>
          <h4>{person.name}</h4>
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_ITEM",
                payload: person.id,
              })
            }
          >
            remove
          </button>
        </div>
      ))}
    </>
  );
};

export default Index;
