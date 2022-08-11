import { showNotification } from "./ui-slice";
import { replaceCart } from "./cartSlice";

// -HL Action Creator for Async Code IN REDUX-toolkit
export const sendCartData = (myCart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "sending...",
        msg: "sending cart data",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-http-d480f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(myCart),
        }
      );

      if (!res.ok) {
        throw new Error("sending cart data failed.");
      }
    };
    try {
      await sendRequest();

      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          msg: "sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          msg: "sending cart data failed.",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://react-http-d480f-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!res.ok)
        throw new Error("Couldn't fetch a new data");

      const data = await res.json();
      console.log(data);

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        replaceCart({
          ...cartData,
          items: cartData.items || [],
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          msg: "sending cart data failed.",
        })
      );
    }
  };
};
