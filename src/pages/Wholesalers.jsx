import React from "react";
import { Footer } from "../components/footer";
import { WholesaleItems } from "../components/wholesaleitems/WholesaleItems";
import { useProductsContext } from "../context/productsContext";

export const Wholesalers = () => {
  const { wholesalers_Products } = useProductsContext();
  console.log(wholesalers_Products);
  return (
    <div>
      {wholesalers_Products.map(({ title, items, id }) => (
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
              <WholesaleItems id={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};
