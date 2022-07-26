import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const Burger = ({ ingredients }) => {
  //   console.log(ingredients);

  let transIngredients = Object.keys(ingredients)
    .map((igKey) =>
      [...Array(ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el));

  //   console.log(transIngredients);

  if (!transIngredients.length)
    transIngredients = (
      <p>Please, start adding ingredients below! </p>
    );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
