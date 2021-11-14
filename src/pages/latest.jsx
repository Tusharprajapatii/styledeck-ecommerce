import React from "react";
import { Footer } from "../components/footer";
import { LatestItems } from "../components/latestItems/LatestItems";
import { useProductsContext } from "../context/productsContext";
export const Latest = () => {
  const { latest } = useProductsContext();

  return (
    <div>
      {latest.map(({ id, items, title }) => (
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
              <LatestItems id={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};
