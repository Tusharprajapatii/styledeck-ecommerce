import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

export const LatestItems = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addToCart } = useCartContext();
  return (
    <div className="collection-item">
      <button
        onClick={() => {
          addToCart(item);
        }}
        className="btn"
      >
        AddToCart
      </button>

      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <span className="name">{name}</span>

        <span className="price">Rs {price}`</span>
      </div>
    </div>
  );
};
