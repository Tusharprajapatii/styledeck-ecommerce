import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrContact } from "react-icons/gr";
import {
  AiFillShop,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { VscSignOut } from "react-icons/vsc";
import { GiButterfly } from "react-icons/gi";
import "./header.css";
import { useCartContext } from "../../context/cartContext";
import { useProductsContext } from "../../context/productsContext";
export const Header = ({ CurrentUser }) => {
  const { total_items } = useCartContext();

  return (
    <header>
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/44/44386.png"
          alt="earthLogo"
        />
      </div>
      <div style={{ paddingLeft: `23px` }}>
        <Link className="tit" to="/">
          StyleDeck
        </Link>
      </div>
      <div>
        <GiButterfly className="symbol" />
      </div>

      <div className="options">
        <Link className="option" to="/shop">
          <AiFillShop className="shop" />
        </Link>

        <Link className="option" to="/Cart">
          <FaShoppingCart className="cart" />
        </Link>
        <div className={total_items ? "show" : "show hidden"}>
          {total_items}
        </div>

        <Link className="option" to="/Signin">
          <GoSignIn className="sign" />
        </Link>
      </div>
      <div className="cont ">
        <div>
          <AiOutlineInstagram
            style={{
              color: "white",
              fontSize: `5.8vh`,
              marginRight: `2px`,
              cursor: "pointer",
            }}
          />
        </div>
        <div>
          <AiOutlineFacebook
            style={{
              color: "white",
              fontSize: `5.8vh`,
              marginLeft: `3px`,
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </header>
  );
};
