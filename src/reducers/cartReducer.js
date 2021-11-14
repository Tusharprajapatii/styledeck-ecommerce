import { addtoCart } from "./cartutils";
const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: addtoCart(state.cart, action.payload),
    };
  }

  if (action.type === "CART_TOTALS") {
    const { total_items, total_price } = state.cart.reduce(
      (total, cartItem) => {
        total.total_items += cartItem.quantity;
        total.total_price += cartItem.price * cartItem.quantity;
        return total;
      },
      { total_items: 0, total_price: 0 }
    );
    return { ...state, total_items, total_price };
  }
  if (action.type === "REMOVE_ITEM") {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: tempCart };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "TOGGLE") {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.quantity + 1;
          return { ...item, quantity: newAmount };
        }
        if (value === "dec") {
          let newAmount = item.quantity - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return { ...item, quantity: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }
};

export default CartReducer;
