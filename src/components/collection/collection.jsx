import React from "react";
import { Collectionitems } from "../collections-items/collection-items";
import "./collection.scss";

export const Collection = ({ title, items }) => {
  return (
    <div className="collection">
      <h1 className="stitle">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <Collectionitems key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
