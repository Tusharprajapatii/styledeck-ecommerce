import React from "react";
import { CartItem } from "../components/cartItem/CartItem";
import { useCartContext } from "../context/cartContext";
import "./cart.css";

export const Cart = () => {
  const { cart, total_items, total_price, clearCart } = useCartContext();
  console.log(cart);
  return (
    <div>
      <h1 className="dtitle center">CART</h1>
      <div className="cart-column">
        <span>ITEM</span>
        <span>DESCRIPTION</span>
        <span>QUANTITY</span>
        <span>PRICE/Q</span>
        <span>REMOVE</span>
      </div>
      <hr />
      <div className="container">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <hr />
      <div className="footer">
        <div
          className={
            total_price ? "cart-total center" : "cart-total center hidden "
          }
        >
          <h2>TOTAL: RS {total_price}</h2>
        </div>

        <button
          onClick={clearCart}
          className={total_price ? "clear-cart" : "clear-cart hidden"}
        >
          CLEAR CART
        </button>
      </div>

      <hr />
    </div>
  );
};
