import React from "react";
import { CustomerItems } from "../components/CustomersItems/customerItems";
import { Footer } from "../components/footer";
import { useProductsContext } from "../context/productsContext";
import products from "../data/products";
export const Customers = () => {
  // const newProduct = products.filter((item)=>item.routeName==='Customers')
  const { customers_Products } = useProductsContext();
  console.log(customers_Products);
  // // const{item
  // const{items}=newProduct
  // const {item}=newProduct.items
  // console.log(newProduct)
  // console.log(items)
  return (
    <>
      <div>
        {customers_Products.map(({ id, items, title }) => (
          <div
            key={id}
            style={{
              marginbottom: `10px`,
              padding: `0px 10px`,
            }}
          >
            <h1 className="stitle">{title.toUpperCase()}</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              {items.map((item) => (
                <CustomerItems id={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
