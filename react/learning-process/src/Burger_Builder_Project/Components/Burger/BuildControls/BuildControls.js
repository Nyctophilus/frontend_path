import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {
    label: "Salad",
    type: "salad",
  },
  {
    label: "Cheese",
    type: "cheese",
  },
  {
    label: "Bacon",
    type: "bacon",
  },
  {
    label: "Meat",
    type: "meat",
  },
];

const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  purchasable,
  price,
  purchasing,
}) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        <strong>Current Price: ${price.toFixed(2)}</strong>
      </p>
      {controls.map((con, i) => (
        <BuildControl
          key={con + i}
          label={con.label}
          added={() => ingredientAdded(con.type)}
          removed={() => ingredientRemoved(con.type)}
          disabled={disabled[con.type]}
        />
      ))}

      <button
        className={classes.OrderButton}
        disabled={!purchasable}
        onClick={purchasing}
      >
        Order now!
      </button>
    </div>
  );
};

export default BuildControls;
