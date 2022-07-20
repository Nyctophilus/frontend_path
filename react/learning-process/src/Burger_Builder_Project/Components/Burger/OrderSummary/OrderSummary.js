import React from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = ({
  ingredients,
  purchaseCancel,
  purchaseContinue,
  price,
}) => {
  console.log(ingredients);

  const ingredientSummary = Object.keys(ingredients).map(
    (igKey) => (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>
          {igKey}:
        </span>{" "}
        {ingredients[igKey]}
      </li>
    )
  );

  return (
    <>
      <h3>Your Order</h3>
      <p>
        A delicious burger with the following ingredients:
      </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Totle Price: ${price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={purchaseCancel}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={purchaseContinue}>
        Continue
      </Button>
    </>
  );
};

export default OrderSummary;
