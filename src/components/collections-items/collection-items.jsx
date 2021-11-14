import React from "react";
import "./collection-items.scss";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

export const Collectionitems = ({ item }) => {
  const { addToCart } = useCartContext();
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <button className="btn" onClick={() => addToCart(item)}>
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
