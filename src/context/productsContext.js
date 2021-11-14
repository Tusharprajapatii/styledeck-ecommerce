import React from "react";
import { useContext, useReducer, useEffect } from "react";
import products from "../data/products";
import reducer from "../reducers/productsReducer";

const initialState = {
  customers_Products: [],
  wholesalers_Products: [],
  latest: [],
  shop: products,
  search: "",
  input: "",
};

const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const prod = products;
    dispatch({ type: "GET_PRODUCTS", payload: prod });

    console.log(prod);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
