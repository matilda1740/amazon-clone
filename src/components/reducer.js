// sets initial basket state to empty
export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to cart
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
