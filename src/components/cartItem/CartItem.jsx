import React from "react";
import { useCartContext } from "../../context/cartContext";
import "./cartItem.css";
import { AiFillDelete } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

export const CartItem = ({ item }) => {
  const { id, imageUrl, price, name, quantity } = item;
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };
  return (
    <div className="cart-card">
      <span className="cart-image">
        <img className="im" src={imageUrl} alt="fdf" />
      </span>

      <span className="de">{name}</span>
      <span className="qua">{quantity}</span>
      <div className="toggle">
        <AiFillPlusCircle className="toggle" onClick={() => increase(id)} />

        <span className="pr">{price}</span>

        <AiFillMinusCircle className="toggle" onClick={() => decrease(id)} />
      </div>
      <span className="rem">
        <button onClick={() => removeItem(id)}>
          <AiFillDelete style={{ cursor: "pointer" }} />
        </button>
      </span>
    </div>
  );
};
