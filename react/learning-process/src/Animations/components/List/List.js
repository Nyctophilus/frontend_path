import React, { useState } from "react";
import classes from "./List.module.css";

import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prevState) => [
      ...prevState,
      prevState.length + 1,
    ]);
  };

  const removeItemHandler = (selIndex) => {
    setItems((prevState) =>
      prevState.filter((item, index) => index !== selIndex)
    );
  };

  const listItems = items.map((item, index) => (
    <CSSTransition
      key={index}
      classNames={{
        enter: classes.start,
        enterActive: classes.fadeIn,
        exit: classes.end,
        exitActive: classes.fadeOut,
      }}
      timeout={300}
    >
      <li
        className={classes.ListItem}
        onClick={() => removeItemHandler(index)}
      >
        {item}
      </li>
    </CSSTransition>
  ));

  return (
    <div>
      <button onClick={addItemHandler}>Add Item</button>
      <p>Click Item to Remove.</p>
      <TransitionGroup
        component="ul"
        className={classes.List}
      >
        {listItems}
      </TransitionGroup>
    </div>
  );
};

export default List;
