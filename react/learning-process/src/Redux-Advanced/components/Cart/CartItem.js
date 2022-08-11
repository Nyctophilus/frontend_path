import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { addItem, removeItem } from "../../store/cartSlice";

const CartItem = ({ id, title, quantity, price }) => {
  const total = quantity * price;

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeItem(id));
  };

  const addItemHandler = () => {
    dispatch(addItem({ id, title, quantity, price }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
