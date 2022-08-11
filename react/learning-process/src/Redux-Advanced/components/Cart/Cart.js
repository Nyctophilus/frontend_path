import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import {
  useDispatch,
  useSelector,
} from "react-redux/es/exports";
import { clearCart } from "../../store/cartSlice";

const Cart = (props) => {
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((i) => (
          <CartItem key={i.id} {...i} />
        ))}
      </ul>
      <h2>Total Quantity: {totalQuantity}</h2>
      <h2>Total Amount: {totalAmount}</h2>
      <button
        style={{
          backgroundColor: "#e91e63",
          marginInline: "auto",
          display: "block",
        }}
        onClick={clearCartHandler}
      >
        Clear Cart
      </button>
    </Card>
  );
};

export default Cart;
