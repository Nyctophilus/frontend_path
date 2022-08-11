import classes from "./CartButton.module.css";
import {
  useDispatch,
  useSelector,
} from "react-redux/es/exports";
import { toggle } from "../../store/ui-slice";

const CartButton = (props) => {
  const cartItemsNumber = useSelector(
    (state) => state.cart.totalQuantity
  );

  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(toggle());
  };
  return (
    <button
      className={classes.button}
      onClick={toggleCartHandler}
    >
      <span>My Cart</span>
      <span className={classes.badge}>
        {cartItemsNumber}
      </span>
    </button>
  );
};

export default CartButton;
