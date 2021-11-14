import React from "react";
import Products from "../data/products";
import { Collection } from "../components/collection/collection";
import { useProductsContext } from "../context/productsContext";
import { Footer } from "../components/footer";

export const Shop = () => {
  // const [products,setProducts]=React.useState(Products)
  const { shop } = useProductsContext();
  return (
    <div style={{ padding: "0px 30px" }}>
      {shop.map(({ id, ...otherProductsProps }) => (
        <Collection key={id} {...otherProductsProps} />
      ))}
      <Footer />
    </div>
  );
};
