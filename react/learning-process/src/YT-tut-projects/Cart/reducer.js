const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
      total: 0,
      amount: 0,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const { id } = action.payload;
    const newItems = state.cart.filter(
      (item) => item.id !== id
    );
    return {
      ...state,
      cart: newItems,
    };
  }

  if (action.type === "INCREASE") {
    const { id } = action.payload;
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          amount: cartItem.amount + 1,
        };
      }
      return cartItem;
    });

    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "DECREASE") {
    const { id } = action.payload;
    let tempCart2 = state.cart
      .map((cartItem) => {
        if (cartItem.id === id)
          return {
            ...cartItem,
            amount: cartItem.amount - 1,
          };

        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);

    return {
      ...state,
      cart: tempCart2,
    };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return {
      ...state,
      loading: false,
      cart: action.payload,
    };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "inc")
            return {
              ...cartItem,
              amount: cartItem.amount + 1,
            };
          if (action.payload.type === "dec")
            return {
              ...cartItem,
              amount: cartItem.amount - 1,
            };
        }

        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);

    return { ...state, cart: tempCart };
  }

  //   return state;
  throw new Error("no matching action caught!");
};

export default reducer;
