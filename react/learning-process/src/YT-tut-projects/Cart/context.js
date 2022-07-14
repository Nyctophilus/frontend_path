import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react";
import cartItems from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initalState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initalState
  );

  const url =
    "https://course-api.com/react-useReducer-cart-project";
  const fetchItems = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await fetch(url);
      const items = await res.json();

      dispatch({ type: "DISPLAY_ITEMS", payload: items });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  const toggleAmount = (id, type) => {
    dispatch({
      type: "TOGGLE_AMOUNT",
      payload: { id, type },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const increase = (id) => {
    dispatch({
      type: "INCREASE",
      payload: { id },
    });
  };

  const decrease = (id) => {
    dispatch({
      type: "DECREASE",
      payload: { id },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
