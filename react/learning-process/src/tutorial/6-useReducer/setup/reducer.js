// only called when dispather call
export const reducer = (state, action) => {
  // state right b4 that action
  // action u gonna do
  // u have to return the state here

  console.log(state, action);

  if (action.type === "ADD_ITEM") {
    console.log(`input changing`);

    return {
      ...state,
      people: [...state.people, action.payload],
      isModal: true,
      ModalContent: "item added!",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModal: true,
      ModalContent: "please, provide any name!",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModal: false,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const id = action.payload;
    const newPeople = state.people.filter(
      (p) => p.id !== id
    );
    return {
      ...state,
      people: newPeople,
      isModal: true,
      ModalContent: "item removed successfully!",
    };
  }

  throw new Error("No matching action type");
  // FIXME u could return the state
  // return state;
};
