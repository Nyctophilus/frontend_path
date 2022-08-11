import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/Notification/Notification";
import {
  fetchCartData,
  sendCartData,
} from "./store/cart-actions";

let inInit = true;

function App() {
  const isCart = useSelector((state) => state.ui.show);

  const myCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(
    (state) => state.ui.notification
  );

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (inInit) {
      inInit = false;
      return;
    }

    console.log(`pass`);

    if (myCart.change) dispatch(sendCartData(myCart));
  }, [myCart, dispatch]);

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {isCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
